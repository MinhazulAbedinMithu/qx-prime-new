import React from 'react';

interface FooterProps {
  onNavigate: (page: 'privacy' | 'terms' | 'about' | 'manifesto' | 'capabilities' | 'about-us' | 'fix-api') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full mt-16 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
        <div className="font-medium">
          © 2026 QXPRIME. All rights reserved.
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 font-medium">
          <button onClick={() => onNavigate('privacy')} className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
          <button onClick={() => onNavigate('terms')} className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">Terms of Service</button>
          <button onClick={() => onNavigate('fix-api')} className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">FIX API</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;