'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import CodeSnippet from '@/components/CodeSnippet';

// Import local images
import gridImage1 from '@/img/brooke-lark-V4MBq8kue3U-unsplash.jpg';
import gridImage2 from '@/img/brooke-lark-lcZ9NxhOSlo-unsplash.jpg';
import galleryImage1 from '@/img/brooke-lark-pXEsx3kRuNc-unsplash.jpg';
import galleryImage2 from '@/img/brooke-lark-GTMGG-xvxdU-unsplash.jpg';
import galleryImage3 from '@/img/brooke-lark-rS26chimPaA-unsplash.jpg';
import galleryImage4 from '@/img/brooke-lark-lcZ9NxhOSlo-unsplash.jpg';

export default function GridsSection() {
  // Advanced grid layouts with visual harmony focus
  const gridSamples = [
    {
      name: "Balanced Grid",
      category: "foundation",
      icon: "📊",
      snippet: `<div class="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>`,
      description: "Harmonious equal-width columns for balanced content"
    },
    {
      name: "Adaptive Grid",
      category: "responsive",
      icon: "📱",
      snippet: `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`,
      description: "Fluid columns that gracefully adapt to any viewport"
    },
    {
      name: "Focal Grid",
      category: "advanced",
      icon: "🔍",
      snippet: `<div class="grid grid-cols-6 gap-4">
  <div class="col-span-4">Primary content focus</div>
  <div class="col-span-2">Secondary content</div>
  <div class="col-span-3">Featured item</div>
  <div class="col-span-3">Supporting content</div>
  <div class="col-span-6">Full-width footer</div>
</div>`,
      description: "Creates visual hierarchy with intentional column spans"
    },
    {
      name: "Precision Grid",
      category: "expert",
      icon: "⚙️",
      snippet: `<div class="grid grid-cols-12 gap-4">
  <div class="col-start-1 col-end-9">Main content (spans 8/12)</div>
  <div class="col-start-9 col-end-13">Sidebar (spans 4/12)</div>
  <div class="col-start-1 col-end-5">Feature box</div>
  <div class="col-start-5 col-end-13">Extended content</div>
</div>`,
      description: "Precise control with golden ratio proportions"
    },
    {
      name: "Dynamic Grid",
      category: "modern",
      icon: "✨",
      snippet: `<div class="grid grid-cols-none grid-flow-dense auto-cols-fr gap-4">
  <div class="col-span-2">Featured content</div>
  <div>Standard item</div>
  <div class="col-span-3">Showcase element</div>
  <div>Standard item</div>
  <div>Standard item</div>
</div>`,
      description: "Flow-based layout that naturally fills available space"
    }
  ];
  return (
    <AnimatedSection id="grids" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-white to-neutral-50/50 dark:from-neutral-900 dark:to-neutral-950/80" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 mb-5 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm backdrop-blur-sm">
            <span className="mr-2">✨</span> Layout Structure
          </div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-950 dark:text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600">Harmonious</span> Grid System
          </h2>
          
          <p className="font-body text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl leading-relaxed mb-8">
            A grid system creates the invisible architecture that brings visual <span className="italic">harmony</span> and <span className="italic">balance</span> to your layouts. 
            It's the foundation that enables both aesthetic beauty and functional clarity.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="flex-1 flex flex-col transform transition-all duration-500 hover:translate-y-[-5px]">
              <div className="bg-white/90 dark:bg-neutral-900/90 rounded-xl mb-4 overflow-hidden shadow-md relative group h-64 sm:h-72">
                <div className="absolute inset-0 bg-gradient-to-br from-error-100/40 to-error-300/40 dark:from-error-900/40 dark:to-error-800/30 z-10"></div>
                <Image 
                  src={gridImage1}
                  alt="Content without grid structure" 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col p-6 z-20">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="bg-white/90 dark:bg-neutral-800/90 p-3 mb-3 rounded-lg shadow-sm w-[80%] transform -rotate-1">News headline with inconsistent sizing</div>
                      <div className="flex mb-3 gap-3">
                        <div className="bg-white/90 dark:bg-neutral-800/90 p-3 rounded-lg shadow-sm w-1/3 transform rotate-1">Image</div>
                        <div className="bg-white/90 dark:bg-neutral-800/90 p-3 rounded-lg shadow-sm w-1/2 transform -rotate-[0.5deg]">Misaligned text</div>
                      </div>
                    </div>
                    <div>
                      <div className="bg-white/90 dark:bg-neutral-800/90 p-3 rounded-lg shadow-sm mb-3 transform rotate-[0.5deg]">Inconsistent spacing</div>
                      <div className="bg-white/90 dark:bg-neutral-800/90 p-3 rounded-lg shadow-sm w-[70%] ml-auto transform -rotate-1">Poor alignment</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-30">
                  <span className="bg-error-50 text-error-600 dark:bg-error-900/70 dark:text-error-200 text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                    Unbalanced
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200">Without a Grid System</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Visual discord and misalignment</p>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col transform transition-all duration-500 hover:translate-y-[-5px]">
              <div className="bg-white/90 dark:bg-neutral-900/90 rounded-xl mb-4 overflow-hidden shadow-md relative group h-64 sm:h-72">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/40 to-primary-300/40 dark:from-primary-900/40 dark:to-primary-800/30 z-10"></div>
                <Image 
                  src={gridImage2}
                  alt="Content with grid structure" 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 z-20">
                  <div className="grid grid-cols-12 grid-rows-6 h-full gap-1 p-2 pointer-events-none">
                    {Array(12*6).fill(null).map((_, i) => (
                      <div key={i} className="border border-dashed border-primary-400/20 dark:border-primary-300/10 rounded-sm"></div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-black/15 p-6">
                    <div className="grid grid-cols-12 h-full gap-3">
                      <div className="col-span-12 flex items-start">
                        <div className="bg-white/95 dark:bg-neutral-800/95 p-3 rounded-lg shadow-sm w-10/12 mx-auto text-center">Perfectly aligned headline</div>
                      </div>
                      <div className="col-span-8 flex items-center justify-center">
                        <div className="bg-white/95 dark:bg-neutral-800/95 p-3 rounded-lg shadow-sm w-full h-full flex items-center justify-center">Primary content</div>
                      </div>
                      <div className="col-span-4 flex items-center">
                        <div className="bg-white/95 dark:bg-neutral-800/95 p-3 rounded-lg shadow-sm w-full h-full flex items-center justify-center">Sidebar</div>
                      </div>
                      <div className="col-span-12 flex items-end">
                        <div className="bg-white/95 dark:bg-neutral-800/95 p-3 rounded-lg shadow-sm w-full text-center">Consistent spacing and perfect alignment</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-30">
                  <span className="bg-primary-50 text-primary-700 dark:bg-primary-900/70 dark:text-primary-200 text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                    Harmonious
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200">With a Grid System</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">Visual rhythm and balanced proportions</p>
              </div>
            </div>
          </div>
        </div>        {/* Golden ratio grid system explanation */}
        <div className="mb-16 overflow-hidden">
          <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-800/70">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-heading font-semibold text-2xl text-neutral-950 dark:text-white mb-4 flex items-center">
                  <span className="inline-block w-8 h-8 bg-primary-100 dark:bg-primary-900/70 rounded-full flex items-center justify-center text-primary-700 dark:text-primary-300 mr-3 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                  </span>
                  The 12-Column Harmony
                </h3>
                
                <div className="pl-11">
                  <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                    Our system divides the canvas into 12 equal columns—a number chosen for its exceptional <em>mathematical harmony</em>. Being divisible by 2, 3, 4, and 6, it enables balanced layouts with countless proportional possibilities.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center">
                      <div className="w-12 h-1.5 bg-primary-500/80 dark:bg-primary-400/80 rounded-full mr-3"></div>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">Divisible by 2: creates 6 equal sections</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-1.5 bg-primary-500/80 dark:bg-primary-400/80 rounded-full mr-3"></div>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">Divisible by 3: creates 4 equal sections</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-1.5 bg-primary-500/80 dark:bg-primary-400/80 rounded-full mr-3"></div>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">Divisible by 4: creates 3 equal sections</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-1.5 bg-primary-500/80 dark:bg-primary-400/80 rounded-full mr-3"></div>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">Divisible by 6: creates 2 equal sections</span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/40 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                    Perfect for proportional layouts and golden ratio designs
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 p-6 shadow-inner">
                  <div className="grid grid-cols-12 gap-2 mb-8">
                    {Array(12).fill(null).map((_, i) => (
                      <div key={i} className="h-14 bg-gradient-to-b from-primary-100 to-primary-200 dark:from-primary-900/60 dark:to-primary-800/60 rounded-md flex items-center justify-center text-primary-800 dark:text-primary-200 font-medium text-sm shadow-sm border border-primary-200/50 dark:border-primary-700/30">
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Two Equal Sections (6:6)</h5>
                        <span className="text-xs text-primary-600 dark:text-primary-400">Balance</span>
                      </div>
                      <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-6 h-10 bg-gradient-to-r from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-700 rounded-md flex items-center justify-center text-primary-800 dark:text-primary-200 text-sm shadow-sm">
                          6 columns
                        </div>
                        <div className="col-span-6 h-10 bg-gradient-to-r from-primary-300 to-primary-200 dark:from-primary-700 dark:to-primary-800 rounded-md flex items-center justify-center text-primary-800 dark:text-primary-200 text-sm shadow-sm">
                          6 columns
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Golden Ratio (8:4)</h5>
                        <span className="text-xs text-primary-600 dark:text-primary-400">Harmony</span>
                      </div>
                      <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-8 h-10 bg-gradient-to-r from-primary-300 to-primary-400 dark:from-primary-700 dark:to-primary-600 rounded-md flex items-center justify-center text-white shadow-sm">
                          Main Content (8 columns)
                        </div>
                        <div className="col-span-4 h-10 bg-gradient-to-r from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-700 rounded-md flex items-center justify-center text-primary-800 dark:text-primary-200 text-sm shadow-sm">
                          Sidebar
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Three Equal Columns (4:4:4)</h5>
                        <span className="text-xs text-primary-600 dark:text-primary-400">Rhythm</span>
                      </div>
                      <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-4 h-10 bg-gradient-to-b from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-700 rounded-md flex items-center justify-center text-primary-800 dark:text-primary-200 text-sm shadow-sm">
                          First
                        </div>
                        <div className="col-span-4 h-10 bg-gradient-to-b from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-700 rounded-md flex items-center justify-center text-primary-800 dark:text-primary-200 text-sm shadow-sm">
                          Second
                        </div>
                        <div className="col-span-4 h-10 bg-gradient-to-b from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-700 rounded-md flex items-center justify-center text-primary-800 dark:text-primary-200 text-sm shadow-sm">
                          Third
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Real-world grid examples */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="font-heading font-semibold text-2xl md:text-3xl text-neutral-950 dark:text-white mb-4">Visual Harmony in Practice</h3>
            <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              From digital layouts to architectural design, grid systems provide the underlying structure that creates visual balance.
              Here's how different grid arrangements create distinct visual experiences:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/90 dark:bg-neutral-900/90 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100 dark:border-neutral-800/70 hover:-translate-y-1">
              <div className="p-6">
                <div className="inline-flex items-center px-2.5 py-1 mb-3 text-xs font-medium rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  Content-focused
                </div>
                <h4 className="font-medium text-lg text-neutral-900 dark:text-white mb-3">Magazine Layout</h4>
                <div className="aspect-[4/3] bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 mb-3">
                  <div className="grid grid-cols-6 gap-3 h-full">
                    <div className="col-span-6 p-4 h-1/4 bg-blue-100 dark:bg-blue-900/40 rounded-md flex items-center justify-center text-blue-800 dark:text-blue-300 text-sm">
                      Featured Article Header
                    </div>
                    <div className="col-span-4 h-2/4 bg-blue-200 dark:bg-blue-800/50 rounded-md flex items-center justify-center text-blue-800 dark:text-blue-300">
                      Main Story
                    </div>
                    <div className="col-span-2 h-2/4 bg-blue-100 dark:bg-blue-900/40 rounded-md flex flex-col p-2 text-xs text-blue-800 dark:text-blue-300">
                      <div className="h-1/3 mb-1 bg-blue-50 dark:bg-blue-950/50 rounded"></div>
                      <div className="h-1/3 mb-1 bg-blue-50 dark:bg-blue-950/50 rounded"></div>
                      <div className="h-1/3 bg-blue-50 dark:bg-blue-950/50 rounded"></div>
                    </div>
                    <div className="col-span-6 h-1/4 bg-blue-300 dark:bg-blue-700/60 rounded-md grid grid-cols-3 gap-2 p-2">
                      <div className="bg-blue-200/70 dark:bg-blue-800/70 rounded"></div>
                      <div className="bg-blue-200/70 dark:bg-blue-800/70 rounded"></div>
                      <div className="bg-blue-200/70 dark:bg-blue-800/70 rounded"></div>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Feature-driven layout with clear hierarchy emphasizing the main story while providing easy access to supporting content.
                </p>
              </div>
            </div>
          
            <div className="group bg-white/90 dark:bg-neutral-900/90 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100 dark:border-neutral-800/70 hover:-translate-y-1">
              <div className="p-6">
                <div className="inline-flex items-center px-2.5 py-1 mb-3 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  Product-focused
                </div>
                <h4 className="font-medium text-lg text-neutral-900 dark:text-white mb-3">E-commerce Grid</h4>
                <div className="aspect-[4/3] bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 mb-3">
                  <div className="grid grid-cols-4 gap-3 h-full">
                    <div className="col-span-4 p-4 h-1/5 bg-emerald-100 dark:bg-emerald-900/40 rounded-md flex items-center justify-center text-emerald-800 dark:text-emerald-300 text-sm">
                      Category Filter Bar
                    </div>
                    
                    {Array(8).fill(null).map((_, i) => (
                      <div key={i} className="bg-emerald-200 dark:bg-emerald-800/40 rounded-md flex flex-col overflow-hidden">
                        <div className="h-3/5 bg-emerald-300/50 dark:bg-emerald-700/50"></div>
                        <div className="p-2">
                          <div className="h-2 w-3/4 bg-emerald-100 dark:bg-emerald-900/60 rounded-full mb-1"></div>
                          <div className="h-2 w-1/2 bg-emerald-100 dark:bg-emerald-900/60 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Product grid that creates visual rhythm through repetition while maintaining flexibility for various screen sizes.
                </p>
              </div>
            </div>
          
            <div className="group bg-white/90 dark:bg-neutral-900/90 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100 dark:border-neutral-800/70 hover:-translate-y-1">
              <div className="p-6">
                <div className="inline-flex items-center px-2.5 py-1 mb-3 text-xs font-medium rounded-full bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                  Media-focused
                </div>
                <h4 className="font-medium text-lg text-neutral-900 dark:text-white mb-3">Photo Gallery</h4>
                <div className="aspect-[4/3] bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 mb-3">
                  <div className="grid grid-cols-4 gap-2 h-full">
                    {[galleryImage1, galleryImage2, galleryImage3, galleryImage4].map((img, i) => (
                      <div key={i} className="col-span-2 bg-purple-200 dark:bg-purple-900/40 rounded-md overflow-hidden relative group/img">
                        <Image 
                          src={img} 
                          alt={`Gallery image ${i+1}`} 
                          className="object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out"
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-2">
                          <span className="text-white text-xs">Photo {i+1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  Visual grid that creates an immersive gallery experience with equal focus on each image while maintaining visual harmony.
                </p>
              </div>
            </div>
          </div>
        </div>        {/* Adaptive layouts section */}
        <div className="mb-16">
          <div className="relative px-6 py-12 rounded-3xl overflow-hidden bg-gradient-to-br from-primary-50/90 to-primary-100/90 dark:from-primary-900/30 dark:to-primary-800/20 border border-primary-200/40 dark:border-primary-800/30 shadow-lg">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5">
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-12">
                {Array(6*12).fill(null).map((_, i) => (
                  <div key={i} className="border border-primary-300/20 dark:border-primary-700/20"></div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-white/70 dark:bg-neutral-900/70 rounded-full shadow-sm backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                  Responsive Harmony
                </div>
                
                <h3 className="font-heading font-semibold text-2xl md:text-3xl text-neutral-950 dark:text-white mb-4">
                  Fluid Harmony Across All Devices
                </h3>
                
                <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                  Like a musical composition that adapts to different venues, our responsive grid system automatically 
                  transforms to create visual harmony on any screen size.
                </p>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 transform transition-transform hover:translate-y-[-5px] duration-500">
                  <div className="bg-white/90 dark:bg-neutral-900/90 rounded-xl shadow-lg p-4 h-full">
                    <div className="relative bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 p-5 rounded-lg">
                      <div className="absolute top-3 right-3">
                        <span className="bg-primary-50 text-primary-700 dark:bg-primary-900/70 dark:text-primary-200 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                          Mobile
                        </span>
                      </div>
                      
                      <div className="w-36 h-64 mx-auto bg-neutral-900 dark:bg-neutral-950 rounded-2xl shadow-lg p-1.5 overflow-hidden">
                        <div className="bg-white dark:bg-neutral-900 h-full w-full rounded-lg p-1.5 overflow-y-auto">
                          <div className="grid grid-cols-1 gap-3">
                            <div className="h-10 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/60 dark:to-primary-800/60 rounded-md shadow-sm"></div>
                            <div className="h-16 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded-md shadow-sm"></div>
                            <div className="h-16 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded-md shadow-sm"></div>
                            <div className="h-16 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded-md shadow-sm"></div>
                            <div className="h-16 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded-md shadow-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <h4 className="font-medium text-neutral-800 dark:text-neutral-200 text-sm">
                          Simplified Single Column
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-400 text-xs mt-1">
                          Easy scrolling for small screens
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 transform transition-transform hover:translate-y-[-5px] duration-500">
                  <div className="bg-white/90 dark:bg-neutral-900/90 rounded-xl shadow-lg p-4 h-full">
                    <div className="relative bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 p-5 rounded-lg">
                      <div className="absolute top-3 right-3">
                        <span className="bg-primary-50 text-primary-700 dark:bg-primary-900/70 dark:text-primary-200 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                          Tablet
                        </span>
                      </div>
                      
                      <div className="w-48 h-64 mx-auto bg-neutral-900 dark:bg-neutral-950 rounded-lg shadow-lg p-1.5 overflow-hidden">
                        <div className="bg-white dark:bg-neutral-900 h-full w-full rounded-md p-1.5 overflow-y-auto">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="col-span-2 h-10 bg-gradient-to-r from-primary-200 to-primary-300 dark:from-primary-800/60 dark:to-primary-700/60 rounded-md shadow-sm"></div>
                            <div className="h-14 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded-md shadow-sm"></div>
                            <div className="h-14 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded-md shadow-sm"></div>
                            <div className="h-14 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded-md shadow-sm"></div>
                            <div className="h-14 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded-md shadow-sm"></div>
                            <div className="col-span-2 h-10 bg-gradient-to-r from-primary-200 to-primary-300 dark:from-primary-800/60 dark:to-primary-700/60 rounded-md shadow-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <h4 className="font-medium text-neutral-800 dark:text-neutral-200 text-sm">
                          Balanced Dual-Column
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-400 text-xs mt-1">
                          Strategic two-column layout
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 transform transition-transform hover:translate-y-[-5px] duration-500">
                  <div className="bg-white/90 dark:bg-neutral-900/90 rounded-xl shadow-lg p-4 h-full">
                    <div className="relative bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 p-5 rounded-lg">
                      <div className="absolute top-3 right-3">
                        <span className="bg-primary-50 text-primary-700 dark:bg-primary-900/70 dark:text-primary-200 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                          Desktop
                        </span>
                      </div>
                      
                      <div className="h-64 mx-auto bg-neutral-900 dark:bg-neutral-950 rounded shadow-lg p-1.5 overflow-hidden">
                        <div className="bg-white dark:bg-neutral-900 h-full w-full rounded p-1.5 overflow-y-auto">
                          <div className="grid grid-cols-4 gap-2">
                            <div className="col-span-4 h-8 bg-gradient-to-r from-primary-300 to-primary-400 dark:from-primary-700/60 dark:to-primary-600/60 rounded shadow-sm"></div>
                            <div className="h-12 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded shadow-sm"></div>
                            <div className="h-12 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded shadow-sm"></div>
                            <div className="h-12 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded shadow-sm"></div>
                            <div className="h-12 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded shadow-sm"></div>
                            <div className="h-12 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded shadow-sm"></div>
                            <div className="h-12 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded shadow-sm"></div>
                            <div className="h-12 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded shadow-sm"></div>
                            <div className="h-12 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-950/60 dark:to-primary-900/60 rounded shadow-sm"></div>
                            <div className="col-span-4 h-8 bg-gradient-to-r from-primary-200 to-primary-300 dark:from-primary-800/60 dark:to-primary-700/60 rounded shadow-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <h4 className="font-medium text-neutral-800 dark:text-neutral-200 text-sm">
                          Rich Multi-Column
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-400 text-xs mt-1">
                          Expansive layout for larger screens
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-white/80 dark:bg-neutral-800/80 rounded-xl p-6 shadow-md backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/60 flex items-center justify-center shadow-inner">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary-700 dark:text-primary-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="font-medium text-lg text-neutral-900 dark:text-white mb-3">Adaptive Harmony</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      Our responsive grid system intelligently adapts to create the most visually harmonious layout for each device:
                    </p>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-gradient-to-r from-primary-50 to-white dark:from-primary-900/30 dark:to-neutral-800/50 p-3 rounded">
                        <h4 className="text-primary-700 dark:text-primary-300 font-medium text-sm">Mobile Experience</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">Streamlined single column focuses attention on content hierarchy</p>
                      </div>
                      <div className="bg-gradient-to-r from-primary-50 to-white dark:from-primary-900/30 dark:to-neutral-800/50 p-3 rounded">
                        <h4 className="text-primary-700 dark:text-primary-300 font-medium text-sm">Tablet Experience</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">Balanced dual-column creates visual rhythm without overwhelming</p>
                      </div>
                      <div className="bg-gradient-to-r from-primary-50 to-white dark:from-primary-900/30 dark:to-neutral-800/50 p-3 rounded">
                        <h4 className="text-primary-700 dark:text-primary-300 font-medium text-sm">Desktop Experience</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">Multi-column layouts leverage the full canvas for rich experiences</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* Advanced Grid Patterns */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/40 rounded-full shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
              </svg>
              Grid Patterns
            </div>
            <h3 className="font-heading font-semibold text-2xl md:text-3xl text-neutral-950 dark:text-white mb-4">
              Harmonious Grid Solutions
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
              These grid patterns showcase the versatility of our system, each designed to bring visual harmony to different 
              types of content while maintaining a cohesive design language.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {gridSamples.map((sample, index) => (
              <div key={index} className="group bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-100 dark:border-neutral-800/70 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="h-1.5 bg-gradient-to-r from-primary-300 to-primary-500 dark:from-primary-700 dark:to-primary-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/60 shadow-sm flex items-center justify-center mr-3">
                      <span className="text-lg text-primary-600 dark:text-primary-400">{sample.icon}</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mb-1">
                        {sample.category}
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-neutral-950 dark:text-white">{sample.name}</h3>
                    </div>
                  </div>
                  
                  <p className="font-body text-neutral-700 dark:text-neutral-400 mb-5 leading-relaxed">{sample.description}</p>
                  
                  {/* Grid Preview */}
                  <div className="mb-5 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800/80 dark:to-neutral-900 p-5 rounded-lg overflow-hidden border border-neutral-200/80 dark:border-neutral-700/30 shadow-inner">
                    {sample.name === "Balanced Grid" && (
                      <div className="grid grid-cols-3 gap-4">
                        {Array(3).fill(null).map((_, i) => (
                          <div key={i} className="h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 border border-primary-200/50 dark:border-primary-800/40 rounded-md flex items-center justify-center text-primary-700 dark:text-primary-300 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                            <span className="font-medium">Column {i+1}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {sample.name === "Adaptive Grid" && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {Array(6).fill(null).map((_, i) => (
                          <div key={i} className="h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 border border-primary-200/50 dark:border-primary-800/40 rounded-md flex items-center justify-center text-primary-700 dark:text-primary-300 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                            <span className="font-medium">Item {i+1}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {sample.name === "Focal Grid" && (
                      <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-4 h-12 bg-gradient-to-br from-primary-300 to-primary-400 dark:from-primary-700/70 dark:to-primary-600/70 border border-primary-400/50 dark:border-primary-700/40 rounded-md flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                          <span className="font-medium">Primary content</span>
                        </div>
                        <div className="col-span-2 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 border border-primary-200/50 dark:border-primary-800/40 rounded-md flex items-center justify-center text-primary-700 dark:text-primary-300 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                          <span className="font-medium">Secondary</span>
                        </div>
                        <div className="col-span-3 h-12 bg-gradient-to-br from-primary-200 to-primary-300 dark:from-primary-800/60 dark:to-primary-700/60 border border-primary-300/50 dark:border-primary-700/40 rounded-md flex items-center justify-center text-primary-800 dark:text-primary-200 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                          <span className="font-medium">Featured</span>
                        </div>
                        <div className="col-span-3 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 border border-primary-200/50 dark:border-primary-800/40 rounded-md flex items-center justify-center text-primary-700 dark:text-primary-300 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                          <span className="font-medium">Supporting</span>
                        </div>
                      </div>
                    )}
                    
                    {sample.name === "Precision Grid" && (
                      <div className="grid grid-cols-12 gap-3">
                        <div className="col-start-1 col-end-9 h-12 bg-gradient-to-br from-primary-200 to-primary-300 dark:from-primary-800/60 dark:to-primary-700/60 border border-primary-300/50 dark:border-primary-700/40 rounded-md flex items-center justify-center text-primary-800 dark:text-primary-200 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                          <span className="font-medium text-sm">Main content (spans 8/12)</span>
                        </div>
                        <div className="col-start-9 col-end-13 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 border border-primary-200/50 dark:border-primary-800/40 rounded-md flex items-center justify-center text-primary-700 dark:text-primary-300 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                          <span className="font-medium text-sm">Sidebar</span>
                        </div>
                        <div className="col-start-1 col-end-5 h-12 bg-gradient-to-br from-primary-300 to-primary-400 dark:from-primary-700/70 dark:to-primary-600/70 border border-primary-400/50 dark:border-primary-700/40 rounded-md flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                          <span className="font-medium text-sm">Feature box</span>
                        </div>
                        <div className="col-start-5 col-end-13 h-12 bg-gradient-to-br from-primary-200 to-primary-300 dark:from-primary-800/60 dark:to-primary-700/60 border border-primary-300/50 dark:border-primary-700/40 rounded-md flex items-center justify-center text-primary-800 dark:text-primary-200 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                          <span className="font-medium text-sm">Extended content</span>
                        </div>
                      </div>
                    )}
                    
                    {sample.name === "Dynamic Grid" && (
                      <div className="grid grid-cols-3 grid-flow-dense gap-3">
                        <div className="col-span-2 h-12 bg-gradient-to-br from-primary-300 to-primary-400 dark:from-primary-700/70 dark:to-primary-600/70 border border-primary-400/50 dark:border-primary-700/40 rounded-md flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                          <span className="font-medium">Featured content</span>
                        </div>
                        <div className="h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 border border-primary-200/50 dark:border-primary-800/40 rounded-md flex items-center justify-center text-primary-700 dark:text-primary-300 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                          <span className="font-medium">Standard</span>
                        </div>
                        <div className="col-span-3 h-12 bg-gradient-to-br from-primary-200 to-primary-300 dark:from-primary-800/60 dark:to-primary-700/60 border border-primary-300/50 dark:border-primary-700/40 rounded-md flex items-center justify-center text-primary-800 dark:text-primary-200 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                          <span className="font-medium">Showcase element</span>
                        </div>
                        <div className="h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 border border-primary-200/50 dark:border-primary-800/40 rounded-md flex items-center justify-center text-primary-700 dark:text-primary-300 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                          <span className="font-medium">Standard</span>
                        </div>
                        <div className="h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 border border-primary-200/50 dark:border-primary-800/40 rounded-md flex items-center justify-center text-primary-700 dark:text-primary-300 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                          <span className="font-medium">Standard</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Code Snippet */}
                  <div className="relative">
                    <div className="absolute -top-4 -right-4 transform rotate-12 bg-primary-50 dark:bg-primary-900/40 px-2 py-1 text-xs font-semibold text-primary-700 dark:text-primary-300 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Code
                    </div>
                    <div className="overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-700/70 transition-all duration-500 max-h-0 group-hover:max-h-60">
                      <CodeSnippet code={sample.snippet} language="html" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
          {/* Design Principles Section */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-white to-primary-50/80 dark:from-neutral-900 dark:to-primary-900/20 rounded-2xl p-8 lg:p-10 shadow-lg border border-primary-100/60 dark:border-primary-800/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <div className="absolute right-0 top-0 w-full h-full bg-grid-pattern-light dark:bg-grid-pattern-dark transform rotate-12 scale-150 translate-x-1/4 -translate-y-1/4"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
                <div className="md:w-1/3">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-white dark:bg-neutral-800 rounded-full shadow-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 md:w-16 md:h-16 text-primary-500 dark:text-primary-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="font-heading font-semibold text-2xl md:text-3xl text-neutral-950 dark:text-white mb-4 text-center md:text-left">The Art of Grid Design</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    A harmonious grid system isn't just about technical implementation—it's about creating visual rhythm and balance 
                    that guides the user's eye naturally through the content. The principles below will help you create designs that feel 
                    intentional, refined, and emotionally resonant.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/80 dark:bg-neutral-900/80 rounded-xl p-6 shadow-md backdrop-blur-sm transform transition hover:translate-y-[-5px] duration-500">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-4 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-700 dark:text-primary-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-lg text-neutral-900 dark:text-white mb-3">Balance</h4>
                  <ul className="space-y-2 text-neutral-700 dark:text-neutral-400">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      Distribute visual weight evenly
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      Create symmetry for formal designs
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      Use balanced asymmetry for dynamic layouts
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/80 dark:bg-neutral-900/80 rounded-xl p-6 shadow-md backdrop-blur-sm transform transition hover:translate-y-[-5px] duration-500">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-4 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-700 dark:text-primary-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-lg text-neutral-900 dark:text-white mb-3">Proportion</h4>
                  <ul className="space-y-2 text-neutral-700 dark:text-neutral-400">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      Use the golden ratio (1:1.618) for natural harmony
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      Size elements according to their importance
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      Maintain consistent proportions across sections
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/80 dark:bg-neutral-900/80 rounded-xl p-6 shadow-md backdrop-blur-sm transform transition hover:translate-y-[-5px] duration-500">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-4 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-700 dark:text-primary-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-lg text-neutral-900 dark:text-white mb-3">White Space</h4>
                  <ul className="space-y-2 text-neutral-700 dark:text-neutral-400">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      Use breathing room between elements
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      Create hierarchy through varied spacing
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      Embrace negative space for elegance
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 md:mt-12 bg-primary-50/80 dark:bg-primary-900/30 rounded-xl p-5 border border-primary-100 dark:border-primary-800/30">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-white/90 dark:bg-neutral-800/90 flex items-center justify-center shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-600 dark:text-primary-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-neutral-900 dark:text-white mb-2 text-center md:text-left">Designer's Insight</h4>
                    <p className="text-neutral-700 dark:text-neutral-300 italic">
                      "The most sophisticated designs often appear simple—they achieve harmony through disciplined use of grid systems. 
                      Their elegance comes not from adding more elements, but from finding the perfect placement for every essential one."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Developer Tools Section */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800/60 rounded-2xl shadow-lg overflow-hidden border border-neutral-200/70 dark:border-neutral-700/40">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full text-primary-500/20 dark:text-primary-300/10" fill="currentColor">
                <rect x="0" y="0" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="1" />
                <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
                <rect x="50" y="0" width="50" height="100" fill="none" stroke="currentColor" strokeWidth="1" />
                <rect x="0" y="50" width="100" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            
            <div className="relative p-8 lg:p-10">
              <div className="flex items-center justify-center md:justify-start mb-8">
                <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-lg shadow-md p-2.5 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-primary-600 dark:text-primary-400">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Developer Resources</div>
                  <h3 className="font-heading font-semibold text-2xl text-neutral-900 dark:text-white">Grid System Implementation</h3>
                </div>
              </div>
              
              <div className="md:ml-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7">
                    <div className="bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm rounded-xl p-6 border border-neutral-200/80 dark:border-neutral-800/50 shadow-sm">
                      <h4 className="font-medium text-lg text-neutral-900 dark:text-white mb-4 flex items-center">
                        <span className="w-6 h-6 inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900/60 rounded text-primary-700 dark:text-primary-300 mr-2 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                          </svg>
                        </span>
                        Tailwind CSS Grid Classes
                      </h4>
                      
                      <div className="space-y-4 mb-5">
                        <div className="grid grid-cols-12 gap-2">
                          <div className="col-span-4 bg-neutral-100 dark:bg-neutral-800 rounded-md p-3 shadow-sm">
                            <code className="text-xs md:text-sm font-mono text-primary-700 dark:text-primary-300">grid-cols-{'{n}'}</code>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1.5">Define grid with n equal columns</p>
                          </div>
                          <div className="col-span-4 bg-neutral-100 dark:bg-neutral-800 rounded-md p-3 shadow-sm">
                            <code className="text-xs md:text-sm font-mono text-primary-700 dark:text-primary-300">col-span-{'{n}'}</code>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1.5">Make element span n columns</p>
                          </div>
                          <div className="col-span-4 bg-neutral-100 dark:bg-neutral-800 rounded-md p-3 shadow-sm">
                            <code className="text-xs md:text-sm font-mono text-primary-700 dark:text-primary-300">col-start-{'{n}'}</code>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1.5">Start element at column n</p>
                          </div>
                          <div className="col-span-4 bg-neutral-100 dark:bg-neutral-800 rounded-md p-3 shadow-sm">
                            <code className="text-xs md:text-sm font-mono text-primary-700 dark:text-primary-300">col-end-{'{n}'}</code>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1.5">End element at column n</p>
                          </div>
                          <div className="col-span-4 bg-neutral-100 dark:bg-neutral-800 rounded-md p-3 shadow-sm">
                            <code className="text-xs md:text-sm font-mono text-primary-700 dark:text-primary-300">gap-{'{size}'}</code>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1.5">Set grid item spacing</p>
                          </div>
                          <div className="col-span-4 bg-neutral-100 dark:bg-neutral-800 rounded-md p-3 shadow-sm">
                            <code className="text-xs md:text-sm font-mono text-primary-700 dark:text-primary-300">auto-cols-{'{type}'}</code>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1.5">Auto-size column width</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-neutral-50 dark:bg-neutral-800/80 rounded-lg p-4 border border-neutral-200/80 dark:border-neutral-700/50">
                        <h5 className="font-medium text-neutral-900 dark:text-white mb-2 text-sm">Responsive Grid Implementation</h5>
                        <pre className="bg-neutral-100 dark:bg-neutral-900 p-3 rounded text-xs overflow-x-auto">
                          <code className="text-neutral-800 dark:text-neutral-300 font-mono">
                            &lt;div class=&quot;grid <span className="text-primary-600 dark:text-primary-400">grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4</span>&quot;&gt;
                              <span className="text-neutral-500 dark:text-neutral-400">  &lt;!-- Grid items adjust automatically to screen size --&gt;</span>
                            &lt;/div&gt;
                          </code>
                        </pre>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <a href="#" className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors">
                        <span>View complete documentation</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-5">
                    <div className="h-full flex flex-col">
                      <div className="bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm rounded-xl p-6 flex-1 border border-neutral-200/80 dark:border-neutral-800/50 shadow-sm">
                        <h4 className="font-medium text-lg text-neutral-900 dark:text-white mb-4 flex items-center">
                          <span className="w-6 h-6 inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900/60 rounded text-primary-700 dark:text-primary-300 mr-2 text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                            </svg>
                          </span>
                          Engineering Best Practices
                        </h4>
                        
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300 mr-3 flex-shrink-0 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <div>
                              <h5 className="font-medium text-neutral-900 dark:text-white text-sm">Use responsive prefixes strategically</h5>
                              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Plan your layout for all breakpoints: <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-1 rounded">sm:, md:, lg:, xl:</code></p>
                            </div>
                          </li>
                          
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300 mr-3 flex-shrink-0 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <div>
                              <h5 className="font-medium text-neutral-900 dark:text-white text-sm">Combine with Flexbox when needed</h5>
                              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Use Grid for layout structure and Flexbox for alignment within grid cells</p>
                            </div>
                          </li>
                          
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300 mr-3 flex-shrink-0 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <div>
                              <h5 className="font-medium text-neutral-900 dark:text-white text-sm">Consider minmax and auto-fit</h5>
                              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Create fully responsive layouts with dynamic column counts</p>
                            </div>
                          </li>
                          
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300 mr-3 flex-shrink-0 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <div>
                              <h5 className="font-medium text-neutral-900 dark:text-white text-sm">Maintain consistent gap spacing</h5>
                              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Use the spacing scale for harmonious proportions throughout</p>
                            </div>
                          </li>
                          
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300 mr-3 flex-shrink-0 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <div>
                              <h5 className="font-medium text-neutral-900 dark:text-white text-sm">Follow semantic HTML principles</h5>
                              <p className="text-neutral-600 dark:text-neutral-400 text-sm">Grid layout should enhance, not compromise, the document structure</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
