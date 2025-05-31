'use client';

import { useState } from 'react';

interface DynamicTypographyProps {
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

export default function DynamicTypography({
  fontFamilies,
  defaultFontFamily,
  defaultFontWeight,
  defaultFontSize,
  defaultLineHeight,
  sampleText,
  language = 'en',
  title,
  description
}: DynamicTypographyProps) {
  const [fontFamily, setFontFamily] = useState(defaultFontFamily);
  const [fontWeight, setFontWeight] = useState(defaultFontWeight);
  const [fontSize, setFontSize] = useState(defaultFontSize);
  const [lineHeight, setLineHeight] = useState(defaultLineHeight);
  const [editableSampleText, setEditableSampleText] = useState(sampleText);
  const [textColor, setTextColor] = useState('#374151');

  // Simple options
  const fontWeights = ['300', '400', '500', '600', '700'];
  const fontSizes = ['12px', '14px', '16px', '18px', '20px', '24px', '32px', '48px'];
  const lineHeights = ['1.2', '1.4', '1.5', '1.6', '1.8'];
  const colors = ['#000000', '#374151', '#6B7280', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  const fontDir = language === 'ar' ? 'rtl' : 'ltr';

  const copyCSSToClipboard = async () => {
    const cssText = `font-family: ${fontFamily};
font-weight: ${fontWeight};
font-size: ${fontSize};
line-height: ${lineHeight};
color: ${textColor};`;

    try {
      await navigator.clipboard.writeText(cssText);
    } catch (err) {
      console.error('Failed to copy CSS:', err);
    }
  };

  return (
    <div className="card p-6 space-y-6">
      {/* Header */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-neutral-950 dark:text-white mb-1">{title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>

      {/* Controls - Simple Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Font Family */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Font Family</label>
          <select 
            value={fontFamily} 
            onChange={(e) => setFontFamily(e.target.value)}
            className="w-full p-2 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white"
          >
            {fontFamilies.map(font => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </div>

        {/* Font Weight */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Weight</label>
          <select 
            value={fontWeight} 
            onChange={(e) => setFontWeight(e.target.value)}
            className="w-full p-2 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white"
          >
            {fontWeights.map(weight => (
              <option key={weight} value={weight}>{weight}</option>
            ))}
          </select>
        </div>

        {/* Font Size */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Size</label>
          <select 
            value={fontSize} 
            onChange={(e) => setFontSize(e.target.value)}
            className="w-full p-2 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white"
          >
            {fontSizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        {/* Line Height */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Line Height</label>
          <select 
            value={lineHeight} 
            onChange={(e) => setLineHeight(e.target.value)}
            className="w-full p-2 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white"
          >
            {lineHeights.map(height => (
              <option key={height} value={height}>{height}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Color Picker */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Text Color</label>
        <div className="flex gap-2 mb-2">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => setTextColor(color)}
              className={`w-8 h-8 rounded border-2 ${textColor === color ? 'border-blue-500' : 'border-gray-300'}`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="w-full h-10 rounded border border-neutral-200 dark:border-neutral-700"
        />
      </div>

      {/* Preview */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Preview</label>
          <button
            onClick={copyCSSToClipboard}
            className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded hover:bg-neutral-200 dark:hover:bg-neutral-600"
          >
            Copy CSS
          </button>
        </div>
        
        <div 
          className="p-4 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-md bg-white/50 dark:bg-neutral-800/50"
          style={{
            fontFamily,
            fontWeight,
            fontSize,
            lineHeight,
            color: textColor,
            direction: fontDir
          }}
        >
          {editableSampleText}
        </div>
      </div>

      {/* Editable Text */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Edit Sample Text</label>
        <textarea
          value={editableSampleText}
          onChange={(e) => setEditableSampleText(e.target.value)}
          className="w-full p-3 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white h-20"
          dir={fontDir}
        />
        <button
          onClick={() => setEditableSampleText(sampleText)}
          className="mt-2 text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded hover:bg-neutral-200 dark:hover:bg-neutral-600"
        >
          Reset Text
        </button>
      </div>

      {/* CSS Output */}
      <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md p-3">
        <pre className="text-xs font-mono text-neutral-700 dark:text-neutral-400">
{`font-family: ${fontFamily};
font-weight: ${fontWeight};
font-size: ${fontSize};
line-height: ${lineHeight};
color: ${textColor};`}
        </pre>
      </div>
    </div>
  );
}
