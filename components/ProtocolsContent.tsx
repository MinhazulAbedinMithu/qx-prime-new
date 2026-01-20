import React from 'react';
import { 
  Shield, 
  Cpu, 
  Zap, 
  Database, 
  Network, 
  Lock, 
  Activity, 
  ChevronRight,
  Terminal,
  Code,
  Globe,
  ArrowUpRight
} from 'lucide-react';

interface ProtocolsContentProps {
  onNavigate: (page: 'privacy' | 'terms' | 'about' | 'manifesto' | 'capabilities' | 'technology' | 'protocols' | 'join-forces') => void;
}

const ProtocolCard: React.FC<{
  code: string;
  name: string;
  desc: string;
  specs: { label: string; value: string }[];
  icon: React.ReactNode;
  color: string;
}> = ({ code, name, desc, specs, icon, color }) => (
  <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 rounded-2xl p-8 group hover:border-blue-500/30 transition-all duration-500 shadow-lg dark:shadow-none">
    <div className="flex justify-between items-start mb-8">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${color} bg-opacity-10 dark:bg-opacity-20 transform group-hover:scale-110 transition-transform duration-500`}>
        {icon}
      </div>
      <span className="font-mono text-[10px] font-bold text-gray-400 dark:text-gray-600 tracking-widest uppercase border border-gray-100 dark:border-white/5 px-2 py-1 rounded">
        {code}
      </span>
    </div>
    
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">{name}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 font-light">
      {desc}
    </p>
    
    <div className="space-y-3 pt-6 border-t border-gray-100 dark:border-white/5">
      {specs.map((spec, i) => (
        <div key={i} className="flex justify-between items-center text-[10px] font-mono">
          <span className="text-gray-400 uppercase tracking-wider">{spec.label}</span>
          <span className="text-gray-900 dark:text-gray-200 font-bold">{spec.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const ProtocolsContent: React.FC<ProtocolsContentProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-gray-50 dark:bg-[#0a0a0a] min-h-screen pt-44 pb-24 px-6 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-3 text-[10px] font-mono font-bold tracking-[0.3em] text-gray-500 uppercase mb-12">
           <button onClick={() => onNavigate('about')} className="hover:text-blue-600 dark:hover:text-white transition-colors">HOME</button>
           <ChevronRight className="w-3 h-3" />
           <button onClick={() => onNavigate('technology')} className="hover:text-blue-600 dark:hover:text-white transition-colors">TECHNOLOGY</button>
           <ChevronRight className="w-3 h-3" />
           <span className="text-blue-600 dark:text-blue-400">PROTOCOLS</span>
        </nav>

        {/* Page Header */}
        <div className="mb-24 space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-500/20 text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            <Code className="w-3 h-3" /> Technical Infrastructure Standards
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tighter leading-none">
            QX <span className="font-serif italic text-blue-600 dark:text-blue-500">Protocols.</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            Deterministic logic rails for institutional capital. Our protocols ensure absolute performance consistency across global execution nodes.
          </p>
        </div>

        {/* Protocols Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <ProtocolCard 
            code="QX-EP-01"
            name="Execution Protocol"
            desc="Ultra-low latency bridging logic that manages order state and venue acknowledgments with nanosecond resolution."
            color="text-blue-600"
            icon={<Zap className="w-7 h-7" />}
            specs={[
              { label: "Internal Latency", value: "< 24μs" },
              { label: "Acknowledgment Speed", value: "Sub-ms" },
              { label: "Redundancy Level", value: "Triple-Node" }
            ]}
          />
          
          <ProtocolCard 
            code="QX-RP-04"
            name="Risk Protocol"
            desc="Zero-trust validation layer that scrubs every incoming message against 120+ behavioral and financial risk vectors."
            color="text-red-600"
            icon={<Shield className="w-7 h-7" />}
            specs={[
              { label: "Validation Time", value: "40μs" },
              { label: "Vector Count", value: "128 Active" },
              { label: "Auto-Containment", value: "Enabled" }
            ]}
          />

          <ProtocolCard 
            code="QX-DP-02"
            name="Data Protocol"
            desc="Institutional-grade market data streaming featuring adaptive compression and jitter-buffer optimization."
            color="text-emerald-600"
            icon={<Activity className="w-7 h-7" />}
            specs={[
              { label: "Message Throughput", value: "5M/sec" },
              { label: "Update Frequency", value: "Real-Time" },
              { label: "Feed Normalization", value: "Proprietary" }
            ]}
          />

          <ProtocolCard 
            code="QX-CP-07"
            name="Connectivity Protocol"
            desc="Multi-region fiber bridging across Equinix NY4, LD4, TY3, and SG1 with automated failover routing."
            color="text-indigo-600"
            icon={<Globe className="w-7 h-7" />}
            specs={[
              { label: "Data Centers", value: "Tier-1 Tier-4" },
              { label: "Hop Count", value: "Optimized" },
              { label: "Cross-Connects", value: "Direct Fiber" }
            ]}
          />

          <ProtocolCard 
            code="QX-AP-03"
            name="Aggregation Protocol"
            desc="Synchronized book synthesis that aligns depth-of-market from over 40 liquidity sources in micro-increments."
            color="text-orange-600"
            icon={<Database className="w-7 h-7" />}
            specs={[
              { label: "Source Cap", value: "Unlimited" },
              { label: "Depth Layers", value: "20 Levels" },
              { label: "Sync Tolerance", value: "±5μs" }
            ]}
          />

          <ProtocolCard 
            code="QX-LP-09"
            name="Log Protocol"
            desc="Immutable event logging using hash-chained telemetry to provide absolute auditability for compliance desks."
            color="text-purple-600"
            icon={<Terminal className="w-7 h-7" />}
            specs={[
              { label: "Chain Validation", value: "Live" },
              { label: "Retention Policy", value: "7 Years" },
              { label: "Encryption", value: "AES-256" }
            ]}
          />
        </div>

        {/* Technical Showcase */}
        <div className="bg-[#050505] rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/5">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">System Reliability <br/>Standards</h2>
                    <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                        Our protocols are not just code; they are mathematical guarantees. We maintain 99.999% uptime through a distributed mesh architecture that operates independent of centralized point failure.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { label: "Uptime SLA", value: "99.999%" },
                            { label: "Mean Latency", value: "4.2ms" },
                            { label: "Daily Volume", value: "$4.2B+" },
                            { label: "Compliance", value: "MiFID II" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 font-mono text-xs text-blue-400 space-y-4 overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-4">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                        <span className="text-white/40 ml-2">protocol_handshake.sh</span>
                    </div>
                    <div className="space-y-1">
                        <p>{'>'} INITIALIZING QX-CORE-MESH...</p>
                        <p className="text-green-400">{'>'} [OK] NODES DISCOVERED: NY4, LD4, TY3, SG1</p>
                        <p>{'>'} ANALYZING PROPAGATION DELAY...</p>
                        <p className="text-white/80">{'>'} NY4 - LD4: 64ms</p>
                        <p className="text-white/80">{'>'} LD4 - TY3: 210ms</p>
                        <p className="text-blue-300">{'>'} APPLYING TEMPORAL BUFFER OPTIMIZATION...</p>
                        <p className="text-green-400">{'>'} [OK] PROTOCOL SYNC COMPLETE</p>
                        <p className="animate-pulse">{'>'} MONITORING FLOW INTEGRITY_</p>
                    </div>
                </div>
            </div>
        </div>

        {/* --- Removed CTA per request --- */}

      </div>
    </div>
  );
};

export default ProtocolsContent;