import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../constants';
import { CheckCircle2, Star } from 'lucide-react';

interface VisualShowcaseProps {
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  description: string;
  listItems: string[];
}

const VisualShowcase: React.FC<VisualShowcaseProps> = ({
  titleLine1,
  titleLine2,
  titleHighlight,
  description,
  listItems
}) => {
  return (
    <section id="showcase" className="py-24 bg-[#050505] relative border-t border-brand-border scroll-mt-24 overflow-hidden">
      {/* Background glow with slow pulse */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[150px] pointer-events-none animate-glow-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - Advertising Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden border border-brand-border shadow-[0_20px_50px_-10px_rgba(11,218,81,0.1)] bg-brand-surface flex items-center justify-center group">
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
             
             {/* The Image - Fitted to container - LAZY LOADED */}
             <img 
               src={ASSETS.AD_IMG} 
               alt="Action shot" 
               className="w-full h-full object-cover z-0 transform group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90"
               loading="lazy"
               width="800"
               height="500"
             />
             
             {/* Floating Info Card */}
             <div className="absolute bottom-6 left-6 right-6 z-20 bg-brand-surface/90 backdrop-blur-md p-5 rounded-2xl border border-brand-border shadow-xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-black p-2.5 rounded-xl text-brand border border-brand-border">
                            <Star size={20} fill="currentColor" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider mb-0.5">Top Rated</p>
                            <p className="text-white font-semibold text-lg leading-none">Greenfield Stadium</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-white text-lg font-semibold font-mono leading-none">₦12,500</p>
                        <p className="text-gray-400 text-xs mt-1">per hour</p>
                    </div>
                </div>
             </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
              {titleLine1} <br />
              {titleLine2} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal-400">{titleHighlight}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
              {description}
            </p>

            <ul className="space-y-4 mb-10">
              {listItems.map((item) => (
                <li key={item} className="flex items-center gap-4 text-gray-200 font-medium text-base">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                        <CheckCircle2 size={16} strokeWidth={2.5} />
                    </div>
                    {item}
                </li>
              ))}
            </ul>

            <motion.button
               whileHover={{ scale: 1.02, y: -2 }}
               whileTap={{ scale: 0.98 }}
               className="bg-brand text-black px-8 py-3.5 rounded-xl font-semibold hover:shadow-[0_10px_30px_-10px_rgba(11,218,81,0.5)] transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisualShowcase;
