import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  videoSrc: string;
  posterSrc?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, posterSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-3xl p-[2px] overflow-hidden group">
      {/* Animated Gradient Border (Mature & Sleek) */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand/40 via-brand-surface to-brand/40 animate-[spin_4s_linear_infinite] opacity-50 blur-md group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative bg-[#050505] rounded-[22px] overflow-hidden shadow-[0_10px_40px_-10px_rgba(11,218,81,0.15)] group-hover:shadow-[0_10px_40px_-10px_rgba(11,218,81,0.25)] transition-shadow duration-500 border border-white/5 aspect-video flex items-center justify-center">
        
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          className="w-full h-full object-cover"
          loop
          playsInline
          muted={isMuted}
          onClick={togglePlay}
        />

        {/* Play/Pause Overlay */}
        <div 
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
          onClick={togglePlay}
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-20 h-20 rounded-full bg-brand/90 text-black flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(11,218,81,0.4)]"
          >
            {isPlaying ? <Pause size={32} className="ml-1" /> : <Play size={32} className="ml-2" />}
          </motion.div>
        </div>

        {/* Controls Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <button 
                onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand hover:text-black transition-colors pointer-events-auto"
            >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
        </div>

      </div>
    </div>
  );
};

export default VideoPlayer;
