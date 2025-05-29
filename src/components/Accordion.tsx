'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import TabsPills from './TabsPills';
import Badge from './Badges';
import { useUniqueId } from '../utils/headlessPatterns';
import { 
  getFocusRingClasses,
  getColorfulContainerClasses,
  getColorfulHeaderClasses,
  getColorfulContentClasses,
  getColorfulTextClass,
  getThemeIconColors,
  getColorfulOverlayStyles
} from '../utils/headlessThemeIntegration';

type AccordionItem = {
  id: string;
  title: string;
  content: string | React.ReactNode;
  icon?: React.ReactNode;  
  badge?: {
    text: string;
    variant: 'success' | 'error' | 'warning' | 'info' | 'new' | 'hot';
  };
  disabled?: boolean;
  hasNestedTabs?: boolean;
};

type AccordionProps = {
  items: AccordionItem[];
  variant?: 'default' | 'bordered' | 'filled' | 'minimal';
  allowMultiple?: boolean;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark' | 'colorful';
};

export default function Accordion({
  items,
  variant = 'default',
  allowMultiple = false,
  iconPosition = 'left',
  size = 'md',
  theme = 'light'
}: AccordionProps) {
  // For non-multiple mode, we track which item should be open
  const [openItem, setOpenItem] = useState<string | null>(null);
  
  // Generate unique IDs for ARIA relationships
  const accordionId = useUniqueId('accordion');
  
  // Track focus state for keyboard navigation
  const accordionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = accordionRef.current;
    if (!container) return;
    
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle keyboard navigation when not in an input, textarea, etc.
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }
      
      // Handle Home/End keys
      if (event.key === 'Home') {
        event.preventDefault();
        const firstButton = container.querySelector('[role="button"]:not([disabled])') as HTMLElement;
        firstButton?.focus();
      } else if (event.key === 'End') {
        event.preventDefault();
        const buttons = container.querySelectorAll('[role="button"]:not([disabled])');
        const lastButton = buttons[buttons.length - 1] as HTMLElement;
        lastButton?.focus();
      }
    };
    
    container.addEventListener('keydown', handleKeyDown);
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [items]);

  // Size configurations
  const sizeClasses = {
    sm: {
      header: 'px-3 py-2 text-sm',
      content: 'px-3 py-3 text-sm',
      icon: 'w-4 h-4',
      chevron: 'w-4 h-4'
    },
    md: {
      header: 'px-4 py-3 text-base',
      content: 'px-4 py-4 text-sm',
      icon: 'w-5 h-5',
      chevron: 'w-5 h-5'
    },
    lg: {
      header: 'px-6 py-4 text-lg',
      content: 'px-6 py-5 text-base',
      icon: 'w-6 h-6',
      chevron: 'w-6 h-6'
    }
  };
  // Variant styles with enhanced theme support using the headlessThemeIntegration utility
  const getVariantStyles = (theme: string) => {
    const baseStyles = {
      default: {
        container: theme === 'colorful' 
          ? `${getColorfulContainerClasses('default')} overflow-hidden`
          : 'border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden',
        header: theme === 'colorful'
          ? getColorfulHeaderClasses('default')
          : 'bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 data-hover:bg-gray-50 dark:data-hover:bg-gray-700',
        content: theme === 'colorful'
          ? getColorfulContentClasses('default')
          : 'bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700'
      },
      bordered: {
        container: theme === 'colorful'
          ? `${getColorfulContainerClasses('bordered')} overflow-hidden`
          : 'border-2 border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden',
        header: theme === 'colorful'
          ? getColorfulHeaderClasses('bordered')
          : 'bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 border-b-2 border-gray-300 dark:border-gray-600 data-hover:from-gray-100 data-hover:to-gray-50 dark:data-hover:from-gray-700 dark:data-hover:to-gray-600',
        content: theme === 'colorful'
          ? getColorfulContentClasses('bordered')
          : 'bg-white dark:bg-gray-800 border-t-2 border-gray-300 dark:border-gray-600'
      },
      filled: {
        container: theme === 'colorful'
          ? `${getColorfulContainerClasses('filled')} overflow-hidden`
          : 'bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden',
        header: theme === 'colorful'
          ? getColorfulHeaderClasses('filled')
          : 'bg-gray-100 dark:bg-gray-800 data-hover:bg-gray-200 dark:data-hover:bg-gray-700',
        content: theme === 'colorful'
          ? getColorfulContentClasses('filled')
          : 'bg-white dark:bg-gray-900'
      },
      minimal: {
        container: 'border-0',
        header: theme === 'colorful'
          ? getColorfulHeaderClasses('minimal')
          : 'data-hover:bg-gray-50 dark:data-hover:bg-gray-800 rounded-lg',
        content: theme === 'colorful'
          ? getColorfulContentClasses('minimal')
          : 'bg-transparent dark:bg-transparent border-l-4 border-gray-200 dark:border-gray-700 ml-4'
      }
    };    
    return baseStyles;
  };
  
  const variantStyles = getVariantStyles(theme);  // Focus styles based on theme using our headless theme integration utility
  const getFocusStyles = (theme: string) => {
    return getFocusRingClasses(theme as 'light' | 'dark' | 'colorful');
  };  // Icon colors based on theme using our headless theme integration utility
  const getIconColors = (theme: string) => {
    return getThemeIconColors(theme as 'light' | 'dark' | 'colorful');
  };

  const themeClasses = {
    light: 'text-gray-900 dark:text-gray-100',
    dark: 'text-gray-100',
    colorful: 'text-[#f0f8ff]'  
  };
  
  return (
    <div 
      className={`space-y-2 ${themeClasses[theme]}`} 
      ref={accordionRef} 
      id={accordionId}
      data-testid="accordion"
    >
      {items.map((item) => {
        const panelId = `${accordionId}-panel-${item.id}`;
        const buttonId = `${accordionId}-button-${item.id}`;
        const IconComponent = iconPosition === 'left' ? ChevronRightIcon : ExpandMoreIcon;        
        
        if (allowMultiple) {
          // Use individual Disclosure for multiple open items
          return (
            <Disclosure key={item.id}>
              {({ open }) => (
                <div className={`relative ${variantStyles[variant].container} ${variant === 'minimal' ? 'mb-4' : ''}`}>
                  <Disclosure.Button
                    disabled={item.disabled}
                    id={buttonId}
                    aria-controls={panelId}
                    aria-expanded={open}
                    className={`
                      w-full flex items-center justify-between 
                      ${sizeClasses[size].header} 
                      ${variantStyles[variant].header}
                      ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                      transition-all duration-200 ${getFocusStyles(theme)}
                      disabled:pointer-events-none
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon && iconPosition === 'left' && (
                        <div className={`${sizeClasses[size].icon} ${getIconColors(theme)}`} aria-hidden="true">
                          {item.icon}
                        </div>
                      )}
                      
                      <span className="font-medium text-left">{item.title}</span>
                      {item.badge && (
                        <Badge 
                          theme={theme}
                          status={item.badge.variant}
                          size={size === 'lg' ? 'md' : 'sm'}
                        >
                          {item.badge.text}
                        </Badge>
                      )}
                      
                      {item.icon && iconPosition === 'right' && (
                        <div className={`${sizeClasses[size].icon} ${getIconColors(theme)}`} aria-hidden="true">
                          {item.icon}
                        </div>
                      )}
                    </div>
                    
                    <IconComponent 
                      className={`
                        ${sizeClasses[size].chevron} ${getIconColors(theme)}
                        transition-transform duration-200 
                        ${open ? 'rotate-90' : ''}
                      `}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel 
                      id={panelId}
                      className={`
                        ${sizeClasses[size].content} 
                        ${variantStyles[variant].content}
                      `}
                      static={false}
                    >
                      {item.hasNestedTabs ? (
                        <div className="space-y-4">
                          <div className={`${theme === 'colorful' ? getColorfulTextClass('secondary') : 'text-gray-700 dark:text-gray-300'} mb-4`}>
                            {typeof item.content === 'string' ? item.content : item.content}
                          </div>
                          <TabsPills 
                            variant="pills" 
                            size="sm"
                            items={['Overview', 'Details', 'Examples']}
                            theme={theme}
                          />
                        </div>
                      ) : (
                        <div className={`${theme === 'colorful' ? getColorfulTextClass('secondary') : 'text-gray-700 dark:text-gray-300'}`}>
                          {typeof item.content === 'string' ? item.content : item.content}
                        </div>
                      )}
                    </Disclosure.Panel>
                  </Transition>
                    {/* Colorful theme overlay effect using our headless theme integration utility */}
                  {theme === 'colorful' && (
                    <div {...getColorfulOverlayStyles('overlay', 0.10)} />
                  )}
                </div>
              )}
            </Disclosure>
          );
        } else {
          // Single open item mode - control externally
          const isItemOpen = openItem === item.id;
          
          return (
            <div key={item.id} className={`relative ${variantStyles[variant].container} ${variant === 'minimal' ? 'mb-4' : ''}`}>
              <button
                onClick={() => !item.disabled && setOpenItem(isItemOpen ? null : item.id)}
                disabled={item.disabled}
                className={`
                  w-full flex items-center justify-between 
                  ${sizeClasses[size].header} 
                  ${variantStyles[variant].header}
                  ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                  transition-all duration-200 ${getFocusStyles(theme)}
                `}
                aria-expanded={isItemOpen}
                aria-controls={`accordion-content-${item.id}`}
                id={`accordion-header-${item.id}`}
                data-hover={isItemOpen || undefined}
                type="button"
              >
                <div className="flex items-center space-x-3">
                  {item.icon && iconPosition === 'left' && (
                    <div className={`${sizeClasses[size].icon} ${getIconColors(theme)}`} aria-hidden="true">
                      {item.icon}
                    </div>
                  )}
                  
                  <span className="font-medium text-left">{item.title}</span>
                  {item.badge && (
                    <Badge 
                      theme={theme}
                      status={item.badge.variant}
                      size={size === 'lg' ? 'md' : 'sm'}
                    >
                      {item.badge.text}
                    </Badge>
                  )}
                  
                  {item.icon && iconPosition === 'right' && (
                    <div className={`${sizeClasses[size].icon} ${getIconColors(theme)}`} aria-hidden="true">
                      {item.icon}
                    </div>
                  )}
                </div>
                
                <IconComponent 
                  className={`
                    ${sizeClasses[size].chevron} ${getIconColors(theme)}
                    transition-transform duration-200 
                    ${isItemOpen ? 'rotate-90' : ''}
                  `}
                  aria-hidden="true"
                />
              </button>
              
              <Transition
                show={isItemOpen}
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <div 
                  id={`accordion-content-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-header-${item.id}`}
                  className={`
                    ${sizeClasses[size].content} 
                    ${variantStyles[variant].content}
                  `}
                >
                  {item.hasNestedTabs ? (
                    <div className="space-y-4">
                      <div className={`${theme === 'colorful' ? getColorfulTextClass('secondary') : 'text-gray-700 dark:text-gray-300'} mb-4`}>
                        {typeof item.content === 'string' ? item.content : item.content}
                      </div>
                      <TabsPills 
                        variant="pills" 
                        size="sm"
                        items={['Overview', 'Details', 'Examples']}
                        theme={theme}
                      />
                    </div>
                  ) : (
                    <div className={`${theme === 'colorful' ? getColorfulTextClass('secondary') : 'text-gray-700 dark:text-gray-300'}`}>
                      {typeof item.content === 'string' ? item.content : item.content}
                    </div>
                  )}
                </div>
              </Transition>
                {/* Colorful theme overlay effect using our headless theme integration utility */}
              {theme === 'colorful' && (
                <div {...getColorfulOverlayStyles('overlay', 0.10)} />
              )}
            </div>
          );
        }
      })}
    </div>
  );
}

// Showcase component for the design system
export function AccordionShowcase() {
  // Showcase implementation remains the same
  const sampleItems: AccordionItem[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      content: 'Learn the basics of our design system and how to implement components in your project.',
      icon: <InfoIcon className="w-5 h-5" />,
      badge: { text: 'New', variant: 'info' }
    },
    {
      id: 'components',
      title: 'Components Library',
      content: 'Explore our comprehensive collection of UI components with examples and usage guidelines.',
      icon: <CheckCircleIcon className="w-5 h-5" />,
      badge: { text: '50+ Components', variant: 'success' },
      hasNestedTabs: true
    },
    {
      id: 'customization',
      title: 'Theme Customization',
      content: 'Customize colors, typography, and spacing to match your brand identity.',
      icon: <WarningIcon className="w-5 h-5" />,
      badge: { text: 'Advanced', variant: 'warning' }
    },
    {
      id: 'accessibility',
      title: 'Accessibility Guidelines',
      content: 'Follow WCAG 2.1 standards and best practices for inclusive design.',
      icon: <CheckCircleIcon className="w-5 h-5" />,
      badge: { text: 'WCAG 2.1', variant: 'success' }
    },
    {
      id: 'migration',
      title: 'Migration Guide',
      content: 'Step-by-step instructions for migrating from older versions.',
      icon: <ErrorIcon className="w-5 h-5" />,
      badge: { text: 'Coming Soon', variant: 'info' },
      disabled: true
    }
  ];

  return (
    <div className="space-y-12">
      {/* Default Variant */}
      <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
        <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
          <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
          Default Accordion
        </h3>
        <Accordion items={sampleItems} />
      </div>      
      
      {/* Other showcase components remain the same */}
      {/* Bordered Variant */}
      <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
        <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
          <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </span>
          Bordered Accordion (Multiple Open)
        </h3>
        <Accordion items={sampleItems} variant="bordered" allowMultiple />
      </div>      
      
      {/* Colorful Theme Variant */}      <div className={`${getColorfulContainerClasses('default')} p-8 relative overflow-hidden`}>
        <div {...getColorfulOverlayStyles('overlay', 0.10)} />
        <h3 className={`font-heading font-semibold text-xl ${getColorfulTextClass('primary')} mb-6 flex items-center relative z-10`}>
          <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-fuchsia-500/20 text-fuchsia-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z" />
            </svg>
          </span>
          Colorful Theme Accordion
        </h3>
        <div className="relative z-10">
          <Accordion items={sampleItems.slice(0, 3)} variant="default" theme="colorful" />
        </div>
      </div>

      {/* Filled Variant */}
      <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
        <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
          <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </span>
          Filled Accordion (Large Size)
        </h3>
        <Accordion items={sampleItems.slice(0, 3)} variant="filled" size="lg" />
      </div>      
      
      {/* Minimal Variant */}
      <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
        <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
          <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </span>
          Minimal Accordion (Right Icons)
        </h3>
        <Accordion 
          items={sampleItems.slice(0, 3)} 
          variant="minimal" 
          iconPosition="right" 
          allowMultiple 
        />
      </div>      
      
      {/* Colorful Bordered Variant */}      <div className={`${getColorfulContainerClasses('bordered')} p-8 relative overflow-hidden`}>
        <div {...getColorfulOverlayStyles('overlay', 0.10)} />
        <h3 className={`font-heading font-semibold text-xl ${getColorfulTextClass('primary')} mb-6 flex items-center relative z-10`}>
          <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-fuchsia-500/20 text-fuchsia-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
          Colorful Bordered Accordion (Large Size)
        </h3>
        <div className="relative z-10">
          <Accordion 
            items={sampleItems.slice(0, 3)} 
            variant="bordered" 
            theme="colorful" 
            size="lg"
            allowMultiple 
          />
        </div>
      </div>
    </div>
  );
}
