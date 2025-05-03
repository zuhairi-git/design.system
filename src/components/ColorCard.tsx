'use client';

import { useState } from 'react';

interface ColorCardProps {
  color: string;
  shade: string;
  name: string;
}

export default function ColorCard({ color, shade, name }: ColorCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Convert Tailwind classes to actual CSS color values
  const getActualColor = () => {
    if (name && name.startsWith('#')) {
      return name;
    } else if (name && name.startsWith('rgb')) {
      return name;
    }
    return ''; // Default fallback
  };

  // Determine text color based on the background color
  const getContrastColor = () => {
    // For simplicity, we'll use a simple check based on the color name
    // Light colors get dark text, dark colors get light text
    if (name.includes('white') || name.includes('light') || name.includes('50') || name.includes('100') || name.includes('200') || name.includes('rgba') && name.includes('0.1')) {
      return "text-neutral-900 dark:text-neutral-900";
    }
    return "text-white dark:text-white";
  };

  return (
    <div 
      className={`relative group hover-scale card overflow-hidden`}
      onClick={copyToClipboard}
      style={{ backgroundColor: getActualColor() }}
    >      <div 
        className={`h-24 w-full transition-transform group-hover:scale-105 relative flex items-center justify-center ${color}`} 
      >        <span className="font-mono text-xs font-medium px-2.5 py-1 rounded bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-50 text-black dark:text-white">
          {name}
        </span>
      </div>
      <div className={`p-3 border-t border-neutral-300/20 dark:border-neutral-800/40 ${getContrastColor()}`}>
        <div className="flex justify-between items-center mb-1">
          <p className={`font-body text-xs opacity-80`}>{shade}</p>
        </div>
        <p className={`font-body text-sm font-medium`}>{color}</p></div><div 
        className="absolute top-2 right-2 flex items-center justify-center"
      >
        <span 
          className="material-icons bg-white dark:bg-neutral-800 rounded-full p-1 text-neutral-600 dark:text-neutral-300 cursor-pointer hover:text-primary-500 transition-colors shadow-sm"
          style={{ fontSize: '18px' }}
        >
          {copied ? 'check' : 'content_copy'}
        </span>
      </div>
    </div>
  );
}
