
import React from 'react';
import { motion } from 'framer-motion';

interface PhoneMockupProps {
  imageSrc: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ imageSrc }) => {
  return (
    <div className="relative mx-auto w-[300px] h-[600px] sm:w-[320px] sm:h-[650px] lg:w-[350px] lg:h-[700px] perspective-1000">
      <motion.div
        className="relative w-full h-full bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden"
        style={{
          boxShadow: '0 25px 50px -12px rgba(11, 218, 81, 0.25)',
          willChange: 'transform', // HINT: Optimize for GPU
          backfaceVisibility: 'hidden' // HINT: Optimize 3D rendering
        }}
        animate={{ 
          rotateY: [-5, 5, -5],
          translateY: [-10, 10, -10]
        }}
        transition={{
          rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          translateY: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-2xl z-20 flex justify-center items-center pointer-events-none">
            <div className="w-16 h-4 bg-gray-900 rounded-full"></div>
        </div>

        {/* Screen Content */}
        <div className="relative w-full h-full bg-gray-900 z-10 overflow-hidden flex items-center justify-center">
             {/* Status Bar Mock */}
             <div className="absolute top-0 left-0 right-0 h-8 w-full bg-black/20 z-20 flex justify-between items-center px-6 pt-1 pointer-events-none">
                 <span className="text-xs text-white font-bold">9:41</span>
                 <div className="flex gap-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-3 h-2 bg-white rounded-sm"></div>
                 </div>
             </div>
             
            <img 
              src={imageSrc} 
              alt="App Screenshot" 
              className="w-full h-full object-contain"
              loading="eager"
            />
            
            {/* Glossy Overlay Reflection */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-30"></div>
            
            {/* Bottom Bar Mock */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full z-20 pointer-events-none"></div>
        </div>
      </motion.div>
      
      {/* Decorative Elements behind phone */}
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-brand/20 blur-[100px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default PhoneMockup;
