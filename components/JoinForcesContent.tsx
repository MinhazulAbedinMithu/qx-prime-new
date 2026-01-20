import React from 'react';
import { 
  Users, 
  Send, 
  Building2, 
  Globe, 
  Mail, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  ChevronRight, 
  ArrowRight,
  Workflow,
  Network,
  Lock,
  Server,
  FileCode
} from 'lucide-react';

interface JoinForcesContentProps {
  onNavigate: (page: 'privacy' | 'terms' | 'about' | 'manifesto' | 'capabilities' | 'technology' | 'protocols' | 'join-forces' | 'qx-bridge') => void;
}

const JoinForcesContent: React.FC<JoinForcesContentProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] min-h-screen pt-44 pb-24 px-6 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24 items-end">
          <div className="lg:col-span-7 space-y-8">
            <nav className="flex items-center gap-3 text-[10px] font-mono font-bold tracking-[0.3em] text-gray-500 uppercase mb-4">
              <button onClick={() => onNavigate('about')} className="hover:text-blue-600 dark:hover:text-white transition-colors">HOME</button>
              <ChevronRight className="w-3 h-3" />
              <span className="text-blue-600 dark:text-blue-400">INITIATE ALLIANCES</span>
            </nav>
            <h1 className="text-5xl md:text-8xl font-bold text-gray-900 dark:text-white tracking-tighter leading-[0.9] uppercase">
              STRATEGIC <br/>
              <span className="text-blue-600 dark:text-blue-500">ALLIANCES.</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-xl">
              Collaborate with the frontier of quantitative intelligence. QXPRIME invites professional entities to initiate a technical alliance.
            </p>
          </div>
          
          <div className="lg:col-span-5 hidden lg:block">
             <div className="p-8 border border-gray-100 dark:border-white/5 rounded-3xl bg-gray-50/50 dark:bg-white/[0.02] space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                      <Zap className="w-5 h-5" />
                   </div>
                   <div className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">Rapid Onboarding Path</div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  Direct integration for MT5/FIX environments. Zero-latency deployment to NY4 and LD4 hubs.
                </p>
             </div>
          </div>
        </div>

        {/* Partnership Tracks */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              {
                title: "Institutional Onboarding",
                desc: "Full stack deployment for brokerages requiring enterprise-grade risk governance and liquidity management.",
                icon: Building2,
                color: "blue"
              },
              {
                title: "Liquidity Providers",
                desc: "Integrate your price discovery nodes directly into the QXPRIME aggregated pool for high-volume order routing.",
                icon: Network,
                color: "indigo"
              },
              {
                title: "Quant Partnerships",
                desc: "License our neural-risk V4.2 engine for private fund execution or custom alpha-generation projects.",
                icon: Cpu,
                color: "purple"
              }
            ].map((track, i) => {
              const Icon = track.icon;
              return (
                <div key={i} className="group p-10 bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 rounded-3xl hover:border-blue-500/30 transition-all duration-500 shadow-xl dark:shadow-none">
                   <div className={`w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-${track.color}-600 mb-8 transform group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight uppercase">{track.title}</h3>
                   <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light mb-8">{track.desc}</p>
                   <div className="h-px w-full bg-gray-100 dark:bg-white/5 group-hover:bg-blue-500/30 transition-colors"></div>
                </div>
              );
            })}
        </div>

        {/* NEW SECTION: ONBOARDING PROTOCOL & TECHNICAL READYNESS */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
           <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">Alliance Protocol</h2>
                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                   We follow a deterministic path to establishing institutional sovereignty. Every alliance begins with a technical audit and infrastructure handshake.
                 </p>
              </div>

              <div className="space-y-8">
                 <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-all">
                       <Mail className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1">Institutional Inquiries</div>
                       <a href="mailto:alliances@qxprime.ai" className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">alliances@qxprime.ai</a>
                    </div>
                 </div>

                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400">
                       <Globe className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-1">Global HQ</div>
                       <div className="text-lg font-bold text-gray-900 dark:text-white">Dubai Silicon Oasis, UAE</div>
                    </div>
                 </div>
              </div>

              <div className="pt-8 border-t border-gray-100 dark:border-white/5">
                 <button 
                  className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-[10px] rounded-sm hover:scale-105 transition-transform active:scale-95 shadow-xl"
                  onClick={() => window.location.href='mailto:alliances@qxprime.ai?subject=Strategic Alliance Inquiry'}
                 >
                    Contact Relationship Desk
                 </button>
              </div>
           </div>

           {/* ROADMAP / PROCESS SECTION */}
           <div className="lg:col-span-7 bg-gray-50 dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                 <Workflow className="w-64 h-64 text-blue-500" />
              </div>
              
              <h3 className="text-xs font-mono font-bold text-blue-600 dark:text-blue-500 uppercase tracking-[0.4em] mb-12">Onboarding Workflow</h3>

              <div className="space-y-12 relative">
                 {/* Step 1 */}
                 <div className="flex gap-8 group">
                    <div className="flex flex-col items-center">
                       <div className="w-10 h-10 rounded-full bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 flex items-center justify-center text-blue-600 z-10 group-hover:scale-110 transition-transform">
                          <span className="text-xs font-bold">01</span>
                       </div>
                       <div className="w-px h-full bg-gray-200 dark:bg-white/10 mt-2"></div>
                    </div>
                    <div className="pt-1.5">
                       <h4 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-2">Technical Discovery</h4>
                       <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                          Preliminary audit of existing execution architecture, liquidity requirements, and risk thresholds.
                       </p>
                    </div>
                 </div>

                 {/* Step 2 */}
                 <div className="flex gap-8 group">
                    <div className="flex flex-col items-center">
                       <div className="w-10 h-10 rounded-full bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 flex items-center justify-center text-blue-600 z-10 group-hover:scale-110 transition-transform">
                          <span className="text-xs font-bold">02</span>
                       </div>
                       <div className="w-px h-full bg-gray-200 dark:bg-white/10 mt-2"></div>
                    </div>
                    <div className="pt-1.5">
                       <h4 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-2">Infrastructure Bridging</h4>
                       <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                          Secure mTLS handshake initiation and node co-location synchronization in NY4 or LD4 hubs.
                       </p>
                    </div>
                 </div>

                 {/* Step 3 */}
                 <div className="flex gap-8 group">
                    <div className="flex flex-col items-center">
                       <div className="w-10 h-10 rounded-full bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 flex items-center justify-center text-blue-600 z-10 group-hover:scale-110 transition-transform">
                          <span className="text-xs font-bold">03</span>
                       </div>
                       <div className="w-px h-full bg-gray-200 dark:bg-white/10 mt-2"></div>
                    </div>
                    <div className="pt-1.5">
                       <h4 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-2">Protocol Sync</h4>
                       <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                          Deployment of QX-Core V4.2 and customization of the Neural-Risk validator per institutional policy.
                       </p>
                    </div>
                 </div>

                 {/* Step 4 */}
                 <div className="flex gap-8 group">
                    <div className="flex flex-col items-center">
                       <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white z-10 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                          <ShieldCheck className="w-5 h-5" />
                       </div>
                    </div>
                    <div className="pt-1.5">
                       <h4 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-tight mb-2">Production Flow</h4>
                       <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                          Full-scale execution governance. Transition to institutional sovereignty with 24/7 technical oversight.
                       </p>
                    </div>
                 </div>
              </div>

              <div className="mt-20 p-6 bg-white dark:bg-black/40 rounded-2xl border border-gray-100 dark:border-white/5 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <FileCode className="w-6 h-6 text-blue-600" />
                    <div className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">SDK & API Documentation</div>
                 </div>
                 <button className="text-blue-600 dark:text-blue-400 text-[10px] font-mono font-bold uppercase tracking-widest hover:underline">Request Access</button>
              </div>
           </div>
        </div>

        {/* BOTTOM METRICS BAR */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-100 dark:border-white/5">
           {[
             { label: "Deployment Speed", val: "< 48 Hours" },
             { label: "Uptime SLA", val: "99.999%" },
             { label: "Security Std", val: "AES-256" },
             { label: "Latency Impact", val: "< 120μs" }
           ].map((metric, i) => (
             <div key={i} className="space-y-1">
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{metric.label}</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">{metric.val}</div>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default JoinForcesContent;