'use client';

import React, { useState, useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Timeline Card component with theme support
interface TimelineCardProps {
  icon?: React.ReactNode; // Made optional so it's not required when materialIcon is provided
  materialIcon?: React.ElementType; // Removed explicit any type
  title: string;
  date: string;
  location: string;
  description: string;
  theme: 'light' | 'dark' | 'colorful';
}

export default function TimelineCard({ 
  icon, 
  materialIcon: MaterialIcon, 
  title, 
  date, 
  location, 
  description, 
  theme 
}: TimelineCardProps) {
  // State for particle effects and interaction
  const [isHovered, setIsHovered] = useState(false);
  const [particleCount] = useState(() => Math.floor(Math.random() * 3) + 3);
  const [particles, setParticles] = useState<{x: number, y: number, delay: number, size: number}[]>([]);
  
  // Generate particles on mount
  useEffect(() => {
    const newParticles = Array.from({length: particleCount}, () => ({
      x: Math.random() * 100,
      y: Math.random() * 20 + 80, // Position at bottom
      delay: Math.random() * 2,
      size: Math.random() * 4 + 2
    }));
    setParticles(newParticles);
  }, [particleCount]);
  
  // Get card styles based on theme with dimensional aesthetic
  const getCardStyles = () => {
    if (theme === 'colorful') {
      return 'bg-gradient-to-br from-[#120025] to-[#000428] border border-fuchsia-500/20 backdrop-blur-xl shadow-[0_12px_28px_-5px_rgba(255,0,204,0.4)]';
    } else if (theme === 'dark') {
      return 'bg-gradient-to-br from-[#080f1d] to-[#020617] border border-blue-500/20 backdrop-blur-xl shadow-[0_12px_28px_-5px_rgba(59,130,246,0.3)]';
    } else {
      return 'bg-gradient-to-br from-white to-slate-100 border border-blue-500/20 backdrop-blur-xl shadow-[0_12px_28px_-5px_rgba(59,130,246,0.3)]';
    }
  };  // Get icon background styles based on theme - holographic design
  const getIconBgStyles = () => {
    if (theme === 'colorful') {
      return 'bg-gradient-to-br from-fuchsia-500/30 to-purple-900/30 backdrop-blur-lg backdrop-filter border border-fuchsia-400/30';
    } else if (theme === 'dark') {
      return 'bg-gradient-to-br from-blue-500/20 to-indigo-900/20 backdrop-blur-lg backdrop-filter border border-blue-400/30';
    } else {
      return 'bg-gradient-to-br from-blue-500/15 to-sky-500/15 backdrop-blur-lg backdrop-filter border border-blue-300/30';
    }
  };
  // Get icon color styles based on theme with glow effect
  const getIconColorStyles = () => {
    if (theme === 'colorful') {
      return 'text-fuchsia-300 drop-shadow-[0_0_12px_rgba(255,0,204,0.6)]';
    } else if (theme === 'dark') {
      return 'text-blue-300 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]';
    } else {
      return 'text-blue-500 drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]';
    }
  };// Get title style based on theme - with dimensional aesthetics
  const getTitleStyles = () => {
    if (theme === 'colorful') {
      return 'text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-200 via-purple-200 to-cyan-200 group-hover:bg-gradient-to-r group-hover:from-cyan-200 group-hover:via-fuchsia-200 group-hover:to-blue-200 transition-all duration-700';
    } else if (theme === 'dark') {
      return 'text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-sky-200 group-hover:bg-gradient-to-r group-hover:from-sky-200 group-hover:via-blue-200 group-hover:to-indigo-200 transition-all duration-700';
    } else {
      return 'text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-blue-600 to-indigo-700 group-hover:bg-gradient-to-r group-hover:from-indigo-700 group-hover:via-blue-600 group-hover:to-slate-700 transition-all duration-700';
    }
  };

  // Get date and location style based on theme - with enhanced dimensional contrast
  const getMetaStyles = () => {
    if (theme === 'colorful') {
      return 'text-cyan-300 group-hover:text-cyan-200 transition-all duration-300 tracking-wide';
    } else if (theme === 'dark') {
      return 'text-blue-300 group-hover:text-blue-200 transition-all duration-300 tracking-wide';
    } else {
      return 'text-blue-500 group-hover:text-blue-600 transition-all duration-300 tracking-wide';
    }
  };
  // Get description styles based on theme - with dimensionally improved readability
  const getDescriptionStyles = () => {
    if (theme === 'colorful') {
      return 'text-slate-200/90 group-hover:text-white/95 transition-all duration-500 tracking-wide leading-relaxed';
    } else if (theme === 'dark') {
      return 'text-slate-300/90 group-hover:text-slate-200 transition-all duration-500 tracking-wide leading-relaxed';
    } else {
      return 'text-slate-600/90 group-hover:text-slate-800 transition-all duration-500 tracking-wide leading-relaxed';
    }
  };
  
  // Get orbital particle color based on theme
  const getParticleColor = () => {
    if (theme === 'colorful') {
      return 'bg-gradient-to-br from-fuchsia-400 to-purple-600';
    } else if (theme === 'dark') {
      return 'bg-gradient-to-br from-blue-400 to-indigo-600';
    } else {
      return 'bg-gradient-to-br from-blue-400 to-sky-600';
    }
  };
    // No longer needed - removed unused function
  // Custom styles for the card
  const cardCustomStyles = {
    boxShadow: isHovered ? (
      theme === 'colorful' 
        ? '0 15px 30px -10px rgba(255,0,204,0.4), 0 0 0 1px rgba(217, 70, 239, 0.1), inset 0 0 20px rgba(217, 70, 239, 0.03)'
        : theme === 'dark'
          ? '0 15px 30px -10px rgba(59,130,246,0.3), 0 0 0 1px rgba(59,130,246, 0.1), inset 0 0 20px rgba(59,130,246, 0.03)'
          : '0 15px 30px -10px rgba(59,130,246,0.2), 0 0 0 1px rgba(59,130,246, 0.05), inset 0 0 20px rgba(59,130,246, 0.02)'
    ) : '',
  };
    return (
    <div className="group perspective-1000">
      <div 
        className={`relative rounded-2xl overflow-hidden ${getCardStyles()} transition-all duration-300`}
        style={cardCustomStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
          {/* Floating particles (visible on hover) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isHovered && particles.map((particle, index) => (
            <div 
              key={index} 
              className={`absolute rounded-full opacity-0 ${getParticleColor()} transition-all duration-300`}
              style={{
                left: `${particle.x}%`, 
                bottom: `${particle.y}%`,
                width: `${particle.size}px`, 
                height: `${particle.size}px`,
                animation: `particle-float ${1.5 + particle.delay}s forwards ease-out`,
                animationDelay: `${particle.delay}s`,
                boxShadow: theme === 'colorful' 
                  ? '0 0 6px rgba(217, 70, 239, 0.6)'
                  : '0 0 6px rgba(59, 130, 246, 0.6)'
              }}
            />
          ))}
        </div>

        <div className="px-6 pt-5 pb-6">          {/* Icon with fixed positioning to prevent cutoff */}
          <div className="mb-4 flex justify-center mt-2">
            <div className="relative">
                <div className={`relative flex items-center justify-center w-14 h-14 rounded-full ${getIconBgStyles()} ${getIconColorStyles()} shadow-xl border backdrop-blur-3xl ${
                theme === 'colorful' ? 'border-fuchsia-300/40' : theme === 'dark' ? 'border-blue-300/40' : 'border-blue-300/40'
              } transition-all duration-300 z-10`}>
                {MaterialIcon ? (
                  <MaterialIcon className="text-[28px]" />
                ) : icon ? (
                  <span className="text-xl">{icon}</span>
                ) : null}
              </div>
            </div>
          </div>
          
          <div className="text-center mb-3">
            {/* Title with dimensional glow effect */}
            <h3 className={`font-heading text-xl font-bold ${getTitleStyles()} tracking-wider transition-all duration-300`}>{title}</h3>              {/* Date with simpler styling */}
            <div className={`font-body text-xs ${getMetaStyles()} mt-1.5 inline-block px-3 py-0.5 rounded-full backdrop-blur-md ${
              theme === 'colorful' ? 'bg-gradient-to-r from-fuchsia-900/30 to-purple-900/30 border border-fuchsia-500/20' : 
              theme === 'dark' ? 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/20' : 
              'bg-gradient-to-r from-blue-100 to-sky-100 border border-blue-200/40'
            } transition-all duration-300`}>{date}</div>
          </div>
            {/* Location without animation */}
          <div className="flex items-center justify-center mb-4 text-center">
            <LocationOnIcon className={`h-4 w-4 mr-1 flex-shrink-0 ${getMetaStyles()}`} />
            <span className={`font-body text-xs ${getMetaStyles()}`}>{location}</span>
          </div>
            {/* Description with stylized border */}
          <div className={`relative px-4 py-3.5 rounded-lg backdrop-blur-md mx-1 ${
            theme === 'colorful' ? 'bg-gradient-to-br from-fuchsia-900/10 to-purple-900/10 border border-fuchsia-500/10' : 
            theme === 'dark' ? 'bg-gradient-to-br from-blue-900/10 to-indigo-900/10 border border-blue-500/10' : 
            'bg-gradient-to-br from-blue-50/60 to-white/60 border border-blue-200/20'
          } transition-all duration-300`}>
            <p className={`font-body text-sm ${getDescriptionStyles()}`}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
