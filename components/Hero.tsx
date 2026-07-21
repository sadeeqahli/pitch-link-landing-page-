import React from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';
import { ASSETS } from '../constants';

interface HeroProps {
  badgeText: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  appScreenshot?: string; // Kept for interface compatibility but not used
  appStoreLink: string;
  playStoreLink: string;
}

const Hero: React.FC<HeroProps> = ({ 
  badgeText, 
  titleLine1, 
  titleLine2, 
  subtitle,
  appStoreLink,
  playStoreLink
}) => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden flex items-center bg-[#050505]">
      {/* Background Image with Mature Overlay */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        <img 
          src={ASSETS.HERO_BG} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
          loading="eager"
          // @ts-ignore
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]"></div>
        
        {/* Subtle, Mature Moving Gradient */}
        <motion.div 
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand/10 blur-[150px] rounded-full pointer-events-none"
            animate={{ 
              x: [-50, 50, -50],
              y: [-20, 20, -20],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            key={titleLine1}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left pt-10 lg:pt-0"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111] border border-brand/30 text-brand text-xs font-semibold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(11,218,81,0.1)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_rgba(11,218,81,0.8)]"></span>
              {badgeText}
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              {titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-teal-400">
                {titleLine2}
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg sm:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              {/* Google Play Button */}
              <motion.a 
                href={playStoreLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 bg-brand text-black px-6 py-3.5 rounded-xl font-semibold text-lg transition-all min-w-[200px] justify-center hover:shadow-[0_10px_30px_-10px_rgba(11,218,81,0.5)]"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,13.1L17.58,15.88L15.39,13.7L17.58,11.5L20.3,10.9C20.7,11.3 20.7,12.7 20.3,13.1M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase font-medium text-black/70">Get it on</span>
                  <span className="text-sm font-bold">Google Play</span>
                </div>
              </motion.a>
              
              {/* Apple Store Button */}
              <motion.a
                 href={appStoreLink}
                 target="_blank"
                 rel="noreferrer"
                 whileHover={{ scale: 1.02, y: -2 }}
                 whileTap={{ scale: 0.98 }}
                 className="flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#0A0A0A] border border-[#222] hover:border-brand/50 transition-all min-w-[200px] justify-center"
              >
                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.61-.91 1.55.06 2.73.63 3.44 1.69-3.08 1.63-2.56 5.8 1.05 7.16-.62 1.55-1.46 3.09-2.5 4.81zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.84 1.51-2.91 1.46-.09-1.21.53-2.43 1.01-3.15z"/>
                 </svg>
                 <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase font-medium text-gray-400">Download on the</span>
                    <span className="text-sm font-bold">App Store</span>
                 </div>
              </motion.a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
               <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-[#050505] overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=11" alt="User" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#050505] overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=12" alt="User" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand border-2 border-[#050505] flex items-center justify-center text-black font-bold text-[10px]">+2k</div>
               </div>
               <p>Trusted by 2,000+ players</p>
            </div>
          </motion.div>

          {/* Visual - Video Player */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
             className="relative flex justify-center lg:justify-end mt-10 lg:mt-0 w-full"
          >
             <VideoPlayer videoSrc={ASSETS.PROMO_VIDEO} posterSrc={ASSETS.VIDEO_COVER} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
