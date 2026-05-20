import React from 'react';
import { motion } from 'framer-motion';

interface PhoneMockupProps {
  imageSrc: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ imageSrc }) => {
  return (
    <div className="relative mx-auto w-[280px] h-[580px] sm:w-[300px] sm:h-[620px] lg:w-[320px] lg:h-[660px]">
      <motion.div
        className="relative w-full h-full bg-[#111] rounded-[2.5rem] border-[6px] border-[#222] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#222] rounded-b-xl z-20 flex justify-center items-center pointer-events-none">
            <div className="w-12 h-3 bg-[#111] rounded-full"></div>
        </div>

        {/* Screen Content */}
        <div className="relative w-full h-full bg-[#0a0a0a] z-10 overflow-hidden flex items-center justify-center">
             {/* Status Bar Mock */}
             <div className="absolute top-0 left-0 right-0 h-8 w-full bg-black/40 z-20 flex justify-between items-center px-5 pt-1 pointer-events-none">
                 <span className="text-[10px] text-white font-medium">9:41</span>
                 <div className="flex gap-1">
                    <div className="w-3 h-1.5 bg-white rounded-[1px]"></div>
                    <div className="w-2.5 h-1.5 bg-white rounded-[1px]"></div>
                 </div>
             </div>
             
            <img 
              src={imageSrc} 
              alt="App Screenshot" 
              className="w-full h-full object-cover"
              loading="eager"
            />
            
            {/* Glossy Overlay Reflection (Subtle) */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-30"></div>
            
            {/* Bottom Bar Mock */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full z-20 pointer-events-none"></div>
        </div>
      </motion.div>
      
      {/* Decorative Gradient Background (Subtle) */}
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand/10 blur-[80px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default PhoneMockup;
