import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Target, Lightbulb, Cpu, Users, Layers, ShieldCheck, Zap, Activity, ArrowRight, Hexagon, Network, Lock, BarChart3, Globe, Clock, Server, Code, Sparkles, AlertTriangle, CheckCircle, XCircle, ArrowRightCircle, TrendingUp, BookOpen, RefreshCw, Terminal, Shield, Box, LayoutGrid, Gauge, Bell, List, FileText, Cloud, ChevronDown, ChevronUp } from 'lucide-react';

// --- Interactive 3D Globe Component using Three.js with Data Flow ---
const InteractiveGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Hubs Data (Lat/Lon)
    const hubs = [
      { name: 'NY4', lat: 40.7128, lon: -74.0060 }, // New York
      { name: 'LD4', lat: 51.5074, lon: 0.1278 },   // London
      { name: 'TY3', lat: 35.6762, lon: 139.6503 }, // Tokyo
      { name: 'SG1', lat: 1.3521, lon: 103.8198 },  // Singapore
      { name: 'DXB', lat: 25.2048, lon: 55.2708 },  // Dubai
    ];

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Globe Geometry (Dot-based for performance and style)
    const globeRadius = 140;
    const dotsCount = 8000;
    const dotsGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(dotsCount * 3);
    const colors = new Float32Array(dotsCount * 3);

    for (let i = 0; i < dotsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / dotsCount);
      const theta = Math.sqrt(dotsCount * Math.PI) * phi;

      const x = globeRadius * Math.cos(theta) * Math.sin(phi);
      const y = globeRadius * Math.sin(theta) * Math.sin(phi);
      const z = globeRadius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color variation for high-tech aesthetic
      const r = 0.2 + Math.random() * 0.1;
      const g = 0.4 + Math.random() * 0.2;
      const b = 0.8 + Math.random() * 0.2;
      colors[i * 3] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
    }

    dotsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    dotsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const dotsMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const globe = new THREE.Points(dotsGeometry, dotsMaterial);
    scene.add(globe);

    // Coordinate Conversion Helper
    const latLonToVector3 = (lat: number, lon: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const y = radius * Math.cos(phi);
      return new THREE.Vector3(x, y, z);
    };

    // Add Markers and Arcs
    const markersGroup = new THREE.Group();
    const arcsGroup = new THREE.Group();
    const flowGroup = new THREE.Group();
    scene.add(markersGroup);
    scene.add(arcsGroup);
    scene.add(flowGroup);

    const hubVectors = hubs.map(h => latLonToVector3(h.lat, h.lon, globeRadius + 2));
    const curves: THREE.QuadraticBezierCurve3[] = [];

    hubVectors.forEach((v, i) => {
      // Pulsing Marker
      const markerGeom = new THREE.SphereGeometry(2.5, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
      const marker = new THREE.Mesh(markerGeom, markerMat);
      marker.position.copy(v);
      markersGroup.add(marker);

      // Connect to next hub with arc
      const nextV = hubVectors[(i + 1) % hubVectors.length];
      const midPoint = v.clone().add(nextV).multiplyScalar(0.5).normalize().multiplyScalar(globeRadius * 1.5);
      const curve = new THREE.QuadraticBezierCurve3(v, midPoint, nextV);
      curves.push(curve);

      const points = curve.getPoints(50);
      const arcGeom = new THREE.BufferGeometry().setFromPoints(points);
      const arcMat = new THREE.LineBasicMaterial({ 
        color: 0x6366f1, 
        transparent: true, 
        opacity: 0.4,
        blending: THREE.AdditiveBlending
      });
      const arc = new THREE.Line(arcGeom, arcMat);
      arcsGroup.add(arc);
    });

    // --- Data Flow Particles ---
    const particlesCount = 20;
    const particles: { mesh: THREE.Mesh; curveIndex: number; progress: number; speed: number }[] = [];
    
    for (let i = 0; i < particlesCount; i++) {
      const pGeom = new THREE.SphereGeometry(1, 8, 8);
      const pMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
      const pMesh = new THREE.Mesh(pGeom, pMat);
      
      const curveIndex = Math.floor(Math.random() * curves.length);
      const progress = Math.random();
      const speed = 0.002 + Math.random() * 0.005;
      
      pMesh.position.copy(curves[curveIndex].getPoint(progress));
      flowGroup.add(pMesh);
      particles.push({ mesh: pMesh, curveIndex, progress, speed });
    }

    // Interaction State
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMouseX;
      const deltaY = e.clientY - previousMouseY;
      
      const rotationSpeed = 0.005;
      globe.rotation.y += deltaX * rotationSpeed;
      markersGroup.rotation.y += deltaX * rotationSpeed;
      arcsGroup.rotation.y += deltaX * rotationSpeed;
      flowGroup.rotation.y += deltaX * rotationSpeed;
      
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseUp = () => { isDragging = false; };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let frame: number;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      
      if (!isDragging) {
        const autoRotation = 0.0015;
        globe.rotation.y += autoRotation;
        markersGroup.rotation.y += autoRotation;
        arcsGroup.rotation.y += autoRotation;
        flowGroup.rotation.y += autoRotation;
      }
      
      // Update Particles (Flow)
      particles.forEach(p => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.curveIndex = Math.floor(Math.random() * curves.length);
        }
        p.mesh.position.copy(curves[p.curveIndex].getPoint(p.progress));
        // Fade in/out at ends
        p.mesh.scale.setScalar(Math.sin(p.progress * Math.PI) * 1.5);
      });

      // Pulse effect for hub markers
      const time = Date.now() * 0.005;
      markersGroup.children.forEach((child, i) => {
        const s = 1 + Math.sin(time + i) * 0.2;
        child.scale.set(s, s, s);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />;
};


interface AboutContentProps {
  onNavigate: (page: 'privacy' | 'terms' | 'about' | 'manifesto' | 'capabilities' | 'technology' | 'protocols' | 'join-forces' | 'qx-bridge') => void;
}

const AboutContent: React.FC<AboutContentProps> = ({ onNavigate }) => {
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const expandAll = () => {
    setOpenFaqIndices(faqData.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenFaqIndices([]);
  };

  const faqData = [
    {
      question: "MT5 / FIX API connectivity — how is it integrated?",
      answer: "Integrated via a high-performance bridge layer with dedicated session management. FIX API credentials are cryptographically isolated from execution nodes to ensure zero-trust environment separation.",
      bullets: [
        "Hardware-isolated FIX gateways for production flow.",
        "Secure bridge layer for MT5-to-FIX translation.",
        "Dedicated credential vault with granular access control."
      ],
      icon: Zap
    },
    {
      question: "What does the FIX API expose inside QXPrime?",
      answer: "The FIX API layer provides granular access to order lifecycle events, real-time execution reports, and routing acknowledgements across the entire account topology.",
      bullets: [
        "Full Order Management (New, Cancel, Replace).",
        "Real-time Execution Reports & Fill Metadata.",
        "Session health telemetry and event-driven audit hooks."
      ],
      icon: List
    },
    {
      question: "Latency & execution drift — how do you measure it?",
      answer: "We utilize nanosecond-precision telemetry timestamps at every hop, from ingress to execution venue, allowing for deep slippage analysis against benchmark models.",
      bullets: [
        "Node-to-node propagation delay measurement.",
        "Drift detection logic for slippage vs. arrival price.",
        "Cumulative execution acknowledgement timing reports."
      ],
      icon: Clock
    },
    {
      question: "Is data streaming real-time or polled?",
      answer: "QXPrime prioritizing low-latency streaming (WebSockets/SSE) with adaptive refresh logic to ensure data integrity during peak volatility cycles.",
      bullets: [
        "Primary: Push-based streaming via unified WebSockets.",
        "Secondary: Adaptive refresh polling for legacy fallbacks.",
        "Backpressure handling to prevent data queue buildup."
      ],
      icon: Activity
    },
    {
      question: "How do you handle failover and node degradation?",
      answer: "Our orchestration layer performs continuous health checks. If node degradation is detected, flow is automatically diverted to healthy clusters via circuit-breakers.",
      bullets: [
        "Global heartbeat monitoring for all execution nodes.",
        "Automated routing fallback to standby clusters.",
        "Safe-mode containment for partial system failure."
      ],
      icon: Shield
    },
    {
      question: "What controls exist for risk & abuse protection?",
      answer: "Multi-layer protection includes real-time flow classification and dynamic throttling to neutralize exploitative patterns without disrupting institutional flow.",
      bullets: [
        "Heuristic flow classification (manual vs. algo).",
        "Automated anomaly flagging and containment paths.",
        "Policy-based routing for toxic flow isolation."
      ],
      icon: ShieldCheck
    },
    {
      question: "Do you maintain audit trails and operator actions?",
      answer: "Yes. Every system action, deployment state change, and operator command is recorded in an immutable event log for full regulatory compliance.",
      bullets: [
        "Hash-chained immutable event logs.",
        "Granular operator action tracking with MFA logs.",
        "Strictly separated audit trails for security isolation."
      ],
      icon: FileText
    },
    {
      question: "Can we deploy on-prem or private cloud?",
      answer: "We support private deployment topologies for firms requiring maximum infrastructure control and isolated networking environments.",
      bullets: [
        "On-premise deployment of dedicated execution clusters.",
        "Private cloud onboarding (GCP/AWS/Azure).",
        "Localized networking and isolated FIX gateways."
      ],
      icon: Cloud
    }
  ];

  return (
    <div className="w-full relative z-10 overflow-hidden bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white selection:bg-blue-500/30">
      
      <style>
        {`
          @keyframes scan {
            0% { left: -5%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { left: 105%; opacity: 0; }
          }
          @keyframes equalize {
            0% { transform: scaleY(0.4); opacity: 0.8; }
            50% { transform: scaleY(1); opacity: 1; }
            100% { transform: scaleY(0.4); opacity: 0.8; }
          }
        `}
      </style>

      <div className="max-w-[1440px] mx-auto pt-32 sm:pt-44 pb-24 px-6 sm:px-8 relative">
        
        {/* --- 1. Hero Section --- */}
        <div className="relative mb-32 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[11px] font-mono text-blue-600 dark:text-blue-300 uppercase tracking-widest mb-8 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-default">
                <Sparkles className="w-3 h-3" />
                <span>Next-Gen Execution Logic</span>
            </div>
            
            <h1 className="text-6xl sm:text-8xl font-medium tracking-tighter text-gray-900 dark:text-white mb-8 leading-[1.05]">
              Architecting <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                Intelligent Market Infrastructure
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
              AI-native execution and risk intelligence designed to quantify risk, optimize execution, and govern capital across professional trading environments.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
               <button 
                  onClick={() => onNavigate('manifesto')}
                  className="group relative px-8 py-4 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all active:scale-95 flex items-center gap-2 shadow-lg dark:shadow-none"
               >
                  Read Manifesto
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
               <button 
                  onClick={() => onNavigate('capabilities')}
                  className="px-8 py-4 rounded-full border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition-all active:scale-95"
               >
                  View Capabilities
               </button>
            </div>
        </div>

        {/* --- 2. Stats Bar --- */}
        <div className="mb-32">
           <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 dark:divide-white/10 border-y border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
              {[
                { label: "Uptime", value: "99.99%", sub: "Guaranteed" },
                { label: "Daily Data", value: "50M+", sub: "Points Processed" },
                { label: "Latency", value: "<15ms", sub: "Global Avg" },
                { label: "Risk Vectors", value: "120+", sub: "Monitored" },
              ].map((stat, i) => (
                <div key={i} className="py-10 px-6 text-center hover:bg-gray-100 dark:hover:bg-white/[0.02] transition-colors">
                   <div className="text-4xl font-medium text-gray-900 dark:text-white mb-1 tracking-tight">{stat.value}</div>
                   <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
                   <div className="text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-widest mt-1 font-mono">{stat.sub}</div>
                </div>
              ))}
           </div>
        </div>

        {/* --- 3. Proven Infrastructure --- */}
        <div className="mb-40 relative">
            <div className="text-center mb-20 max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center px-3 py-1 rounded border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-900/10 text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6">
                    Proven Infrastructure
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6 tracking-tight">
                    A Decade of Quant Execution <span className="font-serif italic text-gray-500">Experience</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-light">
                    Engineered across live markets, high-frequency environments, and institutional risk constraints.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Execution Infrastructure",
                        desc: "Designed and operated execution engines across multi-asset, multi-node trading environments under real market stress.",
                        icon: Shield
                    },
                    {
                        title: "Institutional Risk Engineering",
                        desc: "Risk logic built from real drawdowns, abuse patterns, latency arbitrage, and execution failures — not theory.",
                        icon: Layers
                    },
                    {
                        title: "Production-Grade Systems",
                        desc: "Systems deployed, monitored, and refined in live trading conditions with strict uptime, audit, and control requirements.",
                        icon: Network
                    }
                ].map((card, i) => {
                    const Icon = card.icon;
                    return (
                        <div key={i} className="group bg-white dark:bg-[#03050c] border border-gray-200 dark:border-white/10 p-10 rounded-2xl hover:border-blue-500/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center mb-8 text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">{card.title}</h3>
                                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            <div className="mt-16 text-center">
                 <p className="text-xs text-gray-500 dark:text-gray-600 font-mono tracking-wide uppercase">Experience derived from live execution environments, not simulations.</p>
            </div>
        </div>

        {/* --- 4. The QXPRIME Mandate --- */}
        <div className="mb-40 grid lg:grid-cols-12 gap-12 items-center">
             <div className="lg:col-span-5">
                 <div className="text-blue-600 dark:text-blue-500 font-mono text-xs font-bold uppercase tracking-widest mb-4">
                    About The Firm
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 tracking-tighter leading-[1.1]">
                    The QXPRIME <br/>
                    <span className="font-serif italic text-gray-500">Mandate.</span>
                 </h2>
                 <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed">
                    <p>
                        Born from the intersection of High-Frequency Trading (HFT) and Neural Intelligence, QXPRIME was established to solve the "Sovereignty Gap" in retail and institutional brokerage.
                    </p>
                    <p>
                        Our team comprises veteran Quant analysts and AI engineers dedicated to a single mission: <strong className="text-gray-900 dark:text-gray-200 font-medium">Intelligence Sovereignty.</strong> We believe every broker deserves institutional-grade defense without sacrificing data privacy.
                    </p>
                 </div>
             </div>

             <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
                 <div className="bg-white dark:bg-[#03050c] border border-gray-200 dark:border-white/10 rounded-2xl p-8 flex flex-col h-full group hover:border-blue-500/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Global Footprint</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-10 font-light flex-grow">
                          Strategically positioned connectivity hubs ensure seamless, ultra-low latency access across key financial markets. Our distributed network architecture supports redundant infrastructure and localized regulatory alignment.
                      </p>
                      <div className="pt-6 border-t border-gray-100 dark:border-white/10">
                          <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              Connectivity Hubs: DXB • LDN • SG • TYO
                          </span>
                      </div>
                 </div>

                 <div className="bg-white dark:bg-[#03050c] border border-gray-200 dark:border-white/10 rounded-2xl p-8 flex flex-col h-full group hover:border-blue-500/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">R&D Excellence</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-10 font-light flex-grow">
                          Research and development sit at the center of our operating model. Our systems are relentlessly tested against adversarial market behavior, liquidity regime shifts, and execution edge cases.
                      </p>
                      <div className="pt-6 border-t border-gray-100 dark:border-white/10">
                          <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              Patented: Neural-Risk V.4.2 Engine
                          </span>
                      </div>
                 </div>
             </div>
        </div>

        {/* --- 5. The Evolution of Dealing Alpha --- */}
        <div className="mb-40 grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <div className="inline-block px-3 py-1 mb-8 text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest border border-blue-200 dark:border-blue-900/50 bg-blue-50 dark:bg-blue-900/10 rounded-sm">
                    Institutional Access • V4.2
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium text-gray-900 dark:text-white mb-8 tracking-tighter leading-[1.05]">
                    The Evolution of <br />
                    <span className="font-serif italic text-gray-500 dark:text-gray-300">Dealing Alpha.</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-light max-w-xl">
                    QXPRIME is an AI-native Quant Intelligence Platform engineered for Prime Brokerage environments. It integrates machine-learning-driven execution intelligence, continuous risk orchestration, and adaptive decision routing.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-medium rounded text-sm transition-colors shadow-lg dark:shadow-none">
                        Request Institutional Access
                    </button>
                    <button 
                        onClick={() => onNavigate('capabilities')}
                        className="px-8 py-4 bg-transparent border border-gray-300 dark:border-white/10 hover:bg-gray-50 dark:hover:border-white/20 text-gray-900 dark:text-white font-medium rounded text-sm transition-colors"
                    >
                        Capabilities
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-[#050505] border border-gray-200 dark:border-white/10 rounded-3xl p-2 shadow-2xl relative">
                <div className="absolute top-0 right-0 p-4 z-20">
                    <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/30 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest">Simulating</span>
                    </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 rounded-2xl p-6 sm:p-8 overflow-hidden relative h-full">
                    <div className="flex justify-between items-end mb-8 border-b border-gray-200 dark:border-white/5 pb-6">
                        <div>
                            <div className="text-gray-500 text-[10px] font-mono uppercase tracking-widest mb-1">Projected Alpha</div>
                            <div className="text-3xl font-medium text-gray-900 dark:text-white tracking-tight">+14.2% <span className="text-sm text-gray-500 font-normal">Annualized</span></div>
                        </div>
                        <div className="text-right">
                            <div className="text-gray-500 text-[10px] font-mono uppercase tracking-widest mb-1">Confidence</div>
                            <div className="text-xl font-medium text-green-600 dark:text-green-400">99.98%</div>
                        </div>
                    </div>

                    <div className="relative h-64 w-full mb-8">
                        <div className="absolute inset-0 border-l border-b border-gray-200 dark:border-white/5"></div>
                        <div className="absolute top-1/4 left-0 right-0 h-px bg-gray-200 dark:bg-white/5 border-t border-dashed border-gray-300 dark:border-white/10"></div>
                        <div className="absolute top-2/4 left-0 right-0 h-px bg-gray-200 dark:bg-white/5 border-t border-dashed border-gray-300 dark:border-white/10"></div>
                        <div className="absolute top-3/4 left-0 right-0 h-px bg-gray-200 dark:bg-white/5 border-t border-dashed border-gray-300 dark:border-white/10"></div>
                        
                        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 600 260" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                                </linearGradient>
                            </defs>
                            
                            {[...Array(12)].map((_, i) => {
                                const spread = (i - 6) * 20; 
                                const yEnd = 130 - spread;
                                const c1y = 130 - spread * 0.3;
                                const c2y = 130 + spread * 0.5;
                                return (
                                    <path 
                                        key={i}
                                        d={`M0,130 C200,${c1y} 400,${c2y} 600,${yEnd}`} 
                                        fill="none" 
                                        stroke="url(#lineGradient)" 
                                        strokeWidth="1.5" 
                                        className="opacity-40"
                                    />
                                )
                            })}
                            
                            <path d="M0,130 C200,130 400,110 600,80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-gray-400 dark:text-white" />
                            <circle cx="600" cy="80" r="4" fill="currentColor" className="text-gray-400 dark:text-white" />
                        </svg>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {['GBM Model', 'Stochastic Volatility', 'Jump Diffusion', 'Mean Reversion'].map((tag, i) => (
                            <span key={i} className="px-2 py-1 rounded bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 text-[10px] font-mono text-gray-500 dark:text-gray-400 shadow-sm dark:shadow-none">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* --- 6. The Origin Story --- */}
        <div className="grid lg:grid-cols-12 gap-8 mb-32">
            <div className="lg:col-span-5 flex flex-col justify-center">
               <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-white mb-6 tracking-tight">
                  Born from the <span className="text-blue-600 dark:text-blue-400">Gap</span>.
               </h2>
               <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  <p>
                    Tier-1 banks operate with fiber-connected risk engines. The rest of the market relies on retail-grade analytics.
                  </p>
                  <p className="text-gray-900 dark:text-gray-200 font-medium">
                    QXPRIME bridges this divide.
                  </p>
                  <p>
                    Founded by QuantXpert Tech FZE LLC, we democratize institutional execution intelligence. We provide the infrastructure of decision-making, not just charts.
                  </p>
               </div>
            </div>
            
            <div className="lg:col-span-7">
               <div className="relative h-full min-h-[400px] w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black rounded-3xl border border-gray-200 dark:border-white/10 p-1 overflow-hidden">
                  <div className="absolute inset-4 bg-white dark:bg-[#0F0F0F] rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden flex flex-col shadow-2xl">
                      <div className="h-10 border-b border-gray-100 dark:border-white/5 flex items-center px-4 gap-2 bg-gray-50 dark:bg-white/[0.02]">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400/50"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400/50"></div>
                          <div className="ml-auto text-[10px] font-mono text-gray-400 dark:text-gray-600">QX_CORE_V3.1</div>
                      </div>
                      <div className="flex-1 p-6 font-mono text-sm relative">
                          <div className="text-gray-400 dark:text-gray-500 mb-2">// Initializing Neural Risk Gateway</div>
                          <div className="text-blue-600 dark:text-blue-400 mb-1">{'>'} Connecting to Liquidity_Pool_A... [OK]</div>
                          <div className="text-blue-600 dark:text-blue-400 mb-1">{'>'} Connecting to Liquidity_Pool_B... [OK]</div>
                          <div className="text-purple-600 dark:text-purple-400 mb-4">{'>'} Analyzing Flow Toxicity...</div>
                          
                          <div className="h-32 w-full bg-gray-50 dark:bg-white/[0.03] rounded border border-gray-100 dark:border-white/5 relative overflow-hidden flex items-end px-2 gap-1">
                              {[40, 60, 45, 70, 85, 60, 75, 50, 65, 80, 95, 70].map((h, i) => (
                                  <div key={i} className="flex-1 bg-blue-500/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                              ))}
                          </div>

                          <div className="absolute bottom-6 right-6">
                              <div className="px-3 py-1 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-500/30 text-green-600 dark:text-green-400 rounded text-xs flex items-center gap-2">
                                  <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                  </span>
                                  SYSTEM OPTIMAL
                              </div>
                          </div>
                      </div>
                  </div>
               </div>
            </div>
        </div>

        {/* --- 7. Flow Integrity & Abuse Protection --- */}
        <div className="mb-40 relative">
            <div className="relative z-10 text-center mb-20">
                <h2 className="text-3xl sm:text-5xl font-medium text-gray-900 dark:text-white mb-6 tracking-tighter">
                    Flow Integrity & Abuse <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 dark:from-gray-200 dark:via-gray-400 dark:to-gray-600 font-serif italic">Protection.</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light text-lg">
                    Real-time detection and routing control for abnormal flow, latency exploitation, and toxic patterns.
                </p>
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center w-full">
                <div className="lg:col-span-3 h-full">
                     <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 rounded-xl p-1 h-full shadow-xl dark:shadow-2xl relative group overflow-hidden">
                        <div className="bg-gray-50 dark:bg-[#111] rounded-lg p-6 h-full relative z-10 flex flex-col justify-center min-h-[340px]">
                           <div className="flex items-center gap-3 mb-8 text-gray-400 text-[10px] font-mono uppercase tracking-[0.2em]">
                               <Activity className="w-3 h-3 text-blue-500" /> Incoming Flow
                           </div>
                           <div className="space-y-4">
                               {['Manual Discretionary', 'Algorithmic / HFT', 'High-Volume Tickets'].map((item, i) => (
                                   <div key={i} className="flex items-center gap-3 p-3.5 rounded border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] text-sm text-gray-700 dark:text-gray-300">
                                       <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600"></div> 
                                       <span className="font-medium tracking-tight">{item}</span>
                                   </div>
                               ))}
                               <div className="mt-2 flex items-center gap-3 p-3.5 rounded border border-yellow-200 dark:border-yellow-900/30 bg-yellow-50 dark:bg-yellow-900/5 text-sm text-yellow-700 dark:text-yellow-500/90 shadow-sm">
                                   <AlertTriangle className="w-4 h-4 text-yellow-500" /> 
                                   <span className="font-medium tracking-tight">Anomaly Signals</span>
                               </div>
                           </div>
                        </div>
                     </div>
                </div>

                <div className="hidden lg:flex lg:col-span-1 justify-center items-center relative h-full text-gray-300 dark:text-gray-700">
                     <svg className="w-full h-12" viewBox="0 0 100 48" preserveAspectRatio="none">
                        <path d="M 0 24 L 100 24" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                     </svg>
                     <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 dark:bg-[#0a0a0a] px-1.5 text-[8px] font-mono text-gray-500 uppercase tracking-widest border border-gray-200 dark:border-gray-900 z-10">Input</span>
                </div>

                <div className="lg:col-span-4 h-full relative group">
                     <div className="bg-white dark:bg-[#08090a] border border-blue-100 dark:border-blue-500/20 rounded-2xl p-8 relative z-10 h-full flex flex-col justify-center min-h-[340px] shadow-xl dark:shadow-[0_0_50px_rgba(37,99,235,0.15)]">
                         <div className="flex justify-between items-center mb-8 border-b border-gray-100 dark:border-white/5 pb-4">
                             <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-[0.15em] font-bold">
                                 <ShieldCheck className="w-4 h-4" /> QXSHIELD RMS
                             </div>
                             <div className="flex items-center gap-2">
                                <span className="text-[9px] font-mono text-gray-400 dark:text-gray-500 uppercase">Status</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                             </div>
                         </div>
                         
                         <div className="space-y-3 relative">
                             <div className="absolute left-[18px] top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-800 z-0"></div>
                             
                             {[
                               { label: "Real-Time Telemetry" },
                               { label: "Pattern Detection" },
                               { label: "Instant Classification" },
                             ].map((step, i) => (
                                <div key={i} className="relative z-10 flex items-center gap-3">
                                   <div className="w-2.5 h-2.5 rounded-full border border-gray-400 dark:border-gray-600 bg-white dark:bg-[#08090a] z-10"></div>
                                   <div className="flex-1 py-2.5 px-4 rounded border border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-900/10 text-center text-xs font-medium text-blue-800 dark:text-blue-200/70 tracking-wide uppercase">
                                      {step.label}
                                   </div>
                                </div>
                             ))}

                             <div className="relative z-10 flex items-center gap-3 pt-2">
                                   <div className="w-2.5 h-2.5 rounded-full border border-blue-400 bg-blue-500 z-10"></div>
                                   <div className="flex-1 py-3 px-4 rounded border border-blue-500/50 bg-blue-600 dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-500 text-center text-xs font-bold text-white tracking-wide uppercase shadow-lg">
                                      Routing Decision
                                   </div>
                             </div>
                         </div>
                     </div>
                </div>

                <div className="hidden lg:flex lg:col-span-1 justify-center items-center relative h-full text-gray-300 dark:text-gray-700">
                     <svg className="w-full h-12" viewBox="0 0 100 48" preserveAspectRatio="none">
                        <path d="M 0 24 L 100 24" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                     </svg>
                     <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 dark:bg-[#0a0a0a] px-1.5 text-[8px] font-mono text-gray-500 uppercase tracking-widest border border-gray-200 dark:border-gray-900 z-10">Route</span>
                </div>

                <div className="lg:col-span-3 h-full">
                     <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 rounded-xl p-1 h-full shadow-xl dark:shadow-2xl relative group overflow-hidden">
                        <div className="bg-gray-50 dark:bg-[#111] rounded-lg p-6 h-full relative z-10 flex flex-col justify-center min-h-[340px]">
                           <div className="flex items-center gap-3 mb-8 text-gray-400 text-[10px] font-mono uppercase tracking-[0.2em]">
                               <Code className="w-3 h-3 text-green-500" /> Execution Routing
                           </div>
                           <div className="space-y-3">
                               <div className="flex items-center gap-3 p-3.5 rounded border border-green-200 dark:border-green-500/20 bg-green-50 dark:bg-green-900/10 text-sm text-green-700 dark:text-green-400 shadow-sm">
                                   <CheckCircle className="w-4 h-4" /> 
                                   <span className="font-bold tracking-tight">Standard Path</span>
                               </div>
                               <div className="flex items-center gap-3 p-3.5 rounded border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-900/10 text-sm text-blue-600 dark:text-blue-400">
                                   <Target className="w-4 h-4" /> 
                                   <span className="font-medium tracking-tight">Dynamic Pool Path</span>
                               </div>
                               <div className="flex items-center gap-3 p-3.5 rounded border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] text-sm text-gray-500 dark:text-gray-400">
                                   <Globe className="w-4 h-4" /> 
                                   <span className="font-medium tracking-tight">External Venue</span>
                               </div>
                               <div className="mt-2 flex items-center gap-3 p-3.5 rounded border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/5 text-sm text-red-600 dark:text-red-500/80">
                                   <XCircle className="w-4 h-4" /> 
                                   <span className="font-medium tracking-tight">Containment</span>
                               </div>
                           </div>
                        </div>
                     </div>
                </div>

            </div>
        </div>

        {/* --- 8. Dealing Operations Terminal --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40 w-full">
          <div className="relative group">
             <div className="relative bg-white dark:bg-[#050505] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-5 py-4 bg-gray-50 dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-800">
                   <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-semibold flex items-center gap-2">
                       <Terminal className="w-3 h-3" /> Dealing Operations Terminal
                   </span>
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/50"></div>
                   </div>
                </div>
                
                <div className="p-8 space-y-5 font-mono">
                   <div className="p-5 rounded-lg bg-gray-50 dark:bg-gray-900/20 border-l-[3px] border-blue-500">
                      <div className="text-[10px] text-gray-500 mb-2 uppercase tracking-widest font-semibold">Execution Sync</div>
                      <div className="flex justify-between items-center text-sm">
                         <span className="text-gray-700 dark:text-gray-300">SWAPS: <span className="text-blue-600 dark:text-blue-400 font-bold">AUTO-RESOLVED</span></span>
                         <span className="text-gray-500 text-xs px-2 py-1 rounded bg-white dark:bg-white/5 border border-gray-200 dark:border-transparent">[0.2ms]</span>
                      </div>
                   </div>
                   
                   <div className="p-5 rounded-lg bg-gray-50 dark:bg-gray-900/20 border-l-[3px] border-cyan-500">
                      <div className="text-[10px] text-gray-500 mb-2 uppercase tracking-widest font-semibold">Corporate Actions</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                         DIVIDENDS: <span className="text-cyan-600 dark:text-cyan-400 font-bold">MAPPED & VERIFIED</span>
                      </div>
                   </div>

                   <div className="p-5 rounded-lg bg-gray-50 dark:bg-gray-900/20 border-l-[3px] border-purple-500">
                      <div className="text-[10px] text-gray-500 mb-2 uppercase tracking-widest font-semibold">Security Lifecycle</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                         EXPIRATION: <span className="text-purple-600 dark:text-purple-400 font-bold">AUTO-ROLLOVER</span>
                         <RefreshCw className="w-3 h-3 text-purple-600 dark:text-purple-400 animate-spin-slow" />
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="pl-0 lg:pl-10">
              <div className="text-blue-600 dark:text-blue-500 font-mono text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <div className="w-8 h-px bg-blue-600 dark:bg-blue-500"></div> Advanced Ops
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
                Dealing Without <br/>
                <span className="italic font-serif text-gray-500">Human Error.</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-12 font-light">
                Precision engineering means automating the tedious. QXPRIME manages the entire lifecycle of a trade—from the first quote to the final swap settlement.
              </p>

              <div className="grid sm:grid-cols-2 gap-10 border-t border-gray-200 dark:border-white/5 pt-10">
                 <div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                       <TrendingUp className="w-4 h-4 text-blue-500" /> Quotes Service
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                       Stores historical ticks and feeds live TradingView widgets with zero-latency streaming for retail portals.
                    </p>
                 </div>
                 <div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wide mb-3 flex items-center gap-2">
                       <BookOpen className="w-4 h-4 text-purple-500" /> Team Upskilling
                    </h3>
                     <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                       Integrated learning modules to evolve your team's tactical risk management capabilities alongside the AI.
                    </p>
                 </div>
              </div>
          </div>
        </div>

        {/* --- 9. Predictive Quant Architecture --- */}
        <div className="mb-40 w-full relative">
             <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-blue-500/5" viewBox="0 0 1000 1000">
                    <circle cx="500" cy="500" r="400" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                    <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 10" />
                </svg>
             </div>

             <div className="max-w-4xl mx-auto mb-20 text-center relative z-10">
                 <div className="text-blue-600 dark:text-blue-500 font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                    THE SCIENCE OF ALPHA
                 </div>
                 <h2 className="text-5xl md:text-6xl font-medium text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight">
                    Predictive Quant Architecture.
                 </h2>
                 <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                    We don't just process data; we model reality. Our engine uses multiple layers of 
                    neural analysis to ensure institutional sovereignty before the market reacts.
                 </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative z-10">
                {[
                    {
                        layer: "Layer 1",
                        title: "INGESTION",
                        desc: "High-speed tick data filtering and normalization across global liquidity nodes.",
                        color: "text-blue-500",
                        accent: "bg-blue-500/10",
                        border: "border-blue-500/20",
                        metrics: "2.5M msg/sec",
                        icon: Activity
                    },
                    {
                        layer: "Layer 2",
                        title: "CORRELATION",
                        desc: "Cross-asset anomaly detection. Identifying \"stealth\" hedging and platform toxicity.",
                        color: "text-cyan-500",
                        accent: "bg-cyan-500/10",
                        border: "border-cyan-500/20",
                        metrics: "40μs Lag",
                        icon: Network
                    },
                    {
                        layer: "Layer 3",
                        title: "NEURAL SCORING",
                        desc: "Assigning risk-weights in real-time based on 2,000+ behavioral feature vectors.",
                        color: "text-indigo-500",
                        accent: "bg-indigo-500/10",
                        border: "border-indigo-500/20",
                        metrics: "99.9% Conf.",
                        icon: Cpu
                    },
                    {
                        layer: "Layer 4",
                        title: "EXECUTION",
                        desc: "Autonomous risk-mitigation: exposure capping, slippage adjust, or auto-hedging.",
                        color: "text-purple-500",
                        accent: "bg-purple-500/10",
                        border: "border-purple-500/20",
                        metrics: "1ms Response",
                        icon: ShieldCheck
                    }
                ].map((item, i) => (
                    <div key={i} className="group relative p-8 rounded-3xl bg-white dark:bg-[#03050c] border border-gray-200 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-lg dark:shadow-none hover:-translate-y-1">
                         <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                             <item.icon className="w-24 h-24" />
                         </div>

                         <div className="relative z-10 flex flex-col h-full">
                             <div className="text-4xl font-bold text-gray-900 dark:text-white/90 mb-2 tracking-tighter opacity-80">{item.layer}</div>
                             <div className={`text-[10px] font-mono font-bold uppercase tracking-[0.25em] mb-8 ${item.color} flex items-center gap-2`}>
                                 <span className="w-4 h-[1px] bg-current opacity-30"></span> {item.title}
                             </div>
                             
                             <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-10 flex-grow">
                                 {item.desc}
                             </p>

                             <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                                 <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">THROUGHPUT IMPACT</div>
                                 <div className={`px-2 py-0.5 rounded ${item.accent} ${item.color} text-[10px] font-mono font-bold border ${item.border} shadow-sm`}>
                                     {item.metrics}
                                 </div>
                             </div>
                         </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                 <div className="inline-flex items-center gap-6 text-[10px] font-mono text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
                        <span>VECTORIZATION</span>
                    </span>
                    <ArrowRight className="w-3 h-3" />
                    <span className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
                        <span>INFERENCE</span>
                    </span>
                    <ArrowRight className="w-3 h-3" />
                    <span className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-purple-500"></span>
                        <span>AUTONOMOUS CONTROL</span>
                    </span>
                 </div>
            </div>
        </div>

        {/* --- 10. Engineered for Scale --- */}
        <div className="mb-40 relative">
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6 tracking-tight">
              Engineered for <span className="font-serif italic text-blue-600 dark:text-blue-500">Scale.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-light max-w-2xl">
              Quant-first architecture designed for multi-region deployment and sub-millisecond oversight.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Execution Monitoring",
                desc: "Sub-millisecond tracking of every order, fill, and cancel across the entire topology.",
                tag: "LIVE ENGINE",
                icon: Box
              },
              {
                title: "Account Topology",
                desc: "Hierarchical grouping of master and sub-accounts with aggregated risk waterfalls.",
                tag: "UNIFIED VIEW",
                icon: LayoutGrid
              },
              {
                title: "Deployment Logs",
                desc: "Comprehensive event history for every algorithm deployment and environment state change.",
                tag: "AUDIT READY",
                icon: Gauge
              },
              {
                title: "Risk Telemetry",
                desc: "Real-time exposure mapping, margin utilization, and volatility sensitivity analytics.",
                tag: "SAFETY FIRST",
                icon: Shield
              },
              {
                title: "Alert Analytics",
                desc: "Custom signal-based notifications for slippage, drift, and market disconnects.",
                tag: "REACTIVE",
                icon: Bell
              },
              {
                title: "Post-Trade Intelligence",
                desc: "Deep-dive TCA reporting and execution quality benchmarks vs benchmark models.",
                tag: "ANALYSIS",
                icon: Clock
              }
            ].map((card, i) => {
                const Icon = card.icon;
                return (
                    <div key={i} className="group bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden flex flex-col h-full shadow-lg dark:shadow-none">
                        <div className="relative z-10 flex-grow">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/10 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20 transition-colors">
                                <Icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 tracking-tight">{card.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed font-light mb-8">{card.desc}</p>
                        </div>
                        
                        <div className="relative z-10 pt-4 mt-auto">
                            <span className="inline-block px-3 py-1 rounded border border-gray-200 dark:border-white/10 text-[10px] font-mono text-gray-400 uppercase tracking-widest bg-gray-50 dark:bg-white/5 group-hover:border-blue-500/30 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                                {card.tag}
                            </span>
                        </div>
                    </div>
                );
            })}
          </div>
        </div>

        {/* --- 11. FAQ --- */}
        <div className="mb-40 w-full relative">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-3 tracking-tight">System <span className="font-serif italic font-light text-gray-500 dark:text-gray-400">FAQ</span></h2>
                <p className="text-gray-600 dark:text-gray-500">Deployment, connectivity, telemetry, and control surfaces.</p>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-10">
                <div className="hidden lg:block lg:col-span-3">
                   <div className="sticky top-32 border-l-2 border-blue-500 pl-6 py-2">
                       <span className="text-blue-600 dark:text-blue-500 font-mono text-[10px] uppercase tracking-widest font-bold block mb-2">V3.2 / SYSTEM DOCS</span>
                       <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                           Comprehensive architectural documentation for technical onboarding and infrastructure audit.
                       </p>
                   </div>
                </div>

                <div className="lg:col-span-9">
                    <div className="flex justify-end gap-4 mb-6 text-[10px] font-mono font-bold tracking-widest text-gray-500">
                        <button onClick={expandAll} className="hover:text-gray-900 dark:hover:text-white transition-colors uppercase">Expand All</button>
                        <button onClick={collapseAll} className="hover:text-gray-900 dark:hover:text-white transition-colors uppercase">Collapse All</button>
                    </div>

                    <div className="space-y-3">
                        {faqData.map((item, i) => {
                            const isOpen = openFaqIndices.includes(i);
                            const Icon = item.icon;
                            return (
                                <div key={i} className={`border rounded-xl transition-all duration-300 overflow-hidden ${isOpen ? 'bg-gray-50 dark:bg-[#0c0c0c] border-blue-200 dark:border-blue-500/30 shadow-md dark:shadow-[0_0_20px_rgba(37,99,235,0.05)]' : 'bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10'}`}>
                                    <button 
                                        onClick={() => toggleFaq(i)}
                                        className="w-full flex items-center justify-between p-5 text-left group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <Icon className={`w-5 h-5 transition-colors ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-blue-600/50 dark:text-blue-500/50 group-hover:text-blue-600 dark:group-hover:text-blue-400'}`} />
                                            <span className={`text-base font-medium transition-colors ${isOpen ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'}`}>{item.question}</span>
                                        </div>
                                        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-400" /> : <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400" />}
                                    </button>
                                    
                                    <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                        <div className="overflow-hidden">
                                            <div className="p-5 pt-0 pl-14">
                                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 font-light">
                                                    {item.answer}
                                                </p>
                                                <ul className="space-y-2">
                                                    {item.bullets.map((bullet, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                                                            <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-500/50 shrink-0"></div>
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>

        {/* --- 12. Security & Integrity --- */}
        <div className="mb-40 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-mono font-bold uppercase tracking-widest">
                       <ShieldCheck className="w-3 h-3" /> Security & Integrity
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6 tracking-tight">
                      Built for <span className="text-blue-600 dark:text-blue-400">Zero-Trust</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10 font-light">
                      Institutional infrastructure requires non-negotiable security. Every instruction is cryptographically signed, logged, and validated against hardware keys.
                    </p>

                    <div className="space-y-6">
                      <div className="group p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-blue-500/30 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300">
                         <div className="flex gap-4">
                            <div className="mt-1 w-10 h-10 rounded-lg bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-all">
                              <Cpu className="w-5 h-5 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                            </div>
                            <div>
                              <h3 className="text-gray-900 dark:text-white font-bold text-sm mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">Hardware Isolation</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed font-light group-hover:text-gray-800 dark:group-hover:text-gray-400">
                                 Execution environments are logically and physically separated. Keys are stored in FIPS 140-2 Level 3 HSMs.
                              </p>
                            </div>
                         </div>
                      </div>

                      <div className="group p-5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:border-purple-500/30 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all duration-300">
                         <div className="flex gap-4">
                            <div className="mt-1 w-10 h-10 rounded-lg bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-all">
                              <Lock className="w-5 h-5 text-gray-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" />
                            </div>
                            <div>
                              <h3 className="text-gray-900 dark:text-white font-bold text-sm mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">Role-Based Access (RBAC)</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed font-light group-hover:text-gray-800 dark:group-hover:text-gray-400">
                                 Granular MFA-backed permissions. Admin actions require multi-party computation (MPC) approval.
                              </p>
                            </div>
                         </div>
                      </div>
                    </div>
                </div>

                <div className="relative group">
                    <div className="bg-white dark:bg-[#050505] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 sm:p-10 relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                        <div className="relative z-10 flex justify-between items-center mb-10 border-b border-gray-100 dark:border-white/5 pb-6">
                            <div className="flex items-center gap-3">
                                 <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                                 <span className="text-gray-500 dark:text-gray-400 text-xs font-mono uppercase tracking-widest font-semibold">System Integrity</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-500/30">
                                <div className="relative w-1.5 h-1.5">
                                    <div className="absolute inset-0 rounded-full bg-blue-400 opacity-20"></div>
                                    <div className="relative w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                                </div>
                                <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Operational</span>
                            </div>
                        </div>

                        <div className="relative z-10 h-16 w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-lg mb-10 overflow-hidden flex items-end px-1 gap-[2px]">
                             {[...Array(40)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className="flex-1 bg-blue-200 dark:bg-blue-900/40 rounded-t-[1px]" 
                                    style={{
                                        height: `${20 + (Math.sin(i * 0.3) * 0.5 + 0.5) * 60 + (i % 3 === 0 ? 15 : 0)}%`
                                    }}
                                >
                                    <div className="w-full h-full bg-blue-500/20 group-hover:bg-blue-400/40 transition-colors"></div>
                                </div>
                             ))}
                        </div>

                        <div className="relative z-10 grid grid-cols-2 gap-y-8 gap-x-8">
                            {[
                                { val: "100%", label: "Uptime SLA", color: "text-gray-900 dark:text-white" },
                                { val: "SECURE", label: "Audit Hash", color: "text-purple-600 dark:text-purple-400" },
                                { val: "102ms", label: "Mean Latency", color: "text-gray-900 dark:text-white" },
                                { val: "ACTIVE", label: "Failover State", color: "text-blue-600 dark:text-blue-400" }
                            ].map((stat, i) => (
                                <div key={i} className="group/stat">
                                    <div className={`text-2xl font-mono font-medium ${stat.color} mb-1 group-hover/stat:scale-105 transition-transform origin-left`}>{stat.val}</div>
                                    <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest flex items-center gap-2">
                                        {stat.label}
                                        {i === 1 && <Lock className="w-3 h-3 text-purple-500/50" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- 13. Core Values --- */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-gray-900 dark:text-white mb-4">The QXPRIME DNA</h2>
                <p className="text-gray-600 dark:text-gray-400">Principles that govern our engineering.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                   {
                     title: "Deterministic Logic",
                     icon: Code,
                     desc: "We prioritize measured, hard-coded risk parameters over 'black box' guessing. Predictability is safety.",
                   },
                   {
                     title: "Infrastructure First",
                     icon: Server,
                     desc: "We are not just a dashboard. We are the pipes and logic rails that guide capital through volatility.",
                   },
                   {
                     title: "Zero Conflict",
                     icon: Lock,
                     desc: "We do not trade against our clients. We do not sell data. Our alignment is absolute.",
                   }
                ].map((item, i) => {
                   const Icon = item.icon;
                   return (
                     <div key={i} className="group relative bg-white dark:bg-[#111] border border-gray-200 dark:border-white/5 p-8 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-white/10 transition-colors shadow-lg dark:shadow-none">
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6 border border-gray-200 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
                               <Icon className="w-6 h-6 text-gray-700 dark:text-white" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                     </div>
                   );
                })}
            </div>
        </div>

        {/* --- 14. Global Infrastructure with Interactive Globe --- */}
        <div className="mb-32 relative rounded-3xl p-8 sm:p-16 border border-gray-200 dark:border-white/10 overflow-hidden bg-gray-50 dark:bg-[#0F0F0F]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
               <div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-[10px] uppercase tracking-widest mb-4">
                     <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
                     Live Network Status
                  </div>
                  <h2 className="text-4xl font-medium mb-6 text-gray-900 dark:text-white tracking-tight">Deployed Where <br/>Liquidity Lives.</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light">
                     Latency kills advantage. QXPRIME infrastructure is co-located in major financial data centers, ensuring your risk logic executes at the speed of the market.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                     {['NY4 (New York)', 'LD4 (London)', 'TY3 (Tokyo)', 'SG1 (Singapore)'].map((loc, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
                           <Globe className="w-4 h-4 text-gray-500" />
                           <span className="font-mono text-xs text-gray-600 dark:text-gray-300">{loc}</span>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="flex justify-center items-center h-full min-h-[400px]">
                  <div className="relative w-80 h-80 flex items-center justify-center">
                     <InteractiveGlobe />
                     <div className="relative z-10 text-center bg-white/80 dark:bg-black/40 backdrop-blur-md p-8 rounded-full border border-gray-200 dark:border-white/10 shadow-2xl animate-fade-in pointer-events-none">
                        <div className="text-5xl font-bold text-gray-900 dark:text-white tracking-tighter">4</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1 font-mono">Global Regions</div>
                     </div>
                  </div>
               </div>
            </div>
        </div>

        {/* --- 15. Removed CTA Section per request --- */}

        {/* --- 16. The Team / Final Lockup --- */}
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">AI-native. Quant-engineered. Performance-driven.</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light">
               QXPRIME is built by former high-frequency trading practitioners and senior risk professionals with firsthand experience operating inside Tier-1 prime brokerage environments.
            </p>
        </div>

      </div>
    </div>
  );
};

export default AboutContent;