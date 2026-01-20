import React from 'react';
import { 
  Shield, 
  Target, 
  Cpu, 
  Zap, 
  Globe, 
  ChevronRight, 
  Fingerprint, 
  Compass
} from 'lucide-react';

interface AboutUsContentProps {
  onNavigate: (page: 'privacy' | 'terms' | 'about' | 'manifesto' | 'capabilities' | 'technology' | 'protocols' | 'join-forces' | 'qx-bridge' | 'about-us' | 'fix-api') => void;
}

const AboutUsContent: React.FC<AboutUsContentProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white dark:bg-[#080808] min-h-screen pt-44 pb-24 px-6 transition-colors duration-500 overflow-hidden relative">
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="grid lg:grid-cols-12 gap-16 mb-40 items-end">
          <div className="lg:col-span-8 space-y-10">
            <nav className="flex items-center gap-3 text-[10px] font-mono font-bold tracking-[0.4em] text-gray-400 dark:text-gray-500 uppercase mb-4">
              <button onClick={() => onNavigate('about')} className="hover:text-blue-600 dark:hover:text-white transition-colors">ROOT</button>
              <ChevronRight className="w-3 h-3 opacity-30" />
              <span className="text-blue-600 dark:text-blue-400">COMPANY_PROFILE_V4.2</span>
            </nav>
            
            <h1 className="text-6xl md:text-9xl font-black text-gray-900 dark:text-white tracking-tighter leading-[0.85] uppercase">
              INSTITUTIONAL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-500 dark:via-blue-300 dark:to-indigo-400">
                AUTHORITY.
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl border-l-4 border-blue-500/20 pl-8">
              QXPRIME is a specialized quantitative execution and risk intelligence infrastructure firm. We engineer high-fidelity technical rails for the global institutional elite.
            </p>
          </div>
          
          <div className="lg:col-span-4 hidden lg:block">
             <div className="p-8 border border-gray-100 dark:border-white/5 rounded-3xl bg-gray-50/30 dark:bg-white/[0.02] backdrop-blur-xl relative overflow-hidden group">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                      <Fingerprint className="w-6 h-6 animate-pulse" />
                   </div>
                   <div>
                     <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">ESTABLISHED</div>
                     <div className="text-sm font-bold text-gray-900 dark:text-white uppercase">2024_CORE_OS</div>
                   </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-mono">
                  Managed by QuantXpert Tech FZE LLC. Licensed for specialized neural development and infrastructure orchestration.
                </p>
             </div>
          </div>
        </div>

        {/* --- MISSION & VISION HUD --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-40">
           <div className="group relative p-12 bg-gray-900 rounded-[3rem] overflow-hidden border border-gray-800 shadow-2xl">
              <div className="relative z-10 space-y-8">
                 <div className="text-blue-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-3">
                    <Target className="w-4 h-4" /> THE_MANDATE
                 </div>
                 <h2 className="text-4xl font-bold text-white tracking-tight uppercase">Quantifying <br/> The Future.</h2>
                 <p className="text-gray-400 font-light leading-relaxed">
                   Our mission is to bridge the "Access Gap" in financial markets. We provide professional brokerages and prop desks with the same deterministic precision previously reserved for Tier-1 banks.
                 </p>
                 <div className="pt-10 flex gap-4 h-1 items-end">
                    {[...Array(12)].map((_, i) => (
                       <div key={i} className="flex-1 bg-blue-500/20 group-hover:bg-blue-500 transition-all" style={{ height: `${20 + Math.random() * 80}%` }}></div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="group relative p-12 bg-white dark:bg-[#0c0c0c] rounded-[3rem] overflow-hidden border border-gray-200 dark:border-white/5 shadow-xl">
              <div className="relative z-10 space-y-8">
                 <div className="text-blue-600 dark:text-blue-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-3">
                    <Compass className="w-4 h-4" /> THE_VISION
                 </div>
                 <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight uppercase">Intelligence <br/> First.</h2>
                 <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                   We envision a market landscape where infrastructure is autonomous, risk is predictive, and every participant operates on a foundation of absolute technical integrity.
                 </p>
                 <div className="pt-10 flex items-center gap-4">
                    <div className="w-full bg-gray-100 dark:bg-white/5 h-1 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-600 w-3/4 animate-pulse"></div>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">75%_SYNC</span>
                 </div>
              </div>
           </div>
        </div>

        {/* --- CORE PILLARS --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-40">
           {[
             { title: "Innovation", desc: "Pushing the boundaries of neural logic and hardware-accelerated execution.", icon: Cpu, meta: "V4.2_ENGINE" },
             { title: "Integrity", desc: "Zero-conflict architecture. We don't trade against you; we build for you.", icon: Shield, meta: "TRUST_PROTOCOL" },
             { title: "Impact", desc: "Measurable alpha improvement via execution optimization and risk containment.", icon: Zap, meta: "ROI_DRIVEN" }
           ].map((pillar, i) => {
             const Icon = pillar.icon;
             return (
               <div key={i} className="group p-10 bg-white dark:bg-[#0c0c0c] border border-gray-100 dark:border-white/5 rounded-3xl hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-blue-600 mb-8 transform group-hover:scale-110 transition-transform">
                     <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight uppercase">{pillar.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light mb-10 flex-grow">{pillar.desc}</p>
                  <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest border-t border-gray-50 dark:border-white/5 pt-6 group-hover:text-blue-500 transition-colors">
                    {pillar.meta}
                  </div>
               </div>
             );
           })}
        </div>

        {/* --- GLOBAL SECRETARIAT --- */}
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden border border-gray-800 shadow-3xl">
           <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <div className="text-blue-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em] animate-pulse">Global_Presence</div>
                 <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                    Global <br/> Secretariat.
                 </h2>
                 <p className="text-gray-400 text-lg font-light leading-relaxed">
                   Based in the Dubai Silicon Oasis, QXPRIME coordinates global infrastructure nodes across four major financial regions. Our headquarters serves as the central orchestration hub for the neural grid.
                 </p>
                 <div className="flex flex-wrap gap-4 pt-4">
                    {['NY4', 'LD4', 'TY3', 'SG1'].map(hub => (
                      <div key={hub} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg font-mono text-xs text-blue-400">
                        {hub}_NODE::ACTIVE
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative flex justify-center items-center">
                 <div className="w-80 h-80 rounded-full border border-blue-500/10 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border border-blue-500/5 animate-[spin_15s_linear_infinite]"></div>
                    <div className="w-64 h-64 rounded-full bg-blue-500/5 backdrop-blur-3xl border border-blue-500/20 flex flex-col items-center justify-center text-center p-8 space-y-4 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                       <Globe className="w-12 h-12 text-blue-500" />
                       <div className="text-sm font-bold text-white uppercase tracking-widest leading-tight">Dubai_Silicon_Oasis <br/> <span className="text-blue-500 font-mono text-[10px]">HQ_COMMAND</span></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* --- BOTTOM HUD METRICS --- */}
        <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-t border-gray-100 dark:border-white/5">
           {[
             { label: "Organization", val: "QuantXpert Tech" },
             { label: "Jurisdiction", val: "UAE (DXB)" },
             { label: "Engine Alpha", val: "V4.2 STABLE" },
             { label: "Status", val: "Operational" }
           ].map((metric, i) => (
             <div key={i} className="space-y-2 group">
                <div className="text-[10px] font-mono text-gray-400 group-hover:text-blue-500 transition-colors uppercase tracking-[0.3em]">{metric.label}</div>
                <div className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">{metric.val}</div>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default AboutUsContent;