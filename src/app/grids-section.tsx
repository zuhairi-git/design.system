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
  // Sample grid layouts to showcase
  const gridSamples = [
    {      name: "Basic Grid",
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
      <div className="max-w-7xl mx-auto">        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <span className="mr-2">🔲</span> Layout Structure
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Grid System</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mb-4">
            Think of a grid system as a digital sheet of graph paper that helps organize content on your page in a neat, orderly fashion.
            It creates invisible lines that help align elements and create a consistent, professional look.
          </p>          <div className="flex flex-col sm:flex-row gap-6 mb-8 bg-white/80 dark:bg-neutral-900/80 p-6 rounded-lg border border-neutral-100 dark:border-neutral-800/70">            <div className="flex-1 flex flex-col items-center">              <div className="w-full h-60 bg-neutral-100 dark:bg-neutral-800 rounded-lg mb-3 p-2 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">                  <Image 
                    src={gridImage1}
                    alt="Content without grid structure" 
                    className="object-cover rounded"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/30 flex flex-col p-4">
                    <div className="bg-white/90 dark:bg-neutral-800/90 p-2 mb-2 rounded w-3/4">News headline takes up random width</div>
                    <div className="flex mb-2">
                      <div className="bg-white/90 dark:bg-neutral-800/90 p-2 rounded w-1/3 mr-2">Image</div>
                      <div className="bg-white/90 dark:bg-neutral-800/90 p-2 rounded w-1/2">Text overlaps awkwardly</div>
                    </div>
                    <div className="bg-white/90 dark:bg-neutral-800/90 p-2 rounded w-full mb-1">Content with inconsistent spacing</div>
                    <div className="bg-white/90 dark:bg-neutral-800/90 p-2 rounded w-2/3">Elements poorly aligned</div>
                  </div>
                </div>
              </div>
              <p className="text-center text-neutral-700 dark:text-neutral-400 text-sm font-medium">Without grid: Unorganized content</p>
            </div>            <div className="flex-1 flex flex-col items-center">              <div className="w-full h-60 bg-neutral-100 dark:bg-neutral-800 rounded-lg mb-3 p-2 overflow-hidden relative">                <Image 
                  src={gridImage2}
                  alt="Content with grid structure" 
                  className="object-cover rounded"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 pointer-events-none">
                  {Array(16).fill(null).map((_, i) => (
                    <div key={i} className="border-2 border-dashed border-primary-300/40 dark:border-primary-300/30 rounded"></div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-black/20">
                  <div className="grid grid-cols-4 h-full p-4">
                    <div className="col-span-4 flex items-center justify-center">
                      <div className="bg-white/90 dark:bg-neutral-800/90 p-2 rounded w-3/4 text-center text-sm">Full width headline perfectly aligned</div>
                    </div>
                    <div className="col-span-2 flex items-center justify-center p-1">
                      <div className="bg-white/90 dark:bg-neutral-800/90 p-2 rounded w-full text-center text-sm">Feature content</div>
                    </div>
                    <div className="col-span-1 flex items-center justify-center p-1">
                      <div className="bg-white/90 dark:bg-neutral-800/90 p-2 rounded w-full text-center text-sm">Sidebar</div>
                    </div>
                    <div className="col-span-1 flex items-center justify-center p-1">
                      <div className="bg-white/90 dark:bg-neutral-800/90 p-2 rounded w-full text-center text-sm">Related</div>
                    </div>
                    <div className="col-span-4 flex items-center justify-center">
                      <div className="bg-white/90 dark:bg-neutral-800/90 p-2 rounded w-full text-center text-sm">Even spacing and consistent alignment</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-neutral-700 dark:text-neutral-400 text-sm font-medium">With grid: Clean, organized layout</p>
            </div>
          </div>
        </div>

        {/* Grid visualization */}
        <div className="mb-12 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
          <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-4">What is a 12-Column Grid?</h3>
            <p className="text-neutral-700 dark:text-neutral-400 mb-6">                Our layout divides the screen into 12 equal columns (like 12 slices of a pizza). Why 12? Because it&apos;s easily divisible by 2, 3, 4, and 6, 
                giving you many options to arrange your content.
            </p>
            
            <div className="grid grid-cols-12 gap-2 mb-8">
              {Array(12).fill(null).map((_, i) => (
                <div key={i} className="h-16 bg-primary-100 dark:bg-primary-900/40 rounded flex items-center justify-center text-primary-700 dark:text-primary-300 font-mono text-sm">
                  {i + 1}
                </div>
              ))}
            </div>
              <div className="mb-8">
              <h4 className="font-heading font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-3">How to Use the Grid - Real World Examples</h4>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Imagine arranging furniture in a room or organizing photos in an album - grids help you create a balanced layout. Here are some common ways to divide your page:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/80 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                  <div className="mb-3">
                    <h5 className="font-medium text-neutral-900 dark:text-white mb-2">News Website</h5>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      {Array(2).fill(null).map((_, i) => (
                        <div key={i} className="h-14 bg-primary-200 dark:bg-primary-800/50 rounded flex flex-col items-center justify-center text-primary-700 dark:text-primary-300 p-1">
                          <div className="w-full h-2 bg-primary-300/60 dark:bg-primary-700/60 rounded mb-1"></div>
                          <div className="w-full h-8 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                        </div>
                      ))}
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">Two equal columns for main headlines</p>
                  </div>
                </div>
                
                <div className="bg-white/80 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                  <div className="mb-3">
                    <h5 className="font-medium text-neutral-900 dark:text-white mb-2">E-commerce Product List</h5>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      {Array(3).fill(null).map((_, i) => (
                        <div key={i} className="h-14 bg-primary-200 dark:bg-primary-800/50 rounded flex flex-col items-center justify-center text-primary-700 dark:text-primary-300 p-1">
                          <div className="w-3/4 h-6 bg-primary-100 dark:bg-primary-900/40 rounded mb-1"></div>
                          <div className="w-1/2 h-2 bg-primary-300/60 dark:bg-primary-700/60 rounded"></div>
                        </div>
                      ))}
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">Three product cards per row</p>
                  </div>
                </div>
                
                <div className="bg-white/80 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                  <div className="mb-3">                    <h5 className="font-medium text-neutral-900 dark:text-white mb-2">Photo Gallery</h5>                    <div className="grid grid-cols-4 gap-1 mb-2">
                      <div className="h-14 bg-primary-200 dark:bg-primary-800/50 rounded overflow-hidden flex items-center justify-center text-primary-700 dark:text-primary-300 text-xs relative">                          
                        <Image 
                          src={galleryImage1} 
                          alt="Gallery image 1" 
                          className="object-cover"
                          fill
                          sizes="(max-width: 768px) 25vw, 10vw"
                        />
                      </div>
                      <div className="h-14 bg-primary-200 dark:bg-primary-800/50 rounded overflow-hidden flex items-center justify-center text-primary-700 dark:text-primary-300 text-xs relative">                          
                        <Image 
                          src={galleryImage2} 
                          alt="Gallery image 2" 
                          className="object-cover"
                          fill
                          sizes="(max-width: 768px) 25vw, 10vw"
                        />
                      </div>
                      <div className="h-14 bg-primary-200 dark:bg-primary-800/50 rounded overflow-hidden flex items-center justify-center text-primary-700 dark:text-primary-300 text-xs relative">                          
                        <Image 
                          src={galleryImage3} 
                          alt="Gallery image 3" 
                          className="object-cover"
                          fill
                          sizes="(max-width: 768px) 25vw, 10vw"
                        />
                      </div>
                      <div className="h-14 bg-primary-200 dark:bg-primary-800/50 rounded overflow-hidden flex items-center justify-center text-primary-700 dark:text-primary-300 text-xs relative">                          
                        <Image 
                          src={galleryImage4} 
                          alt="Gallery image 4" 
                          className="object-cover"
                          fill
                          sizes="(max-width: 768px) 25vw, 10vw"
                        />
                      </div>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">Four photos per row</p>
                  </div>
                </div>
              </div>
              
              <h4 className="font-heading font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-3">Different Column Arrangements</h4>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Like adjusting the size of departments in a store, you can give some content more space than others:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/80 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                  <h5 className="font-medium text-neutral-900 dark:text-white mb-2">Feature and Sidebar</h5>
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    <div className="col-span-3 h-14 bg-primary-300 dark:bg-primary-700/60 rounded flex items-center justify-center text-primary-800 dark:text-primary-200 text-sm">
                      Main Content (75%)
                    </div>
                    <div className="col-span-1 h-14 bg-primary-200 dark:bg-primary-800/50 rounded flex items-center justify-center text-primary-700 dark:text-primary-300 text-sm">
                      Sidebar
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">3:1 ratio - Like a newspaper with sidebar</p>
                </div>
                
                <div className="bg-white/80 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                  <h5 className="font-medium text-neutral-900 dark:text-white mb-2">Content with Wide Header</h5>
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className="col-span-2 h-10 bg-primary-300 dark:bg-primary-700/60 rounded flex items-center justify-center text-primary-800 dark:text-primary-200 text-sm">
                      Main Article (67%)
                    </div>
                    <div className="col-span-1 h-10 bg-primary-200 dark:bg-primary-800/50 rounded flex items-center justify-center text-primary-700 dark:text-primary-300 text-sm">
                      Related
                    </div>
                  </div>
                  <div className="col-span-3 h-8 mt-2 bg-primary-400 dark:bg-primary-600/80 rounded flex items-center justify-center text-white text-sm">
                    Full-width Footer
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">2:1 ratio with full-width element</p>
                </div>
              </div>
            </div>
          </div>
        </div>        {/* Responsive layouts explanation */}
        <div className="mb-12">
          <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
            <div className="p-6">
              <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-3">Making Grids Responsive</h3>
              <p className="text-neutral-700 dark:text-neutral-400 mb-6">
                Responsive design is like transforming furniture - it changes based on the room size. Your content automatically rearranges 
                to look good on phones, tablets, and desktops.
              </p>
              
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="relative bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg mb-3">
                    <div className="absolute top-2 right-2 text-xs font-medium px-2 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded">
                      Phone
                    </div>
                    <div className="h-80 w-40 mx-auto border-8 border-neutral-300 dark:border-neutral-700 rounded-2xl relative overflow-hidden">
                      <div className="bg-white dark:bg-neutral-900 h-full w-full p-1">
                        <div className="grid grid-cols-1 gap-2 p-1">
                          <div className="h-12 bg-primary-200 dark:bg-primary-800/50 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-neutral-600 dark:text-neutral-400 text-sm mt-3">
                      1 column on small screens
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg mb-3">
                    <div className="absolute top-2 right-2 text-xs font-medium px-2 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded">
                      Tablet
                    </div>
                    <div className="h-80 w-64 mx-auto border-8 border-neutral-300 dark:border-neutral-700 rounded-2xl relative overflow-hidden">
                      <div className="bg-white dark:bg-neutral-900 h-full w-full p-1">
                        <div className="grid grid-cols-2 gap-2 p-1">
                          <div className="col-span-2 h-12 bg-primary-200 dark:bg-primary-800/50 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-neutral-600 dark:text-neutral-400 text-sm mt-3">
                      2 columns on medium screens
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg mb-3">
                    <div className="absolute top-2 right-2 text-xs font-medium px-2 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded">
                      Desktop
                    </div>
                    <div className="h-80 w-full mx-auto border-8 border-neutral-300 dark:border-neutral-700 rounded-2xl relative overflow-hidden">
                      <div className="bg-white dark:bg-neutral-900 h-full w-full p-1">
                        <div className="grid grid-cols-4 gap-2 p-1">
                          <div className="col-span-4 h-12 bg-primary-200 dark:bg-primary-800/50 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                          <div className="h-24 bg-primary-100 dark:bg-primary-900/40 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-neutral-600 dark:text-neutral-400 text-sm mt-3">
                      4 columns on large screens
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-lg mt-6 border border-neutral-100 dark:border-neutral-700">
                <h4 className="font-medium text-neutral-900 dark:text-white mb-2">How It Works In Simple Terms</h4>
                <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                  When designing with our grid system, it&apos;s like having magic containers that know how to rearrange themselves:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-400">
                  <li>On <strong className="text-primary-700 dark:text-primary-300">phones</strong>, content stacks in a single column for easy scrolling</li>
                  <li>On <strong className="text-primary-700 dark:text-primary-300">tablets</strong>, content may arrange in 2-3 columns</li>
                  <li>On <strong className="text-primary-700 dark:text-primary-300">desktops</strong>, content can spread out into 4+ columns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Grid pattern examples */}
        <div className="mb-12">
          <h3 className="font-heading font-semibold text-2xl text-neutral-950 dark:text-white mb-6">Common Grid Patterns</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridSamples.map((sample, index) => (
              <div key={index} className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className={`w-8 h-8 rounded-full bg-primary-${100 + index * 100} dark:bg-primary-${900 - index * 100} flex items-center justify-center text-lg mr-3`}>
                      {index === 0 ? "📊" : index === 1 ? "📱" : index === 2 ? "📏" : "📐"}
                    </span>
                    <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">{sample.name}</h3>
                  </div>
                  
                  <p className="font-body text-neutral-700 dark:text-neutral-400 mb-4 pl-11">{sample.description}</p>
                  
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
                  
                  <div className="px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800 rounded-lg mb-3">
                    <p><strong>Real-world use:</strong> {index === 0 ? "Simple photo galleries or testimonials" : 
                      index === 1 ? "Product listings that adapt to any screen size" : 
                      index === 2 ? "Blog layouts with featured content" : 
                      "Advanced layouts with precise element placement"}
                    </p>
                  </div>
                  
                  {/* Code Snippet */}
                  <div className="mt-3">
                    <div className="flex items-center mb-2">
                      <div className="w-5 h-5 mr-2 rounded bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-neutral-500 dark:text-neutral-400">
                          <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                          <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Code for developers</span>
                    </div>
                    <CodeSnippet code={sample.snippet} language="html" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Grid for non-technical users */}
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden mb-12">
          <div className="p-6">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-4">Grid System Made Simple</h3>
            
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 p-5 rounded-lg mb-6">
              <h4 className="font-medium text-primary-800 dark:text-primary-200 mb-3">What You Need to Know</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white dark:bg-neutral-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-neutral-900 dark:text-white">Think of grids like organizing shelves</strong>
                    <p className="text-neutral-600 dark:text-neutral-400">Just as shelves help organize items neatly, grids help arrange website content in an orderly fashion.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white dark:bg-neutral-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-neutral-900 dark:text-white">Grids adjust automatically</strong>
                    <p className="text-neutral-600 dark:text-neutral-400">Our grid system automatically rearranges your content to look good on phones, tablets, and computers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white dark:bg-neutral-800 rounded-full p-1 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-neutral-900 dark:text-white">No need to understand the technical details</strong>
                    <p className="text-neutral-600 dark:text-neutral-400">You don&apos;t need to know the code - just communicate how many columns you want in your layout, and your developer will handle the rest.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6">
              <h4 className="font-heading font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-3">Grid Guidelines</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-lg">
                  <h5 className="font-medium text-neutral-900 dark:text-white mb-2 flex items-center">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">✓</span> Do
                  </h5>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 list-disc pl-5">
                    <li>Keep layouts consistent across similar pages</li>
                    <li>Use fewer columns on mobile (1-2) and more on desktop (4-12)</li>
                    <li>Group related content in the same column or adjacent columns</li>
                    <li>Use white space between grid items for better readability</li>
                  </ul>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-lg">
                  <h5 className="font-medium text-neutral-900 dark:text-white mb-2 flex items-center">
                    <span className="text-error-600 dark:text-error-400 mr-2">✗</span> Don&apos;t
                  </h5>
                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 list-disc pl-5">
                    <li>Overcrowd your layout with too many columns</li>
                    <li>Create very uneven column widths without purpose</li>
                    <li>Mix too many different grid patterns on the same page</li>
                    <li>Forget to test how your layout looks on different devices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* For developers section */}
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500 dark:text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">For Developers</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading font-medium text-lg text-neutral-800 dark:text-neutral-200 mb-3">Grid Classes</h4>
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
