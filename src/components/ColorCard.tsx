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

  return (    <div
      className={`relative group hover-scale card overflow-hidden border border-neutral-200 dark:border-neutral-800`}
      onClick={copyToClipboard}
      style={{ 
        backgroundColor: getActualColor(),
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}
    >      <div 
        className={`h-24 w-full transition-transform group-hover:scale-105 relative flex items-center justify-center ${color}`}
        style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)' }}
      >        <span className="font-mono text-xs font-medium px-2.5 py-1 rounded bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-50 text-black dark:text-white shadow-sm">
          {name}
        </span>
      </div>      <div className={`p-3 border-t border-neutral-300/20 dark:border-neutral-800/40 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white`}>
        <div className="flex justify-between items-center mb-1">
          <p className={`font-body text-xs text-neutral-700 dark:text-neutral-300`}>{shade}</p>
        </div>
        <p className={`font-body text-sm font-medium text-neutral-900 dark:text-neutral-50`}>{color}</p></div><div 
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
