'use client';

import { useState } from 'react';
import { showNotification } from '../utils/notifications';

interface ColorCardProps {
  color: string;
  shade: string;
  name: string;
}

export default function ColorCard({ color, shade, name }: ColorCardProps) {
  const [copied, setCopied] = useState(false);  const copyToClipboard = () => {
    navigator.clipboard.writeText(name);
    setCopied(true);
    showNotification('Color copied!');
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
  return (    <div
      className={`relative group overflow-hidden rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer`}
      onClick={copyToClipboard}
      style={{ 
        backgroundColor: getActualColor(),
        boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
      }}
    >
      <div 
        className={`h-20 w-full transition-all duration-300 group-hover:scale-105 relative flex items-center justify-center ${color}`}
        style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.03)' }}
      >
        <span className="font-mono text-xs font-medium px-2 py-1 rounded bg-white/90 dark:bg-black/70 text-black dark:text-white backdrop-blur-sm shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {name}
        </span>
      </div>
      
      <div className={`p-2.5 border-t border-neutral-200/40 dark:border-neutral-800/40 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white`}>
        <div className="flex justify-between items-center">
          <p className={`font-body text-xs font-medium text-neutral-700 dark:text-neutral-300`}>{shade}</p>
        </div>
        <p className={`font-body text-[10px] mt-0.5 text-neutral-500 dark:text-neutral-400 font-mono`}>{color}</p>
      </div>
        <div 
        className="absolute top-1.5 right-1.5 flex items-center justify-center"
      >
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the parent onClick
            copyToClipboard();
          }}
          className={`flex items-center justify-center rounded-full w-6 h-6 
            ${copied 
              ? 'bg-primary-500 text-white' 
              : 'bg-white/90 dark:bg-neutral-800/90 text-neutral-600 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400'
            } 
            backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-md`}
          aria-label="Copy color code"
        >          {copied ? (
            <span className="material-icons" style={{ fontSize: '14px' }}>
              check
            </span>
          ) : (
            <span className="material-icons" style={{ fontSize: '14px' }}>
              content_copy
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
