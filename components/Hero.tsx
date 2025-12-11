
import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';
import { ASSETS } from '../constants';

interface HeroProps {
  badgeText: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText?: string;
  appScreenshot: string;
}

const Hero: React.FC<HeroProps> = ({ 
  badgeText, 
  titleLine1, 
  titleLine2, 
  subtitle,
  appScreenshot
}) => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-brand-black">
        <img 
          src={ASSETS.HERO_BG} 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
          loading="eager"
          // @ts-ignore - React 19 / Modern browsers support this
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/90 to-brand-black"></div>
        
        {/* Abstract Grid Lines - Optimized with will-change if it was animated, but static is fast */}
        <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
                backgroundImage: `linear-gradient(#0BDA51 1px, transparent 1px), linear-gradient(90deg, #0BDA51 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2)'
            }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            key={titleLine1} // Re-animate on content change
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/30 text-brand text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              {badgeText}
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6">
              {titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal-400">
                {titleLine2}
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              {/* Google Play Button */}
              <motion.a 
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-brand text-brand-black px-6 py-3.5 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(11,218,81,0.4)] hover:shadow-[0_0_30px_rgba(11,218,81,0.6)] transition-all min-w-[200px] justify-center group"
              >
                {/* Official Google Play Icon Shape */}
                <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,13.1L17.58,15.88L15.39,13.7L17.58,11.5L20.3,10.9C20.7,11.3 20.7,12.7 20.3,13.1M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase font-medium opacity-80">Get it on</span>
                  <span className="text-sm font-bold">Google Play</span>
                </div>
              </motion.a>
              
              {/* Apple Store Button */}
              <motion.a
                 href="https://www.apple.com/app-store/"
                 target="_blank"
                 rel="noreferrer"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-white border border-gray-600 bg-black hover:bg-white/10 transition-colors min-w-[200px] justify-center"
              >
                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.61-.91 1.55.06 2.73.63 3.44 1.69-3.08 1.63-2.56 5.8 1.05 7.16-.62 1.55-1.46 3.09-2.5 4.81zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.84 1.51-2.91 1.46-.09-1.21.53-2.43 1.01-3.15z"/>
                 </svg>
                 <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase font-medium">Download on the</span>
                    <span className="text-sm font-bold">App Store</span>
                 </div>
              </motion.a>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
               <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-black"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black"></div>
                  <div className="w-8 h-8 rounded-full bg-brand border-2 border-black flex items-center justify-center text-brand-black font-bold text-[10px]">+2k</div>
               </div>
               <p>Trusted by 2,000+ players</p>
            </div>
          </motion.div>

          {/* Visual - Phone Mockup */}
          <motion.div
             key={`mockup-${titleLine1}`}
             initial={{ opacity: 0, y: 50, rotate: 5 }}
             animate={{ opacity: 1, y: 0, rotate: 0 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="relative"
          >
             <PhoneMockup imageSrc={appScreenshot} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
