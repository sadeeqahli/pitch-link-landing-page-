
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
    <section id="showcase" className="py-24 bg-brand-black relative overflow-hidden scroll-mt-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-brand/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - Advertising Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden border border-gray-800 group shadow-2xl bg-gray-900 flex items-center justify-center"
          >
             {/* Overlay Gradient (Subtler now to not obscure image) */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none"></div>
             
             {/* The Image - Fitted to container - LAZY LOADED */}
             <img 
               src={ASSETS.AD_IMG} 
               alt="Action shot" 
               className="w-full h-full object-contain z-0 transform group-hover:scale-105 transition-transform duration-700"
               loading="lazy"
               width="800"
               height="500"
             />
             
             {/* Floating Info Card */}
             <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 z-20 bg-gray-900/80 backdrop-blur-xl p-4 rounded-xl border border-brand/20 shadow-lg"
             >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-brand/20 p-2 rounded-lg text-brand">
                            <Star size={20} fill="currentColor" />
                        </div>
                        <div>
                            <p className="text-brand text-xs font-bold uppercase tracking-wide">Top Rated</p>
                            <p className="text-white font-bold text-lg">Greenfield Stadium</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-white text-lg font-bold font-mono">₦12,500</p>
                        <p className="text-gray-400 text-xs">per hour</p>
                    </div>
                </div>
             </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            key={titleHighlight}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
              {titleLine1} <br />
              {titleLine2} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal-400">{titleHighlight}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {description}
            </p>

            <ul className="space-y-4 mb-10">
              {listItems.map((item, i) => (
                <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-3 text-white font-medium"
                >
                    <CheckCircle2 className="text-brand" size={20} />
                    {item}
                </motion.li>
              ))}
            </ul>

            <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-brand hover:text-white transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisualShowcase;
