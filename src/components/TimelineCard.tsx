'use client';

import React from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { getCardBackground } from "@/utils/cardThemes";

// Timeline Card component with theme support
interface TimelineCardProps {
  icon: React.ReactNode;
  materialIcon?: React.ElementType<any>;
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
  
  // Get card styles based on theme
  const getCardStyles = () => {
    if (theme === 'colorful') {
      return 'bg-[#1a0033] border-[rgba(128,0,255,0.7)] shadow-[0_4px_16px_rgba(255,0,204,0.25)]';
    } else if (theme === 'dark') {
      return 'bg-[#18181b] border-neutral-600 shadow-lg';
    } else {
      return 'bg-white border-neutral-300 shadow-md';
    }
  };

  // Get icon background styles based on theme
  const getIconBgStyles = () => {
    if (theme === 'colorful') {
      return 'bg-fuchsia-500/10';
    } else if (theme === 'dark') {
      return 'bg-blue-500/10';
    } else {
      return 'bg-blue-500/10';
    }
  };

  // Get icon color styles based on theme
  const getIconColorStyles = () => {
    if (theme === 'colorful') {
      return 'text-fuchsia-400';
    } else if (theme === 'dark') {
      return 'text-blue-400';
    } else {
      return 'text-blue-500';
    }
  };

  // Get title style based on theme
  const getTitleStyles = () => {
    if (theme === 'colorful') {
      return 'text-white';
    } else if (theme === 'dark') {
      return 'text-white';
    } else {
      return 'text-neutral-900';
    }
  };

  // Get date and location style based on theme
  const getMetaStyles = () => {
    if (theme === 'colorful') {
      return 'text-cyan-300';
    } else if (theme === 'dark') {
      return 'text-neutral-300';
    } else {
      return 'text-neutral-500';
    }
  };

  // Get description styles based on theme
  const getDescriptionStyles = () => {
    if (theme === 'colorful') {
      return 'text-white/90';
    } else if (theme === 'dark') {
      return 'text-neutral-200';
    } else {
      return 'text-neutral-700';
    }
  };

  const bgStyle = theme === 'colorful' ? getCardBackground('colorful') : {};

  return (
    <>
      <div className={`relative rounded-xl border overflow-hidden group ${getCardStyles()} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`} style={bgStyle}>
        <div className="p-6">
          {/* Title and Icon */}
          <div className="flex items-start mb-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-lg mr-3 ${getIconBgStyles()} ${getIconColorStyles()}`}>
              {MaterialIcon ? (
                <MaterialIcon fontSize="medium" className="text-[22px]" />
              ) : (
                <span className="text-xl">{icon}</span>
              )}
            </div>
            <h3 className={`font-heading text-lg font-bold ${getTitleStyles()} flex-1`}>{title}</h3>
          </div>
          
          {/* Date and Location */}
          <div className="mb-4 space-y-2">
            <div className={`flex items-center ${getMetaStyles()}`}>
              <DateRangeIcon className="h-4 w-4 mr-2" />
              <span className="font-body text-sm">{date}</span>
            </div>
            <div className={`flex items-center ${getMetaStyles()}`}>
              <LocationOnIcon className="h-4 w-4 mr-2" />
              <span className="font-body text-sm">{location}</span>
            </div>
          </div>
          
          {/* Description */}
          <p className={`font-body text-sm ${getDescriptionStyles()}`}>{description}</p>
        </div>
      </div>
      
      {/* Colorful theme overlay effect */}
      {theme === 'colorful' && (
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)",
          opacity: 0.10,
          mixBlendMode: 'overlay'
        }} />
      )}
    </>
  );
}
