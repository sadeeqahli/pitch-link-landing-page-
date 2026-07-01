import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ASSETS } from '../constants';

interface NavbarProps {
  isOwnerView: boolean;
  onToggleView: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOwnerView, onToggleView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeScrolled = scrollY > 20;
      
      setIsScrolled(prev => {
        if (prev !== shouldBeScrolled) {
            return shouldBeScrolled;
        }
        return prev;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-brand-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer" 
            onClick={scrollToTop}
          >
            <div className="w-10 h-10 relative">
               <img 
                 src={ASSETS.LOGO} 
                 alt="PitchLink Logo" 
                 width="40"
                 height="40"
                 className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(11,218,81,0.3)]" 
               />
            </div>
            <span className="font-semibold text-xl tracking-tight text-white">
              Pitch<span className="text-brand">Link</span>
              {isOwnerView && <span className="text-[10px] font-medium text-gray-400 ml-2 border border-brand-border px-2 py-0.5 rounded-full uppercase">Partner</span>}
            </span>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, 'features')}
              className="text-gray-300 hover:text-brand transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a 
              href="#showcase" 
              onClick={(e) => handleNavClick(e, 'showcase')}
              className="text-gray-300 hover:text-brand transition-colors text-sm font-medium"
            >
              App View
            </a>
            <a 
              href="#reviews" 
              onClick={(e) => handleNavClick(e, 'reviews')}
              className="text-gray-300 hover:text-brand transition-colors text-sm font-medium"
            >
              Reviews
            </a>
            <div className="relative group">
              <button className="text-gray-300 hover:text-brand transition-colors text-sm font-medium flex items-center gap-1">
                Legal
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-brand-surface border border-brand-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="/privacy-policy.html" className="block px-4 py-2 text-sm text-gray-300 hover:text-brand hover:bg-[#111] rounded-t-lg transition-colors">Players Privacy</a>
                <a href="/privacy-policy-host.html" className="block px-4 py-2 text-sm text-gray-300 hover:text-brand hover:bg-[#111] rounded-b-lg transition-colors">Host Privacy</a>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onToggleView();
                scrollToTop();
              }}
              className="bg-brand text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-[0_5px_20px_-5px_rgba(11,218,81,0.5)] transition-all border border-transparent"
            >
              {isOwnerView ? "For Players" : "Pitch Owners"}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 hover:text-brand transition-colors">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-surface border-b border-brand-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, 'features')} 
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand transition-colors"
              >
                Features
              </a>
              <a 
                href="#showcase" 
                onClick={(e) => handleNavClick(e, 'showcase')} 
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand transition-colors"
              >
                App View
              </a>
              <a 
                href="#reviews" 
                onClick={(e) => handleNavClick(e, 'reviews')} 
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand transition-colors"
              >
                Reviews
              </a>
              <div className="pt-2 border-t border-brand-border mt-2">
                <p className="px-3 py-1 text-xs text-gray-500 font-semibold tracking-wider">LEGAL</p>
                <a 
                  href="/privacy-policy" 
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand transition-colors"
                >
                  Players Privacy
                </a>
                <a 
                  href="/privacy-policy-host" 
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand transition-colors"
                >
                  Host Privacy
                </a>
              </div>
              <button 
                onClick={() => {
                  onToggleView();
                  setIsMobileMenuOpen(false);
                  scrollToTop();
                }}
                className="w-full mt-4 bg-brand text-black px-4 py-3 rounded-xl font-semibold hover:bg-brand-dark transition-colors"
              >
                {isOwnerView ? "Switch to Player View" : "Pitch Owners"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
