import React from 'react';
import { motion } from 'framer-motion';
import { FeatureItem } from '../types';

interface FeaturesProps {
  features: FeatureItem[];
  titleHighlight: string;
  titleNormal: string;
  description: string;
}

const Features: React.FC<FeaturesProps> = ({ features, titleHighlight, titleNormal, description }) => {
  return (
    <section id="features" className="py-24 bg-[#050505] relative border-t border-brand-border scroll-mt-24 overflow-hidden">
      {/* Mature Animated Background Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none animate-float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            {titleNormal} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal-400">{titleHighlight}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -4 }}
              className="bg-brand-surface border border-brand-border p-8 rounded-2xl hover:border-brand/30 hover:shadow-[0_10px_30px_-15px_rgba(11,218,81,0.15)] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="relative z-10 w-12 h-12 bg-black border border-brand-border rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand/10 group-hover:border-brand/30 text-gray-300 group-hover:text-brand transition-colors duration-300 shadow-sm">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="relative z-10 text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="relative z-10 text-gray-400 leading-relaxed text-sm font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
