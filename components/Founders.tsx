import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../constants';

const Founders: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-brand-border">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">The People Behind PitchLink</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Founders</h3>
        </motion.div>

        <div className="flex flex-col gap-16">
          
          {/* Founder 1: SadeeqAhli */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-8 items-stretch"
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/3 relative rounded-2xl overflow-hidden border border-[#222] shadow-[0_0_40px_rgba(0,0,0,0.5)] aspect-[4/5] group flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none"></div>
              <img 
                src={ASSETS.SADEEQ_IMG} 
                alt="Abubakar Hamisu Nasir Ahli (SadeeqAhli) - Co-Founder & Co-CEO" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Bio Side */}
            <div className="w-full lg:w-2/3 bg-[#0A0A0A] p-8 lg:p-12 rounded-2xl border border-[#1A1A1A] hover:border-brand/30 transition-colors flex flex-col justify-center">
              <div className="mb-8">
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-3">Abubakar Hamisu Nasir Ahli</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-brand font-semibold text-lg">Co-Founder & Co-CEO, PitchLink</span>
                  <span className="text-gray-500 text-sm hidden sm:inline">|</span>
                  <span className="text-gray-400 text-sm">Known publicly as: <strong className="text-gray-300">SadeeqAhli</strong></span>
                </div>
              </div>
              <div className="space-y-5 text-gray-400 leading-relaxed font-light text-lg">
                <p>
                  Abubakar Hamisu Nasir Ahli, widely known as SadeeqAhli, is a Nigerian entrepreneur, technology builder, and systems-oriented founder focused on creating scalable digital platforms that solve real-world problems.
                </p>
                <p>
                  He is the Co-Founder and Co-CEO of PitchLink, a sports technology company building digital infrastructure for football and grassroots sports. Through PitchLink, he is helping modernize how players discover, access, and interact with football facilities and communities.
                </p>
                <p>
                  SadeeqAhli is focused on building technology-driven businesses with long-term ambitions across Africa and beyond. His interests include technology, sports ecosystems, infrastructure, industrial systems, and scalable platform businesses.
                </p>
                <p>
                  As Co-CEO, he is focused on product vision, technology, business strategy, growth, and the long-term direction of PitchLink.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Founder 2: Aiman Samir */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col lg:flex-row-reverse gap-8 items-stretch"
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/3 relative rounded-2xl overflow-hidden border border-[#222] shadow-[0_0_40px_rgba(0,0,0,0.5)] aspect-[4/5] group flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 pointer-events-none"></div>
              <img 
                src={ASSETS.AIMAN_IMG} 
                alt="Aiman Samir - Co-Founder & Co-CEO" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Bio Side */}
            <div className="w-full lg:w-2/3 bg-[#0A0A0A] p-8 lg:p-12 rounded-2xl border border-[#1A1A1A] hover:border-brand/30 transition-colors flex flex-col justify-center">
              <div className="mb-8">
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-3">Aiman Samir</h4>
                <span className="text-brand font-semibold text-lg">Co-Founder & Co-CEO, PitchLink</span>
              </div>
              <div className="space-y-5 text-gray-400 leading-relaxed font-light text-lg">
                <p>
                  Aiman Samir is the Co-Founder and Co-CEO of PitchLink, working alongside Abubakar Hamisu Nasir Ahli to build the future of grassroots football infrastructure.
                </p>
                <p>
                  As a co-founder, Aiman contributes to the strategic development, execution, and growth of PitchLink, helping transform the platform from a football pitch-booking solution into a broader sports ecosystem.
                </p>
                <p>
                  Together, Abubakar Hamisu Nasir Ahli and Aiman Samir lead PitchLink with a shared vision of building technology that makes football more accessible, connected, and organized.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Structured Data (JSON-LD) for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PitchLink",
            "url": "https://pitchlink.app",
            "founder": [
              {
                "@type": "Person",
                "name": "Abubakar Hamisu Nasir Ahli",
                "alternateName": "SadeeqAhli",
                "jobTitle": "Co-Founder & Co-CEO"
              },
              {
                "@type": "Person",
                "name": "Aiman Samir",
                "jobTitle": "Co-Founder & Co-CEO"
              }
            ]
          })
        }}
      />
    </section>
  );
};

export default Founders;
