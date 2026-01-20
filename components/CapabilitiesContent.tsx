import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Layers, 
  ArrowRight, 
  Terminal, 
  Server, 
  Globe,
  Workflow,
  Target,
  Lock,
  Radio,
  Box,
  Fingerprint,
  ChevronRight,
  Gauge,
  Database,
  GitMerge,
  Shield,
  Monitor,
  Command
} from 'lucide-react';

const CapabilitiesContent: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [bootSequence, setBootSequence] = useState(false);

  // Stats counter simulation
  const [msgCount, setMsgCount] = useState(2540120);
  useEffect(() => {
    setBootSequence(true);
    const interval = setInterval(() => {
      setMsgCount(prev => prev + Math.floor(Math.random() * 250));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white dark:bg-[#030303] transition-colors duration-500 overflow-hidden relative min-h-screen">
      
      {/* --- ADVANCED CSS ANIMATIONS --- */}
      <style>{`
        @keyframes hud-scan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(1000%); opacity: 0; }
        }
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(59, 130, 246, 0.2); }
          50% { border-color: rgba(59, 130, 246, 0.6); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          95% { opacity: 1; }
          96% { opacity: 0.8; }
          98% { opacity: 1; }
        }
        .bg-hud-grid {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .animate-hud-scan {
          animation: hud-scan 10s linear infinite;
        }
        .stagger-in > * {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s forwards;
        }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* --- BACKGROUND INFRASTRUCTURE --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-hud-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-blue-500/20 via-blue-500/5 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-blue-500/20 via-blue-500/5 to-transparent"></div>
        <div className="absolute top-0 w-full h-1 bg-blue-500/20 animate-hud-scan"></div>
      </div>

      <div className="max-w-[1440px] mx-auto pt-44 pb-32 px-6 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="grid lg:grid-cols-12 gap-16 mb-40 items-end stagger-in">
          <div className="lg:col-span-8 space-y-10">
            <div className="inline-flex items-center gap-4 px-4 py-1.5 rounded-sm bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <Terminal className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-[0.4em]">Node::Capabilities::V4.2</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-gray-900 dark:text-white tracking-tighter leading-[0.85] uppercase">
              INSTITUTIONAL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-500">
                SOVEREIGNTY.
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl border-l-4 border-blue-500/20 pl-8">
              QXPRIME provides the technical logic rails for high-frequency execution and predictive risk management. Our infrastructure is co-located exactly where markets move.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.2em] text-[11px] rounded-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all flex items-center gap-3">
                System Overview <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-6 px-6 border-l border-gray-200 dark:border-white/10">
                 <div className="flex flex-col">
                    <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">MTU_SYNC</span>
                    <span className="text-blue-500 font-bold uppercase text-[10px]">Optimal</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Uptime</span>
                    <span className="text-green-500 font-bold uppercase text-[10px]">99.999%</span>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 hidden lg:block perspective-[2000px]">
            <div className="bg-white/80 dark:bg-[#080808]/80 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-3xl transform rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-1000 group">
              <div className="flex justify-between items-center mb-8">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">Live_Telemetry</span>
                 </div>
                 <Command className="w-4 h-4 text-gray-300 dark:text-gray-700" />
              </div>
              
              <div className="space-y-6">
                 <div>
                    <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-1">Execution_Load</div>
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-600 w-[65%] animate-[pulse_2s_infinite]"></div>
                    </div>
                 </div>
                 <div className="text-4xl font-black text-gray-900 dark:text-white font-mono tracking-tighter">
                   {msgCount.toLocaleString()} <span className="text-xs text-gray-400 font-normal">MSG/S</span>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10">
                       <div className="text-[8px] font-mono text-gray-400 uppercase mb-1">Latency_Avg</div>
                       <div className="text-sm font-bold text-blue-500 font-mono">1.2ms</div>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10">
                       <div className="text-[8px] font-mono text-gray-400 uppercase mb-1">Node_Health</div>
                       <div className="text-sm font-bold text-green-500 font-mono">100%</div>
                    </div>
                 </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/5">
                 <div className="flex gap-1 h-8 items-end">
                    {[...Array(20)].map((_, i) => (
                       <div key={i} className="flex-1 bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors" style={{ height: `${20 + Math.random() * 80}%` }}></div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- CORE PILLARS: EXPANDED --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {[
            {
              title: "Neural Execution",
              desc: "Predictive routing engines that anticipate market liquidity shifts before they manifest in the book.",
              icon: Zap,
              color: "blue",
              meta: "FIX_DIRECT"
            },
            {
              title: "Adversarial RMS",
              desc: "Continuous scan for toxic flow and latency arbitrage attempts using hardware-accelerated logic.",
              icon: ShieldCheck,
              color: "red",
              meta: "ATOMIC_KILL"
            },
            {
              title: "Liquidity Hubs",
              desc: "Native co-location at Equinix hubs, syncing 40+ venues with microsecond resolution.",
              icon: Layers,
              color: "indigo",
              meta: "FIBER_PATH"
            },
            {
              title: "Capital Governance",
              desc: "Hierarchical account topologies allowing for segregated risk waterfalls and master-sub governance.",
              icon: Workflow,
              color: "purple",
              meta: "MULTI_TIER"
            },
            {
              title: "Behavioral TCA",
              desc: "Deep-dive drift analysis comparing arrival price vs execution vs benchmark models.",
              icon: Activity,
              color: "emerald",
              meta: "TICK_DATA"
            },
            {
              title: "Compliance Sentinel",
              desc: "Immutable hash-chained logging for full regulatory transparency and operational audit.",
              icon: Fingerprint,
              color: "orange",
              meta: "ISO_CERT"
            },
            {
              title: "Binary Bridge",
              desc: "Optimized protocol translation for ultra-low latency bridging between MT5 and FIX environments.",
              icon: GitMerge,
              color: "cyan",
              meta: "SBE_PROTO"
            },
            {
              title: "Sovereign Node",
              desc: "Private cloud or on-prem deployment options for firms requiring absolute infrastructure isolation.",
              icon: Server,
              color: "yellow",
              meta: "ISOLATED"
            }
          ].map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={i} 
                className="group relative p-8 bg-white dark:bg-[#0c0c0c] border border-gray-100 dark:border-white/5 rounded-2xl transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl overflow-hidden flex flex-col h-full"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-blue-500 transition-all duration-500 mb-8 border border-gray-100 dark:border-white/10 group-hover:border-blue-500/30`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 tracking-tight uppercase leading-tight">{pillar.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed font-light mb-8 flex-grow">{pillar.desc}</p>
                <div className="pt-4 border-t border-gray-50 dark:border-white/5 flex items-center justify-between">
                   <span className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest">{pillar.meta}</span>
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-20 group-hover:opacity-100 animate-pulse"></div>
                </div>
                {/* HUD Corner Decor */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-blue-500/20 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-transparent group-hover:border-blue-500/20 transition-colors"></div>
              </div>
            );
          })}
        </div>

        {/* --- SECTION: NEURAL RISK DASHBOARD (SIMULATION) --- */}
        <div className="mb-40 grid lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-5 space-y-8">
              <div className="text-blue-600 font-mono text-[10px] font-bold uppercase tracking-[0.4em]">Integrated_Intelligence</div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-[0.9]">
                 Neural <br/> Risk Mesh.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                 QXShield V4.2 operates on a sub-microsecond validation cycle. Every instruction is analyzed against 128 distinct risk vectors, neutralizing toxic flow before it hits the execution venue.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                 <div className="space-y-2">
                    <div className="text-2xl font-black text-gray-900 dark:text-white font-mono">120μs</div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Decision_Latency</div>
                 </div>
                 <div className="space-y-2">
                    <div className="text-2xl font-black text-gray-900 dark:text-white font-mono">100%</div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Auth_Integrity</div>
                 </div>
              </div>
           </div>
           
           <div className="lg:col-span-7">
              <div className="relative p-1 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 rounded-[2.5rem]">
                 <div className="bg-white dark:bg-[#080808] rounded-[2.4rem] p-10 shadow-3xl relative overflow-hidden">
                    {/* Interior HUD elements */}
                    <div className="absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none">
                       <Shield className="w-64 h-64 text-blue-500" />
                    </div>
                    
                    <div className="relative z-10 space-y-10">
                       <div className="flex justify-between items-center border-b border-gray-100 dark:border-white/5 pb-6">
                          <div className="flex items-center gap-3">
                             <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                             <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">Neural_Validation_Engine::ACTIVE</span>
                          </div>
                          <div className="flex gap-1.5">
                             {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500/30"></div>)}
                          </div>
                       </div>

                       <div className="space-y-6">
                          {[
                            { label: "Instruction_Ingress", val: "SIGNED_VERIFIED", color: "text-blue-500" },
                            { label: "Slippage_Projection", val: "-0.02 BPS (OPTIMAL)", color: "text-green-500" },
                            { label: "Flow_Toxicity_Scan", val: "CLEAN (SCORE: 98/100)", color: "text-blue-400" },
                            { label: "Execution_Path", val: "NY4 -> DIRECT_ECN", color: "text-purple-500" }
                          ].map((row, i) => (
                             <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/10 rounded-xl hover:bg-blue-500/5 transition-colors group">
                                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{row.label}</span>
                                <span className={`text-[10px] font-mono font-black uppercase tracking-tight ${row.color} group-hover:scale-105 transition-transform`}>{row.val}</span>
                             </div>
                          ))}
                       </div>

                       <div className="pt-4 flex justify-between items-center">
                          <div className="flex items-center gap-4">
                             <div className="h-10 w-24 bg-gray-100 dark:bg-white/5 rounded-lg flex items-center justify-center border border-gray-200 dark:border-white/10 overflow-hidden">
                                <div className="h-full bg-blue-600 w-[80%] animate-pulse"></div>
                             </div>
                             <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Engine_Efficiency</span>
                          </div>
                          <button className="text-[10px] font-mono font-bold text-blue-500 hover:text-blue-400 uppercase tracking-widest flex items-center gap-2 group">
                             Access_Audit_Logs <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* --- THE SOVEREIGNTY WATERFALL (VISUAL) --- */}
        <div className="mb-40">
          <div className="bg-gray-900 dark:bg-black rounded-[4rem] p-12 md:p-32 relative overflow-hidden border border-gray-800 shadow-4xl group">
            {/* Visual scanline effect */}
            <div className="absolute inset-0 bg-hud-grid opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/20 animate-hud-scan"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <div className="text-blue-500 font-mono text-xs font-bold uppercase tracking-[0.5em] animate-flicker">Infrastructure_Waterfall</div>
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
                  Physical <br/>
                  Sovereignty.
                </h2>
                <p className="text-gray-400 text-xl font-light leading-relaxed max-w-lg">
                  Institutional trust is built on physical isolation. Our stack resides on hardware-isolated bare metal, bypassing the noise and latency of shared cloud resources.
                </p>
                <div className="space-y-6">
                  {[
                    { l: "01", t: "Hardware Isolation", d: "FIPS 140-3 protected cryptographic modules and bare-metal co-location." },
                    { l: "02", t: "Deterministic Logic", d: "C++20 compiled execution paths ensuring constant time performance." },
                    { l: "03", t: "Neural Validation", d: "ML-driven adversarial flow detection on every instruction packet." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-8 group/step">
                      <div className="text-blue-500/40 font-mono text-2xl font-black group-hover/step:text-blue-500 transition-colors duration-500">{step.l}</div>
                      <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">{step.t}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed max-w-sm">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center items-center perspective-[2000px]">
                <div className="w-full max-w-md aspect-square relative transform rotate-y-[-20deg] rotate-x-[15deg] group-hover:rotate-0 transition-transform duration-[2s]">
                  {/* Visual Stack Representation */}
                  {[0, 1, 2, 3].map((i) => (
                    <div 
                      key={i} 
                      className="absolute inset-0 border-2 border-blue-500/20 bg-blue-500/5 rounded-3xl backdrop-blur-md flex flex-col items-center justify-center transition-all duration-1000 group-hover:border-blue-500/50 shadow-2xl"
                      style={{ 
                        transform: `translateZ(${i * 80}px) translateY(-${i * 15}px)`,
                        opacity: 1 - (i * 0.2),
                        animation: `pulse-border 4s infinite ${i * 0.5}s`
                      }}
                    >
                       <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center mb-4">
                          {i === 0 && <Box className="w-5 h-5 text-blue-400" />}
                          {i === 1 && <Cpu className="w-5 h-5 text-blue-400" />}
                          {i === 2 && <ShieldCheck className="w-5 h-5 text-blue-400" />}
                          {i === 3 && <Radio className="w-5 h-5 text-blue-400" />}
                       </div>
                       <div className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-[0.2em] text-center px-8">
                        {i === 0 && "L1: PHYSICAL_HARDWARE"}
                        {i === 1 && "L2: KERNEL_EXECUTOR"}
                        {i === 2 && "L3: RISK_SENTINEL"}
                        {i === 3 && "L4: NEURAL_ORCHESTRATOR"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- INFRASTRUCTURE GRID (TECHNICAL MATRIX) --- */}
        <div className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-gray-100 dark:border-white/5 pb-8">
            <h3 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">System HUD Matrix</h3>
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest animate-pulse">Scanning_Active_Nodes...</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Toxic Flow Shield", meta: "Behavioral flow classification.", icon: Shield },
              { title: "Aggregated Depth", meta: "40+ Venues synced @ <10μs.", icon: Database },
              { title: "Binary FIX Bridge", meta: "Native binary protocol translation.", icon: GitMerge },
              { title: "Atomic Kill-Switch", meta: "Global exposure neutralizing < 1ms.", icon: Lock },
              { title: "Smart Routing", meta: "Probabilistic pathing algorithms.", icon: Target },
              { title: "Drift Analytics", meta: "Benchmarked slippage reporting.", icon: Activity },
              { title: "Vaulted APIs", meta: "mTLS secured access layers.", icon: Fingerprint },
              { title: "Global Mesh", meta: "Co-located @ NY4 / LD4 / TY3.", icon: Globe }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group p-8 bg-white dark:bg-[#0c0c0c] border border-gray-100 dark:border-white/5 rounded-2xl hover:border-blue-500/40 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden"
                onMouseEnter={() => setActiveNode(i)}
              >
                <div className="flex items-center justify-between mb-10">
                  <div className={`p-2.5 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 group-hover:border-blue-500/30 group-hover:text-blue-500 transition-all duration-500`}>
                     <item.icon className="w-5 h-5" />
                  </div>
                  <div className="text-[10px] font-mono text-gray-300 dark:text-gray-800 font-black">NODE_0{i+1}</div>
                </div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-tight">{item.title}</h4>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono uppercase tracking-widest leading-relaxed">{item.meta}</p>
                {/* Glow Background */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        {/* --- GLOBAL DATA CENTER RACK VISUAL --- */}
        <div className="border-t border-gray-100 dark:border-white/5 pt-24 stagger-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Connectivity_Nodes",
                items: ["NY4 Cross-Connect", "LD4 Direct Fiber", "TY3 Microwave", "SG1 Direct Connect"],
                icon: Globe
              },
              {
                title: "Protocol_Stack",
                items: ["FIX 4.4 / 5.0 Native", "SBE / Binary Ingress", "gRPC Orchestration", "WebSocket/SSE Streaming"],
                icon: GitMerge
              },
              {
                title: "Engine_Intelligence",
                items: ["C++20 Low-Latency Kernels", "Rust Risk Sentinels", "PyTorch Inference Nodes", "Go Data Hubs"],
                icon: Cpu
              },
              {
                title: "Compliance_Auth",
                items: ["mTLS 1.3 Encryption", "SOC 2 Type II Audited", "FIPS 140-3 Protected", "GDPR / CCPA Native"],
                icon: ShieldCheck
              }
            ].map((rack, i) => (
              <div key={i} className="space-y-8">
                <h5 className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] flex items-center gap-3">
                  <rack.icon className="w-3.5 h-3.5" />
                  {rack.title}
                </h5>
                <ul className="space-y-4">
                  {rack.items.map((item, ii) => (
                    <li key={ii} className="flex items-center justify-between text-[11px] text-gray-600 dark:text-gray-400 font-light group cursor-default">
                      <span className="group-hover:text-blue-500 transition-colors uppercase tracking-tight">{item}</span>
                      <div className="w-1 h-1 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-colors"></div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- FINAL CTA BANNER --- */}
        <div className="mt-40 relative group">
           <div className="absolute inset-0 bg-blue-600 rounded-[3rem] blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000"></div>
           <div className="relative bg-white dark:bg-[#0c0c0c] border border-gray-100 dark:border-white/5 rounded-[3rem] p-12 md:p-20 text-center space-y-10 shadow-3xl overflow-hidden">
              <div className="absolute inset-0 bg-hud-grid opacity-10"></div>
              <div className="relative z-10 space-y-6">
                 <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-[0.9]">
                    Ready For <br/> <span className="text-blue-600">Deployment?</span>
                 </h2>
                 <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-xl mx-auto">
                    Integrate our infrastructure logic into your firm's architecture and experience institutional sovereignty today.
                 </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                 <button className="px-12 py-5 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-sm hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/30">
                    Initiate Handshake
                 </button>
                 <button className="px-12 py-5 bg-transparent border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                    Technical Specs
                 </button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default CapabilitiesContent;