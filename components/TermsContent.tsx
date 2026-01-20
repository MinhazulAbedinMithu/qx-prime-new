import React from 'react';
import { FileText, Shield, AlertTriangle, Scale, Lock, Server, Globe } from 'lucide-react';

const TermsContent: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto pt-32 sm:pt-40 pb-20 px-4 sm:px-6 relative z-10">
      
      {/* Subtle background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-blue-600/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

      <div className="bg-white/80 dark:bg-card/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-12 shadow-xl ring-1 ring-black/5 dark:ring-white/5 transition-colors duration-300">
        <header className="mb-10 border-b border-gray-200 dark:border-white/5 pb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">Terms & Conditions</h1>
          <p className="text-xs font-mono text-blue-600 dark:text-blue-400/80 mb-0 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Effective Date: 14 August 2025
          </p>
        </header>

        <div className="space-y-10 text-gray-600 dark:text-gray-400 text-base leading-7 transition-colors duration-300">
          
          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="text-blue-500 font-mono text-sm opacity-60">01.</span> Introduction
            </h2>
            <p className="mb-4">
              These Terms & Conditions govern access to and use of <span className="text-gray-900 dark:text-gray-200 font-medium">QXPRIME</span>, operated by <span className="text-gray-900 dark:text-gray-200 font-medium">QuantXpert Tech FZE LLC</span> (“QXPRIME”, “we”, “our”, “us”).
            </p>
            <p className="mb-4">
              QXPRIME is an AI-native quantitative execution, risk, and analytics platform designed exclusively for professional, institutional, and brokerage users.
            </p>
            <p>
              By accessing or using QXPRIME, you agree to these Terms and our Privacy Policy. If you do not agree, you must discontinue use immediately.
            </p>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">02.</span> Services
            </h2>
            <p className="mb-3">
              QXPRIME provides access to institutional-grade systems including, but not limited to:
            </p>
            <ul className="space-y-2 pl-2 border-l-2 border-gray-200 dark:border-white/5 ml-1">
               {['Execution intelligence & analytics dashboards', 'Risk orchestration and monitoring tools', 'Trade behavior analysis and telemetry', 'Infrastructure-level performance and governance modules'].map((item, i) => (
                   <li key={i} className="pl-4 text-sm">{item}</li>
               ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">
                Services are provided on a subscription or contractual basis, as agreed at onboarding.
            </p>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">03.</span> Subscriptions & Billing
            </h2>
            <ul className="space-y-2 pl-2 mb-6">
              {[
                "Access is granted based on the selected subscription or enterprise agreement",
                "Fees, billing cycles, and payment terms are defined at purchase or contract execution",
                "Payments are processed via authorized third-party payment providers",
                "Failure to complete payment may result in suspension or termination of access"
              ].map((item, idx) => (
                 <li key={idx} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">04.</span> No Investment or Trading Advice
            </h2>
            <div className="bg-blue-50 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-500/10 rounded-xl p-5">
                 <h3 className="text-blue-700 dark:text-blue-200 font-medium mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Disclaimer
                 </h3>
                 <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    QXPRIME does not provide investment advice, trading recommendations, or discretionary trading services.
                 </p>
                 <p className="text-sm text-gray-700 dark:text-gray-300">
                    All analytics, signals, insights, or outputs are informational and technical in nature. You remain solely responsible for trading decisions, risk management, and regulatory compliance.
                 </p>
             </div>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">05.</span> Acceptable Use
            </h2>
            <p className="mb-3">You agree not to:</p>
            <div className="grid gap-3 sm:grid-cols-1">
                 {[
                    "Use QXPRIME in violation of any applicable law or regulation",
                    "Attempt to reverse-engineer, manipulate, or interfere with platform systems",
                    "Share, resell, or sublicense access without written authorization",
                    "Use the platform to develop or operate competing services",
                    "Upload or generate unlawful, abusive, or harmful content"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-white/[0.02] px-4 py-3 rounded-lg border border-gray-100 dark:border-transparent">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></div> {item}
                    </div>
                ))}
            </div>
            <p className="mt-4 text-sm text-red-500/80">
                 Violations may result in immediate suspension or termination without refund.
            </p>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">06.</span> Intellectual Property
            </h2>
            <p className="mb-4">
              All platform software, systems, interfaces, logos, and proprietary methodologies are the intellectual property of <span className="font-medium text-gray-900 dark:text-white">QuantXpert Tech FZE LLC</span>.
            </p>
            <p>
                No rights are granted except those expressly required to access and use the platform during an active subscription or agreement.
            </p>
          </section>

          <section>
            <h2 className="text-gray-900 dark:text-white font-semibold text-lg mb-4 flex items-center gap-2">
               <span className="text-blue-500 font-mono text-sm opacity-60">07.</span> Data & Outputs
            </h2>
            <p className="mb-3">
              You retain ownership of data you lawfully input into QXPRIME.
            </p>
            <div className="pl-4 border-l-2 border-blue-500/30">
                <p className="mb-3 text-sm">
                    By using the platform, you grant QXPRIME a limited, non-exclusive license to process such data solely for operating, securing, and improving the services.
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                    QXPRIME does not claim ownership over client strategies, trade data, or outputs.
                </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsContent;