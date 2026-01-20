import React from 'react';
import { Quote, CheckCircle2, AlertOctagon, Terminal } from 'lucide-react';

const ManifestoContent: React.FC = () => {
  return (
    <div className="w-full relative z-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-gray-100 to-transparent dark:from-white/[0.02] dark:to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto pt-32 sm:pt-40 pb-20 px-6 sm:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-gray-400 uppercase tracking-widest">
                <Terminal className="w-4 h-4" />
                <span>System_Log: Origin_Protocol</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              The QXPRIME <br/>
              <span className="italic font-serif font-light text-gray-500 dark:text-gray-400">Manifesto</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
               Why we built an institutional operating system in a world of retail noise.
            </p>
        </div>

        {/* Content Block 1: The Problem */}
        <div className="mb-20">
            <div className="flex items-start gap-6">
                <div className="hidden sm:flex flex-col items-center mt-2">
                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400">
                        <AlertOctagon className="w-4 h-4" />
                    </div>
                    <div className="w-px h-full bg-gray-200 dark:bg-white/10 my-4 min-h-[200px]"></div>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Asymmetry Problem</h2>
                    <div className="prose prose-lg prose-gray dark:prose-invert">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            For too long, the financial markets have operated on a two-tier system. 
                            At the top, Tier-1 banks and HFT firms operate with <strong>deterministic precision</strong>—using custom-built risk engines, co-located execution grids, and behavioral analytics that quantify every microsecond of exposure.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Everyone else—mid-tier brokers, prop desks, and emerging funds—has been forced to rely on "retail-plus" platforms. 
                            These tools prioritize pretty charts over risk governance. They focus on <em>prediction</em> (guessing where price goes) rather than <em>execution</em> (controlling how capital moves).
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Content Block 2: The Solution */}
        <div className="mb-20">
             <div className="flex items-start gap-6">
                <div className="hidden sm:flex flex-col items-center mt-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="w-px h-full bg-gray-200 dark:bg-white/10 my-4 min-h-[200px]"></div>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Engineering the Fix</h2>
                    <div className="prose prose-lg prose-gray dark:prose-invert">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            We built QXPRIME to democratize <strong>infrastructure intelligence</strong>. We believe that edge doesn't come from a magic indicator. It comes from:
                        </p>
                        <ul className="space-y-4 my-8">
                            {[
                                "Knowing exactly how toxic your flow is in real-time.",
                                "Automating hedge ratios based on book skew, not gut feel.",
                                "Having a risk engine that doesn't sleep, blink, or panic."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-800 dark:text-gray-200 font-medium p-4 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            We are not a signal service. We are plumbers for capital. We build the pipes, the valves, and the pressure gauges that keep institutional desks running when volatility strikes.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Quote Section */}
        <div className="relative p-10 sm:p-14 bg-gray-900 text-white rounded-2xl overflow-hidden mb-20">
            <div className="absolute top-0 left-0 p-8 opacity-10">
                <Quote className="w-20 h-20" />
            </div>
            <blockquote className="relative z-10 text-center">
                <p className="text-2xl sm:text-3xl font-serif italic leading-relaxed mb-8">
                    "Markets reward structure, discipline, and asymmetry. They punish ambiguity. QXPRIME exists to remove the ambiguity."
                </p>
                <footer className="text-sm font-mono tracking-widest text-blue-400 uppercase">
                    — The QuantXpert Team
                </footer>
            </blockquote>
        </div>

        {/* Footer Sign-off */}
        <div className="text-center border-t border-gray-200 dark:border-white/10 pt-12">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Established 2024. Dubai Silicon Oasis.</p>
            <div className="inline-block px-4 py-1 rounded-full border border-gray-200 dark:border-white/10 text-xs font-mono text-gray-400">
                END_OF_MANIFESTO
            </div>
        </div>

      </div>
    </div>
  );
};

export default ManifestoContent;