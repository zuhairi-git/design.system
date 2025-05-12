'use client';

import { useState } from 'react';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

interface ColorPaletteProps {
  title: string;
  description: string;
  colors: {
    name: string;
    value: string;
  }[];
}

export default function ColorPalette({ title, description, colors }: ColorPaletteProps) {
  return (
    <div className="mb-8">
      <h3 className="font-heading font-medium text-lg text-neutral-950 dark:text-white mb-1.5">{title}</h3>
      <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 mb-4">{description}</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">        {colors.map((color, index) => (
          <ColorSwatch 
            key={index} 
            color={color.value} 
            name={color.name}
          />
        ))}
      </div>
    </div>
  );
}

interface ColorSwatchProps {
  color: string;
  name: string;
}

function ColorSwatch({ color, name }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    
    // Show a small popup notification
    const notification = document.createElement('div');
    notification.textContent = 'Color copied!';
    notification.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-3 py-1.5 rounded-full shadow-lg text-xs font-medium opacity-0 transition-opacity duration-300';
    document.body.appendChild(notification);
    
    // Animate the notification
    setTimeout(() => {
      notification.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
      setCopied(false);
    }, 2000);
  };

  // Determine if color is a hex or rgb value that can be used directly
  const isDirectColorValue = () => {
    return color.startsWith('#') || color.startsWith('rgb');
  };
  
  // Determine if we should use light or dark text based on the color
  const shouldUseDarkText = () => {
    // Simple check for light colors that need dark text
    if (color.includes('white') || 
        color.includes('light') || 
        color.includes('-50') || 
        color.includes('-100') || 
        color.includes('-200') ||
        color === '#ffffff' ||
        (color.includes('rgba') && color.includes('255,'))) {
      return true;
    }
    return false;
  };  return (
    <div 
      onClick={copyToClipboard}
      className={`rounded-lg overflow-hidden shadow-sm border border-neutral-200/80 dark:border-neutral-800/80 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer relative group ${!isDirectColorValue() ? color : ''}`}
      style={isDirectColorValue() ? { backgroundColor: color } : {}}
    >
      <div 
        className={`h-16 flex items-center justify-center relative group-hover:scale-[1.02] transition-all duration-300 ${!isDirectColorValue() ? color : ''}`}
      >
        <span className={`font-mono text-[10px] font-medium px-2 py-0.5 rounded backdrop-blur-sm ${shouldUseDarkText() ? 'bg-white/20 text-neutral-900' : 'bg-black/20 text-white'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
          {isDirectColorValue() ? color : name}
        </span>
        
        <div className="absolute top-1.5 right-1.5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the parent onClick
              copyToClipboard();
            }}
            className={`flex items-center justify-center rounded-full w-5 h-5 
              ${copied 
                ? 'bg-primary-500 text-white scale-110' 
                : 'bg-white/90 dark:bg-neutral-800/90 text-neutral-600 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400'
              } 
              backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110`}
            aria-label="Copy color code"
          >
            {copied ? (
              <CheckRoundedIcon className="w-3 h-3 align-middle" fontSize="small" />
            ) : (
              <ContentCopyRoundedIcon className="w-3 h-3 align-middle" fontSize="small" />
            )}
          </button>
        </div>
      </div>
      
      <div className="p-1.5 bg-white dark:bg-neutral-800 border-t border-neutral-200/40 dark:border-neutral-800/40 text-neutral-900 dark:text-white">
        <p className={`text-[10px] font-body truncate text-neutral-700 dark:text-neutral-300`}>{name}</p>
      </div>
    </div>
  );
}
