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

  return (
    <div 
      className="relative group hover-scale card overflow-hidden"
      onClick={copyToClipboard}
    >
      <div 
        className="h-24 w-full transition-transform group-hover:scale-105" 
        style={{ backgroundColor: color }}
      ></div>
      <div className="p-3 bg-white dark:bg-neutral-900 border-t border-neutral-300 dark:border-neutral-800">
        <p className="font-body text-xs text-neutral-700 dark:text-neutral-400">{shade}</p>
        <p className="font-body text-sm font-medium text-neutral-950 dark:text-white">{name}</p>
      </div>
      <div 
        className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
          copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <span className="bg-white dark:bg-neutral-900 px-3 py-1 rounded-full text-sm font-medium text-neutral-950 dark:text-white">
          {copied ? 'Copied!' : 'Click to copy'}
        </span>
      </div>
    </div>
  );
}
