'use client';

import Header from "@/components/Header";
import Sidebar, { useSidebar } from "@/components/Sidebar";
import ColorCard from "@/components/ColorCard";
import AnimatedSection from "@/components/AnimatedSection";
import ColorExtractor from "@/components/ColorExtractor";
import FeatureCard from "@/components/FeatureCard";
import FixCardLinks from "@/components/FixCardLinks";
import DynamicTypographyPreview from "@/components/DynamicTypographyPreview";
import ButtonsSection from "./buttons-section";
import TabsPillsSection from "./tabs-pills-section";
import AccordionSection from "./accordions-section";
import BadgesSection from "./badges-section";
import TintsSection from "./tints-section";
import GridsSection from "./grids-section";
import BreakpointsSection from "./breakpoints-section";
import CardsSection from "./cards-section";
import BasicCardsSection from "./basic-cards";
import InteractiveCardsSection from "./interactive-cards";
import MediaCardsSection from "./media-cards";
import DashboardCardsSection from "./dashboard-cards";
import ProfileCardsSection from "./profile-cards";
import TimelineCardsSection from "./timeline-cards";
import AccessibilityUtilitiesSection from "./accessibility-utilities";
import ResponsiveUtilitiesSection from "./responsive-utilities";
import SpacingSection from "./spacing";
import NavigationSection from "./navigation-section";
import FormsSection from "./forms-section";
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import TextFieldsRoundedIcon from '@mui/icons-material/TextFieldsRounded';
import SpaceBarRoundedIcon from '@mui/icons-material/SpaceBarRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import SmartButtonRoundedIcon from '@mui/icons-material/SmartButtonRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import BlurOnRoundedIcon from '@mui/icons-material/BlurOnRounded';
import OpacityRoundedIcon from '@mui/icons-material/OpacityRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Home() {
  const sidebar = useSidebar();
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <FixCardLinks />
      
      {/* Sidebar - Always fixed position */}
      <Sidebar 
        isOpen={sidebar.isOpen} 
        onToggle={sidebar.toggle}
      />
      
      {/* Main Content - Offset by sidebar width on desktop when open */}
      <div className={`flex flex-col min-h-screen transition-all duration-300 ${
        sidebar.isOpen ? 'md:ml-80' : ''
      }`}>
        <Header 
          title="Alux Design System" 
          onSidebarToggle={sidebar.toggle}
        />
        
        <main className="flex-1 w-full p-0 overflow-x-hidden">
            {/* Overview Section */}
            <AnimatedSection id="overview" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20" animation="slide-up">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                  <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
                    <PaletteRoundedIcon className="w-4 h-4 mr-2 align-middle" />
                    Design Documentation
                  </div>
                  
                  <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-neutral-950 dark:text-white mb-5 sm:mb-6">
                    Alux <span className="text-primary-600 dark:text-primary-400">Design</span> System
                  </h1>
                  
                  <p className="font-body text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mb-10 leading-relaxed">
                    A lightweight design system that provides clear guidelines, reusable components, and helpful resources for building consistent and visually appealing user interfaces. 
                  </p>
                  <p className="font-body text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mb-10 leading-relaxed">
                    Built using Tailwind CSS and Headless UI.                  
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
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 animate-fade-in">                  {[
                    {
                      title: "Colors",
                      description: "Complete color palette including primary, accent, and semantic colors",
                      link: "#colors",
                      materialIcon: () => <PaletteRoundedIcon className="align-middle" />
                    },
                    {
                      title: "Typography",
                      description: "Interactive font styles with live preview",
                      link: "#typography",
                      materialIcon: () => <TextFieldsRoundedIcon className="align-middle" />
                    },
                    {
                      title: "Spacing",
                      description: "4-point grid system for consistent spacing",
                      link: "#spacing",
                      materialIcon: () => <SpaceBarRoundedIcon className="align-middle" />
                    },
                    {
                      title: "Buttons",
                      description: "Button styles and variations across different themes",
                      link: "#buttons",
                      materialIcon: () => <SmartButtonRoundedIcon className="align-middle" />
                    },                    {
                      title: "Tabs & Pills",
                      description: "Navigation components with accessibility support",
                      link: "#tabs-pills",
                      materialIcon: () => <DevicesRoundedIcon className="align-middle" />
                    },
                    {
                      title: "Accordions",
                      description: "Collapsible content sections with icons, badges, and nested tabs",
                      link: "#accordions",
                      materialIcon: () => <ExpandMoreIcon className="align-middle" />
                    },
                    {
                      title: "Badges",
                      description: "Status indicators and notification components",
                      link: "#badges",
                      materialIcon: () => <StyleRoundedIcon className="align-middle" />
                    },
                    {
                      title: "Cards",
                      description: "Multiple card variants with different themes and styles",
                      link: "#cards",
                      materialIcon: () => <StyleRoundedIcon className="align-middle" />
                    },
                    {
                      title: "Breakpoints",
                      description: "Responsive breakpoints for different devices",
                      link: "#breakpoints",
                      materialIcon: () => <DevicesRoundedIcon className="align-middle" />
                    },
                    {
                      title: "Drop Shadows",
                      description: "Shadow styles for elevation and depth",
                      link: "#shadows",
                      materialIcon: () => <BlurOnRoundedIcon className="align-middle" />
                    },
                    {
                      title: "Tints",
                      description: "Transparent layers for highlighting elements",
                      link: "#tints",
                      materialIcon: () => <OpacityRoundedIcon className="align-middle" />
                    }
                  ].map((item, index) => (<FeatureCard
                      key={index}
                      title={item.title}
                      description={item.description}
                      materialIcon={item.materialIcon}
                      link={item.link}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* Colors Section */}
            <AnimatedSection id="colors" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950/60" animation="fade-in">
              <div className="max-w-7xl mx-auto">                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
                  <div>
                    <div className="inline-flex items-center px-2.5 py-1 mb-3 text-xs font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
                      <PaletteRoundedIcon className="h-3.5 w-3.5 mr-1.5 align-middle" /> Color System
                    </div>
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-neutral-950 dark:text-white mb-3">Colors</h2>
                    <p className="font-body text-base text-neutral-700 dark:text-neutral-300 max-w-3xl">
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
                
                <div className="mb-16">                  <h3 className="font-heading font-semibold text-lg text-neutral-950 dark:text-white mb-3 flex items-center">
                    <PaletteRoundedIcon className="h-3.5 w-3.5 align-middle" />
                    Light Theme
                  </h3>
                  <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 mb-4">Clean and professional color palette for default light mode.</p>
                  
                  {/* Light Theme Card Preview */}
                  <div className="mb-6 flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 group">
                      <div 
                        className="relative p-6 rounded-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
                        style={{
                          background: "linear-gradient(to bottom, rgba(253, 253, 253, 0.9), rgba(243, 244, 246, 0.9))",
                          border: "1px solid rgba(229, 231, 235, 0.5)",
                          boxShadow: "0 4px 12px rgba(168, 85, 247, 0.1)"
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-heading text-base font-medium text-neutral-900 mb-1">Light Theme Card</h4>
                            <p className="font-body text-sm text-neutral-700">Clean and professional styling</p>
                          </div>
                          <div className="bg-blue-500/10 text-blue-500 p-2 rounded-lg">
                            <PaletteRoundedIcon className="align-middle" />
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-neutral-200/40">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-500">
                            <span className="text-[10px]">Light Theme Card</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
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
                
                  <h4 className="font-heading font-medium text-base text-neutral-950 dark:text-white mt-6 mb-2">Card Styling</h4>                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
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
                </div>                <h3 className="font-heading font-semibold text-lg text-neutral-950 dark:text-white mt-12 mb-3 flex items-center">
                  <BlurOnRoundedIcon className="h-3.5 w-3.5 align-middle" />
                  Dark Theme
                </h3>
                <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 mb-4">Sophisticated dark palette for late night browsing.</p>
                
                {/* Dark Theme Card Preview */}
                <div className="mb-6 flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2 lg:w-1/3 group">
                    <div 
                      className="relative p-6 rounded-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
                      style={{
                        background: "linear-gradient(to bottom, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9))",
                        border: "1px solid rgba(75, 85, 99, 0.5)",
                        boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)"
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-heading text-base font-medium text-white mb-1">Dark Theme Card</h4>
                          <p className="font-body text-sm text-neutral-300">Preview of the dark theme card styling</p>
                        </div>
                        <div className="bg-blue-500/10 text-blue-400 p-2 rounded-lg">
                          <BlurOnRoundedIcon className="align-middle" />
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-neutral-700/50">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-400">
                          <span className="text-[10px]">Dark Theme Card</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
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
                  />                  <ColorCard 
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
                  </div>                </div>

                  <h4 className="font-heading font-medium text-base text-neutral-950 dark:text-white mt-6 mb-2">Card Styling</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
                    <ColorCard 
                      shade="Card From" 
                      color="bg-neutral-800/90"
                      name="rgba(31, 41, 55, 0.9)"
                    />
                    <ColorCard 
                      shade="Card To" 
                      color="bg-neutral-900/90"
                      name="rgba(17, 24, 39, 0.9)"
                    />
                    <ColorCard 
                      shade="Card Border" 
                      color="border-neutral-700/50"
                      name="rgba(75, 85, 99, 0.5)"
                    />
                    <ColorCard 
                      shade="Card Border Hover" 
                      color="border-blue-300/50"
                      name="rgba(96, 165, 250, 0.5)"
                    />
                    <ColorCard 
                      shade="Card Shadow" 
                      color="shadow-blue-500/20"
                      name="rgba(59, 130, 246, 0.2)"
                    />
                  </div>
                
                <div className="my-8 border-b border-dashed border-neutral-200 dark:border-neutral-800"></div>
                  <h3 className="font-heading font-semibold text-lg text-neutral-950 dark:text-white mb-3 flex items-center">
                  <OpacityRoundedIcon className="h-3.5 w-3.5 align-middle" />
                  Colorful Theme
                </h3>
                <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 mb-4">Vibrant, creative palette for immersive, colorful interfaces.</p>
                
                {/* Colorful Theme Card Preview */}
                <div className="mb-6 flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2 lg:w-1/3 group">
                    <div 
                      className="relative p-6 rounded-xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
                      style={{
                        background: "linear-gradient(to bottom, rgba(20, 10, 50, 0.8), rgba(10, 5, 30, 0.8))",
                        border: "1px solid rgba(128, 0, 255, 0.3)",
                        boxShadow: "0 4px 12px rgba(255, 0, 204, 0.3)"
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-heading text-base font-medium text-blue-50 mb-1">Colorful Theme Card</h4>
                          <p className="font-body text-sm text-blue-200/80">Creative and vibrant card styling</p>
                        </div>
                        <div className="bg-fuchsia-500/10 text-fuchsia-400 p-2 rounded-lg">
                          <OpacityRoundedIcon className="align-middle" />
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-purple-500/30">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-cyan-400">
                          <span className="text-[10px]">Colorful Theme Card</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
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
                  />                  <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 overflow-hidden rounded-lg border border-purple-500/30 shadow-lg shadow-fuchsia-500/30">
                    <div 
                      className="h-20 w-full bg-gradient-to-r from-cyan-400 via-fuchsia-600 to-blue-500 relative"
                    >
                      <div className="absolute inset-0 bg-[url('/public/stars.png')] mix-blend-overlay opacity-30"></div>
                    </div>
                    <div className="p-2.5 bg-indigo-950/80">
                      <p className="font-body text-xs font-medium text-blue-100">Cosmic Gradient</p>
                      <p className="font-body text-[10px] mt-0.5 text-blue-200/70 font-mono">linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)</p>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-heading font-medium text-base text-neutral-950 dark:text-white mt-6 mb-2">Card Styling</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
                  <ColorCard 
                    shade="Card From" 
                    color="bg-indigo-950/80"
                    name="rgba(20, 10, 50, 0.8)"
                  />
                  <ColorCard 
                    shade="Card To" 
                    color="bg-indigo-950/80"
                    name="rgba(10, 5, 30, 0.8)"
                  />
                  <ColorCard 
                    shade="Card Border" 
                    color="border-purple-500/30"
                    name="rgba(128, 0, 255, 0.3)"
                  />
                  <ColorCard 
                    shade="Card Border Hover" 
                    color="border-cyan-400/60"
                    name="rgba(0, 255, 255, 0.6)"
                  />
                  <ColorCard 
                    shade="Card Shadow" 
                    color="shadow-fuchsia-500/30"
                    name="rgba(255, 0, 204, 0.3)"
                  />
                </div>
                  <div className="p-4 bg-gradient-to-br from-indigo-950/80 to-[rgba(10,5,30,0.8)] border border-purple-500/30 hover:border-cyan-400/60 rounded-lg shadow-lg shadow-fuchsia-500/30 mt-2 mb-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="h-3 w-3 rounded-full bg-pink-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-cyan-400"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-mono text-blue-100">Card preview with all styles applied</p>
                    <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-fuchsia-400">Cosmic Theme Card</span>
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
                      <TextFieldsRoundedIcon className="align-middle" /> Typography System
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
                  <TextFieldsRoundedIcon className="h-4 w-4 align-middle" />
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
                    <SpaceBarRoundedIcon className="mr-2 align-middle" /> Grid System
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
            </AnimatedSection>            {/* Buttons Section */}
            <ButtonsSection />
                {/* Tabs & Pills Section */}
            <TabsPillsSection />
                {/* Accordions Section */}
            <AccordionSection />
              
            {/* Navigation Section */}
            <NavigationSection />
              
            {/* Forms Section */}
            <FormsSection />
              
            {/* Badges Section */}
            <BadgesSection />
              
            {/* Cards Section */}
            <CardsSection />
              
            {/* Grids Section */}
            <GridsSection />
              
            {/* Breakpoints Section */}
            <BreakpointsSection />
              
            {/* Shadows Section */}
            <AnimatedSection id="shadows" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950/60" animation="slide-up">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                  <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
                    <BlurOnRoundedIcon className="mr-2 align-middle" /> Elevation System
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
              {/* Card Variants Sections */}
            <BasicCardsSection />            <InteractiveCardsSection />            <MediaCardsSection />
            <DashboardCardsSection />
            <ProfileCardsSection />
            <TimelineCardsSection />
            
            {/* Foundations Sections */}            <SpacingSection />
            
            {/* Utilities Sections */}
            <AccessibilityUtilitiesSection />
            <ResponsiveUtilitiesSection />
        </main>
      </div>
    </div>
  );
}