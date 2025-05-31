// File: src/app/spacing.tsx
"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import GridOnIcon from '@mui/icons-material/GridOn';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import RulerIcon from '@mui/icons-material/Straighten';

export default function SpacingSection() {
  const [selectedSpacing, setSelectedSpacing] = useState("4");
  const [showGrid, setShowGrid] = useState(false);
  const [activeExample, setActiveExample] = useState("padding");

  // Categorized spacing values with enhanced data
  const spacingCategories = {
    micro: [
      { name: "0", pixels: 0, rem: "0rem", tailwind: "0", usage: "No spacing, border resets" },
      { name: "0.5", pixels: 2, rem: "0.125rem", tailwind: "0.5", usage: "Micro adjustments, fine borders" },
      { name: "1", pixels: 4, rem: "0.25rem", tailwind: "1", usage: "Minimal spacing, small gaps" },
      { name: "1.5", pixels: 6, rem: "0.375rem", tailwind: "1.5", usage: "Small element spacing" },
      { name: "2", pixels: 8, rem: "0.5rem", tailwind: "2", usage: "Button padding, form spacing" },
    ],
    base: [
      { name: "3", pixels: 12, rem: "0.75rem", tailwind: "3", usage: "Standard element spacing" },
      { name: "4", pixels: 16, rem: "1rem", tailwind: "4", usage: "Default spacing unit" },
      { name: "5", pixels: 20, rem: "1.25rem", tailwind: "5", usage: "Medium spacing" },
      { name: "6", pixels: 24, rem: "1.5rem", tailwind: "6", usage: "Card padding, section spacing" },
    ],
    layout: [
      { name: "8", pixels: 32, rem: "2rem", tailwind: "8", usage: "Large component spacing" },
      { name: "10", pixels: 40, rem: "2.5rem", tailwind: "10", usage: "Section dividers" },
      { name: "12", pixels: 48, rem: "3rem", tailwind: "12", usage: "Major sections, 44px+ touch targets" },
    ],
    macro: [
      { name: "16", pixels: 64, rem: "4rem", tailwind: "16", usage: "Page sections" },
      { name: "20", pixels: 80, rem: "5rem", tailwind: "20", usage: "Large page spacing" },
      { name: "24", pixels: 96, rem: "6rem", tailwind: "24", usage: "Hero sections, major dividers" },
    ]
  };

  const allSpacingValues = Object.values(spacingCategories).flat();
  const getCategoryColor = (category: string) => {
    const colors = {
      micro: "from-blue-500 to-blue-600",
      base: "from-green-500 to-green-600", 
      layout: "from-purple-500 to-purple-600",
      macro: "from-orange-500 to-orange-600"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  const getExampleColor = (type: string) => {
    const colors = {
      padding: "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700",
      margin: "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700", 
      gap: "bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 dark:bg-gray-900/30";
  };

  const selectedSpacingData = allSpacingValues.find(s => s.name === selectedSpacing);

  return (
    <AnimatedSection 
      id="spacing" 
      className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-neutral-950 dark:via-blue-950/20 dark:to-purple-950/20" 
      animation="slide-up"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient */}
        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg">
            <SpaceBarIcon className="mr-2" fontSize="small" /> 
            Enhanced Spacing System
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent mb-6">
            Visual Spacing System
          </h2>
          <p className="font-body text-xl text-neutral-700 dark:text-neutral-300 max-w-4xl leading-relaxed">
            A comprehensive, interactive spacing system with enhanced visual clarity, accessibility features, and real-time preview capabilities. Based on a 4px grid for consistent, harmonious layouts.
          </p>
        </div>

        {/* Interactive Controls */}
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 p-6 mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                showGrid 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
              aria-label="Toggle 4px grid overlay"
            >
              <GridOnIcon className="mr-2" fontSize="small" />
              {showGrid ? 'Hide' : 'Show'} 4px Grid
            </button>
            
            <div className="flex items-center gap-2">
              <TouchAppIcon className="text-neutral-500" fontSize="small" />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                Click spacing values for live preview
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {["padding", "margin", "gap"].map((type) => (
              <button
                key={type}
                onClick={() => setActiveExample(type)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  activeExample === type
                    ? getExampleColor(type) + ' border-current shadow-lg transform scale-105'
                    : 'bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                }`}
                aria-pressed={activeExample === type}
              >
                <div className="font-medium text-neutral-900 dark:text-white capitalize">{type} Preview</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  {type === 'padding' && 'Internal spacing'}
                  {type === 'margin' && 'External spacing'}
                  {type === 'gap' && 'Space between items'}
                </div>
              </button>
            ))}
          </div>
        </div>        {/* Categorized Spacing Scale */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          {Object.entries(spacingCategories).map(([category, values]) => (
            <div key={category} className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 overflow-hidden">
              <div className={`bg-gradient-to-r ${getCategoryColor(category)} p-6`}>
                <h3 className="font-heading text-xl font-bold text-white capitalize mb-2">
                  {category} Spacing
                </h3>
                <p className="text-white/90 text-sm">
                  {category === 'micro' && 'Fine adjustments and minimal spacing'}
                  {category === 'base' && 'Standard component spacing'}
                  {category === 'layout' && 'Section and component separation'}
                  {category === 'macro' && 'Page-level and major spacing'}
                </p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {values.map((spacing) => (
                    <button
                      key={spacing.name}
                      onClick={() => setSelectedSpacing(spacing.name)}
                      className={`w-full flex items-center p-4 rounded-xl border-2 transition-all ${
                        selectedSpacing === spacing.name
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg transform scale-102'
                          : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                      }`}
                      aria-label={`Select ${spacing.pixels}px spacing`}
                    >
                      <div className="flex items-center mr-4">
                        <div className="relative">
                          <div 
                            className={`bg-gradient-to-r ${getCategoryColor(category)} rounded shadow-sm`}
                            style={{ 
                              height: '12px', 
                              width: spacing.pixels === 0 ? '2px' : `${Math.min(spacing.pixels, 48)}px`
                            }}
                          />
                          {showGrid && (
                            <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-grid-pattern"></div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-bold text-lg text-neutral-900 dark:text-white">
                            {spacing.pixels}px
                          </span>
                          <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs font-mono text-neutral-600 dark:text-neutral-400">
                            {spacing.tailwind}
                          </span>
                          <span className="text-sm text-neutral-500 dark:text-neutral-400">
                            {spacing.rem}
                          </span>
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                          {spacing.usage}
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <RulerIcon className="text-neutral-400" fontSize="small" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>        {/* Live Preview Section */}
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 p-6 mb-8">
          <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white mb-6">
            Live Spacing Preview
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200">
                  {activeExample.charAt(0).toUpperCase() + activeExample.slice(1)} Example
                </h4>
                {selectedSpacingData && (
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                    {selectedSpacingData.pixels}px
                  </span>
                )}
              </div>
              
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-6 min-h-48 flex items-center justify-center">
                {activeExample === 'padding' && (
                  <div 
                    className={`bg-blue-200 dark:bg-blue-800/50 border-2 border-blue-400 dark:border-blue-600 rounded-lg transition-all duration-300 flex items-center justify-center`}
                    style={{ padding: `${selectedSpacingData?.pixels || 16}px` }}
                  >
                    <div className="bg-white dark:bg-neutral-900 rounded border-2 border-dashed border-blue-500 p-4">
                      <span className="text-neutral-900 dark:text-white font-medium">Content</span>
                    </div>
                  </div>
                )}
                
                {activeExample === 'margin' && (
                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg shadow-sm">Element 1</div>
                    <div 
                      className="bg-green-200 dark:bg-green-800/50 border-2 border-green-400 dark:border-green-600 p-4 rounded-lg transition-all duration-300"
                      style={{ margin: `${selectedSpacingData?.pixels || 16}px 0` }}
                    >
                      <span className="text-neutral-900 dark:text-white font-medium">Element with margin</span>
                    </div>
                    <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg shadow-sm">Element 3</div>
                  </div>
                )}
                
                {activeExample === 'gap' && (
                  <div 
                    className="flex items-center transition-all duration-300"
                    style={{ gap: `${selectedSpacingData?.pixels || 16}px` }}
                  >
                    <div className="bg-purple-200 dark:bg-purple-800/50 border-2 border-purple-400 dark:border-purple-600 p-4 rounded-lg">Item 1</div>
                    <div className="bg-purple-200 dark:bg-purple-800/50 border-2 border-purple-400 dark:border-purple-600 p-4 rounded-lg">Item 2</div>
                    <div className="bg-purple-200 dark:bg-purple-800/50 border-2 border-purple-400 dark:border-purple-600 p-4 rounded-lg">Item 3</div>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-4">Code Example</h4>
              <CodeSnippet 
                code={
                  activeExample === 'padding' 
                    ? `<div className="p-${selectedSpacingData?.tailwind || '4'}">
  Content with ${selectedSpacingData?.pixels || 16}px padding
</div>

<!-- Directional padding -->
<div className="pt-${selectedSpacingData?.tailwind || '4'}">Top padding</div>
<div className="pr-${selectedSpacingData?.tailwind || '4'}">Right padding</div>
<div className="pb-${selectedSpacingData?.tailwind || '4'}">Bottom padding</div>
<div className="pl-${selectedSpacingData?.tailwind || '4'}">Left padding</div>
<div className="px-${selectedSpacingData?.tailwind || '4'}">Horizontal padding</div>
<div className="py-${selectedSpacingData?.tailwind || '4'}">Vertical padding</div>`
                    : activeExample === 'margin'
                    ? `<div className="m-${selectedSpacingData?.tailwind || '4'}">
  Element with ${selectedSpacingData?.pixels || 16}px margin
</div>

<!-- Directional margin -->
<div className="mt-${selectedSpacingData?.tailwind || '4'}">Top margin</div>
<div className="mr-${selectedSpacingData?.tailwind || '4'}">Right margin</div>
<div className="mb-${selectedSpacingData?.tailwind || '4'}">Bottom margin</div>
<div className="ml-${selectedSpacingData?.tailwind || '4'}">Left margin</div>
<div className="mx-${selectedSpacingData?.tailwind || '4'}">Horizontal margin</div>
<div className="my-${selectedSpacingData?.tailwind || '4'}">Vertical margin</div>`
                    : `<div className="flex gap-${selectedSpacingData?.tailwind || '4'}">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Grid gap -->
<div className="grid grid-cols-3 gap-${selectedSpacingData?.tailwind || '4'}">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Directional gap -->
<div className="grid gap-x-${selectedSpacingData?.tailwind || '4'} gap-y-${selectedSpacingData?.tailwind || '4'}">
  Grid with ${selectedSpacingData?.pixels || 16}px gap
</div>`
                }
                language="jsx"
              />
            </div>
          </div>
        </div>        {/* Accessibility & Best Practices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Accessibility Guide */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl shadow-xl border border-green-200/50 dark:border-green-800/50 p-6">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-xl mr-4">
                <AccessibilityIcon className="text-white" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 dark:text-white">
                  Accessibility Guidelines
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  WCAG-compliant spacing recommendations
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white text-sm">
                    Touch Target Guidelines
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    Minimum 44px (space-12) for interactive elements
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white text-sm">
                    Focus Indicator Space
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    2px minimum (space-0.5) around focus outlines
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white text-sm">
                    Reading Comfort
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    16px+ (space-4) between text blocks for readability
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white text-sm">
                    Visual Hierarchy
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    Use 1.5x spacing differences to create clear levels
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 p-6">
            <h3 className="font-heading text-xl font-bold text-neutral-900 dark:text-white mb-6">
              Spacing Best Practices
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 text-lg mr-3 flex-shrink-0">✓</span>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white text-sm">
                    Use consistent scale values
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    Stick to the 4px grid system for visual consistency
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-500 text-lg mr-3 flex-shrink-0">✓</span>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white text-sm">
                    Progressive spacing increases
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    Use larger spacing between major sections
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-500 text-lg mr-3 flex-shrink-0">✓</span>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white text-sm">
                    Responsive spacing adjustments
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    Reduce spacing on smaller screens appropriately
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-red-500 text-lg mr-3 flex-shrink-0">✗</span>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white text-sm">
                    Avoid arbitrary values
                  </p>                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    Don&apos;t use custom spacing outside the scale
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-red-500 text-lg mr-3 flex-shrink-0">✗</span>
                <div>                  <p className="font-medium text-neutral-900 dark:text-white text-sm">
                    Don&apos;t overcrowd interfaces
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    Ensure adequate breathing room between elements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 p-6">
          <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white mb-6">
            Real-World Usage Examples
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card Example */}
            <div>
              <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-3">Card Layout</h4>
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
                <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                  <div className="p-6">
                    <h5 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Product Card</h5>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                      Consistent spacing creates visual hierarchy and improves readability.
                    </p>
                    <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700 flex justify-between items-center">
                      <span className="text-lg font-bold text-neutral-900 dark:text-white">$99</span>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
                  <div>Padding: p-6 (24px)</div>
                  <div>Margin bottom: mb-2, mb-4</div>
                  <div>Border spacing: pt-4</div>
                </div>
              </div>
            </div>

            {/* Form Example */}
            <div>
              <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-3">Form Layout</h4>
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
                <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                      Password
                    </label>
                    <input 
                      type="password" 
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg"
                      placeholder="Enter password"
                    />
                  </div>
                  <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium mt-6">
                    Sign In
                  </button>
                </div>
                <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
                  <div>Field spacing: space-y-4 (16px)</div>
                  <div>Label margin: mb-2 (8px)</div>
                  <div>Button margin: mt-6 (24px)</div>
                </div>
              </div>
            </div>

            {/* Navigation Example */}
            <div>
              <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-3">Navigation</h4>
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
                <div className="bg-white dark:bg-neutral-900 rounded-lg p-4">
                  <nav className="flex space-x-6">
                    <a href="#" className="px-3 py-2 text-blue-600 font-medium border-b-2 border-blue-600">
                      Home
                    </a>
                    <a href="#" className="px-3 py-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                      Products
                    </a>
                    <a href="#" className="px-3 py-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                      About
                    </a>
                    <a href="#" className="px-3 py-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                      Contact
                    </a>
                  </nav>
                </div>
                <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
                  <div>Link spacing: space-x-6 (24px)</div>
                  <div>Link padding: px-3 py-2</div>
                  <div>Touch target: 44px+ recommended</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
