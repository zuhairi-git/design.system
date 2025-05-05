'use client';

import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import CodeSnippet from '@/components/CodeSnippet';

export default function BreakpointsSection() {
  // Tailwind breakpoints
  const breakpoints = [
    { name: "Small (Mobile)", size: "< 640px", minWidth: 0, maxWidth: 639, prefix: "", example: "flex" },
    { name: "Medium (Tablet)", size: "≥ 640px", minWidth: 640, maxWidth: 767, prefix: "sm:", example: "sm:flex" },
    { name: "Medium Large", size: "≥ 768px", minWidth: 768, maxWidth: 1023, prefix: "md:", example: "md:flex" },
    { name: "Large (Laptop)", size: "≥ 1024px", minWidth: 1024, maxWidth: 1279, prefix: "lg:", example: "lg:flex" },
    { name: "X-Large (Desktop)", size: "≥ 1280px", minWidth: 1280, maxWidth: 1535, prefix: "xl:", example: "xl:flex" },
    { name: "2X-Large", size: "≥ 1536px", minWidth: 1536, maxWidth: null, prefix: "2xl:", example: "2xl:flex" },
  ];

  const responsiveExamples = {
    grid: `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
  <!-- Content adapts from 1 to 6 columns based on screen size -->
</div>`,
    visibility: `<!-- Element visible only on small screens (mobile) -->
<div class="block sm:hidden">Mobile only content</div>

<!-- Element visible only on medium screens and up -->
<div class="hidden sm:block">Content for tablets and larger</div>

<!-- Element visible only on large screens and up -->
<div class="hidden lg:block">Content for laptops and larger</div>`,
    sizing: `<img 
  class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
  src="/image.jpg" 
  alt="Responsive image"
/>`
  };

  return (
    <AnimatedSection id="breakpoints" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <span className="mr-2">📱</span> Responsive Design
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Breakpoints</h2>          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Our responsive breakpoints ensure layouts adapt seamlessly across different screen sizes, following Tailwind CSS&apos;s
            mobile-first approach.
          </p>
        </div>
        
        {/* Visual breakpoints comparison */}
        <div className="relative mb-12 bg-white/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          <div className="p-6">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6">Breakpoint Overview</h3>
            
            {/* Desktop visualization of breakpoints */}
            <div className="hidden lg:block mb-8 relative">
              <div className="h-12 bg-neutral-100 dark:bg-neutral-800 rounded-lg relative mb-2">
                {breakpoints.map((point, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <div 
                        className="absolute h-full border-l-2 border-dashed border-primary-400 dark:border-primary-600 flex flex-col items-center"
                        style={{ 
                          left: `${(point.minWidth / 1920) * 100}%`,
                          zIndex: 10
                        }}
                      >
                        <div className="absolute -top-6 transform -translate-x-1/2 bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300 py-1 px-2 rounded text-xs font-mono">
                          {point.minWidth}px
                        </div>
                      </div>
                    )}
                    
                    <div 
                      className={`absolute h-full ${index === 0 ? 'rounded-l-lg' : ''} ${index === breakpoints.length - 1 ? 'rounded-r-lg' : ''}`}
                      style={{ 
                        left: `${(point.minWidth / 1920) * 100}%`,
                        right: point.maxWidth ? `${(1 - point.maxWidth / 1920) * 100}%` : 0,
                        background: `rgba(var(--primary-rgb), ${0.1 + index * 0.1})`,
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-primary-800 dark:text-primary-200">
                        {point.prefix || 'default'}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
              
              <div className="flex justify-between mt-2 mb-6 text-xs text-neutral-500 dark:text-neutral-400 px-2">
                <div>0px</div>
                <div>1920px</div>
              </div>
              
              <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-10 rounded-lg mb-3 flex items-center">
                <div className="w-[33.33%] h-full bg-primary-200 dark:bg-primary-800 rounded-l-lg flex items-center justify-center font-mono text-xs text-primary-800 dark:text-primary-300">
                  Mobile
                </div>
                <div className="w-[33.33%] h-full bg-primary-300 dark:bg-primary-700 flex items-center justify-center font-mono text-xs text-primary-800 dark:text-primary-200">
                  Tablet
                </div>
                <div className="w-[33.33%] h-full bg-primary-400 dark:bg-primary-600 rounded-r-lg flex items-center justify-center font-mono text-xs text-white">
                  Desktop
                </div>
              </div>
            </div>
            
            {/* Responsive breakpoints table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800">
                    <th className="py-3 px-4 text-left text-neutral-800 dark:text-neutral-200 font-semibold">Breakpoint</th>
                    <th className="py-3 px-4 text-left text-neutral-800 dark:text-neutral-200 font-semibold">Screen Size</th>
                    <th className="py-3 px-4 text-left text-neutral-800 dark:text-neutral-200 font-semibold">Prefix</th>
                    <th className="py-3 px-4 text-left text-neutral-800 dark:text-neutral-200 font-semibold">Example Usage</th>
                  </tr>
                </thead>
                <tbody>
                  {breakpoints.map((bp, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <span className={`w-3 h-3 rounded-full mr-3 bg-primary-${200 + index * 100} dark:bg-primary-${900 - index * 100}`}></span>
                          <span className="font-medium text-neutral-900 dark:text-white">{bp.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono text-sm text-primary-700 dark:text-primary-400">{bp.size}</td>
                      <td className="py-3 px-4 font-mono text-sm text-accent-600 dark:text-accent-400">{bp.prefix || 'default'}</td>
                      <td className="py-3 px-4">
                        <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-sm font-mono text-primary-700 dark:text-primary-300">
                          {bp.example}
                        </code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Common responsive patterns */}
        <div className="mb-10">
          <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6">Common Responsive Patterns</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Responsive Grid */}
            <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl overflow-hidden">
              <div className="p-6">
                <h4 className="font-heading font-semibold text-lg text-neutral-950 dark:text-white mb-3">
                  <span className="mr-2">📊</span> Responsive Grid
                </h4>
                <p className="font-body text-neutral-700 dark:text-neutral-400 mb-4">
                  Adapt the number of columns based on screen width
                </p>
                
                {/* Live example */}
                <div className="mb-5 bg-neutral-100/80 dark:bg-neutral-800/80 p-4 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {Array(8).fill(null).map((_, i) => (
                      <div key={i} className="h-10 bg-primary-100 dark:bg-primary-900/40 rounded flex items-center justify-center text-primary-700 dark:text-primary-300 text-xs">
                        Item {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                
                <CodeSnippet code={responsiveExamples.grid} language="html" />
              </div>
            </div>
            
            {/* Conditional Visibility */}
            <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl overflow-hidden">
              <div className="p-6">
                <h4 className="font-heading font-semibold text-lg text-neutral-950 dark:text-white mb-3">
                  <span className="mr-2">👁️</span> Conditional Visibility
                </h4>
                <p className="font-body text-neutral-700 dark:text-neutral-400 mb-4">
                  Show or hide elements based on screen size
                </p>
                
                {/* Live example */}
                <div className="mb-5 bg-neutral-100/80 dark:bg-neutral-800/80 p-4 rounded-lg overflow-hidden">
                  <div className="block sm:hidden mb-2 bg-primary-100 dark:bg-primary-900/40 p-2 rounded text-primary-700 dark:text-primary-300 text-center">
                    Mobile only
                  </div>
                  <div className="hidden sm:block lg:hidden mb-2 bg-primary-200 dark:bg-primary-800/60 p-2 rounded text-primary-800 dark:text-primary-300 text-center">
                    Tablet only
                  </div>
                  <div className="hidden lg:block bg-primary-300 dark:bg-primary-700/60 p-2 rounded text-primary-800 dark:text-primary-200 text-center">
                    Desktop only
                  </div>
                </div>
                
                <CodeSnippet code={responsiveExamples.visibility} language="html" />
              </div>
            </div>
            
            {/* Responsive Sizing */}
            <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl overflow-hidden">
              <div className="p-6">
                <h4 className="font-heading font-semibold text-lg text-neutral-950 dark:text-white mb-3">
                  <span className="mr-2">📏</span> Responsive Sizing
                </h4>
                <p className="font-body text-neutral-700 dark:text-neutral-400 mb-4">
                  Adjust element dimensions at different breakpoints
                </p>
                
                {/* Live example */}
                <div className="mb-5 bg-neutral-100/80 dark:bg-neutral-800/80 p-4 rounded-lg overflow-hidden">
                  <div className="flex flex-col gap-3">
                    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-12 bg-primary-100 dark:bg-primary-900/40 rounded flex items-center justify-center text-primary-700 dark:text-primary-300 text-xs">
                      Responsive width
                    </div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                      ↑ Resize browser to see changes ↑
                    </div>
                  </div>
                </div>
                
                <CodeSnippet code={responsiveExamples.sizing} language="html" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile-first approach */}
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          <div className="p-6">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-4">Mobile-First Approach</h3>            <p className="text-neutral-700 dark:text-neutral-400 mb-4">
              Our design system follows Tailwind CSS&apos;s mobile-first approach, where styles are applied to mobile by default and then modified at larger breakpoints:
            </p>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="flex-1 bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
                <div className="text-center text-neutral-500 dark:text-neutral-400 text-sm mb-2">Without breakpoint prefix</div>
                <div className="text-center font-semibold text-neutral-800 dark:text-neutral-200">
                  Applies to all screen sizes
                </div>
              </div>
              <div className="text-center font-bold text-neutral-500 dark:text-neutral-400">→</div>
              <div className="flex-1 bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
                <div className="text-center text-neutral-500 dark:text-neutral-400 text-sm mb-2">With prefix (e.g., lg:)</div>
                <div className="text-center font-semibold text-neutral-800 dark:text-neutral-200">
                  Applies only at that breakpoint and above
                </div>
              </div>
            </div>
            
            <p className="text-neutral-700 dark:text-neutral-400">
              This approach allows for clean, maintainable code that builds from small screens up to larger ones, reducing CSS bloat and ensuring a consistent experience across all devices.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
