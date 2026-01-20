import React from 'react';
import { Mail, MapPin, ChevronRight, ShieldCheck, Lock, Server, Globe } from 'lucide-react';

const PrivacyContent: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto pt-32 sm:pt-40 pb-20 px-4 sm:px-6 relative z-10">
      
      {/* Subtle background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-blue-600/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

      <div className="bg-white/80 dark:bg-card/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-12 shadow-xl ring-1 ring-black/5 dark:ring-white/5 transition-colors duration-300">
        <header className="mb-10 border-b border-gray-200 dark:border-white/5 pb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">Privacy Policy</h1>
          <p className="text-xs font-mono text-blue-600 dark:text-blue-400/80 mb-0 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Effective Date: 14 August 2025
          </p>
        </header>

        <div className="space-y-10 text-gray-600 dark:text-gray-400 text-base leading-7 transition-colors duration-300">
          
          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="text-blue-500 font-mono text-sm opacity-60">01.</span> Scope & Purpose
            </h2>
            <p className="mb-4">
              This Privacy Policy sets out the principles and practices governing how <span className="text-gray-900 dark:text-gray-200 font-medium">QXPRIME</span>, operated by <span className="text-gray-900 dark:text-gray-200 font-medium">QuantXpert Tech FZE LLC</span> ("QXPRIME", "we", "our", "us"), collects, processes, stores, and safeguards information relating to users of its platforms, systems, and services.
            </p>
            <p className="mb-4">
              QXPRIME is an AI-native Quantitative Execution & Risk Intelligence Infrastructure built exclusively for professional, institutional, and brokerage environments.
            </p>
            <p className="mb-3">This policy applies to all access to:</p>
            <ul className="space-y-2 pl-2 border-l-2 border-gray-200 dark:border-white/5 ml-1">
               {['QXPRIME dashboards', 'Execution intelligence systems', 'Risk orchestration modules', 'Analytics, monitoring, and governance layers'].map((item, i) => (
                   <li key={i} className="pl-4 text-sm">{item}</li>
               ))}
            </ul>
            <p className="mt-4">
                By accessing or using QXPRIME, you acknowledge and agree to the practices described herein.
            </p>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">02.</span> Data Classification & Categories
            </h2>
            <p className="mb-6">
              QXPRIME adheres to a data-minimization and purpose-limitation framework. We collect only data strictly necessary for system integrity, security, and service delivery.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
                <div className="bg-gray-50 dark:bg-white/[0.02] p-4 rounded-xl border border-gray-200 dark:border-white/5">
                    <h3 className="text-gray-900 dark:text-white font-medium mb-2 text-sm">2.1 Identity & Account Data</h3>
                    <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-500">
                        <li>Name</li>
                        <li>Business email address</li>
                        <li>Organization / entity name</li>
                        <li>Role or professional designation</li>
                        <li>Secure authentication credentials</li>
                    </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/[0.02] p-4 rounded-xl border border-gray-200 dark:border-white/5">
                    <h3 className="text-gray-900 dark:text-white font-medium mb-2 text-sm">2.2 Commercial & Billing Data</h3>
                    <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-500">
                        <li>Subscription tier and billing status</li>
                        <li>Invoice references</li>
                        <li>Payment confirmation metadata</li>
                    </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/[0.02] p-4 rounded-xl border border-gray-200 dark:border-white/5">
                    <h3 className="text-gray-900 dark:text-white font-medium mb-2 text-sm">2.3 Platform & Operational Telemetry</h3>
                    <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-500">
                        <li>System interaction logs</li>
                        <li>Feature usage metrics</li>
                        <li>Configuration parameters</li>
                        <li>Strategy inputs and execution settings</li>
                        <li>Risk and performance analytics (non-client-identifiable)</li>
                    </ul>
                </div>
                <div className="bg-gray-50 dark:bg-white/[0.02] p-4 rounded-xl border border-gray-200 dark:border-white/5">
                    <h3 className="text-gray-900 dark:text-white font-medium mb-2 text-sm">2.4 Technical & Network Metadata</h3>
                    <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-500">
                        <li>IP address</li>
                        <li>Browser and device type</li>
                        <li>Operating system</li>
                        <li>Access timestamps and session identifiers</li>
                    </ul>
                </div>
            </div>
            
             <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-500/5 rounded-lg border border-blue-200 dark:border-blue-500/10 text-sm flex gap-3">
                <Lock className="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0" />
                <div>
                   <span className="text-blue-700 dark:text-blue-300 font-medium block mb-1">Important:</span>
                   <span className="text-gray-700 dark:text-gray-400">QXPRIME does not store raw card data, banking credentials, or payment instruments. All payments are processed by regulated third-party payment service providers.</span>
                </div>
            </div>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">03.</span> Lawful Basis & Purpose of Processing
            </h2>
            <p className="mb-3">We process personal and technical data on one or more of the following lawful bases:</p>
            <ul className="space-y-2 pl-2 mb-6">
              {[
                "Contractual necessity – to deliver platform services",
                "Legitimate interests – system security, performance optimization, fraud prevention",
                "Legal and regulatory obligations",
                "Explicit consent, where required by law"
              ].map((item, idx) => (
                 <li key={idx} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-gray-900 dark:text-white font-medium mb-3 text-sm uppercase tracking-wide opacity-80">Primary Processing Purposes</h3>
            <ul className="space-y-2 pl-2 mb-6">
                 {[
                "Secure authentication and access control",
                "Operation of execution intelligence and risk systems",
                "Subscription management and billing",
                "Platform stability, resilience, and performance monitoring",
                "Abuse detection, auditability, and compliance assurance"
              ].map((item, idx) => (
                 <li key={idx} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
             <p className="text-sm italic text-gray-500">
                 QXPRIME does not engage in behavioral advertising or unauthorized profiling.
            </p>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">04.</span> Data Sharing & Third-Party Access
            </h2>
            <p className="mb-3">QXPRIME applies a strict controlled-access model. Data may be disclosed only to:</p>
            <ul className="space-y-2 pl-2 mb-6">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-white/20 shrink-0"></div>
                <span>Regulated payment processors (for billing execution)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-white/20 shrink-0"></div>
                <span>Cloud and infrastructure providers under strict confidentiality agreements</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-white/20 shrink-0"></div>
                <span>Specialized AI or analytics service providers, solely to deliver explicitly requested functionality</span>
              </li>
            </ul>

             <div className="bg-red-50 dark:bg-red-500/5 border border-red-200 dark:border-red-500/10 rounded-xl p-5">
                 <h3 className="text-red-700 dark:text-red-200 font-medium mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Explicit Exclusions
                 </h3>
                 <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 pl-6 list-disc marker:text-red-400 dark:marker:text-red-500/50">
                     <li>We do not sell personal data</li>
                     <li>We do not monetize usage or trading intelligence</li>
                     <li>We do not access, copy, or interfere with live client trading accounts</li>
                 </ul>
             </div>
             <p className="mt-4 text-sm text-gray-500">
                 All third parties are contractually bound by data-protection and confidentiality obligations.
             </p>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">05.</span> Information Security & Controls
            </h2>
            <p className="mb-4">
              QXPRIME maintains a defense-in-depth security architecture, including:
            </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                    "Encryption in transit and at rest",
                    "Segregated environments for sensitive data",
                    "Role-based and least-privilege access controls",
                    "Continuous monitoring and audit logging",
                    "Secure authentication and session management"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-white/[0.02] px-3 py-2 rounded-lg border border-gray-100 dark:border-transparent">
                        <Server className="w-3.5 h-3.5 text-blue-500" /> {item}
                    </div>
                ))}
            </div>
            <p className="mt-4 text-sm">
                 While no system can guarantee absolute security, QXPRIME operates to institutional security standards consistent with financial-market infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">06.</span> Data Retention & Lifecycle Management
            </h2>
            <p className="mb-2">Data is retained only for as long as necessary to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-600 dark:text-gray-400 marker:text-gray-400 dark:marker:text-gray-600">
                <li>Fulfill contractual obligations</li>
                <li>Maintain operational integrity</li>
                <li>Meet regulatory, audit, or legal requirements</li>
            </ul>
            <p>
              Upon expiration of retention periods, data is securely deleted, anonymized, or irreversibly aggregated.
            </p>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">07.</span> Data Subject Rights
            </h2>
            <p className="mb-3">
              Subject to applicable laws, users may have the right to:
            </p>
            <ul className="space-y-2 pl-2 mb-4">
               {[
                   "Access personal data held by QXPRIME",
                   "Request rectification of inaccurate data",
                   "Request erasure, where legally permissible",
                   "Restrict or object to certain processing activities"
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-white/20 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 text-sm">
                <span>Requests can be submitted to:</span>
                <a href="mailto:support@qxprime.ai" className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">support@qxprime.ai</a>
            </div>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">08.</span> Jurisdiction-Specific Rights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-white/[0.02] p-5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-blue-500/20 transition-colors">
                <h3 className="text-gray-900 dark:text-white font-medium mb-3 flex items-center gap-2">
                   <Globe className="w-4 h-4 text-blue-500 dark:text-blue-400" /> EEA / GDPR
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                      "Right of access, rectification, and erasure",
                      "Right to data portability",
                      "Right to restrict or object to processing",
                      "Right to withdraw consent"
                  ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-white/[0.02] p-5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-blue-500/20 transition-colors">
                <h3 className="text-gray-900 dark:text-white font-medium mb-3 flex items-center gap-2">
                   <Globe className="w-4 h-4 text-purple-500 dark:text-purple-400" /> United States (CCPA / CPRA)
                </h3>
                <ul className="space-y-2 text-sm">
                   {[
                      "Right to know categories of data collected",
                      "Right to request deletion",
                      "Right to opt-out of data sale (not applicable — no data sales)"
                  ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm italic opacity-70">
              Requests should be sent to <span className="text-gray-900 dark:text-white">support@qxprime.ai</span> with Subject line: "Privacy Rights Request"
            </p>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">09.</span> Eligibility & Intended Users
            </h2>
            <p className="mb-3">
              QXPRIME is designed exclusively for professional and institutional users.
              It is not intended for retail consumers or individuals below the legally permitted digital consent age (13 in the US, 16 in the EU).
            </p>
            <p>
                By using QXPRIME, you confirm that you meet applicable eligibility requirements.
            </p>
          </section>
          
          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">10.</span> Policy Updates
            </h2>
            <p className="mb-3">
              This Privacy Policy may be updated periodically to reflect changes in law, regulation, or platform architecture.
              Material changes will be communicated through official channels.
            </p>
            <p>
                Continued use of QXPRIME constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">11.</span> Contact & Legal Notices
            </h2>
            <div className="bg-blue-50 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-500/10 rounded-xl p-6">
              <p className="mb-4 text-sm">For privacy, compliance, or legal inquiries:</p>
              <div className="space-y-3 text-sm">
                <a href="mailto:support@qxprime.ai" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-white/5 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">support@qxprime.ai</span>
                </a>
                <div className="flex items-start gap-3">
                   <div className="w-8 h-8 rounded-full bg-white dark:bg-white/5 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    QuantXpert Tech FZE LLC<br />
                    Dubai, United Arab Emirates
                  </span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;