
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
    <section id="features" className="py-24 bg-brand-surface relative overflow-hidden scroll-mt-24">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            key={titleHighlight}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black text-white mb-4"
          >
            {titleNormal} <span className="text-brand">{titleHighlight}</span>
          </motion.h2>
          <motion.p 
            key={description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-brand-black/50 border border-gray-800 p-8 rounded-2xl hover:border-brand/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-brand-black text-brand transition-colors duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
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
