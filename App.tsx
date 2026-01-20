import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivacyContent from './components/PrivacyContent';
import TermsContent from './components/TermsContent';
import AboutContent from './components/AboutContent';
import ManifestoContent from './components/ManifestoContent';
import CapabilitiesContent from './components/CapabilitiesContent';
import TechnologyContent from './components/TechnologyContent';
import ProtocolsContent from './components/ProtocolsContent';
import JoinForcesContent from './components/JoinForcesContent';
import QXBridgeContent from './components/QXBridgeContent';
import AboutUsContent from './components/AboutUsContent';
import FixApiContent from './components/FixApiContent';

export type Page = 'privacy' | 'terms' | 'about' | 'manifesto' | 'capabilities' | 'technology' | 'protocols' | 'join-forces' | 'qx-bridge' | 'about-us' | 'fix-api';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('about');

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-white relative overflow-hidden transition-colors duration-300 bg-gray-50 dark:bg-[#0a0a0a]">
       {/* Ambient Background Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-300/10 dark:bg-blue-600/5 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-300/10 dark:bg-indigo-600/5 rounded-full blur-[128px]"></div>
      </div>

      <Navbar onNavigate={setCurrentPage} />
      <main className="flex-grow z-10">
        {currentPage === 'privacy' && <PrivacyContent />}
        {currentPage === 'terms' && <TermsContent />}
        {currentPage === 'about' && <AboutContent onNavigate={setCurrentPage} />}
        {currentPage === 'manifesto' && <ManifestoContent />}
        {currentPage === 'capabilities' && <CapabilitiesContent />}
        {currentPage === 'technology' && <TechnologyContent onNavigate={setCurrentPage} />}
        {currentPage === 'protocols' && <ProtocolsContent onNavigate={setCurrentPage} />}
        {currentPage === 'join-forces' && <JoinForcesContent onNavigate={setCurrentPage} />}
        {currentPage === 'qx-bridge' && <QXBridgeContent onNavigate={setCurrentPage} />}
        {currentPage === 'about-us' && <AboutUsContent onNavigate={setCurrentPage} />}
        {currentPage === 'fix-api' && <FixApiContent onNavigate={setCurrentPage} />}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;