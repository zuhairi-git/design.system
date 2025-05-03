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
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      onClick={copyToClipboard}
      className="rounded-md overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer relative group"
    >      <div 
        className="h-24 flex items-center justify-center relative"
        style={{ backgroundColor: color }}
      >
        <div className="absolute top-2 right-2 flex items-center justify-center">
          <span 
            className="material-icons bg-white dark:bg-neutral-800 rounded-full p-1 text-neutral-600 dark:text-neutral-300 cursor-pointer hover:text-primary-500 transition-colors"
            style={{ fontSize: '18px' }}
          >
            {copied ? 'check' : 'content_copy'}
          </span>
        </div>
      </div>      
      <div className="p-2 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex justify-between items-center">
          <p className={`text-xs font-body ${textColor}`}>{name}</p>
          <p className="font-mono text-xs font-medium bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
            {color}
          </p>
        </div>
      </div>
    </div>
  );
}
