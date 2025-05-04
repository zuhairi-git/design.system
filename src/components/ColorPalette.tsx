'use client';

import { useState } from 'react';

interface ColorPaletteProps {
  title: string;
  description: string;
  colors: {
    name: string;
    value: string;
    textColor?: string;
  }[];
}

export default function ColorPalette({ title, description, colors }: ColorPaletteProps) {
  return (
    <div className="mb-12">
      <h3 className="font-heading font-bold text-2xl text-neutral-950 dark:text-white mb-2">{title}</h3>
      <p className="font-body text-neutral-700 dark:text-neutral-300 mb-6">{description}</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {colors.map((color, index) => (
          <ColorSwatch 
            key={index} 
            color={color.value} 
            name={color.name} 
            textColor={color.textColor}
          />
        ))}
      </div>
    </div>
  );
}

interface ColorSwatchProps {
  color: string;
  name: string;
  textColor?: string;
}

function ColorSwatch({ color, name, textColor = 'text-white' }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    
    // Show a small popup notification
    const notification = document.createElement('div');
    notification.textContent = 'Color copied!';
    notification.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium opacity-0 transition-opacity duration-300';
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
  // This function determines text contrast based on background color
  // Note: Function is now commented out as it's not being used
  /* 
  const getContrastColor = () => {
    // For simplicity, we'll use a simple check
    // Light colors get dark text, dark colors get light text
    if (color.includes('white') || color.includes('light') || color.includes('50') || color.includes('100') || color.includes('200') || color.includes('rgba') && color.includes('0.1')) {
      return "text-neutral-900";
    }
    return "text-white";
  };
  */

  return (
    <div 
      onClick={copyToClipboard}
      className={`rounded-md overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer relative group ${!isDirectColorValue() ? color : ''}`}
      style={isDirectColorValue() ? { backgroundColor: color } : {}}
    >      <div 
        className={`h-24 flex items-center justify-center relative ${!isDirectColorValue() ? color : ''}`}
      >
        <span className="font-mono text-xs font-medium px-2.5 py-1 rounded bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-50 text-black dark:text-white">
          {isDirectColorValue() ? color : name}
        </span>
          <div className="absolute top-2 right-2 flex items-center justify-center">
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the parent onClick
              copyToClipboard();
            }}
            className={`flex items-center justify-center rounded-full w-7 h-7 
              ${copied 
                ? 'bg-primary-500 text-white' 
                : 'bg-white/90 dark:bg-neutral-800/90 text-neutral-600 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400'
              } 
              backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-md`}
            aria-label="Copy color code"
          >
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
            )}
          </button>
        </div>
      </div>      
      <div className="p-2 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <p className={`text-xs font-body ${textColor}`}>{name}</p>
      </div>
    </div>
  );
}
