// File: src/app/interactive-cards.tsx
import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { getCardBackground } from "@/utils/cardThemes";
import { useState } from "react";

// Interactive Card component with theme support
interface InteractiveCardProps {
  title: string;
  description: string;
  theme: 'light' | 'dark' | 'colorful';
  variant: 'hover' | 'click' | 'expand';
}

function InteractiveCard({ title, description, theme, variant }: InteractiveCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Get card styles based on theme and variant
  const getCardStyles = () => {
    let baseStyle = '';
    
    // Base styles for each theme
    if (theme === 'colorful') {
      baseStyle = 'border border-[rgba(128,0,255,0.3)] shadow-[0_4px_12px_rgba(255,0,204,0.3)]';
    } else if (theme === 'dark') {
      baseStyle = 'bg-neutral-800 border-neutral-700 shadow-md';
    } else {
      baseStyle = 'bg-white border-neutral-200 shadow-md';
    }
    
    // Add variant-specific styles
    if (variant === 'hover') {
      baseStyle += ' transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer';
      
      if (theme === 'colorful') {
        baseStyle += ' hover:border-[rgba(0,255,255,0.6)]';
      } else if (theme === 'dark') {
        baseStyle += ' hover:border-primary-700';
      } else {
        baseStyle += ' hover:border-primary-300';
      }
    } else if (variant === 'click') {
      baseStyle += ' cursor-pointer';
      
      if (theme === 'colorful') {
        baseStyle += ' active:bg-[rgba(128,0,255,0.2)]';
      } else if (theme === 'dark') {
        baseStyle += ' active:bg-neutral-700/50';
      } else {
        baseStyle += ' active:bg-neutral-50';
      }
    }
    
    return baseStyle;
  };
  
  // Get text styles based on theme
  const getTitleStyles = () => {
    let style = '';
    
    if (theme === 'colorful') {
      style = 'text-[#f0f8ff]';
    } else if (theme === 'dark') {
      style = 'text-white';
    } else {
      style = 'text-neutral-900';
    }
    
    if (variant === 'hover') {
      if (theme === 'colorful') {
        style += ' group-hover:text-[#3b82f6]';
      } else {
        style += ' group-hover:text-primary-600 dark:group-hover:text-primary-400';
      }
    }
    
    return style;
  };
  
  const getDescriptionStyles = () => {
    if (theme === 'colorful') return 'text-[#f0f8ff]/90';
    if (theme === 'dark') return 'text-neutral-300';
    return 'text-neutral-600';
  };
  
  const getIconStyles = () => {
    if (theme === 'colorful') return 'text-[#3b82f6]';
    if (theme === 'dark') return 'text-neutral-400';
    return 'text-neutral-500';
  };
  
  const bgStyle = theme === 'colorful' ? getCardBackground('colorful') : {};
  
  // Render specific card based on variant
  const renderCard = () => {
    if (variant === 'expand') {
      return (
        <div className={`rounded-xl overflow-hidden ${getCardStyles()}`} style={bgStyle}>
          <div className="p-6">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
              <h3 className={`font-heading text-lg font-medium ${getTitleStyles()}`}>{title}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${getIconStyles()} transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <div className={`mt-4 text-sm ${getDescriptionStyles()} overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-32' : 'max-h-0'}`}>
              {description}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={`group rounded-xl overflow-hidden ${getCardStyles()}`} style={bgStyle}>
          <div className="p-6">
            <h3 className={`font-heading text-lg font-medium ${getTitleStyles()} mb-2`}>{title}</h3>
            <p className={`font-body text-sm ${getDescriptionStyles()}`}>
              {description}
            </p>
          </div>
        </div>
      );
    }
  };
  
  return (
    <>
      {renderCard()}
      {theme === 'colorful' && (
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(135deg, #3b82f6, #a855f7, #6366f1)",
          opacity: 0.07,
          mixBlendMode: 'overlay'
        }} />
      )}
    </>
  );
}

export default function InteractiveCardsSection() {
  return (
    <AnimatedSection id="interactive-cards" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20" animation="fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <TouchAppIcon className="mr-2" fontSize="small" /> Interactive Elements
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Interactive Cards</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Cards with interactive elements that respond to user actions like hover, click, and touch - available in Light, Dark, and Colorful themes.
          </p>
        </div>

        {/* Light theme interactive cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <LightModeIcon className="mr-2 text-amber-500" />
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">Light Theme Interactive Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <InteractiveCard
              theme="light"
              variant="hover"
              title="Hover Effect Card"
              description="This card animates on hover with a subtle lift and color change."
            />
            <InteractiveCard
              theme="light"
              variant="click"
              title="Click Effect Card"
              description="This card has a tactile click effect when pressed."
            />
            <InteractiveCard
              theme="light"
              variant="expand"
              title="Expandable Card"
              description="Click the header to expand and reveal this additional content. The card smoothly animates between states."
            />
          </div>
        </div>
        
        {/* Dark theme interactive cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <DarkModeIcon className="mr-2 text-blue-500" />
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">Dark Theme Interactive Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <InteractiveCard
              theme="dark"
              variant="hover"
              title="Hover Effect Card"
              description="This card animates on hover with a subtle lift and color change."
            />
            <InteractiveCard
              theme="dark"
              variant="click"
              title="Click Effect Card"
              description="This card has a tactile click effect when pressed."
            />
            <InteractiveCard
              theme="dark"
              variant="expand"
              title="Expandable Card"
              description="Click the header to expand and reveal this additional content. The card smoothly animates between states."
            />
          </div>
        </div>
        
        {/* Colorful theme interactive cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <AutoAwesomeIcon className="mr-2 text-fuchsia-500" />
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">Colorful Theme Interactive Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <InteractiveCard
              theme="colorful"
              variant="hover"
              title="Hover Effect Card"
              description="This card animates on hover with a subtle lift and color change."
            />
            <InteractiveCard
              theme="colorful"
              variant="click"
              title="Click Effect Card"
              description="This card has a tactile click effect when pressed."
            />
            <InteractiveCard
              theme="colorful"
              variant="expand"
              title="Expandable Card"
              description="Click the header to expand and reveal this additional content. The card smoothly animates between states."
            />
          </div>
        </div>

        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg mb-8 border border-neutral-200/50 dark:border-neutral-800/50">
          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Code Example</h3>
          <CodeSnippet 
            code={`<InteractiveCard
  theme="light" // Options: 'light', 'dark', 'colorful'
  variant="hover" // Options: 'hover', 'click', 'expand'
  title="Card Title"
  description="Card description text"
/>`}
            language="jsx"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
