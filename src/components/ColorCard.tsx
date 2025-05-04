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
  return (
    <div
      className={`relative group hover-scale card overflow-hidden rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
      onClick={copyToClipboard}
      style={{ 
        backgroundColor: getActualColor(),
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      }}
    >
      <div 
        className={`h-28 w-full transition-all duration-300 group-hover:scale-105 relative flex items-center justify-center ${color}`}
        style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)' }}
      >
        <span className="font-mono text-xs font-medium px-3 py-1.5 rounded-md bg-white/90 dark:bg-black/70 text-black dark:text-white backdrop-blur-sm shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {name}
        </span>
      </div>
      
      <div className={`p-4 border-t border-neutral-200/40 dark:border-neutral-800/40 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white`}>
        <div className="flex justify-between items-center">
          <p className={`font-body text-sm font-medium text-neutral-700 dark:text-neutral-300`}>{shade}</p>
        </div>
        <p className={`font-body text-xs mt-1 text-neutral-500 dark:text-neutral-400 font-mono`}>{color}</p>
      </div>
        <div 
        className="absolute top-3 right-3 flex items-center justify-center"
      >
        <button 
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the parent onClick
            copyToClipboard();
          }}
          className={`flex items-center justify-center rounded-full w-8 h-8 
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
  );
}
