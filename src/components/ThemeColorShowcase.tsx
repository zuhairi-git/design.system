'use client';

import { useState } from 'react';
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import BlurOnRoundedIcon from '@mui/icons-material/BlurOnRounded';
import OpacityRoundedIcon from '@mui/icons-material/OpacityRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

// Utility function to calculate contrast ratio
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const getLuminance = (r: number, g: number, b: number) => {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

const getContrastRatio = (color1: string, color2: string) => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 1;
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
};

interface ThemeShowcaseProps {
  theme: 'light' | 'dark' | 'colorful';
}

const themeData = {
  light: {
    title: 'Light Theme',
    description: 'Clean and professional design optimized for daytime use and productivity applications.',
    icon: PaletteRoundedIcon,
    usage: ['Business applications', 'Documentation', 'Daytime interfaces', 'Professional dashboards'],
    preview: {
      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95))',
      border: '1px solid rgba(203, 213, 225, 0.6)',
      shadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      textPrimary: '#0f172a',
      textSecondary: '#475569'
    },
    palettes: [
      {
        name: 'Core Colors',
        colors: [
          { shade: 'Background', color: 'bg-white', name: '#ffffff' },
          { shade: 'Foreground', color: 'text-slate-900', name: '#0f172a' },
          { shade: 'Primary', color: 'text-blue-600', name: '#2563eb' },
          { shade: 'Primary Hover', color: 'text-blue-700', name: '#1d4ed8' },
          { shade: 'Primary Glow', color: 'shadow-blue-300/25', name: 'rgba(147, 197, 253, 0.25)' }
        ]
      },
      {
        name: 'Surface Colors',
        colors: [
          { shade: 'Card Background', color: 'bg-white/95', name: 'rgba(255, 255, 255, 0.95)' },
          { shade: 'Card Border', color: 'border-slate-200/60', name: 'rgba(226, 232, 240, 0.6)' },
          { shade: 'Card Border Hover', color: 'border-blue-200/70', name: 'rgba(191, 219, 254, 0.7)' },
          { shade: 'Card Shadow', color: 'shadow-slate-900/8', name: 'rgba(15, 23, 42, 0.08)' }
        ]
      }
    ]
  },
  dark: {
    title: 'Dark Theme',
    description: 'Sophisticated dark palette designed to reduce eye strain and enhance focus during extended use.',
    icon: BlurOnRoundedIcon,
    usage: ['Night-time browsing', 'Developer tools', 'Media applications', 'Extended work sessions'],    preview: {
      background: 'linear-gradient(to bottom, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))',
      border: '1px solid rgba(71, 85, 105, 0.4)',
      shadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
      textPrimary: '#f8fafc',
      textSecondary: '#e2e8f0'
    },
    palettes: [
      {
        name: 'Core Colors',
        colors: [
          { shade: 'Background', color: 'bg-slate-950', name: '#020617' },
          { shade: 'Foreground', color: 'text-slate-50', name: '#f8fafc' },
          { shade: 'Primary', color: 'text-blue-400', name: '#60a5fa' },
          { shade: 'Primary Hover', color: 'text-blue-300', name: '#93c5fd' },
          { shade: 'Primary Glow', color: 'shadow-blue-400/20', name: 'rgba(96, 165, 250, 0.2)' }
        ]
      },
      {
        name: 'Surface Colors',
        colors: [
          { shade: 'Card Background', color: 'bg-slate-800/95', name: 'rgba(30, 41, 59, 0.95)' },
          { shade: 'Card Border', color: 'border-slate-700/40', name: 'rgba(51, 65, 85, 0.4)' },
          { shade: 'Card Border Hover', color: 'border-blue-400/30', name: 'rgba(96, 165, 250, 0.3)' },
          { shade: 'Card Shadow', color: 'shadow-black/25', name: 'rgba(0, 0, 0, 0.25)' }
        ]
      }
    ]
  },  colorful: {
    title: 'Colorful Theme',
    description: 'Harmonized blue-violet-indigo palette perfect for creative applications and immersive user experiences.',
    icon: OpacityRoundedIcon,
    usage: ['Creative portfolios', 'Gaming interfaces', 'Entertainment apps', 'Art & design tools'],
    preview: {
      background: 'linear-gradient(135deg, rgba(15, 10, 46, 0.9), rgba(30, 20, 60, 0.9))',
      border: '1px solid rgba(167, 139, 250, 0.4)',
      shadow: '0 4px 20px rgba(168, 85, 247, 0.25)',      textPrimary: '#f0f8ff',
      textSecondary: 'rgba(240, 248, 255, 0.9)'
    },
    palettes: [
      {
        name: 'Core Colors',
        colors: [
          { shade: 'Background', color: 'bg-slate-950', name: '#0f0a2e' },
          { shade: 'Foreground', color: 'text-slate-50', name: '#f0f8ff' },
          { shade: 'Primary', color: 'text-blue-500', name: '#3b82f6' },
          { shade: 'Primary Hover', color: 'text-violet-400', name: '#a78bfa' },
          { shade: 'Primary Glow', color: 'shadow-violet-400/25', name: 'rgba(167, 139, 250, 0.25)' }
        ]
      },
      {
        name: 'Surface Colors',
        colors: [
          { shade: 'Card Background', color: 'bg-violet-950/90', name: 'rgba(15, 10, 46, 0.9)' },
          { shade: 'Card Border', color: 'border-violet-400/30', name: 'rgba(167, 139, 250, 0.3)' },
          { shade: 'Card Border Hover', color: 'border-indigo-400/50', name: 'rgba(99, 102, 241, 0.5)' },
          { shade: 'Card Shadow', color: 'shadow-violet-500/20', name: 'rgba(168, 85, 247, 0.2)' }
        ]
      },
      {
        name: 'Gradient Accents',
        colors: [
          { shade: 'Gradient Primary', color: 'bg-gradient-to-r from-blue-500 to-violet-500', name: 'linear-gradient(to right, #3b82f6, #a855f7)' },
          { shade: 'Gradient Secondary', color: 'bg-gradient-to-r from-violet-500 to-indigo-500', name: 'linear-gradient(to right, #a855f7, #6366f1)' },
          { shade: 'Gradient Cosmic', color: 'bg-gradient-to-r from-blue-500 via-violet-500 to-indigo-500', name: 'linear-gradient(135deg, #3b82f6, #a855f7, #6366f1)' },
          { shade: 'Gradient Background', color: 'bg-gradient-to-br from-violet-950/80 to-fuchsia-950/80', name: 'linear-gradient(to bottom right, rgba(46, 16, 101, 0.8), rgba(74, 4, 78, 0.8))' }
        ]
      }
    ]
  }
};

export default function ThemeColorShowcase({ theme }: ThemeShowcaseProps) {
  const [expanded, setExpanded] = useState(false);
  const data = themeData[theme];
  const Icon = data.icon;

  return (
    <div className="mb-12">
      {/* Theme Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${
            theme === 'light' ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400' :
            theme === 'dark' ? 'bg-blue-950 text-blue-400' :
            'bg-fuchsia-500/20 text-fuchsia-400'
          }`}>
            <Icon className="h-5 w-5" />
          </div>          <div>
            <h3 className={`font-heading font-semibold text-xl ${
              theme === 'colorful' ? 'text-blue-50' : 
              theme === 'dark' ? 'text-slate-50' : 
              'text-neutral-950 dark:text-white'
            }`}>
              {data.title}
            </h3>
            <p className={`font-body text-sm ${
              theme === 'colorful' ? 'text-blue-200/90' : 
              theme === 'dark' ? 'text-slate-200' :
              'text-neutral-700 dark:text-neutral-300'
            }`}>
              {data.description}
            </p>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`p-2 rounded-lg transition-all duration-200 ${
            theme === 'colorful' 
              ? 'bg-purple-500/20 text-fuchsia-400 hover:bg-purple-500/30' 
              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
          }`}
        >
          <ExpandMoreRoundedIcon 
            className={`h-5 w-5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Theme Preview Card */}
      <div className="mb-6">
        <div 
          className="relative p-6 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
          style={{
            background: data.preview.background,
            border: data.preview.border,
            boxShadow: data.preview.shadow
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-heading text-base font-medium mb-1" style={{ color: data.preview.textPrimary }}>
                {data.title} Preview
              </h4>
              <p className="font-body text-sm" style={{ color: data.preview.textSecondary }}>
                Interactive preview of {theme} theme styling
              </p>
            </div>
            <div className={`p-2 rounded-lg ${
              theme === 'light' ? 'bg-blue-500/10 text-blue-500' :
              theme === 'dark' ? 'bg-blue-500/10 text-blue-400' :
              'bg-fuchsia-500/10 text-fuchsia-400'
            }`}>
              <Icon />
            </div>
          </div>
          
          {/* Usage indicators */}
          <div className="mt-4 pt-4" style={{ 
            borderTop: `1px solid ${theme === 'colorful' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(156, 163, 175, 0.3)'}`
          }}>            <div className="flex flex-wrap gap-2">
              {data.usage.slice(0, 2).map((use, index) => (
                <span 
                  key={index}
                  className={`text-xs px-2 py-1 rounded-md ${
                    theme === 'colorful' 
                      ? 'bg-purple-500/20 text-cyan-300' :
                    theme === 'dark'
                      ? 'bg-slate-700/50 text-slate-200' :
                      'bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {use}
                </span>
              ))}
              {data.usage.length > 2 && (
                <span className={`text-xs px-2 py-1 rounded-md ${
                  theme === 'colorful' 
                    ? 'bg-purple-500/10 text-cyan-400' :
                  theme === 'dark'
                    ? 'bg-slate-700/30 text-slate-300' :
                    'bg-black/5 dark:bg-white/5 text-neutral-500 dark:text-neutral-500'
                }`}>
                  +{data.usage.length - 2} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Color Details */}
      {expanded && (
        <div className="space-y-8 animate-in slide-in-from-top-2 duration-300">
          {/* Usage Cases */}
          <div className={`p-6 rounded-xl ${
            theme === 'colorful' 
              ? 'bg-purple-950/30 border border-purple-500/20' 
              : 'bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800'
          }`}>
            <h4 className={`font-heading font-medium text-base mb-4 ${
              theme === 'colorful' ? 'text-blue-100' : 'text-neutral-950 dark:text-white'
            }`}>
              Best Used For
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {data.usage.map((use, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-lg text-center ${
                    theme === 'colorful' 
                      ? 'bg-purple-500/10 border border-purple-500/20' 
                      : 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700'
                  }`}
                >
                  <span className={`text-sm font-medium ${
                    theme === 'colorful' ? 'text-cyan-300' : 'text-neutral-700 dark:text-neutral-300'
                  }`}>
                    {use}
                  </span>
                </div>
              ))}
            </div>
          </div>          {/* Color Palettes */}
          {data.palettes.map((palette, paletteIndex) => (
            <div key={paletteIndex} className={`p-6 rounded-xl ${
              theme === 'colorful' 
                ? 'bg-violet-950/20 border border-violet-500/20' 
                : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800'
            }`}>
              <h4 className={`font-heading font-medium text-lg mb-4 ${
                theme === 'colorful' ? 'text-cyan-200' : 'text-neutral-950 dark:text-white'
              }`}>
                {palette.name}
              </h4>
              
              <div className="grid gap-4">
                {palette.colors.map((colorItem, colorIndex) => {                  // Get background and foreground colors for contrast calculation
                  const bgColors = data.palettes[0]?.colors || [];
                  const bgColor = bgColors.find(c => c.shade === 'Background')?.name || '#ffffff';
                  
                  // Calculate contrast ratios if this is a text color
                  const isTextColor = colorItem.shade.includes('Foreground') || colorItem.shade.includes('Primary');
                  const cleanColor = colorItem.name.startsWith('#') ? colorItem.name : bgColor;
                  const contrastRatio = isTextColor && cleanColor.startsWith('#') ? getContrastRatio(cleanColor, bgColor) : null;
                  
                  return (
                    <div key={colorIndex} className={`group relative p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                      theme === 'colorful' 
                        ? 'bg-violet-950/30 border-violet-500/20 hover:border-violet-400/40' 
                        : 'bg-neutral-50 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700 hover:border-blue-200 dark:hover:border-blue-700'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {/* Color Preview */}
                          <div className="relative">
                            {colorItem.name.includes('gradient') ? (
                              <div 
                                className="w-12 h-12 rounded-lg border-2 border-white/20 shadow-sm"
                                style={{ background: colorItem.name.includes('linear-gradient') ? colorItem.name : undefined }}
                              />
                            ) : (
                              <div 
                                className="w-12 h-12 rounded-lg border-2 border-white/20 shadow-sm"
                                style={{ backgroundColor: colorItem.name.startsWith('#') ? colorItem.name : 'transparent' }}
                              />
                            )}
                            {/* Accessibility indicator */}
                            {contrastRatio && (
                              <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                                contrastRatio >= 7 ? 'bg-green-500 text-white' :
                                contrastRatio >= 4.5 ? 'bg-yellow-500 text-black' :
                                'bg-red-500 text-white'
                              }`}>
                                {contrastRatio >= 7 ? 'AAA' : contrastRatio >= 4.5 ? 'AA' : '!'}
                              </div>
                            )}
                          </div>
                          
                          {/* Color Information */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className={`font-medium text-sm ${
                                theme === 'colorful' ? 'text-cyan-100' : 'text-neutral-950 dark:text-white'
                              }`}>
                                {colorItem.shade}
                              </h5>
                              {contrastRatio && (
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                  contrastRatio >= 7 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                  contrastRatio >= 4.5 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                }`}>
                                  {contrastRatio.toFixed(1)}:1
                                </span>
                              )}
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                              <code className={`text-xs px-2 py-1 rounded font-mono ${
                                theme === 'colorful' 
                                  ? 'bg-violet-950/50 text-cyan-300' 
                                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                              }`}>
                                {colorItem.color}
                              </code>
                              <code className={`text-xs px-2 py-1 rounded font-mono ${
                                theme === 'colorful' 
                                  ? 'bg-violet-950/50 text-purple-300' 
                                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                              }`}>
                                {colorItem.name}
                              </code>
                            </div>
                          </div>
                        </div>
                        
                        {/* Copy button */}
                        <button 
                          onClick={() => navigator.clipboard?.writeText(colorItem.name)}
                          className={`opacity-0 group-hover:opacity-100 p-2 rounded-md transition-all duration-200 ${
                            theme === 'colorful' 
                              ? 'bg-violet-500/20 text-cyan-300 hover:bg-violet-500/30' 
                              : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600'
                          }`}
                          title="Copy color value"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Special Gradients for Colorful Theme */}
          {theme === 'colorful' && (
            <div>
              <h4 className="font-heading font-medium text-lg mb-4 text-blue-100">
                Signature Gradients
              </h4>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg border border-purple-500/30 shadow-lg shadow-fuchsia-500/20">
                  <div className="h-20 w-full bg-gradient-to-r from-cyan-400 via-fuchsia-600 to-blue-500 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                  </div>
                  <div className="p-4 bg-indigo-950/80">
                    <p className="font-body text-sm font-medium text-blue-100">Cosmic Gradient</p>
                    <p className="font-body text-xs mt-1 text-blue-200/70 font-mono">linear-gradient(135deg, #3b82f6, #a855f7, #6366f1)</p>
                  </div>
                </div>
                
                <div className="overflow-hidden rounded-lg border border-purple-500/30 shadow-lg shadow-purple-500/20">
                  <div className="h-20 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                  </div>
                  <div className="p-4 bg-indigo-950/80">
                    <p className="font-body text-sm font-medium text-blue-100">Aurora Gradient</p>
                    <p className="font-body text-xs mt-1 text-blue-200/70 font-mono">linear-gradient(to right, #3b82f6, #a855f7, #ec4899)</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
