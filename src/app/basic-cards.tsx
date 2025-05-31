// File: src/app/basic-cards.tsx
import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import StyleIcon from '@mui/icons-material/Style';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { getCardBackground } from "@/utils/cardThemes";

// Card component with theme support
interface BasicCardProps {
  title: string;
  description: string;
  theme: 'light' | 'dark' | 'colorful';
  variant?: 'basic' | 'info' | 'success' | 'warning' | 'danger';
}

function BasicCard({ title, description, theme, variant = 'basic' }: BasicCardProps) {
  // Get variant-specific styles
  const getVariantStyles = () => {
    if (theme === 'colorful') {
      // For colorful theme, use vibrant backgrounds for better contrast
      switch (variant) {
        case 'info': return 'bg-cyan-900/80 border-cyan-400/80 shadow-[0_4px_16px_rgba(0,255,255,0.25)]';
        case 'success': return 'bg-green-900/80 border-green-400/80 shadow-[0_4px_16px_rgba(0,255,200,0.25)]';
        case 'warning': return 'bg-amber-900/80 border-amber-400/80 shadow-[0_4px_16px_rgba(255,200,0,0.25)]';
        case 'danger': return 'bg-rose-900/80 border-rose-400/80 shadow-[0_4px_16px_rgba(255,0,100,0.25)]';
        default: return 'bg-[#1a0033] border-[rgba(128,0,255,0.7)] shadow-[0_4px_16px_rgba(255,0,204,0.25)]';
      }
    } else if (theme === 'dark') {
      // For dark theme, use deeper backgrounds and lighter borders
      switch (variant) {
        case 'info': return 'bg-blue-900 border-blue-400 shadow-lg';
        case 'success': return 'bg-green-900 border-green-400 shadow-lg';
        case 'warning': return 'bg-amber-900 border-amber-400 shadow-lg';
        case 'danger': return 'bg-rose-900 border-rose-400 shadow-lg';
        default: return 'bg-[#0a0a0a] border-neutral-600 shadow-lg';
      }
    } else {
      // For light theme, use more saturated backgrounds and darker text
      switch (variant) {
        case 'info': return 'bg-blue-100 border-blue-600 shadow-md';
        case 'success': return 'bg-green-100 border-green-600 shadow-md';
        case 'warning': return 'bg-amber-100 border-amber-600 shadow-md';
        case 'danger': return 'bg-rose-100 border-rose-600 shadow-md';
        default: return 'bg-white border-neutral-300 shadow-md';
      }
    }
  };

  // Get text styles based on theme and variant
  const getTitleStyles = () => {
    if (theme === 'colorful') {
      return 'text-white';
    } else if (theme === 'dark') {
      return 'text-white';
    } else {
      return 'text-neutral-900';
    }
  };

  const getDescriptionStyles = () => {
    if (theme === 'colorful') {
      return 'text-white/90';
    } else if (theme === 'dark') {
      return 'text-neutral-200';
    } else {
      return 'text-neutral-700';
    }
  };

  const bgStyle = theme === 'colorful' ? getCardBackground('colorful') : {};

  return (
    <div 
      className={`relative rounded-xl overflow-hidden border ${getVariantStyles()}`}
      style={bgStyle}
    >
      <div className="p-6">
        <h3 className={`font-heading text-lg font-bold ${getTitleStyles()} mb-2`}>{title}</h3>
        <p className={`font-body text-sm ${getDescriptionStyles()}`}>{description}</p>
        {theme === 'colorful' && (
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(135deg, #3b82f6, #a855f7, #6366f1)",
            opacity: 0.10,
            mixBlendMode: 'overlay'
          }} />
        )}
      </div>
    </div>
  );
}

export default function BasicCardsSection() {
  return (
    <AnimatedSection id="basic-cards" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950/60 dark:to-neutral-900" animation="fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <StyleIcon className="mr-2" fontSize="small" /> Card Variants
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Basic Cards</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Simple card components for displaying content in a clean, consistent format, available in Light, Dark, and Colorful themes.
          </p>
        </div>

        {/* Light theme cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <LightModeIcon className="mr-2 text-amber-500" />
            <h3 className="font-heading font-semibold text-xl">Light Theme Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <BasicCard 
              theme="light" 
              title="Basic Card" 
              description="A simple card with minimal styling, perfect for general content display."
            />
            <BasicCard 
              theme="light" 
              variant="info" 
              title="Info Card" 
              description="Used for displaying information or helpful tips to users."
            />
            <BasicCard 
              theme="light" 
              variant="success" 
              title="Success Card" 
              description="Used to confirm successful actions or positive outcomes."
            />
          </div>
        </div>
        
        {/* Dark theme cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <DarkModeIcon className="mr-2 text-blue-500" />
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">Dark Theme Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <BasicCard 
              theme="dark" 
              title="Basic Card" 
              description="A simple card with minimal styling, perfect for general content display."
            />
            <BasicCard 
              theme="dark" 
              variant="info" 
              title="Info Card" 
              description="Used for displaying information or helpful tips to users."
            />
            <BasicCard 
              theme="dark" 
              variant="success" 
              title="Success Card" 
              description="Used to confirm successful actions or positive outcomes."
            />
          </div>
        </div>
        
        {/* Colorful theme cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <AutoAwesomeIcon className="mr-2 text-fuchsia-500" />
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">Colorful Theme Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <BasicCard 
              theme="colorful" 
              title="Basic Card" 
              description="A simple card with minimal styling, perfect for general content display."
            />
            <BasicCard 
              theme="colorful" 
              variant="info" 
              title="Info Card" 
              description="Used for displaying information or helpful tips to users."
            />
            <BasicCard 
              theme="colorful" 
              variant="success" 
              title="Success Card" 
              description="Used to confirm successful actions or positive outcomes."
            />
          </div>
        </div>

        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg mb-8 border border-neutral-200/50 dark:border-neutral-800/50">
          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Code Example</h3>
          <CodeSnippet 
            code={`<BasicCard 
  theme="light" // Options: 'light', 'dark', 'colorful'
  variant="basic" // Options: 'basic', 'info', 'success', 'warning', 'danger'
  title="Card Title"
  description="Card description goes here."
/>`}
            language="jsx"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
