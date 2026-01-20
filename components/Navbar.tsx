import React, { useState, useRef, useEffect } from 'react';
import { Monitor, Menu, X, Sun, Moon, Laptop, Waypoints } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

interface NavbarProps {
  onNavigate: (page: 'privacy' | 'terms' | 'about' | 'manifesto' | 'capabilities' | 'technology' | 'protocols' | 'join-forces' | 'qx-bridge' | 'about-us' | 'fix-api') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('system');
  const themeRef = useRef<HTMLDivElement>(null);

  // Theme Application Logic
  useEffect(() => {
    const root = window.document.documentElement;
    
    const applyTheme = () => {
      const isDark = 
        theme === 'dark' || 
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme();
      
      if (mediaQuery.addEventListener) {
          mediaQuery.addEventListener('change', handleChange);
          return () => mediaQuery.removeEventListener('change', handleChange);
      } else {
          mediaQuery.addListener(handleChange);
          return () => mediaQuery.removeListener(handleChange);
      }
    }
  }, [theme]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsThemeOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo Area */}
        <div 
          onClick={() => onNavigate('about')}
          className="flex items-center gap-4 cursor-pointer group select-none"
        >
          <div className="relative w-8 h-8 flex flex-wrap gap-1 content-center">
            <div className="w-3.5 h-3.5 rounded-[2px] bg-gray-900 dark:bg-white transition-colors"></div>
            <div className="w-3.5 h-3.5 rounded-[2px] bg-gradient-to-tr from-blue-600 to-blue-400 group-hover:scale-90 transition-transform duration-300"></div>
            <div className="w-3.5 h-3.5"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-purple-500/20 group-hover:rotate-90 transition-transform duration-500"></div>
            <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gray-200 dark:bg-white/10 -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <span className="font-mono text-2xl tracking-tight flex items-baseline">
            <span className="font-bold text-gray-900 dark:text-white">qxprime</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold">.ai</span>
          </span>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-8">
          <button 
             onClick={() => onNavigate('qx-bridge')}
             className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            <Waypoints className="w-4 h-4" /> QXBridge
          </button>
          <button 
             onClick={() => onNavigate('technology')}
             className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Technology
          </button>
          <button 
             onClick={() => onNavigate('capabilities')}
             className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Capabilities
          </button>
           <button 
             onClick={() => onNavigate('manifesto')}
             className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Manifesto
          </button>
          <button 
             onClick={() => onNavigate('fix-api')}
             className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            FIX API
          </button>
          <button 
             onClick={() => onNavigate('about-us')}
             className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            About Us
          </button>
          <button 
             onClick={() => onNavigate('join-forces')}
             className="text-sm font-medium text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 px-5 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 dark:hover:border-white/40 transition-all">
            Initiate Alliances
          </button>
          
          <div className="relative" ref={themeRef}>
            <button 
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className={`transition-colors p-1 ${isThemeOpen ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
            >
              <Monitor className="w-5 h-5" />
            </button>

            {isThemeOpen && (
              <div className="absolute top-full right-0 mt-3 w-40 bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden py-1.5 animate-fade-in ring-1 ring-black/5 dark:ring-black/50">
                <button 
                  onClick={() => handleThemeChange('light')}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Sun className="w-4 h-4" />
                  <span>Light</span>
                  {theme === 'light' && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-white ml-auto"></div>}
                </button>
                <button 
                  onClick={() => handleThemeChange('dark')}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Moon className="w-4 h-4" />
                  <span>Dark</span>
                  {theme === 'dark' && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-white ml-auto"></div>}
                </button>
                <button 
                  onClick={() => handleThemeChange('system')}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Laptop className="w-4 h-4" />
                  <span>System</span>
                  {theme === 'system' && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-white ml-auto"></div>}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-white/10 animate-fade-in shadow-2xl">
          <div className="flex flex-col p-6 space-y-4">
             <button 
               onClick={() => { onNavigate('qx-bridge'); setIsMenuOpen(false); }}
               className="text-left text-base font-bold text-blue-600 dark:text-blue-400 px-2 py-2"
            >
              QXBridge
            </button>
             <button 
               onClick={() => { onNavigate('technology'); setIsMenuOpen(false); }}
               className="text-left text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2"
            >
              Technology
            </button>
             <button 
               onClick={() => { onNavigate('capabilities'); setIsMenuOpen(false); }}
               className="text-left text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2"
            >
              Capabilities
            </button>
            <button 
               onClick={() => { onNavigate('manifesto'); setIsMenuOpen(false); }}
               className="text-left text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2"
            >
              Manifesto
            </button>
            <button 
               onClick={() => { onNavigate('fix-api'); setIsMenuOpen(false); }}
               className="text-left text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2"
            >
              FIX API
            </button>
            <button 
               onClick={() => { onNavigate('about-us'); setIsMenuOpen(false); }}
               className="text-left text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2"
            >
              About Us
            </button>
            <button 
               onClick={() => { onNavigate('join-forces'); setIsMenuOpen(false); }}
               className="text-left text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2"
            >
              Initiate Alliances
            </button>
            <div className="h-px bg-gray-200 dark:bg-white/10 my-2"></div>
            
            <div className="flex flex-col space-y-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 pb-2">Theme</span>
              <button 
                onClick={() => handleThemeChange('light')}
                className={`flex items-center gap-3 px-2 py-3 text-sm rounded-lg ${theme === 'light' ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}
              >
                <Sun className="w-5 h-5" /> Light
              </button>
              <button 
                onClick={() => handleThemeChange('dark')}
                className={`flex items-center gap-3 px-2 py-3 text-sm rounded-lg ${theme === 'dark' ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}
              >
                <Moon className="w-5 h-5" /> Dark
              </button>
              <button 
                onClick={() => handleThemeChange('system')}
                className={`flex items-center gap-3 px-2 py-3 text-sm rounded-lg ${theme === 'system' ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}
              >
                <Laptop className="w-5 h-5" /> System
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;