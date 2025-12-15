import React from 'react';
import { ASSETS } from '../constants';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

interface FooterProps {
  onOwnerClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOwnerClick }) => {
  return (
    <footer className="bg-brand-surface border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <img src={ASSETS.LOGO} alt="Logo" className="w-8 h-8 object-contain" />
                <span className="font-bold text-xl text-white">Pitch<span className="text-brand">Link</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Connecting football players with the best pitches. Book, play, and track your stats all in one place.
            </p>
            <div className="flex gap-4">
                <a href="https://www.instagram.com/pitchlink_app" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-black transition-all">
                    <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-black transition-all">
                    <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-black transition-all">
                    <Facebook size={18} />
                </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-brand transition-colors">Features</a></li>
                {/* Pricing removed as requested */}
                <li><a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="hover:text-brand transition-colors">Download App</a></li>
                <li>
                  <button onClick={(e) => { e.preventDefault(); onOwnerClick(); window.scrollTo({top:0, behavior:'smooth'}); }} className="hover:text-brand transition-colors text-left">
                    For Venue Owners
                  </button>
                </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-brand transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                    <Mail size={16} className="text-brand" />
                    <span>support@pitchlink.com</span>
                </div>
                <p>Available Worldwide</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} PitchLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;