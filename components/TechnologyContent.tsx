import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Zap,
  ShieldCheck,
  Activity,
  Layers,
  Network,
  Database,
  Terminal,
  ChevronRight,
  Code,
  Globe,
  Workflow,
  Server,
  Lock,
  Box,
  Check
} from 'lucide-react';

interface TechnologyContentProps {
  onNavigate: (page: 'privacy' | 'terms' | 'about' | 'manifesto' | 'capabilities' | 'technology' | 'protocols' | 'join-forces' | 'qx-bridge') => void;
}

// --- SUB-COMPONENTS ---

interface HolographicCardProps {
  title: string;
  desc: string;
  icon: React.ElementType;
  specs: string[];
  color: string;
  delay?: number;
}

const HolographicCard: React.FC<HolographicCardProps> = ({ title, desc, icon: Icon, specs, color, delay = 0 }) => (
  <div
    className="group relative bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 rounded-2xl p-8 overflow-hidden hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Holographic Gradient Overlay on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    <div className="absolute -inset-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

    <div className={`relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-8 ${color} bg-gray-50 dark:bg-white/5 group-hover:scale-110 transition-transform duration-500 border border-gray-100 dark:border-white/10`}>
      <Icon className={`w-7 h-7 ${color}`} />
    </div>

    <h3 className="relative z-10 text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight uppercase flex items-center gap-2">
      {title}
      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500" />
    </h3>

    <p className="relative z-10 text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 font-light flex-grow">
      {desc}
    </p>

    <div className="relative z-10 space-y-3 pt-6 border-t border-gray-100 dark:border-white/5">
      {specs.map((spec, i) => (
        <div key={i} className="flex items-center gap-3 text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
          <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-700 group-hover:bg-blue-400'}`}></div>
          {spec}
        </div>
      ))}
    </div>
  </div>
);

const LiveTerminal: React.FC = () => {
  const [lines, setLines] = useState<React.ReactNode[]>([
    "> INITIALIZING QX_KERNEL_V4.2...",
    "> MOUNTING VOLUMES: [NY4] [LD4] [TY3]",
    "> LOADING NEURAL_WEIGHTS... 4.2GB [OK]"
  ]);

  useEffect(() => {
    const sequence = [
      { text: "> CHECKING LATENCY(NY4)... 0.12ms", delay: 800 },
      { text: "> CHECKING LATENCY(LD4)... 0.14ms", delay: 1600 },
      { text: "> SYNCING ORDER_BOOK... [COMPLETE]", delay: 2400 },
      { text: "> ESTABLISHING FIX_SESSION... [SECURE]", delay: 3200 },
      { text: "> RISK_GATE: ACTIVE (64 VECTORS)", delay: 4000 },
      { text: "> SYSTEM READY. AWAITING INSTRUCTION.", delay: 4800, color: "text-green-400" }
    ];

    const timeouts: any[] = [];

    sequence.forEach(({ text, delay, color }) => {
      const timeout = setTimeout(() => {
        setLines(prev => {
          const newLine = color ? <span className={color} key={Date.now() + Math.random()}>{text}</span> : text;
          const updated = [...prev, newLine];
          return updated.slice(-8);
        });
      }, delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="font-mono text-[10px] sm:text-xs leading-relaxed opacity-90 h-full flex flex-col justify-end">
      {lines.map((line, i) => (
        <div key={i} className="animate-fade-in">{line}</div>
      ))}
      <div className="flex gap-2 mt-2">
        <span className="animate-pulse text-blue-500">_</span>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const TechnologyContent: React.FC<TechnologyContentProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] transition-colors duration-300">

      {/* --- CSS ANIMATIONS --- */}
      <style>{`
        @keyframes scan-vertical {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        .animate-scan {
          animation: scan-vertical 3s linear infinite;
        }
        .bg-grid-animate {
          animation: grid-move 4s linear infinite;
        }
        .perspective-deep {
            perspective: 2000px;
        }
        .rotate-x-hud {
            transform: rotateX(10deg);
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <div className="relative pt-44 pb-32 px-6 overflow-hidden bg-gray-900 dark:bg-black border-b border-gray-800">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0 bg-grid-animate"
            style={{
              backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 dark:to-black"></div>
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <nav className="flex items-center gap-3 text-[10px] font-mono font-bold tracking-[0.3em] text-gray-500 uppercase mb-12">
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">HOME</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-blue-400">TECHNOLOGY STACK</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest animate-fade-in">
                <Cpu className="w-3 h-3 animate-pulse" /> Core Infrastructure v4.2
              </div>

              <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
                Neural <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">Execution.</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-xl font-light leading-relaxed border-l-2 border-blue-500/30 pl-6">
                Deterministic logic meets predictive intelligence. Our stack is engineered for quants who require absolute control over market entry and capital governance.
              </p>

              <div className="pt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('join-forces')}
                  className="px-10 py-4 bg-white text-blue-600 font-bold uppercase tracking-[0.3em] text-[13px] hover:bg-blue-50 transition-all rounded-[2px] shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-95 flex items-center gap-3"
                >
                  Initiate Alliances <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('protocols')}
                  className="px-10 py-4 bg-transparent border border-gray-700 text-gray-300 font-bold uppercase tracking-[0.3em] text-[13px] hover:bg-white/5 hover:border-gray-500 transition-all rounded-[2px] active:scale-95"
                >
                  View Protocols
                </button>
              </div>
            </div>

            {/* Live Kernel Monitor */}
            <div className="lg:col-span-5 hidden lg:block perspective-deep">
              <div className="relative bg-[#050505] border border-gray-800 rounded-xl overflow-hidden shadow-2xl transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-700 group">

                {/* Header */}
                <div className="h-8 bg-[#111] border-b border-white/10 flex items-center px-4 justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">root@qx-core-01:~</span>
                </div>

                {/* Terminal Body */}
                <div className="p-6 h-64 relative bg-black/80 backdrop-blur-sm text-blue-300">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-scan"></div>
                  <LiveTerminal />
                </div>

                {/* Footer Status */}
                <div className="h-8 bg-[#111] border-t border-white/10 flex items-center px-4 justify-between text-[9px] font-mono text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span>ONLINE</span>
                  </div>
                  <span>CPU: 12% | MEM: 4.2GB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CORE TECHNOLOGY MODULES --- */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-[#080808]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.4em]">Engineered Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight uppercase">Modular Infrastructure</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto text-lg">
              Our platform is built as a series of isolated, high-performance modules that communicate over a zero-latency backbone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HolographicCard
              title="Liquidity Synthesis"
              desc="Unites fragmented market depth into a unified, high-fidelity pool. Adaptive routing ensures you capture the best price without signaling your intent to the broader market."
              icon={Layers}
              color="text-blue-600"
              specs={["Zero-Signaling Execution", "Depth-of-Market Fusion", "Multi-Venue Aggregation"]}
              delay={0}
            />
            <HolographicCard
              title="Neural RMS"
              desc="The QXShield V4.2 risk management system operates pre-trade. It scans flow toxicity and market disconnects at sub-microsecond speeds to prevent catastrophic drawdowns."
              icon={ShieldCheck}
              color="text-red-600"
              specs={["Adversarial Detection", "Pre-Trade Validation", "Sub-μs Latency Penalty"]}
              delay={100}
            />
            <HolographicCard
              title="Execution Fidelity"
              desc="Native FIX and Binary protocol bridges ensure that every instruction reaches the venue with nanosecond precision. We manage the session, you manage the strategy."
              icon={Zap}
              color="text-yellow-500"
              specs={["FIX 4.4 / Binary Support", "NY4/LD4 Cross-Connects", "Session Persistence Layer"]}
              delay={200}
            />
            <HolographicCard
              title="Data Orchestration"
              desc="Timeseries processing designed for the quantitative elite. High-resolution tick data is normalized and accessible via GraphQL for real-time strategy adjustment."
              icon={Database}
              color="text-indigo-600"
              specs={["Tick-Level Telemetry", "Unified Data Model", "Real-Time Ingestion"]}
              delay={300}
            />
            <HolographicCard
              title="Logic Scalability"
              desc="Scale your brokerage account clusters instantly. Our architecture supports hierarchical account topologies with individual risk waterfalls and rule inheritance."
              icon={Workflow}
              color="text-purple-600"
              specs={["Cluster Management", "Rule Inheritance", "Dynamic Scaling"]}
              delay={400}
            />
            <HolographicCard
              title="Global Health"
              desc="Proactive hardware and network monitoring across DXB, LDN, SG, and TYO. We track node degradation before it impacts execution quality."
              icon={Activity}
              color="text-emerald-600"
              specs={["Global Node Health", "Degradation Throttling", "Redundant Failover"]}
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* --- DEEP DIVE: THE KERNEL --- */}
      <section className="py-24 px-6 border-y border-gray-200 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* Abstract Code Visualization */}
            <div className="bg-[#111] rounded-2xl p-6 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2">
                <div className="flex gap-2">
                  <div className="px-2 py-1 bg-blue-900/30 rounded text-[9px] font-mono text-blue-400">main.cpp</div>
                  <div className="px-2 py-1 bg-white/5 rounded text-[9px] font-mono text-gray-500">risk_defs.h</div>
                </div>
              </div>
              <div className="font-mono text-xs space-y-1 text-gray-400 mt-6">
                <p><span className="text-purple-400">void</span> <span className="text-blue-400">QX_Engine::ExecuteOrder</span>(Order* ord) {'{'}</p>
                <p className="pl-4 text-gray-500">// Atomic Lock for thread safety</p>
                <p className="pl-4"><span className="text-yellow-400">std::atomic_thread_fence</span>(std::memory_order_acquire);</p>
                <p className="pl-4">&nbsp;</p>
                <p className="pl-4 text-gray-500">// Validate Risk Limits (Nanosecond Check)</p>
                <p className="pl-4"><span className="text-purple-400">if</span> (!<span className="text-green-400">RiskGate</span>{'->'} Validate(ord)) {'{'}</p>
                <p className="pl-8"><span className="text-red-400">RejectOrder</span>(ord, REASON_RISK_LIMIT);</p>
                <p className="pl-8"><span className="text-purple-400">return</span>;</p>
                <p className="pl-4">{'}'}</p>
                <p className="pl-4">&nbsp;</p>
                <p className="pl-4 text-gray-500">// Route to Aggregation Layer</p>
                <p className="pl-4"><span className="text-blue-400">LiquidityPool</span>{'->'} Route(ord);</p>
                <p className="pl-4"><span className="text-blue-400">Telemetry</span>{'->'} LogTick(ord);</p>
                <p>{'}'}</p>
              </div>

              {/* Glowing Overlay */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
            </div>

            {/* Decorators */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[50px]"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">
              <Code className="w-3 h-3" /> Proprietary Codebase
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">The <span className="text-blue-600 dark:text-blue-500">QX-Kernel.</span></h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              <p>
                At the heart of QXPRIME lies a custom-built C++20 execution kernel. We do not rely on off-the-shelf engines. Our logic is compiled directly to machine code, bypassing the overhead of managed runtimes.
              </p>
              <p>
                This "close-to-metal" approach allows us to manage memory manually, eliminate garbage collection pauses, and ensure that your orders traverse our stack with consistent, deterministic latency.
              </p>
            </div>
            <div className="flex gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">C++20</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Language</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Zero</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500">GC Pauses</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">O(1)</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Complexity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PERFORMANCE VISUALIZATION (LATENCY) --- */}
      <section className="py-24 bg-gray-50 dark:bg-white/[0.02] border-b border-gray-100 dark:border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">Latency Arbitrage <br /><span className="text-blue-600">Elimination.</span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              In the institutional arena, latency isn't just a number—it's a risk vector. QXPRIME technology is co-located directly at the source, effectively neutralizing latency arbitrage attempts from predatory market participants.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Internal Latency</div>
                <div className="text-3xl font-bold text-blue-600">&lt; 120μs</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Acknowledgment</div>
                <div className="text-3xl font-bold text-blue-600">Sub-ms</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-6 opacity-[0.05]">
                <Globe className="w-64 h-64 text-blue-500" />
              </div>

              <div className="relative z-10 space-y-8">
                {/* QXPRIME Latency Chart */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
                    <span className="font-bold text-blue-600">QXPRIME ENGINE</span>
                    <span>0.1ms Avg</span>
                  </div>
                  <div className="h-12 flex items-end gap-1">
                    {[...Array(40)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-blue-500 rounded-t-[1px]"
                        style={{
                          height: `${15 + Math.random() * 10}%`,
                          transition: 'height 0.2s ease'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Standard Aggregator Chart */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
                    <span>STANDARD AGGREGATOR</span>
                    <span className="text-red-400">150ms+ Spikes</span>
                  </div>
                  <div className="h-12 flex items-end gap-1 opacity-50">
                    {[...Array(40)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gray-400 dark:bg-gray-600 rounded-t-[1px]"
                        style={{
                          height: `${30 + Math.random() * 60}%`,
                          transition: 'height 0.5s ease'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL SPECS GRID (HUD STYLE) --- */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-baseline justify-between mb-16 border-b border-gray-100 dark:border-white/5 pb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-widest">Technical Protocols</h3>
            <button
              onClick={() => onNavigate('protocols')}
              className="text-xs font-mono font-bold text-blue-600 hover:text-blue-500 uppercase tracking-widest flex items-center gap-2 group"
            >
              View Full Specs <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Stack Specs",
                items: [
                  { k: "Kernel", v: "C++20" },
                  { k: "Logic", v: "Rust v1.7" },
                  { k: "Orchestration", v: "Go/gRPC" }
                ]
              },
              {
                title: "Connectivity",
                items: [
                  { k: "Protocols", v: "FIX, Binary" },
                  { k: "Latency", v: "Ultra-Low" },
                  { k: "Throughput", v: "5M msg/s" }
                ]
              },
              {
                title: "Security",
                items: [
                  { k: "Encryption", v: "AES-256" },
                  { k: "Auth", v: "mTLS / HSM" },
                  { k: "Compliance", v: "ISO 27001" }
                ]
              },
              {
                title: "Data Center",
                items: [
                  { k: "Primary", v: "Equinix NY4" },
                  { k: "Secondary", v: "Equinix LD4" },
                  { k: "DR", v: "Equinix TY3" }
                ]
              }
            ].map((section, i) => (
              <div key={i}>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> {section.title}
                </h4>
                <ul className="space-y-4 text-xs font-mono text-gray-600 dark:text-gray-400">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex justify-between border-b border-gray-50 dark:border-white/[0.02] pb-2 group">
                      <span className="group-hover:text-blue-500 transition-colors">{item.k}</span>
                      <span className="text-gray-900 dark:text-white font-bold">{item.v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 bg-blue-600 relative overflow-hidden group">
        <div
          className="absolute inset-0 pointer-events-none opacity-20 transition-transform duration-[20s] ease-linear group-hover:scale-110"
          style={{
            backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '32px 32px'
          }}
        ></div>

        <div className="max-w-[1200px] mx-auto text-center space-y-12 relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-[0.9]">Deploy the <br />Standard.</h2>
            <p className="text-xl text-blue-100 font-light leading-relaxed">
              Integrate QXPRIME's technology stack into your firm's architecture and experience institutional sovereignty today.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => onNavigate('join-forces')}
              className="px-16 py-6 bg-white text-blue-600 font-bold uppercase tracking-[0.3em] text-[15px] hover:bg-blue-50 transition-all rounded-[2px] shadow-2xl active:scale-95 border-none"
            >
              Initiate Alliances
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TechnologyContent;