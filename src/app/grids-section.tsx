'use client';

import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import CodeSnippet from '@/components/CodeSnippet';

export default function GridsSection() {
  // Sample grid layouts to showcase
  const gridSamples = [
    {
      name: "Basic Grid",
      columns: 3,
      snippet: `<div class="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>`,
      description: "Simple equal-width columns"
    },
    {
      name: "Responsive Grid",
      columns: [1, 2, 3, 4],
      snippet: `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`,
      description: "Columns that adapt to screen size"
    },
    {
      name: "Column Spanning",
      layout: "complex",
      snippet: `<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">Span 2 columns</div>
  <div>1 column</div>
  <div>1 column</div>
  <div class="col-span-3">Full width (span 3)</div>
</div>`,
      description: "Elements that span multiple columns"
    },
    {
      name: "Auto Columns",
      layout: "auto",
      snippet: `<div class="grid grid-cols-none auto-cols-auto gap-4">
  <div class="col-start-1 col-end-3">Start at 1, end at 3</div>
  <div class="col-start-3 col-end-5">Start at 3, end at 5</div>
  <div class="col-start-1 col-end-5">Full width</div>
</div>`,
      description: "Explicit placement with auto sizing"
    }
  ];

  return (
    <AnimatedSection id="grids" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <span className="mr-2">🔲</span> Layout Structure
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Grid System</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Our grid system is built on Tailwind CSS Grid and provides flexible layouts that adapt to any screen size.
          </p>
        </div>

        {/* Grid visualization */}
        <div className="mb-12 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-4">12-Column Grid Structure</h3>
            <div className="grid grid-cols-12 gap-2 mb-8">
              {Array(12).fill(null).map((_, i) => (
                <div key={i} className="h-16 bg-primary-100 dark:bg-primary-900/40 rounded flex items-center justify-center text-primary-700 dark:text-primary-300 font-mono text-sm">
                  {i + 1}
                </div>
              ))}
            </div>
            
            <div className="mb-6">
              <h4 className="font-heading font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-3">Column-based Layout</h4>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                The 12-column grid allows for flexible division of space. Common layouts include:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    {Array(2).fill(null).map((_, i) => (
                      <div key={i} className="h-10 bg-primary-200 dark:bg-primary-800/50 rounded flex items-center justify-center text-primary-700 dark:text-primary-300 font-mono text-sm">
                        1/2
                      </div>
                    ))}
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">2-column (1:1)</p>
                </div>
                
                <div>
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    {Array(3).fill(null).map((_, i) => (
                      <div key={i} className="h-10 bg-primary-200 dark:bg-primary-800/50 rounded flex items-center justify-center text-primary-700 dark:text-primary-300 font-mono text-sm">
                        1/3
                      </div>
                    ))}
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">3-column (1:1:1)</p>
                </div>
                
                <div>
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    {Array(4).fill(null).map((_, i) => (
                      <div key={i} className="h-10 bg-primary-200 dark:bg-primary-800/50 rounded flex items-center justify-center text-primary-700 dark:text-primary-300 font-mono text-sm">
                        1/4
                      </div>
                    ))}
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">4-column (1:1:1:1)</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    <div className="col-span-1 h-10 bg-primary-200 dark:bg-primary-800/50 rounded flex items-center justify-center text-primary-700 dark:text-primary-300 font-mono text-sm">
                      1/4
                    </div>
                    <div className="col-span-3 h-10 bg-primary-300 dark:bg-primary-700/60 rounded flex items-center justify-center text-primary-800 dark:text-primary-200 font-mono text-sm">
                      3/4
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">Asymmetric (1:3)</p>
                </div>
                
                <div>
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className="col-span-2 h-10 bg-primary-300 dark:bg-primary-700/60 rounded flex items-center justify-center text-primary-800 dark:text-primary-200 font-mono text-sm">
                      2/3
                    </div>
                    <div className="col-span-1 h-10 bg-primary-200 dark:bg-primary-800/50 rounded flex items-center justify-center text-primary-700 dark:text-primary-300 font-mono text-sm">
                      1/3
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">Asymmetric (2:1)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {gridSamples.map((sample, index) => (
            <div key={index} className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-2">{sample.name}</h3>
                <p className="font-body text-neutral-700 dark:text-neutral-400 mb-4">{sample.description}</p>
                
                {/* Grid Preview */}
                <div className="mb-5 bg-neutral-100/80 dark:bg-neutral-800/80 p-4 rounded-lg overflow-hidden">
                  {sample.name === "Basic Grid" && (
                    <div className="grid grid-cols-3 gap-4">
                      {Array(3).fill(null).map((_, i) => (
                        <div key={i} className="h-16 bg-primary-100 dark:bg-primary-900/40 border border-primary-200 dark:border-primary-800/60 rounded flex items-center justify-center text-primary-700 dark:text-primary-300">
                          Column {i+1}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {sample.name === "Responsive Grid" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {Array(4).fill(null).map((_, i) => (
                        <div key={i} className="h-16 bg-primary-100 dark:bg-primary-900/40 border border-primary-200 dark:border-primary-800/60 rounded flex items-center justify-center text-primary-700 dark:text-primary-300">
                          Item {i+1}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {sample.name === "Column Spanning" && (
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 h-16 bg-primary-200 dark:bg-primary-800/60 border border-primary-300 dark:border-primary-700/60 rounded flex items-center justify-center text-primary-800 dark:text-primary-200">
                        Span 2 columns
                      </div>
                      <div className="h-16 bg-primary-100 dark:bg-primary-900/40 border border-primary-200 dark:border-primary-800/60 rounded flex items-center justify-center text-primary-700 dark:text-primary-300">
                        1 column
                      </div>
                      <div className="h-16 bg-primary-100 dark:bg-primary-900/40 border border-primary-200 dark:border-primary-800/60 rounded flex items-center justify-center text-primary-700 dark:text-primary-300">
                        1 column
                      </div>
                      <div className="col-span-3 h-16 bg-primary-300 dark:bg-primary-700/70 border border-primary-400 dark:border-primary-600/70 rounded flex items-center justify-center text-primary-900 dark:text-primary-100">
                        Full width (span 3)
                      </div>
                    </div>
                  )}
                  
                  {sample.name === "Auto Columns" && (
                    <div className="grid grid-cols-4 gap-4">
                      <div className="col-start-1 col-end-3 h-16 bg-primary-200 dark:bg-primary-800/60 border border-primary-300 dark:border-primary-700/60 rounded flex items-center justify-center text-primary-800 dark:text-primary-200">
                        Start at 1, end at 3
                      </div>
                      <div className="col-start-3 col-end-5 h-16 bg-primary-300 dark:bg-primary-700/70 border border-primary-400 dark:border-primary-600/70 rounded flex items-center justify-center text-primary-800 dark:text-primary-200">
                        Start at 3, end at 5
                      </div>
                      <div className="col-start-1 col-end-5 h-16 bg-primary-400 dark:bg-primary-600/80 border border-primary-500 dark:border-primary-500/70 rounded flex items-center justify-center text-white">
                        Full width
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Code Snippet */}
                <CodeSnippet code={sample.snippet} language="html" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Grid Utility Reference */}
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          <div className="p-6">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-4">Grid Utility Reference</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-3">Columns</h4>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start">
                    <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded font-mono text-primary-700 dark:text-primary-300 mr-2">grid-cols-{'{n}'}</code>
                    <span>Grid with n columns</span>
                  </li>
                  <li className="flex items-start">
                    <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded font-mono text-primary-700 dark:text-primary-300 mr-2">col-span-{'{n}'}</code>
                    <span>Span n columns</span>
                  </li>
                  <li className="flex items-start">
                    <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded font-mono text-primary-700 dark:text-primary-300 mr-2">col-start-{'{n}'}</code>
                    <span>Start at column n</span>
                  </li>
                  <li className="flex items-start">
                    <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded font-mono text-primary-700 dark:text-primary-300 mr-2">col-end-{'{n}'}</code>
                    <span>End at column n</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-heading font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-3">Gaps</h4>
                <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li className="flex items-start">
                    <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded font-mono text-primary-700 dark:text-primary-300 mr-2">gap-{'{size}'}</code>
                    <span>Gap between grid items</span>
                  </li>
                  <li className="flex items-start">
                    <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded font-mono text-primary-700 dark:text-primary-300 mr-2">gap-x-{'{size}'}</code>
                    <span>Horizontal gap only</span>
                  </li>
                  <li className="flex items-start">
                    <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded font-mono text-primary-700 dark:text-primary-300 mr-2">gap-y-{'{size}'}</code>
                    <span>Vertical gap only</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-heading font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-3">Best Practices</h4>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Use responsive prefixes (<code className="bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded font-mono text-primary-700 dark:text-primary-300">sm:, md:, lg:, xl:</code>) to build adaptive layouts</li>
                <li>Combine with flex utilities when needed for complex layouts</li>
                <li>Consider using auto-fit/auto-fill for dynamic column counts</li>
                <li>Keep grid structures simple and consistent across your application</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
