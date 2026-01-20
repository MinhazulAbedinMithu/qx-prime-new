import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Network, 
  Database, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  Globe, 
  Gauge, 
  LayoutGrid, 
  FileText, 
  CheckCircle2, 
  Waypoints, 
  Server, 
  ArrowLeftRight, 
  Wifi, 
  Radio, 
  BarChart3, 
  Box,
  Terminal,
  Shield,
  Star
} from 'lucide-react';

interface QXBridgeContentProps {
  onNavigate: (page: 'privacy' | 'terms' | 'about' | 'manifesto' | 'capabilities' | 'technology' | 'protocols' | 'join-forces' | 'qx-bridge') => void;
}

const QXBridgeContent: React.FC<QXBridgeContentProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeRegion, setActiveRegion] = useState('NY4');

  // Latency Simulator Effect
  const [latency, setLatency] = useState({ ny4: 0.8, ld4: 1.2, ty3: 3.4 });
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency({
        ny4: +(0.8 + Math.random() * 0.4).toFixed(2),
        ld4: +(1.2 + Math.random() * 0.5).toFixed(2),
        ty3: +(3.4 + Math.random() * 0.8).toFixed(2),
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const faqs = [
    { q: "Do I need to host the QXBridge engine myself?", a: "No. QXBridge is a fully managed, co-located infrastructure service. We handle all hosting, security, and maintenance across our global Equinix data center hubs (NY4, LD4, TY3, SG1)." },
    { q: "What LPs and trading platforms are integrated?", a: "We provide native connectivity to over 300+ Liquidity Venues (Tier-1 Banks, ECNs, Prime Brokers) and +15 major trading platforms including MT4/MT5, cTrader, and FIX API environments." },
    { q: "Can I integrate QXBridge with my in-house trading platform?", a: "Yes. Our robust REST and WebSocket APIs, combined with binary and FIX protocol bridges, allow for seamless integration with proprietary front-ends and algorithmic execution systems." },
    { q: "Can the bridge system be customized?", a: "Absolutely. QXBridge features a modular architecture where risk parameters, routing logic, and aggregation rules can be dynamically configured via our management dashboard or API." },
    { q: "Are there built-in risk management features?", a: "Yes. QXBridge includes the full QXShield Neural RMS suite, providing flow-based price skewing, automated internalization, and exposure-limit hedging as standard features." },
    { q: "How is system security ensured?", a: "We utilize institutional-grade security protocols including AES-256 encryption, mTLS authentication, and physical hardware isolation (HSM) for credential management." },
    { q: "How long does it take to set up and go live?", a: "Standard onboarding for existing venues typically takes less than 48 hours. Custom venue integration may take 5-10 business days depending on technical complexity." },
    { q: "Do you offer 24/7 support? How can I reach Support?", a: "Yes. Every client has access to a dedicated relationship manager and our 24/7 Technical Operations Center (TOC) via email, secure chat, and phone." },
    { q: "What is the SLA for the bridge engine?", a: "We provide a contractually guaranteed 99.999% uptime SLA, backed by our redundant triple-node architecture and global failover protocols." }
  ];

  const features = [
    { title: "Maker Connectivity", desc: "Native access to 300+ Liquidity Venues including Tier-1 banks and ECNs.", icon: Globe },
    { title: "Advanced Pricing", desc: "Granular aggregation controls for price discovery and liquidity depth optimization.", icon: TrendingUp },
    { title: "Real-time RMS", desc: "Neural risk management with instant notifications and automated exposure containment.", icon: ShieldCheck },
    { title: "Advanced Margin", desc: "Dynamic margin calculation system with support for hierarchical account topologies.", icon: Gauge },
    { title: "AI Reporting", desc: "Machine-learning driven analytics for flow classification and 24/7 technical support.", icon: FileText },
    { title: "Order Routing", desc: "Smart Order Router (SOR) with cost-plus logic for optimal execution quality.", icon: Zap },
    { title: "Equinix Hubs", desc: "Ultra-low latency co-location in LD4, NY4, TY3, and SG1 data centers.", icon: Network },
    { title: "Data Dissemination", desc: "Real-time broadcast of market data via FIX Drop Copy, WebSockets, and Binary APIs.", icon: Activity },
    { title: "Multi-Asset Support", desc: "Unified engine for FX, Metals, Indices, Commodities, and Crypto assets.", icon: LayoutGrid },
    { title: "Full Config Control", desc: "API-driven configuration of all engine settings with time-based scheduling.", icon: Cpu },
    { title: "Copy Trading", desc: "Delayed hedging protocols and ultra-fast trade duplication logic.", icon: Layers },
    { title: "Taker Integration", desc: "Ready-to-use connectors for +15 platforms via FIX 4.4 and REST/WS APIs.", icon: Waypoints }
  ];

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] transition-colors duration-300 pt-24 overflow-x-hidden">
      
      {/* --- INLINE STYLES FOR ANIMATIONS --- */}
      <style>{`
        @keyframes flow-right {
          0% { stroke-dashoffset: 100; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes flow-left {
          0% { stroke-dashoffset: 0; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { stroke-dashoffset: 100; opacity: 0; }
        }
        .animate-flow-right {
          stroke-dasharray: 10 5;
          animation: flow-right 1.5s linear infinite;
        }
        .animate-flow-left {
          stroke-dasharray: 10 5;
          animation: flow-left 1.5s linear infinite;
        }
        .radar-sweep {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: conic-gradient(transparent 0deg, rgba(59, 130, 246, 0.1) 60deg, transparent 90deg);
          animation: radar 3s linear infinite;
        }
        @keyframes radar {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative py-24 lg:py-32 px-6 overflow-hidden bg-gray-50 dark:bg-[#050505] border-b border-gray-200 dark:border-white/5">
        {/* Background Tech Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-100 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/20 text-[10px] font-mono font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest animate-fade-in">
                <Radio className="w-3 h-3 animate-pulse" /> Live Connectivity Engine
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tighter leading-[0.95]">
              High-Frequency <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
                Liquidity Bridge.
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              The central nervous system for institutional brokerages. Route orders, aggregate depth, and manage risk with nanosecond precision across NY4, LD4, and TY3.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => onNavigate('technology')}
                className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs rounded hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Explore Technology <Waypoints className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate('join-forces')}
                className="px-8 py-4 bg-transparent border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
              >
                Start Integration
              </button>
            </div>

            {/* Live Metrics Ticker */}
            <div className="pt-8 border-t border-gray-200 dark:border-white/10">
               <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-xs font-mono text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="uppercase tracking-wider">NY4 Latency:</span>
                     <span className="text-gray-900 dark:text-white font-bold">{latency.ny4}ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse delay-75"></div>
                     <span className="uppercase tracking-wider">LD4 Latency:</span>
                     <span className="text-gray-900 dark:text-white font-bold">{latency.ld4}ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse delay-150"></div>
                     <span className="uppercase tracking-wider">TY3 Latency:</span>
                     <span className="text-gray-900 dark:text-white font-bold">{latency.ty3}ms</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
             {/* Abstract 3D Architecture Visual */}
             <div className="relative w-full max-w-lg aspect-square">
                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-[0_0_60px_rgba(37,99,235,0.5)] z-20 flex items-center justify-center animate-float">
                   <Waypoints className="w-12 h-12 text-white" />
                </div>
                
                {/* Orbiting Satellites */}
                {[0, 1, 2, 3].map((i) => (
                   <div key={i} 
                        className="absolute top-1/2 left-1/2 w-20 h-20 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center shadow-xl z-10 transition-all duration-1000"
                        style={{
                           transform: `translate(-50%, -50%) rotate(${i * 90 + 45}deg) translateX(160px) rotate(-${i * 90 + 45}deg)`
                        }}
                   >
                      {i === 0 && <Globe className="w-8 h-8 text-blue-500" />}
                      {i === 1 && <Server className="w-8 h-8 text-purple-500" />}
                      {i === 2 && <Database className="w-8 h-8 text-emerald-500" />}
                      {i === 3 && <Terminal className="w-8 h-8 text-orange-500" />}
                   </div>
                ))}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 400">
                   <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-200 dark:text-white/10" strokeDasharray="4 4" />
                   <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500/20" />
                   {/* Radial Lines */}
                   {[45, 135, 225, 315].map((deg, i) => (
                      <line key={i} x1="200" y1="200" x2={200 + 160 * Math.cos(deg * Math.PI / 180)} y2={200 + 160 * Math.sin(deg * Math.PI / 180)} stroke="currentColor" className="text-gray-200 dark:text-white/10" strokeWidth="1" />
                   ))}
                </svg>
             </div>
          </div>
        </div>
      </section>

      {/* --- CONNECTIVITY VISUALIZER --- */}
      <section className="py-24 bg-gray-900 dark:bg-black text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-[10px] uppercase tracking-[0.3em]">
               <Activity className="w-3 h-3" /> Data Flow Visualization
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The <span className="text-blue-500">Bridge</span> Architecture</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
               Visualizing the bi-directional flow of liquidity and execution instructions between Takers (Platforms) and Makers (Banks/LPs).
            </p>
          </div>

          {/* Interactive SVG Diagram */}
          <div className="relative w-full overflow-x-auto pb-8">
             <div className="min-w-[800px] flex justify-between items-center px-8 relative">
                
                {/* Left: Takers */}
                <div className="flex flex-col gap-6 relative z-10 w-64">
                   <div className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-2 text-center">Takers (Clients)</div>
                   {['MT4/MT5 Server', 'FIX API Client', 'Prop GUI'].map((name, i) => (
                      <div key={i} className="bg-[#111] border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:border-blue-500/50 transition-colors group cursor-default">
                         <div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center text-blue-400 group-hover:text-white transition-colors">
                            <Terminal className="w-5 h-5" />
                         </div>
                         <div className="text-sm font-bold text-gray-300 group-hover:text-white">{name}</div>
                         {/* Connection Point */}
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-blue-500 hidden lg:block"></div>
                      </div>
                   ))}
                </div>

                {/* Center: The Bridge */}
                <div className="relative z-20 flex-shrink-0 mx-12">
                   <div className="w-64 h-64 bg-gradient-to-b from-gray-800 to-black rounded-full border-4 border-blue-600/30 flex flex-col items-center justify-center relative shadow-[0_0_100px_rgba(37,99,235,0.2)]">
                      {/* Radar Effect */}
                      <div className="radar-sweep pointer-events-none"></div>
                      
                      <div className="relative z-10 text-center space-y-2">
                         <Waypoints className="w-16 h-16 text-blue-500 mx-auto" />
                         <div>
                            <div className="text-2xl font-bold tracking-tighter">QXBRIDGE</div>
                            <div className="text-[10px] font-mono text-blue-400">ENGINE_CORE_V4.2</div>
                         </div>
                         <div className="flex gap-2 justify-center mt-2">
                            <div className="px-2 py-0.5 bg-blue-900/30 border border-blue-500/30 rounded text-[9px] text-blue-300">SOR</div>
                            <div className="px-2 py-0.5 bg-purple-900/30 border border-purple-500/30 rounded text-[9px] text-purple-300">RMS</div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Right: Makers */}
                <div className="flex flex-col gap-6 relative z-10 w-64 text-right">
                   <div className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-2 text-center">Makers (LPs)</div>
                   {['Tier-1 Bank A', 'ECN Venue', 'Prime Broker'].map((name, i) => (
                      <div key={i} className="bg-[#111] border border-white/10 p-4 rounded-xl flex items-center justify-end gap-4 hover:border-green-500/50 transition-colors group cursor-default">
                         <div className="text-sm font-bold text-gray-300 group-hover:text-white">{name}</div>
                         <div className="w-10 h-10 rounded-lg bg-green-900/20 flex items-center justify-center text-green-400 group-hover:text-white transition-colors">
                            <Database className="w-5 h-5" />
                         </div>
                         {/* Connection Point */}
                         <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-green-500 hidden lg:block"></div>
                      </div>
                   ))}
                </div>

                {/* SVG Connecting Lines Layer */}
                <div className="absolute inset-0 pointer-events-none hidden lg:block">
                   <svg className="w-full h-full" preserveAspectRatio="none">
                      {/* Lines from Left to Center */}
                      <path d="M 280 120 C 350 120, 350 200, 420 200" fill="none" stroke="url(#gradient-left)" strokeWidth="2" className="animate-flow-right opacity-50" />
                      <path d="M 280 200 C 350 200, 350 200, 420 200" fill="none" stroke="url(#gradient-left)" strokeWidth="2" className="animate-flow-right opacity-50" style={{ animationDelay: '0.5s' }} />
                      <path d="M 280 280 C 350 280, 350 200, 420 200" fill="none" stroke="url(#gradient-left)" strokeWidth="2" className="animate-flow-right opacity-50" style={{ animationDelay: '1s' }} />

                      {/* Lines from Center to Right */}
                      <path d="M 680 200 C 750 200, 750 120, 820 120" fill="none" stroke="url(#gradient-right)" strokeWidth="2" className="animate-flow-right opacity-50" />
                      <path d="M 680 200 C 750 200, 750 200, 820 200" fill="none" stroke="url(#gradient-right)" strokeWidth="2" className="animate-flow-right opacity-50" style={{ animationDelay: '0.5s' }} />
                      <path d="M 680 200 C 750 200, 750 280, 820 280" fill="none" stroke="url(#gradient-right)" strokeWidth="2" className="animate-flow-right opacity-50" style={{ animationDelay: '1s' }} />

                      <defs>
                         <linearGradient id="gradient-left" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                         </linearGradient>
                         <linearGradient id="gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22c55e" stopOpacity="1" />
                            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
                         </linearGradient>
                      </defs>
                   </svg>
                </div>

             </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-[#080808]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24 space-y-4">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">Advanced Liquidity Management</h2>
             <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex gap-6 group p-6 rounded-2xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-none">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900 dark:text-white uppercase tracking-wide text-sm">{f.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-light">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- RISK MGMT SECTION --- */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="bg-gray-50 dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 p-10 md:p-14 rounded-[2.5rem] space-y-10 relative overflow-hidden">
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-[10px] font-mono font-bold uppercase tracking-widest mb-6">
                  <ShieldCheck className="w-3 h-3" /> QXShield V4.2
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">Quant-Based Risk Management</h2>
            </div>

            <ul className="space-y-6">
              {[
                { t: "Flow-Based Price Skew Engine", d: "Advanced modelling with an accuracy rate exceeding 90%." },
                { t: "Automated Internalization", d: "Driven by quant-based Internalization Time Windows (ITW)." },
                { t: "Exposure-Limit Hedging", d: "Automated hedging at both the instrument and asset-class level." },
                { t: "Market Impact Analysis", d: "Engine designed to measure and assess flow toxicity." },
                { t: "Passive Hedging", d: "Dynamic quant-driven Time-to-Live (TTL) orders for optimized execution." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-blue-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm uppercase mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.t}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-light">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-full min-h-[500px] flex items-center justify-center">
             {/* Dynamic background for graphic */}
             <div className="absolute inset-0 bg-blue-600/5 blur-[100px] -z-10"></div>
             
             {/* Abstract Shield/Server Graphic */}
             <div className="relative w-full max-w-md aspect-[4/5] bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 shadow-2xl p-8 flex flex-col justify-between overflow-hidden group">
                
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                
                {/* Header of Graphic */}
                <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-4">
                   <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-blue-500" />
                      <span className="font-mono text-sm font-bold text-white tracking-widest">ACTIVE_PROTECTION</span>
                   </div>
                   <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                   </div>
                </div>

                {/* Animated Data Streams */}
                <div className="relative z-10 flex-grow py-8 space-y-4">
                   {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-4 text-xs font-mono">
                         <span className="text-gray-500 w-16 text-right">09:41:0{i}</span>
                         <div className="flex-grow h-8 bg-white/5 rounded border border-white/5 flex items-center px-3 gap-2 relative overflow-hidden">
                            <span className="text-blue-400">{'>'} INBOUND_TICK:</span>
                            <span className="text-white">EURUSD</span>
                            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-black/50 to-transparent"></div>
                            {/* Scanning Line */}
                            <div className="absolute top-0 bottom-0 w-[2px] bg-blue-500/50 blur-[2px] animate-flow-right" style={{ animationDuration: `${2 + i * 0.5}s` }}></div>
                         </div>
                         <div className={`text-[10px] font-bold px-2 py-1 rounded ${i === 2 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
                            {i === 2 ? 'BLOCK' : 'PASS'}
                         </div>
                      </div>
                   ))}
                </div>

                {/* Footer of Graphic */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-gray-400">
                   <div className="flex items-center gap-2">
                      <Wifi className="w-3 h-3 text-blue-500" />
                      <span>Uptime: 99.999%</span>
                   </div>
                   <div>Latency: 0.4ms</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- BANNER CTA --- */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto rounded-[3rem] bg-gradient-to-r from-blue-700 to-indigo-900 p-16 text-center text-white space-y-8 relative overflow-hidden group">
           <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">Learn More About <br/> QXBridge</h2>
              <p className="text-blue-100 text-lg font-light max-w-2xl mx-auto mb-10">
                 Schedule a technical demo with our integration engineers and see the engine in action.
              </p>
              <button 
                onClick={() => onNavigate('join-forces')}
                className="px-12 py-5 bg-white text-blue-700 font-bold uppercase tracking-widest text-xs rounded shadow-2xl hover:scale-105 transition-transform"
              >
                Inquire Now
              </button>
           </div>
        </div>
      </section>

      {/* --- CLIENT SHOWCASE --- */}
      <section className="py-24 border-y border-gray-100 dark:border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 text-center space-y-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tighter uppercase">Our Trusted Clients</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {['CPT', 'AMANA', 'ARGAMON', 'ATFX', 'B2BROKER'].map(name => (
               <span key={name} className="text-2xl font-black text-gray-400 dark:text-gray-600 font-mono tracking-tighter cursor-default">{name}</span>
             ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-transparent">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white uppercase tracking-tight mb-20">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Lewis Mansbridge", text: "QXPRIME's Aggregator has boosted our efficiency and streamlined our operations. Their 24/7 support is quick and reliable.", date: "December 03" },
              { name: "Martyn Price", text: "QXPRIME Solutions gives SGT aggregation tech and low-latency connectivity to manage client liquidity in one portal with strong reporting.", date: "November 21" },
              { name: "Weiss Chen", text: "We've been impressed with QXPRIME's solutions and their proactive support team. They continuously show dedication to our success.", date: "October 11" }
            ].map((t, i) => (
              <div key={i} className="p-10 bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow space-y-6">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{t.date}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">"{t.text}"</p>
                <div className="pt-4 border-t border-gray-50 dark:border-white/5 flex justify-between items-center">
                  <span className="font-bold text-gray-900 dark:text-white text-sm uppercase">{t.name}</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-yellow-500 fill-current" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-32 px-6 border-t border-gray-100 dark:border-white/5">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white uppercase tracking-tight mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-gray-100 dark:border-white/5">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className={`text-base font-bold transition-colors uppercase tracking-tight ${openFaq === i ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'}`}>{f.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openFaq === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                   <div className="overflow-hidden">
                      <div className="pb-8 text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                        {f.a}
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default QXBridgeContent;