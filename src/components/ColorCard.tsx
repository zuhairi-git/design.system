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
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="relative group hover-scale card overflow-hidden"
      onClick={copyToClipboard}
    >      <div 
        className="h-24 w-full transition-transform group-hover:scale-105 relative" 
        style={{ backgroundColor: color }}
      >
      </div>
      <div className="p-3 bg-white dark:bg-neutral-900 border-t border-neutral-300 dark:border-neutral-800">
        <div className="flex justify-between items-center mb-1">
          <p className="font-body text-xs text-neutral-700 dark:text-neutral-400">{shade}</p>
          <p className="font-mono text-xs font-medium bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
            {color}
          </p>
        </div>
        <p className="font-body text-sm font-medium text-neutral-950 dark:text-white">{name}</p>
      </div><div 
        className="absolute top-2 right-2 flex items-center justify-center"
      >
        <span 
          className="material-icons bg-white dark:bg-neutral-800 rounded-full p-1 text-neutral-600 dark:text-neutral-300 cursor-pointer hover:text-primary-500 transition-colors"
          style={{ fontSize: '18px' }}
        >
          {copied ? 'check' : 'content_copy'}
        </span>
      </div>
    </div>
  );
}
