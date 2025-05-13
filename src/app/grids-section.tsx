'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import CodeSnippet from '@/components/CodeSnippet';

// Import local images
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
            <span className="bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600">Harmonious</span> Grid System
          </h2>
            <p className="font-body text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl leading-relaxed mb-8">
            A grid system creates the invisible architecture that brings visual <span className="italic">harmony</span> and <span className="italic">balance</span> to your layouts. 
            It&apos;s the foundation that enables both aesthetic beauty and functional clarity.
          </p>
          
        </div>        {/* Golden ratio grid system explanation */}
        <div className="mb-16 overflow-hidden">
          <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-800/70">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-heading font-semibold text-2xl text-neutral-950 dark:text-white mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/60 shadow-sm flex items-center justify-center mr-3">
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
            <h3 className="font-heading font-semibold text-2xl md:text-3xl text-neutral-950 dark:text-white mb-4">Visual Harmony in Practice</h3>            <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              From digital layouts to architectural design, grid systems provide the underlying structure that creates visual balance.
              Here&apos;s how different grid arrangements create distinct visual experiences:
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
                    <div className="col-span-6 p-4 h-4/4 bg-blue-100 dark:bg-blue-900/40 rounded-md flex items-center justify-center text-blue-800 dark:text-blue-300 text-sm">
                      Featured Article Header
                    </div>
                    <div className="col-span-4 h-4/4 bg-blue-200 dark:bg-blue-800/50 rounded-md flex items-center justify-center text-blue-800 dark:text-blue-300">
                      Main Story
                    </div>
                    <div className="col-span-2 h-4/4 bg-blue-100 dark:bg-blue-900/40 rounded-md flex flex-col p-2 text-xs text-blue-800 dark:text-blue-300">
                      <div className="h-1/3 mb-1 bg-blue-50 dark:bg-blue-950/50 rounded"></div>
                      <div className="h-1/3 mb-1 bg-blue-50 dark:bg-blue-950/50 rounded"></div>
                      <div className="h-1/3 bg-blue-50 dark:bg-blue-950/50 rounded"></div>
                    </div>
                    <div className="col-span-6 h-4/4 bg-blue-300 dark:bg-blue-700/60 rounded-md grid grid-cols-3 gap-2 p-2">
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
                    <div className="col-span-4 p-4 h-5/5 bg-emerald-100 dark:bg-emerald-900/40 rounded-md flex items-center justify-center text-emerald-800 dark:text-emerald-300 text-sm">
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
                      <div className="w-36 h-68 mx-auto bg-neutral-900 dark:bg-neutral-950 rounded-2xl shadow-lg p-1.5 overflow-hidden">
                        <div className="bg-white dark:bg-neutral-900 h-full w-full rounded-lg p-1.5 overflow-hidden">
                          <div className="grid grid-cols-1 gap-3">
                            <div className="h-10 bg-emerald-100 dark:bg-emerald-900/40 rounded-md flex items-center justify-center text-emerald-800 dark:text-emerald-300 text-xs">
                              Filter
                            </div>
                            
                            {Array(2).fill(null).map((_, i) => (
                              <div key={i} className="bg-emerald-200 dark:bg-emerald-800/40 rounded-md flex flex-col overflow-hidden">
                                <div className="h-14 bg-emerald-300/50 dark:bg-emerald-700/50"></div>
                                <div className="p-1.5">
                                  <div className="h-1.5 w-3/4 bg-emerald-100 dark:bg-emerald-900/60 rounded-full mb-0.5"></div>
                                  <div className="h-1.5 w-1/2 bg-emerald-100 dark:bg-emerald-900/60 rounded-full mb-0.5"></div>
                                  <div className="h-1.5 w-1/3 bg-emerald-400 dark:bg-emerald-500/60 rounded-full"></div>
                                </div>
                              </div>
                            ))}
                            
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
                      <div className="w-48 h-70 mx-auto bg-neutral-900 dark:bg-neutral-950 rounded-lg shadow-lg p-1.5 overflow-hidden">
                        <div className="bg-white dark:bg-neutral-900 h-full w-full rounded-md p-1.5 overflow-hidden">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="col-span-2 h-10 bg-emerald-100 dark:bg-emerald-900/40 rounded-md flex items-center justify-center text-emerald-800 dark:text-emerald-300 text-xs">
                              Product Filters
                            </div>
                            
                            {Array(4).fill(null).map((_, i) => (
                              <div key={i} className="bg-emerald-200 dark:bg-emerald-800/40 rounded-md flex flex-col overflow-hidden">
                                <div className="h-12 bg-emerald-300/50 dark:bg-emerald-700/50"></div>
                                <div className="p-1">
                                  <div className="h-1.5 w-3/4 bg-emerald-100 dark:bg-emerald-900/60 rounded-full mb-0.5"></div>
                                  <div className="h-1.5 w-1/2 bg-emerald-100 dark:bg-emerald-900/60 rounded-full"></div>
                                </div>
                              </div>
                            ))}
                            
                            <div className="col-span-2 h-8 bg-emerald-100 dark:bg-emerald-900/40 rounded-md flex items-center justify-center text-emerald-800 dark:text-emerald-300 text-xs">
                              Load More
                            </div>
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
                      <div className="h-60 mx-auto mt-10 bg-neutral-900 dark:bg-neutral-950 rounded shadow-lg p-1.5 overflow-hidden">
                        <div className="bg-white dark:bg-neutral-900 h-full w-full rounded p-1.5 overflow-hidden">
                          <div className="grid grid-cols-4 gap-2">
                            <div className="col-span-4 h-8 bg-emerald-100 dark:bg-emerald-900/40 rounded-md flex items-center justify-center text-emerald-800 dark:text-emerald-300 text-xs font-medium">
                              <div className="flex items-center space-x-4">
                                <span>All Categories</span>
                                <span>New Arrivals</span>
                                <span>Featured</span>
                                <span>On Sale</span>
                              </div>
                            </div>
                            
                            {Array(8).fill(null).map((_, i) => (
                              <div key={i} className="bg-emerald-200 dark:bg-emerald-800/40 rounded overflow-hidden flex flex-col">
                                <div className="h-10 bg-emerald-300/50 dark:bg-emerald-700/50"></div>
                                <div className="p-1">
                                  <div className="h-1 w-3/4 bg-emerald-100 dark:bg-emerald-900/60 rounded-full mb-0.5"></div>
                                  <div className="h-1 w-1/2 bg-emerald-100 dark:bg-emerald-900/60 rounded-full mb-0.5"></div>
                                  <div className="h-1 w-1/4 bg-emerald-400 dark:bg-emerald-500/60 rounded-full"></div>
                                </div>
                              </div>
                            ))}
                            
                            <div className="col-span-4 h-6 bg-emerald-100 dark:bg-emerald-900/40 rounded-md flex items-center justify-center text-emerald-800 dark:text-emerald-300 text-xs">
                              <div className="flex items-center space-x-2">
                                <span>1</span>
                                <span>2</span>
                                <span className="px-2 bg-emerald-300/50 dark:bg-emerald-700/50 rounded">3</span>
                                <span>4</span>
                                <span>5</span>
                              </div>
                            </div>
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
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">                      <div className="bg-gradient-to-r from-primary-50 to-white dark:from-primary-900/30 dark:to-neutral-800/50 p-3 rounded">
                        <h4 className="text-primary-700 dark:text-primary-300 font-medium text-sm">Mobile Experience</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">Single-column product display optimized for browsing on small screens</p>
                      </div>
                      <div className="bg-gradient-to-r from-primary-50 to-white dark:from-primary-900/30 dark:to-neutral-800/50 p-3 rounded">
                        <h4 className="text-primary-700 dark:text-primary-300 font-medium text-sm">Tablet Experience</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">Dual-column product grid balancing details and product visibility</p>
                      </div>
                      <div className="bg-gradient-to-r from-primary-50 to-white dark:from-primary-900/30 dark:to-neutral-800/50 p-3 rounded">
                        <h4 className="text-primary-700 dark:text-primary-300 font-medium text-sm">Desktop Experience</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">Rich four-column e-commerce grid showcasing multiple products at once</p>
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
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">                    A harmonious grid system isn&apos;t just about technical implementation—it&apos;s about creating visual rhythm and balance 
                    that guides the user&apos;s eye naturally through the content. The principles below will help you create designs that feel 
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
                    <h4 className="font-medium text-lg text-neutral-900 dark:text-white mb-2 text-center md:text-left">Designer&apos;s Insight</h4>                    <p className="text-neutral-700 dark:text-neutral-300 italic">
                      &quot;The most sophisticated designs often appear simple—they achieve harmony through disciplined use of grid systems. 
                      Their elegance comes not from adding more elements, but from finding the perfect placement for every essential one.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* Developer Resources Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/40 rounded-full shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
              Developer Resources
            </div>
            <h3 className="font-heading font-semibold text-2xl md:text-3xl text-neutral-950 dark:text-white mb-4">
              Grid System Implementation
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
              Everything you need to implement our harmonious grid system in your projects.
              These tools and techniques will help you build consistent, responsive layouts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Core Tailwind Classes */}
            <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800/80 rounded-xl shadow-xl border border-neutral-100 dark:border-neutral-800/50 overflow-hidden transform transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
              <div className="h-2 bg-gradient-to-r from-primary-400 to-primary-600 dark:from-primary-500 dark:to-primary-700"></div>
              <div className="p-6 md:p-8">
                <div className="mb-6 flex items-center">
                  <div className="w-12 h-12 bg-primary-100/70 dark:bg-primary-900/50 rounded-lg shadow-inner flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="font-heading font-medium text-xl text-neutral-900 dark:text-white">Core Grid Classes</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {[
                    { class: "grid-cols-{n}", desc: "Define n equal columns" },
                    { class: "col-span-{n}", desc: "Make element span n cols" },
                    { class: "col-start-{n}", desc: "Start at column n" },
                    { class: "col-end-{n}", desc: "End at column n" },
                    { class: "gap-{size}", desc: "Set item spacing" },
                    { class: "grid-flow-{dir}", desc: "Control item placement" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-neutral-800/70 rounded-lg p-3 border border-neutral-200/80 dark:border-neutral-700/50 shadow-sm">
                      <div className="font-mono text-sm text-primary-700 dark:text-primary-300 mb-1 flex items-center">
                        <span className="w-2 h-2 bg-primary-400 dark:bg-primary-500 rounded-full mr-2"></span>
                        {item.class}
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-neutral-50 dark:bg-neutral-900/80 p-4 border border-neutral-200/80 dark:border-neutral-700/50">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600 dark:text-primary-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h5 className="font-medium text-neutral-900 dark:text-white text-sm">Pro Tip</h5>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    Use the 12-column system for most layouts as it provides the most flexible division options.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Responsive Implementation */}
            <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800/80 rounded-xl shadow-xl border border-neutral-100 dark:border-neutral-800/50 overflow-hidden transform transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
              <div className="h-2 bg-gradient-to-r from-emerald-400 to-emerald-600 dark:from-emerald-500 dark:to-emerald-700"></div>
              <div className="p-6 md:p-8">
                <div className="mb-6 flex items-center">
                  <div className="w-12 h-12 bg-emerald-100/70 dark:bg-emerald-900/50 rounded-lg shadow-inner flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h4 className="font-heading font-medium text-xl text-neutral-900 dark:text-white">Responsive Implementation</h4>
                </div>

                <div className="bg-neutral-50 dark:bg-neutral-900/70 rounded-lg p-4 mb-6 border border-neutral-200 dark:border-neutral-700/60">
                  <div className="flex items-center justify-between text-xs font-medium mb-2">
                    <span className="text-neutral-600 dark:text-neutral-400">Breakpoint Prefixes</span>
                    <span className="text-emerald-600 dark:text-emerald-400">Screen Sizes</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { prefix: "sm:", size: "640px+" },
                      { prefix: "md:", size: "768px+" },
                      { prefix: "lg:", size: "1024px+" },
                      { prefix: "xl:", size: "1280px+" },
                      { prefix: "2xl:", size: "1536px+" }
                    ].map((bp, i) => (
                      <div key={i} className="flex items-center justify-between bg-white dark:bg-neutral-800 p-2 rounded">
                        <code className="text-xs font-mono text-emerald-700 dark:text-emerald-300">{bp.prefix}</code>
                        <span className="text-xs text-neutral-600 dark:text-neutral-400">{bp.size}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700/70 bg-white dark:bg-neutral-900/70">
                  <div className="border-b border-neutral-200 dark:border-neutral-700/50 px-3 py-2 bg-neutral-50 dark:bg-neutral-800/50 text-xs font-medium text-neutral-700 dark:text-neutral-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Responsive Example
                  </div>
                  <pre className="p-3 text-xs overflow-x-auto">
                    <code className="font-mono text-neutral-800 dark:text-neutral-300">
                      &lt;div class=&quot;<span className="text-emerald-600 dark:text-emerald-400">grid</span> 
      <span className="text-primary-600 dark:text-primary-400">grid-cols-1</span> 
      <span className="text-emerald-600 dark:text-emerald-400">sm:</span><span className="text-primary-600 dark:text-primary-400">grid-cols-2</span> 
      <span className="text-emerald-600 dark:text-emerald-400">md:</span><span className="text-primary-600 dark:text-primary-400">grid-cols-3</span> 
      <span className="text-emerald-600 dark:text-emerald-400">lg:</span><span className="text-primary-600 dark:text-primary-400">grid-cols-4</span> 
      <span className="text-emerald-600 dark:text-emerald-400">gap-4</span>&quot;&gt;
        &lt;!-- Content adapts to all screen sizes --&gt;
      &lt;/div&gt;
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Card 3: Advanced Techniques */}
            <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800/80 rounded-xl shadow-xl border border-neutral-100 dark:border-neutral-800/50 overflow-hidden transform transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
              <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-700"></div>
              <div className="p-6 md:p-8">
                <div className="mb-6 flex items-center">
                  <div className="w-12 h-12 bg-purple-100/70 dark:bg-purple-900/50 rounded-lg shadow-inner flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="font-heading font-medium text-xl text-neutral-900 dark:text-white">Advanced Techniques</h4>
                </div>

                <div className="space-y-3.5 mb-6">
                  {[
                    {
                      title: "Grid Template Areas",
                      desc: "Name grid areas for semantic layouts",
                      code: "grid-template-areas: 'header header' 'sidebar main';"
                    },
                    {
                      title: "Auto-Fit & Minmax",
                      desc: "Dynamic column count based on container width",
                      code: "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));"
                    },
                    {
                      title: "Grid Template Alignment",
                      desc: "Control item positioning within their grid cells",
                      code: "place-items: center stretch;"
                    }
                  ].map((technique, i) => (
                    <div key={i} className="bg-white dark:bg-neutral-800/70 rounded-lg border border-neutral-200/80 dark:border-neutral-700/50 shadow-sm overflow-hidden">
                      <div className="p-3 border-b border-neutral-200/80 dark:border-neutral-700/50">
                        <div className="flex items-center">
                          <div className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-900/60 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg>
                          </div>
                          <h5 className="font-medium text-neutral-900 dark:text-white text-sm">{technique.title}</h5>
                        </div>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 pl-6">{technique.desc}</p>
                      </div>
                      <div className="bg-neutral-50 dark:bg-neutral-900/70 p-2">
                        <pre className="text-xs overflow-x-auto">
                          <code className="font-mono text-purple-700 dark:text-purple-300">
                            {technique.code}
                          </code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-100 dark:border-purple-800/30">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div>
                      <h5 className="font-medium text-purple-900 dark:text-purple-200 text-sm mb-1">Expert Insight</h5>
                      <p className="text-xs text-purple-700 dark:text-purple-300">
                        Combine CSS Grid with CSS Variables to create dynamic, themable layouts that can adapt to user preferences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Documentation Section */}
          <div className="mt-10">
            <div className="bg-gradient-to-br from-white to-neutral-50/80 dark:from-neutral-900 dark:to-neutral-800/60 rounded-xl shadow-lg overflow-hidden border border-neutral-200/60 dark:border-neutral-700/40">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-800/10 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium rounded-full bg-white/60 dark:bg-neutral-800/60 text-primary-700 dark:text-primary-300 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Documentation
                    </div>
                    <h4 className="font-heading font-semibold text-xl md:text-2xl text-neutral-900 dark:text-white mb-3">Engineering Guidelines</h4>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                      Follow these best practices to maintain a consistent, accessible grid system across your entire application.
                    </p>
                  </div>

                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 group">
                    <span>View full documentation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1.5 transition-transform transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>

                <div className="md:w-2/3 p-6 md:p-8">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      {
                        title: "Semantic Markup",
                        desc: "Use appropriate HTML elements to maintain accessibility and SEO"
                      },
                      {
                        title: "Mobile-First Approach",
                        desc: "Start with mobile layouts and progressively enhance for larger screens"
                      },
                      {
                        title: "Consistent Spacing",
                        desc: "Use the design system's spacing scale for harmonious proportions"
                      },
                      {
                        title: "Content-Driven Breakpoints",
                        desc: "Let content needs determine your breakpoints, not device sizes"
                      },
                      {
                        title: "Progressive Enhancement",
                        desc: "Ensure layouts work without CSS Grid for older browsers"
                      },
                      {
                        title: "Maintenance Strategy",
                        desc: "Document grid patterns for team consistency and onboarding"
                      }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <span className="flex items-center justify-center w-5 h-5 rounded bg-primary-100 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </div>
                        <div className="ml-3">
                          <h5 className="font-medium text-neutral-900 dark:text-white text-sm">{item.title}</h5>
                          <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center space-x-4">
                    <a href="#" className="flex items-center justify-center px-4 py-2 bg-primary-50 hover:bg-primary-100 dark:bg-primary-900/30 dark:hover:bg-primary-900/50 rounded-lg text-primary-700 dark:text-primary-300 text-sm font-medium transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                      </svg>
                      Download Templates
                    </a>
                    <a href="#" className="flex items-center justify-center px-4 py-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-lg text-neutral-700 dark:text-neutral-300 text-sm font-medium transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Get Support
                    </a>
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
