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
      // For colorful theme, use vibrant variants
      switch (variant) {
        case 'info': return 'border-blue-400/50 shadow-[0_4px_12px_rgba(0,255,255,0.3)]';
        case 'success': return 'border-green-400/50 shadow-[0_4px_12px_rgba(0,255,200,0.3)]';
        case 'warning': return 'border-amber-400/50 shadow-[0_4px_12px_rgba(255,200,0,0.3)]';
        case 'danger': return 'border-rose-400/50 shadow-[0_4px_12px_rgba(255,0,100,0.3)]';
        default: return 'border-[rgba(128,0,255,0.3)] shadow-[0_4px_12px_rgba(255,0,204,0.3)]';
      }
    } else if (theme === 'dark') {
      // For dark theme
      switch (variant) {
        case 'info': return 'bg-blue-900/20 border-blue-800/30 shadow-md';
        case 'success': return 'bg-green-900/20 border-green-800/30 shadow-md';
        case 'warning': return 'bg-amber-900/20 border-amber-800/30 shadow-md';
        case 'danger': return 'bg-rose-900/20 border-rose-800/30 shadow-md';
        default: return 'bg-[#0a0a0a] border-neutral-700 shadow-md';
      }
    } else {
      // For light theme
      switch (variant) {
        case 'info': return 'bg-blue-50 border-blue-200 shadow-md';
        case 'success': return 'bg-green-50 border-green-200 shadow-md';
        case 'warning': return 'bg-amber-50 border-amber-200 shadow-md';
        case 'danger': return 'bg-rose-50 border-rose-200 shadow-md';
        default: return 'bg-white border-neutral-200 shadow-md';
      }
    }
  };

  // Get text styles based on theme and variant
  const getTitleStyles = () => {
    if (theme === 'colorful') {
      switch (variant) {
        case 'info': return 'text-cyan-100';
        case 'success': return 'text-green-100';
        case 'warning': return 'text-amber-100';
        case 'danger': return 'text-rose-100';
        default: return 'text-[#f0f8ff]';
      }
    } else if (theme === 'dark') {
      switch (variant) {
        case 'info': return 'text-blue-300';
        case 'success': return 'text-green-300';
        case 'warning': return 'text-amber-300';
        case 'danger': return 'text-rose-300';
        default: return 'text-white';
      }
    } else {
      switch (variant) {
        case 'info': return 'text-blue-800';
        case 'success': return 'text-green-800';
        case 'warning': return 'text-amber-800';
        case 'danger': return 'text-rose-800';
        default: return 'text-neutral-900';
      }
    }
  };

  const getDescriptionStyles = () => {
    if (theme === 'colorful') {
      switch (variant) {
        case 'info': return 'text-cyan-100/90';
        case 'success': return 'text-green-100/90';
        case 'warning': return 'text-amber-100/90';
        case 'danger': return 'text-rose-100/90';
        default: return 'text-[#f0f8ff]/90';
      }
    } else if (theme === 'dark') {
      switch (variant) {
        case 'info': return 'text-blue-200';
        case 'success': return 'text-green-200';
        case 'warning': return 'text-amber-200';
        case 'danger': return 'text-rose-200';
        default: return 'text-neutral-300';
      }
    } else {
      switch (variant) {
        case 'info': return 'text-blue-700';
        case 'success': return 'text-green-700';
        case 'warning': return 'text-amber-700';
        case 'danger': return 'text-rose-700';
        default: return 'text-neutral-600';
      }
    }
  };

  const bgStyle = theme === 'colorful' ? getCardBackground('colorful') : {};

  return (
    <div 
      className={`rounded-xl overflow-hidden border ${getVariantStyles()}`}
      style={bgStyle}
    >
      <div className="p-6">
        <h3 className={`font-heading text-lg font-medium ${getTitleStyles()} mb-2`}>{title}</h3>
        <p className={`font-body text-sm ${getDescriptionStyles()}`}>
          {description}
        </p>
        {theme === 'colorful' && (
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)",
            opacity: 0.07,
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
