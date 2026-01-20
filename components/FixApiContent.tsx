import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Activity, 
  Terminal, 
  ChevronRight, 
  ArrowRight, 
  Globe, 
  Lock, 
  Cpu, 
  LayoutGrid, 
  ChevronDown, 
  ChevronUp,
  Share2,
  Network,
  Waypoints,
  Layers,
  Code,
  Gauge,
  Box
} from 'lucide-react';

interface FixApiContentProps {
  onNavigate: (page: any) => void;
}

const FixApiContent: React.FC<FixApiContentProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { 
      q: "How can I migrate from my current solution to the FIX API platform?", 
      a: "Our onboarding protocol follows a 'Parallel Rail' strategy. We establish your new FIX sessions alongside your existing infrastructure, allowing for non-disruptive testing. Once latency benchmarks and order flow integrity are verified, we perform a seamless session migration during weekend maintenance windows." 
    },
    { 
      q: "How does the FIX API platform help me become a liquidity provider?", 
      a: "The platform includes a native LP Orchestration layer. You can aggregate your proprietary liquidity with external pools, apply custom markups via the QX-Margin Engine, and redistribute that depth to other brokers or White Label clients using standardized FIX 4.4/5.0 handshakes." 
    },
    { 
      q: "Is it possible to integrate my trading platform with QXPRIME via FIX API?", 
      a: "Yes. We offer dedicated bridges for MT4, MT5, and cTrader, as well as native SDKs for proprietary Python/C++ algorithmic frameworks. The bridge operates at the kernel level to ensure that translation latency remains sub-millisecond." 
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-[#030303] transition-colors duration-500 overflow-hidden relative min-h-screen selection:bg-blue-500/30">
      
      <div className="max-w-[1440px] mx-auto pt-44 pb-32 px-6 relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="grid lg:grid-cols-12 gap-16 mb-40 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em]">FIX API PLATFORM // V5.0</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-gray-900 dark:text-white tracking-tighter leading-[0.85] uppercase">
              POWERFUL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-500">
                FIX SOLUTIONS.
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl border-l-4 border-blue-500/20 pl-8">
              Engineered for retail brokers, hedge funds, and liquidity providers. A sovereign trading engine designed for the high-fidelity execution elite.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => onNavigate('join-forces')}
                className="px-12 py-5 bg-gray-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.2em] text-[12px] rounded-sm hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all flex items-center gap-4 group"
              >
                Request Proposal <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-white/80 dark:bg-[#080808]/80 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-[3rem] p-10 shadow-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Cpu className="w-48 h-48" />
               </div>
               <div className="relative z-10 space-y-10">
                  <div className="flex justify-between items-center">
                    <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">Protocol_Handshake::ACTIVE</div>
                    <Terminal className="w-4 h-4 text-blue-500" />
                  </div>
                  
                  <div className="font-mono text-[11px] text-blue-600/70 dark:text-blue-400/70 space-y-2">
                    <div className="flex justify-between border-b border-gray-100 dark:border-white/5 pb-2">
                      <span>ORD_TYPE:</span>
                      <span className="font-bold text-gray-900 dark:text-white">MARKET_EXEC</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 dark:border-white/5 pb-2">
                      <span>LP_MESH:</span>
                      <span className="font-bold text-gray-900 dark:text-white">100+_VENUE_SYNC</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 dark:border-white/5 pb-2">
                      <span>MARGIN_ENGINE:</span>
                      <span className="font-bold text-green-500 uppercase">Optimized</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="flex justify-between items-end mb-2">
                       <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Throughput_Integrity</span>
                       <span className="text-lg font-black text-gray-900 dark:text-white font-mono tracking-tighter">99.98%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-600 w-full animate-pulse"></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* --- 5 MAIN REASONS: BENTO GRID --- */}
        <div className="mb-40">
           <div className="text-center mb-20 space-y-4">
              <h2 className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.5em]">Advantage::Matrix</h2>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">5 Reasons to Deploy QX-FIX</h3>
           </div>

           <div className="grid md:grid-cols-6 lg:grid-cols-12 gap-6">
              {/* Reason 1: LP */}
              <div className="md:col-span-3 lg:col-span-7 group bg-white dark:bg-[#0c0c0c] border border-gray-100 dark:border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 shadow-xl overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform">
                    <Network className="w-32 h-32" />
                 </div>
                 <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 mb-8 border border-blue-100 dark:border-blue-500/10">
                       <Share2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">Become a Liquidity Provider</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light mb-8 max-w-lg">
                       Distribute liquidity to other brokers, White Label clients, and external institutional participants via our prime brokerage layer. Scale your hierarchy with absolute precision.
                    </p>
                    <div className="mt-auto text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">PRIME_BROKER_READY</div>
                 </div>
              </div>

              {/* Reason 2: Independence */}
              <div className="md:col-span-3 lg:col-span-5 group bg-gray-900 border border-gray-800 p-10 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-500 shadow-2xl relative">
                 <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-8">
                       <Globe className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Platform Independence</h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
                       Caters to hedge funds, banks, and exchanges looking to expand beyond legacy trading platforms for direct market access to private liquidity pools.
                    </p>
                    <div className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-widest">DMA::PROTOCOL_FIRST</div>
                 </div>
              </div>

              {/* Reason 3: 100+ LPs */}
              <div className="md:col-span-3 lg:col-span-4 group bg-white dark:bg-[#0c0c0c] border border-gray-100 dark:border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 shadow-xl">
                 <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-blue-600 mb-8">
                    <Layers className="w-6 h-6" />
                 </div>
                 <h4 className="text-xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">Single Point of Access</h4>
                 <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light mb-6">
                    Connect to 100+ Tier-1 LPs through one unified orchestration point. Integrate once, execute everywhere.
                 </p>
                 <div className="inline-flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    <span className="w-1 h-1 rounded-full bg-blue-500"></span> 100+_VENUE_MESH
                 </div>
              </div>

              {/* Reason 4: Speed */}
              <div className="md:col-span-3 lg:col-span-4 group bg-white dark:bg-[#0c0c0c] border border-gray-100 dark:border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
                    <Zap className="w-24 h-24 text-blue-600" />
                 </div>
                 <h4 className="text-xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">Ultra-Low Latency</h4>
                 <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light mb-6">
                    Native FIX engine with built-in Margin Engine avoids platform overhead, enabling sub-millisecond execution cycles.
                 </p>
                 <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Activity className="w-3 h-3 text-blue-500" /> &lt; 150μS PROCESSING
                 </div>
              </div>

              {/* Reason 5: Interface */}
              <div className="md:col-span-6 lg:col-span-4 group bg-white dark:bg-[#0c0c0c] border border-gray-100 dark:border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 shadow-xl">
                 <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-blue-600 mb-8">
                    <LayoutGrid className="w-6 h-6" />
                 </div>
                 <h4 className="text-xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">Intuitive Web HUD</h4>
                 <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light mb-6">
                    A user-friendly command center for clients to monitor exposure, open positions, and execute through our web terminal.
                 </p>
                 <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">REAL_TIME_MONITORING</div>
              </div>
           </div>
        </div>

        {/* --- TECHNICAL BREAKDOWN: HUD --- */}
        <div className="mb-40">
           <div className="bg-gray-900 dark:bg-black rounded-[4rem] p-12 md:p-32 relative overflow-hidden border border-gray-800 shadow-4xl group">
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                 <div className="space-y-10">
                    <div className="text-blue-500 font-mono text-xs font-bold uppercase tracking-[0.5em] animate-pulse">Infrastructure_Module</div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                       Sovereign <br/>
                       Execution.
                    </h2>
                    <p className="text-gray-400 text-xl font-light leading-relaxed max-w-lg">
                       The FIX API platform within the QXPRIME Processor is the engine of choice for prime brokers and hedge fund managers seeking maximum deterministic precision.
                    </p>
                    
                    <div className="space-y-6">
                       {[
                         { t: "C++ Order Management", d: "Native kernel execution for maximum speed." },
                         { t: "Co-located Routing", d: "Direct fiber connections to Equinix NY4/LD4." },
                         { t: "Hierarchical Risk", d: "Dynamic margin rules for complex sub-account groups." }
                       ].map((feat, i) => (
                         <div key={i} className="flex gap-6 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 group-hover/item:scale-150 transition-transform"></div>
                            <div>
                               <div className="text-sm font-bold text-white uppercase tracking-widest mb-1">{feat.t}</div>
                               <div className="text-xs text-gray-500">{feat.d}</div>
                            </div>
                         </div>
                       ))}
                    </div>

                    <button 
                      onClick={() => onNavigate('join-forces')}
                      className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-sm hover:bg-blue-700 transition-all flex items-center gap-4 shadow-2xl shadow-blue-500/20"
                    >
                      Request Technical Handshake <ChevronRight className="w-4 h-4" />
                    </button>
                 </div>

                 <div className="relative flex justify-center items-center perspective-[2000px]">
                    <div className="w-full max-w-md aspect-square relative transform rotate-y-[-15deg] group-hover:rotate-0 transition-transform duration-[2s]">
                       {/* Visual Stack Representation */}
                       {[0, 1, 2].map((i) => (
                         <div 
                           key={i} 
                           className="absolute inset-0 border border-blue-500/20 bg-blue-500/5 rounded-[3rem] backdrop-blur-md flex flex-col items-center justify-center transition-all duration-1000 group-hover:border-blue-500/40"
                           style={{ 
                             transform: `translateZ(${i * 100}px) translateY(-${i * 20}px)`,
                             opacity: 1 - (i * 0.25)
                           }}
                         >
                            <div className="w-16 h-16 rounded-full border border-blue-500/20 flex items-center justify-center mb-6">
                               {i === 0 && <Box className="w-6 h-6 text-blue-400" />}
                               {i === 1 && <Waypoints className="w-6 h-6 text-blue-400" />}
                               {i === 2 && <Lock className="w-6 h-6 text-blue-400" />}
                            </div>
                            <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-[0.3em] text-center px-10">
                             {i === 0 && "NODE: DIRECT_DMA"}
                             {i === 1 && "NODE: PROTOCOL_MESH"}
                             {i === 2 && "NODE: RISK_SOVEREIGN"}
                           </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* --- FAQ SECTION --- */}
        <div className="max-w-3xl mx-auto mb-40">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">System FAQ</h2>
             <p className="text-gray-500 dark:text-gray-400 font-light">Infrastructure onboarding and migration protocols.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-gray-100 dark:border-white/5 transition-colors">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-8 text-left group"
                >
                  <span className={`text-sm font-bold transition-colors uppercase tracking-widest ${openFaq === i ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'}`}>
                    {f.q}
                  </span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />}
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${openFaq === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                   <div className="overflow-hidden">
                      <div className="pb-10 text-base text-gray-500 dark:text-gray-400 leading-relaxed font-light pl-6 border-l-2 border-blue-500/20 ml-2">
                        {f.a}
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM TELEMETRY --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20 border-t border-gray-100 dark:border-white/5">
           {[
             { label: "Handshake Speed", val: "Sub-ms" },
             { label: "Security Level", val: "FIPS 140-3" },
             { label: "Engine Status", val: "Sovereign" },
             { label: "Handled Load", val: "5M+ MSG/S" }
           ].map((metric, i) => (
             <div key={i} className="space-y-3 group cursor-default">
                <div className="text-[10px] font-mono text-gray-400 group-hover:text-blue-500 transition-colors uppercase tracking-[0.4em]">{metric.label}</div>
                <div className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter uppercase group-hover:scale-105 transition-transform origin-left">{metric.val}</div>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default FixApiContent;