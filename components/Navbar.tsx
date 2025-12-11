
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manual smooth scroll handler
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-brand-surface' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer" 
            onClick={scrollToTop}
          >
            <div className="w-12 h-12 relative">
               <img 
                 src={ASSETS.LOGO} 
                 alt="PitchLink Logo" 
                 className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(11,218,81,0.6)]" 
               />
            </div>
            <span className="font-bold text-2xl tracking-tighter text-white">
              Pitch<span className="text-brand">Link</span>
              {isOwnerView && <span className="text-xs font-normal text-gray-400 ml-2 border border-gray-700 px-2 py-0.5 rounded-full">PARTNER</span>}
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
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onToggleView();
                scrollToTop();
              }}
              className="bg-brand text-brand-black px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(11,218,81,0.4)] transition-shadow"
            >
              {isOwnerView ? "For Players" : "Pitch Owners"}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
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
            className="md:hidden bg-brand-surface border-b border-gray-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, 'features')} 
                className="block px-3 py-2 text-base font-medium text-white hover:text-brand"
              >
                Features
              </a>
              <a 
                href="#showcase" 
                onClick={(e) => handleNavClick(e, 'showcase')} 
                className="block px-3 py-2 text-base font-medium text-white hover:text-brand"
              >
                App View
              </a>
              <a 
                href="#reviews" 
                onClick={(e) => handleNavClick(e, 'reviews')} 
                className="block px-3 py-2 text-base font-medium text-white hover:text-brand"
              >
                Reviews
              </a>
              <button 
                onClick={() => {
                  onToggleView();
                  setIsMobileMenuOpen(false);
                  scrollToTop();
                }}
                className="w-full mt-4 bg-brand text-brand-black px-4 py-3 rounded-xl font-bold"
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
