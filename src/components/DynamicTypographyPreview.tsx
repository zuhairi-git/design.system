'use client';

import { useState } from 'react';

interface DynamicTypographyPreviewProps {
  fontFamilies: string[];
  defaultFontFamily: string;
  defaultFontWeight: string;
  defaultFontSize: string;
  defaultLineHeight: string;
  sampleText: string;
  language?: 'en' | 'ar';
  title: string;
  description: string;
}

export default function DynamicTypographyPreview({
  fontFamilies,
  defaultFontFamily,
  defaultFontWeight,
  defaultFontSize,
  defaultLineHeight,
  sampleText,
  language = 'en',
  title,
  description
}: DynamicTypographyPreviewProps) {  const [fontFamily, setFontFamily] = useState(defaultFontFamily);
  const [fontWeight, setFontWeight] = useState(defaultFontWeight);
  const [fontSize, setFontSize] = useState(defaultFontSize);
  const [lineHeight, setLineHeight] = useState(defaultLineHeight);
  const [editableSampleText, setEditableSampleText] = useState(sampleText);
  
  // Font class for the preview based on font type and language
  const getFontClass = () => {
    if (language === 'ar') {
      return fontFamily.toLowerCase().includes('tajwal') ? 'font-arabic-heading' : 'font-arabic-body';
    }
    return fontFamily.toLowerCase().includes('poppins') ? 'font-heading' : 'font-body';
  };
  
  const fontDir = language === 'ar' ? 'rtl' : 'ltr';
  
  // Available font weights
  const fontWeights = ['400', '500', '600', '700', '800'];
  
  // Font size options with descriptive labels
  const fontSizeOptions = [
    { value: '12px', label: 'Extra Small (12px)' },
    { value: '14px', label: 'Small (14px)' },
    { value: '16px', label: 'Base (16px)' },
    { value: '18px', label: 'Medium (18px)' },
    { value: '20px', label: 'Large (20px)' },
    { value: '24px', label: 'X-Large (24px)' },
    { value: '30px', label: '2X-Large (30px)' },
    { value: '36px', label: '3X-Large (36px)' },
    { value: '48px', label: '4X-Large (48px)' },
    { value: '60px', label: '5X-Large (60px)' }
  ];
  
  // Line height options with descriptive labels
  const lineHeightOptions = [
    { value: '1', label: 'Tight (1)' },
    { value: '1.2', label: 'Heading (1.2)' },
    { value: '1.3', label: 'Semi-tight (1.3)' },
    { value: '1.4', label: 'Medium (1.4)' },
    { value: '1.5', label: 'Body (1.5)' },
    { value: '1.6', label: 'Relaxed (1.6)' },
    { value: '1.8', label: 'Loose (1.8)' },
    { value: '2', label: 'Very Loose (2)' },
  ];

  return (
    <div className="card p-5 space-y-6">
      <div className="space-y-1">
        <h3 className="font-heading text-base font-bold text-neutral-950 dark:text-white">{title}</h3>
        <p className="font-body text-sm text-neutral-700 dark:text-neutral-400">{description}</p>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
        {/* Font Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Font Family</label>
            <select 
              value={fontFamily} 
              onChange={(e) => setFontFamily(e.target.value)}
              className="w-full p-2 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500"
            >
              {fontFamilies.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Font Weight</label>
            <div className="flex flex-wrap gap-2">
              {fontWeights.map(weight => (
                <button
                  key={weight}
                  onClick={() => setFontWeight(weight)}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    fontWeight === weight 
                      ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 border-primary-300 dark:border-primary-700'
                      : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700'
                  } border`}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Font Size</label>
            <select 
              value={fontSize} 
              onChange={(e) => setFontSize(e.target.value)}
              className="w-full p-2 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500"
            >
              {fontSizeOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Line Height</label>
            <select 
              value={lineHeight} 
              onChange={(e) => setLineHeight(e.target.value)}
              className="w-full p-2 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500"
            >
              {lineHeightOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          
          <div className="px-3 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-md">
            <pre className="text-xs font-mono text-neutral-700 dark:text-neutral-400 overflow-x-auto">
              <code>{`font-family: ${fontFamily};
font-weight: ${fontWeight};
font-size: ${fontSize};
line-height: ${lineHeight};`}</code>
            </pre>
          </div>
        </div>
          {/* Preview Area */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Preview</label>
            <span className="text-xs px-2 py-0.5 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-full">Live Preview</span>
          </div>          <div 
            className={`flex-1 p-4 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-md overflow-auto bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md ${getFontClass()}`}
            style={{
              fontWeight,
              fontSize,
              lineHeight,
              direction: fontDir
            }}
          >
            {editableSampleText}
          </div>
          
          <div className="mt-3">
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-400 mb-1">
              Edit Sample Text:
            </label>            <div className="relative">
              <textarea
                value={editableSampleText}
                onChange={(e) => setEditableSampleText(e.target.value)}
                className="w-full p-2 text-sm rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 h-20"
                dir={fontDir}
              />
              <button
                onClick={() => setEditableSampleText(sampleText)}
                className="absolute right-2 bottom-2 text-xs py-1 px-2 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                type="button"
              >
                Reset Text
              </button>
            </div>
          </div>
          
          <div className="mt-2 flex justify-end">
            <div className="text-xs text-neutral-500 dark:text-neutral-400 italic">
              Customize the typography settings to see real-time changes in the preview
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
