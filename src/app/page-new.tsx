'use client';

import Header from "@/components/Header";
import Sidebar, { SidebarContext } from "@/components/Sidebar";
import ColorCard from "@/components/ColorCard";
import AnimatedSection from "@/components/AnimatedSection";
import ColorExtractor from "@/components/ColorExtractor";
import FeatureCard from "@/components/FeatureCard";
import FixCardLinks from "@/components/FixCardLinks";
import DynamicTypographyPreview from "@/components/DynamicTypographyPreview";
import ButtonsSection from "./buttons-section";
import TintsSection from "./tints-section";
import GridsSection from "./grids-section";
import BreakpointsSection from "./breakpoints-section";
import { useState } from 'react';

export default function Home() {
  // State for sidebar toggle
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen: isSidebarOpen, toggleSidebar }}>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
        <FixCardLinks />      
        <Header title="Alux Design System" />
        <div className="flex flex-1 pt-0 relative">
          <Sidebar />
            <main className={`flex-1 w-full p-0 overflow-x-hidden max-w-[100vw] transition-all duration-300 ${isSidebarOpen ? 'md:pl-[280px]' : 'md:pl-0'}`}>
            {/* Overview Section */}
            <AnimatedSection id="overview" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20" animation="slide-up">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                  <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    Design Documentation
                  </div>
                  
                  <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-neutral-950 dark:text-white mb-5 sm:mb-6">
                    Alux <span className="text-primary-600 dark:text-primary-400">Design</span> System
                  </h1>
                  
                  <p className="font-body text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mb-10 leading-relaxed">
                    A simple design system featuring a set of guidelines, components, and resources to create consistent and beautiful user interfaces.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-14">
                    <a href="#colors" className="cosmic-shimmer inline-block px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-white border border-transparent shadow-lg relative overflow-hidden" 
                       style={{
                         backgroundImage: 'linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)',
                         backgroundSize: '200% 200%',
                         animation: 'gradientShift 3s ease infinite'
                       }}>
                      <span className="relative z-10">Explore Components</span>
                    </a>
                    <a href="#" className="px-5 py-2.5 text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 hover:bg-primary-100 dark:hover:bg-primary-900/40 border border-primary-200 dark:border-primary-800/40 rounded-lg font-medium transition-colors">
                      Learn More
                    </a>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 animate-fade-in">
                  {[
                    {
                      title: "Colors",
                      description: "Complete color palette including primary, accent, and semantic colors",
                      link: "#colors",
                      icon: "🎨"
                    },                    {
                      title: "Typography",
                      description: "Interactive font styles with live preview",
                      link: "#typography",
                      icon: "✍️"
                    },
                    {
                      title: "Spacing",
                      description: "4-point grid system for consistent spacing",
                      link: "#spacing",
                      icon: "📏"
                    },
                    {
                      title: "Buttons",
                      description: "Button styles and variations across different themes",
                      link: "#buttons",
                      icon: "👆"
                    },
                    {
                      title: "Breakpoints",
                      description: "Responsive breakpoints for different devices",
                      link: "#breakpoints",
                      icon: "📱"
                    },
                    {
                      title: "Drop Shadows",
                      description: "Shadow styles for elevation and depth",
                      link: "#shadows",
                      icon: "👥"
                    },
                    {
                      title: "Tints",
                      description: "Transparent layers for highlighting elements",
                      link: "#tints",
                      icon: "🖌️"
                    }
                  ].map((item, index) => (
                    <FeatureCard
                      key={index}
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      link={item.link}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* Colors Section */}
            <AnimatedSection id="colors" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950/60" animation="fade-in">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
                  <div>
                    <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
                      <span className="mr-2">🎨</span> Color System
                    </div>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Colors</h2>
                    <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
                      Our color system is designed to be accessible and flexible, with theme-specific palettes for light, dark, and colorful modes.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg mb-14 border border-neutral-200/50 dark:border-neutral-800/50">
                  <ColorExtractor 
                    title="Color Picker" 
                    description="Upload or drag an image to extract its color palette" 
                  />
                </div>
                
                <div className="mb-16">
                  <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-5 flex items-center">
                    <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    Light Theme
                  </h3>
                  <p className="font-body text-neutral-700 dark:text-neutral-300 mb-6">Clean and professional color palette for default light mode.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
                    <ColorCard 
                      shade="Background" 
                      color="bg-white" 
                      name="#ffffff"
                    />
                    <ColorCard 
                      shade="Foreground" 
                      color="text-neutral-800"
                      name="#1f2937"
                    />
                    <ColorCard 
                      shade="Primary" 
                      color="text-blue-500"
                      name="#3b82f6"
                    />
                    <ColorCard 
                      shade="Primary Hover" 
                      color="text-blue-600"
                      name="#2563eb"
                    />
                    <ColorCard 
                      shade="Primary Glow" 
                      color="shadow-blue-200/20"
                      name="rgba(59, 130, 246, 0.2)"
                    />
                    <div className="col-span-1 md:col-span-3 card overflow-hidden p-0 rounded-xl">
                      <div 
                        className="h-24 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                      ></div>
                      <div className="p-3 bg-white dark:bg-neutral-800">
                        <p className="font-body text-sm font-medium text-neutral-950 dark:text-white">Gradient</p>
                        <p className="font-body text-xs text-neutral-700 dark:text-neutral-400">from #3b82f6 via #a855f7 to #3b82f6</p>
                      </div>
                    </div>
                  </div>
                
                  <h4 className="font-heading font-medium text-lg text-neutral-950 dark:text-white mt-8 mb-3">Card Styling</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                    <ColorCard 
                      shade="Card From" 
                      color="bg-neutral-50/90"
                      name="rgba(253, 253, 253, 0.9)"
                    />
                    <ColorCard 
                      shade="Card To" 
                      color="bg-neutral-100/90"
                      name="rgba(243, 244, 246, 0.9)"
                    />
                    <ColorCard 
                      shade="Card Border" 
                      color="border-neutral-200/50"
                      name="rgba(229, 231, 235, 0.5)"
                    />
                    <ColorCard 
                      shade="Card Border Hover" 
                      color="border-blue-300/50"
                      name="rgba(96, 165, 250, 0.5)"
                    />
                    <ColorCard 
                      shade="Card Shadow" 
                      color="shadow-purple-500/10"
                      name="rgba(168, 85, 247, 0.1)"
                    />
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mt-16 mb-5 flex items-center">
                  <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </span>
                  Dark Theme
                </h3>
                <p className="font-body text-neutral-700 dark:text-neutral-300 mb-6">Sophisticated dark palette for late night browsing.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
                  <ColorCard 
                    shade="Background" 
                    color="bg-neutral-900" 
                    name="#0a0a0a"
                  />
                  <ColorCard 
                    shade="Foreground" 
                    color="text-neutral-100"
                    name="#ededed"
                  />
                  <ColorCard 
                    shade="Primary" 
                    color="text-blue-500"
                    name="#3b82f6"
                  />
                  <ColorCard 
                    shade="Primary Hover" 
                    color="text-blue-600"
                    name="#2563eb"
                  />
                  <ColorCard 
                    shade="Primary Glow" 
                    color="shadow-blue-500/20"
                    name="rgba(59, 130, 246, 0.2)"
                  />
                  <div className="col-span-1 md:col-span-3 card overflow-hidden p-0 rounded-xl">
                    <div 
                      className="h-24 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                    ></div>
                    <div className="p-3 bg-white dark:bg-neutral-800">
                      <p className="font-body text-sm font-medium text-neutral-950 dark:text-white">Gradient</p>
                      <p className="font-body text-xs text-neutral-700 dark:text-neutral-400">from #3b82f6 via #a855f7 to #3b82f6</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mt-16 mb-5 flex items-center">
                  <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </span>
                  Colorful Theme
                </h3>
                <p className="font-body text-neutral-700 dark:text-neutral-300 mb-6">Vibrant, creative palette for immersive, colorful interfaces.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
                  <ColorCard 
                    shade="Background" 
                    color="bg-indigo-950" 
                    name="#050023"
                  />
                  <ColorCard 
                    shade="Foreground" 
                    color="text-blue-50"
                    name="#f0f8ff"
                  />
                  <ColorCard 
                    shade="Primary" 
                    color="text-fuchsia-600"
                    name="#ff00cc"
                  />
                  <ColorCard 
                    shade="Primary Hover" 
                    color="text-fuchsia-700"
                    name="#d100ff"
                  />
                  <ColorCard 
                    shade="Primary Glow" 
                    color="shadow-fuchsia-500/30"
                    name="rgba(255, 0, 204, 0.3)"
                  />
                  <div className="col-span-1 md:col-span-3 card overflow-hidden p-0 rounded-xl">
                    <div 
                      className="h-24 w-full bg-gradient-to-r from-cyan-400 via-fuchsia-600 to-blue-500"
                    ></div>
                    <div className="p-3 bg-white dark:bg-neutral-800">
                      <p className="font-body text-sm font-medium text-neutral-950 dark:text-white">Cosmic Gradient</p>
                      <p className="font-body text-xs text-neutral-700 dark:text-neutral-400">from #00ffff via #ff00cc to #3b82f6</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
              
            {/* Typography Section */}
            <AnimatedSection id="typography" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20" animation="fade-in">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                  <div>
                    <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
                      <span className="mr-2">✍️</span> Typography System
                    </div>                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Dynamic Typography</h2>
                    <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
                      Our interactive typography system lets you customize and preview different font styles.
                      Try changing the properties below to see how they affect the text appearance.
                    </p>
                  </div>
                </div>
                  <div className="mb-12">
                  <DynamicTypographyPreview
                    title="Heading Typography"
                    description="Customize and preview heading styles with different properties"
                    fontFamilies={['Poppins', 'Roboto']}
                    defaultFontFamily="Poppins"
                    defaultFontWeight="700"
                    defaultFontSize="36px"
                    defaultLineHeight="1.3"
                    sampleText="The quick brown fox jumps over the lazy dog. Sphinx of black quartz, judge my vow."
                    language="en"
                  />
                </div>
                
                <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mt-10 mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </span>
                  Body Text Fonts
                </h3>
                <p className="font-body text-neutral-700 dark:text-neutral-300 mb-6">
                  Our design system includes support for different body fonts in multiple languages.
                </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                  <DynamicTypographyPreview
                    title="English Body Typography"
                    description="Customize and preview body text styles for English and Latin languages"
                    fontFamilies={['Roboto', 'Poppins']}
                    defaultFontFamily="Roboto"
                    defaultFontWeight="400"
                    defaultFontSize="16px"
                    defaultLineHeight="1.5"
                    sampleText="The quick brown fox jumps over the lazy dog. Sphinx of black quartz, judge my vow. A wizard's job is to vex chumps quickly in fog. How vexingly quick daft zebras jump! The five boxing wizards jump quickly."
                    language="en"
                  />
                  
                  <DynamicTypographyPreview
                    title="Arabic Typography"
                    description="Customize and preview text styles for RTL languages like Arabic"
                    fontFamilies={['Tajwal']}
                    defaultFontFamily="Tajwal"
                    defaultFontWeight="400"
                    defaultFontSize="16px"
                    defaultLineHeight="1.6"
                    sampleText="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى. حيث يمكنك توليد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
                    language="ar"
                  />
                </div>
              </div>
            </AnimatedSection>
              
            {/* Spacing Section */}
            <AnimatedSection id="spacing" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950/60" animation="fade-in">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                  <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
                    <span className="mr-2">📏</span> Grid System
                  </div>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Spacing</h2>
                  <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
                    Our spacing system follows a 4-point grid, providing consistent spacing across the UI.
                  </p>
                </div>
                
                <div className="relative bg-white/80 dark:bg-neutral-900/80 rounded-xl shadow-lg p-8 mb-12 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50">
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="w-full md:w-auto">
                      <span className="inline-flex h-8 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 text-sm font-medium text-neutral-900 dark:text-neutral-100 shadow-sm">Base 4px Grid</span>
                    </div>
                    <div className="w-full md:w-auto">
                      <span className="inline-flex h-8 items-center justify-center rounded-md bg-primary-50 dark:bg-primary-900/30 px-3 text-sm font-medium text-primary-700 dark:text-primary-300">4 × <em>n</em> spacing scale</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[4, 8, 12, 16, 20, 24, 32, 40, 48, 64].map((space, index) => (
                      <div key={index} className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200/70 dark:border-neutral-700/50 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between p-3 border-b border-neutral-200/70 dark:border-neutral-700/50">
                          <p className="font-heading font-semibold text-neutral-950 dark:text-white text-sm">{space}px</p>
                          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">space-{index + 1}</p>
                        </div>
                        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 h-20 w-full flex items-center justify-center p-2">
                          <div 
                            className="bg-primary-500 dark:bg-primary-400 rounded shadow-sm"
                            style={{ width: `${space}px`, height: `${space}px` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
                {/* Buttons Section */}
            <ButtonsSection />
              
            {/* Grids Section */}
            <GridsSection />
              
            {/* Breakpoints Section */}
            <BreakpointsSection />
              
            {/* Shadows Section */}
            <AnimatedSection id="shadows" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950/60" animation="slide-up">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                  <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
                    <span className="mr-2">👥</span> Elevation System
                  </div>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Drop Shadows</h2>
                  <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
                    Our shadow system creates depth and elevation in the interface.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { name: "Shadow Small", value: "0px 1px 2px rgba(0, 0, 0, 0.05)", elevation: "Subtle elevation" },
                    { name: "Shadow Medium", value: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)", elevation: "Medium elevation" },
                    { name: "Shadow Large", value: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)", elevation: "High elevation" },
                    { name: "Shadow X-Large", value: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)", elevation: "Highest elevation" }
                  ].map((shadow, index) => (
                    <div key={index} className="group hover:-translate-y-1 transition-all duration-300">
                      <div 
                        className="h-52 bg-white dark:bg-neutral-800 rounded-xl mb-4 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-neutral-50 dark:group-hover:from-neutral-800 dark:group-hover:to-neutral-900 transition-all duration-300"
                        style={{ boxShadow: shadow.value }}
                      >
                        <div className="text-center p-4">
                          <div className="flex justify-center mb-3">
                            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-700 dark:text-primary-400">
                              {index + 1}
                            </div>
                          </div>
                          <span className="font-heading font-medium text-neutral-800 dark:text-neutral-200 block mb-1">
                            {shadow.name}
                          </span>
                          <span className="font-body text-xs text-neutral-500 dark:text-neutral-400">
                            {shadow.elevation}
                          </span>
                        </div>
                      </div>
                      <div className="px-2">
                        <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 font-medium mb-1">{shadow.name}</p>
                        <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 break-words">{shadow.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* Tints Section */}
            <TintsSection />
          </main>
        </div>
      </div>
    </SidebarContext.Provider>
  );
}
