// File: src/app/cards-section.tsx
// Updated to use Material UI icons instead of emoji icons

import AnimatedSection from "@/components/AnimatedSection";
import ThemeCard from "@/components/ThemeCard";
import CodeSnippet from "@/components/CodeSnippet";
// Material UI Icons
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import LayersIcon from '@mui/icons-material/Layers';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import StyleIcon from '@mui/icons-material/Style';
import ImageIcon from '@mui/icons-material/Image';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function CardsSection() {
  return (
    <AnimatedSection id="cards" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950/60 dark:to-neutral-900" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <StyleIcon className="mr-2" fontSize="small" /> Card System
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Cards</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            A flexible card system with multiple variants and themes to showcase content across your interface.
          </p>
        </div>
        
        <div className="space-y-14">          {/* Theme Cards */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">              <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-blue-500/10 text-blue-500 dark:text-blue-400">
                <LightModeIcon className="h-4 w-4" />
              </span>
              Theme Cards
            </h3>
            <div className="mb-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">                <ThemeCard 
                  variant="default"
                  theme="light-enhanced"
                  title="Light Theme"
                  description="Clean, bright design with subtle gradients optimized for daylight viewing."
                  materialIcon={LightModeIcon}
                />
                <ThemeCard 
                  variant="default"
                  theme="dark-enhanced"
                  title="Dark Theme"
                  description="Sophisticated dark palette (#0a0a0a) with blue accents for night browsing."
                  materialIcon={DarkModeIcon}
                />
                <ThemeCard 
                  variant="default"
                  theme="colorful"
                  title="Cosmic Theme"
                  description="Vibrant cosmic gradient with cyan, magenta and blue from #3b82f6 to #a855f7 to #3b82f6."
                  materialIcon={AutoAwesomeIcon}
                />
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto mt-6">                <CodeSnippet code={`<ThemeCard 
  variant="default"
  theme="light-enhanced" // Options: 'light-enhanced', 'dark-enhanced', 'colorful'
  title="Theme Card"
  description="Card description goes here"
  materialIcon={LightModeIcon}
/>`} />
              </div>
            </div>
          </div>
          
          {/* Card Variants */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">              <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-blue-500/10 text-blue-500 dark:text-blue-400">
                <StyleIcon className="h-4 w-4" />
              </span>
              Card Variants
            </h3>
            <div className="mb-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">                <ThemeCard 
                  variant="minimal"
                  title="Minimal Card"
                  description="A clean, minimalist card that changes background on hover."
                  materialIcon={AltRouteIcon}
                />
                <ThemeCard 
                  variant="gradient"
                  title="Gradient Card"
                  description="Features a subtle gradient background for visual interest."
                  materialIcon={ColorLensIcon}
                />
                <ThemeCard 
                  variant="bordered"
                  title="Bordered Card"
                  description="Uses a colored border to highlight important content."
                  materialIcon={BorderStyleIcon}
                />
                <ThemeCard 
                  variant="elevated"
                  title="Elevated Card"
                  description="Raises on hover to create a sense of depth and interaction."
                  materialIcon={LayersIcon}
                />
                <ThemeCard 
                  variant="glass"
                  title="Glass Card"
                  description="Transparent backdrop with blur effect for a modern look."
                  materialIcon={BlurOnIcon}
                />
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto mt-6">                <CodeSnippet code={`// Available variants: 'default' | 'minimal' | 'gradient' | 'bordered' | 'elevated' | 'glass'
<ThemeCard 
  variant="gradient"
  title="Gradient Card"
  description="Card description goes here"
  materialIcon={ColorLensIcon}
/>`} />
              </div>
            </div>
          </div>
          
          {/* Light Theme Variants */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">              <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-blue-500/10 text-blue-500 dark:text-blue-400">
                <LightModeIcon className="h-4 w-4" />
              </span>
              Light Theme Variants
            </h3>
            <div className="mb-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <ThemeCard 
                  variant="minimal"
                  theme="light-enhanced"
                  title="Minimal Light"
                  description="A clean, minimalist light card that changes background on hover."
                  materialIcon={AltRouteIcon}
                />
                <ThemeCard 
                  variant="gradient"
                  theme="light-enhanced"
                  title="Gradient Light"
                  description="Light theme with subtle gradient background for visual interest."
                  materialIcon={ColorLensIcon}
                />
                <ThemeCard 
                  variant="bordered"
                  theme="light-enhanced"
                  title="Bordered Light"
                  description="Light theme with a colored border to highlight content."
                  materialIcon={BorderStyleIcon}
                />
                <ThemeCard 
                  variant="elevated"
                  theme="light-enhanced"
                  title="Elevated Light"
                  description="Light theme with elevation effect that raises on hover."
                  materialIcon={LayersIcon}
                />
                <ThemeCard 
                  variant="glass"
                  theme="light-enhanced"
                  title="Glass Light"
                  description="Light theme with a subtle glass effect and backdrop blur."
                  materialIcon={BlurOnIcon}
                />
              </div>
            </div>
          </div>
          
          {/* Dark Theme Variants */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">              <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-blue-500/10 text-blue-500 dark:text-blue-400">
                <DarkModeIcon className="h-4 w-4" />
              </span>
              Dark Theme Variants
            </h3>
            <div className="mb-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <ThemeCard 
                  variant="minimal"
                  theme="dark-enhanced"
                  title="Minimal Dark"
                  description="A clean, minimalist dark card that changes background on hover."
                  materialIcon={AltRouteIcon}
                />
                <ThemeCard 
                  variant="gradient"
                  theme="dark-enhanced"
                  title="Gradient Dark"
                  description="Dark theme with subtle gradient background for visual interest."
                  materialIcon={ColorLensIcon}
                />
                <ThemeCard 
                  variant="bordered"
                  theme="dark-enhanced"
                  title="Bordered Dark"
                  description="Dark theme with a colored border to highlight content."
                  materialIcon={BorderStyleIcon}
                />
                <ThemeCard 
                  variant="elevated"
                  theme="dark-enhanced"
                  title="Elevated Dark"
                  description="Dark theme with elevation effect that raises on hover."
                  materialIcon={LayersIcon}
                />
                <ThemeCard 
                  variant="glass"
                  theme="dark-enhanced"
                  title="Glass Dark"
                  description="Dark theme with a subtle glass effect and backdrop blur."
                  materialIcon={BlurOnIcon}
                />
              </div>
            </div>
          </div>
            
          {/* Colorful Theme Variants */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">              <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-400">
                <AutoAwesomeIcon className="h-4 w-4" />
              </span>
              Colorful Theme Variants
            </h3>
            <div className="mb-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <ThemeCard 
                  variant="minimal"
                  theme="colorful"
                  title="Minimal Cosmic"
                  description="A clean, minimalist cosmic card that changes background on hover."
                  materialIcon={AltRouteIcon}
                />
                <ThemeCard 
                  variant="gradient"
                  theme="colorful"
                  title="Gradient Cosmic"
                  description="Cosmic theme with gradient background for vibrant visual interest."
                  materialIcon={ColorLensIcon}
                />
                <ThemeCard 
                  variant="bordered"
                  theme="colorful"
                  title="Bordered Cosmic"
                  description="Cosmic theme with a colored border to highlight content."
                  materialIcon={BorderStyleIcon}
                />
                <ThemeCard 
                  variant="elevated"
                  theme="colorful"
                  title="Elevated Cosmic"
                  description="Cosmic theme with elevation effect that raises on hover."
                  materialIcon={LayersIcon}
                />
                <ThemeCard 
                  variant="glass"
                  theme="colorful"
                  title="Glass Cosmic"
                  description="Cosmic theme with a subtle glass effect and backdrop blur."
                  materialIcon={BlurOnIcon}
                  className="hover:shadow-[0_8px_24px_rgba(255,0,204,0.4)]"
                />
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto mt-6">
                <CodeSnippet code={`<ThemeCard 
  variant="glass" // Any card variant
  theme="colorful" // Options: 'light-enhanced', 'dark-enhanced', 'colorful'
  title="Glass Cosmic"
  description="Cosmic theme with glass effect"
  materialIcon={BlurOnIcon}
  className="hover:shadow-[0_8px_24px_rgba(255,0,204,0.4)]"
/>`} />
              </div>
            </div>
          </div>
            
          {/* Card System Links */}
          <div className="flex flex-col lg:flex-row gap-5 mb-10">
            <a href="#basic-cards" className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-5 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-md flex-1 flex items-center hover:border-primary-300 dark:hover:border-primary-700 transition-colors">              <div className="mr-4 w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-500 dark:text-blue-400">
                <StyleIcon />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-neutral-900 dark:text-white mb-1">Basic Cards</h3>
                <p className="font-body text-sm text-neutral-600 dark:text-neutral-400">Simple card components for general content display</p>
              </div>
            </a>
            <a href="#profile-cards" className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-5 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-md flex-1 flex items-center hover:border-primary-300 dark:hover:border-primary-700 transition-colors">              <div className="mr-4 w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-500 dark:text-blue-400">
                <PersonIcon />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-neutral-900 dark:text-white mb-1">Profile Cards</h3>
                <p className="font-body text-sm text-neutral-600 dark:text-neutral-400">Cards designed for user profiles and team members</p>
              </div>
            </a>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-5">
            <a href="#media-cards" className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-5 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-md flex-1 flex items-center hover:border-primary-300 dark:hover:border-primary-700 transition-colors">              <div className="mr-4 w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-500 dark:text-blue-400">
                <ImageIcon />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-neutral-900 dark:text-white mb-1">Media Cards</h3>
                <p className="font-body text-sm text-neutral-600 dark:text-neutral-400">Cards designed for images and rich media</p>
              </div>
            </a>
            <a href="#interactive-cards" className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-5 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-md flex-1 flex items-center hover:border-primary-300 dark:hover:border-primary-700 transition-colors">              <div className="mr-4 w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-500 dark:text-blue-400">
                <TouchAppIcon />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-neutral-900 dark:text-white mb-1">Interactive Cards</h3>
                <p className="font-body text-sm text-neutral-600 dark:text-neutral-400">Cards with hover, click, and expand animations</p>
              </div>
            </a>
            <a href="#dashboard-cards" className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-5 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-md flex-1 flex items-center hover:border-primary-300 dark:hover:border-primary-700 transition-colors">              <div className="mr-4 w-12 h-12 flex items-center justify-center bg-blue-500/10 rounded-lg text-blue-500 dark:text-blue-400">
                <DashboardIcon />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-neutral-900 dark:text-white mb-1">Dashboard Cards</h3>
                <p className="font-body text-sm text-neutral-600 dark:text-neutral-400">Cards for data visualization and analytics</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
