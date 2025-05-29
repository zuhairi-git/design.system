/**
 * Headless UI Theme Integration Utilities
 * 
 * This file provides utilities for integrating the colorful theme with
 * headless UI components across the design system.
 */

import { 
  colorfulThemeColors, 
  colorfulThemeEffects, 
  colorfulThemeVariants 
} from './colorfulTheme';

/**
 * Component theme mapping to standardize theme values across components
 */
export type ThemeType = 'light' | 'dark' | 'colorful';

/**
 * Maps component-specific theme values to standardized values
 */
export function normalizeTheme(theme: string | unknown): ThemeType {
  if (!theme || typeof theme !== 'string') return 'light';
  
  if (theme === 'dark') return 'dark';
  if (theme === 'colorful') return 'colorful';
  
  return 'light';
}

/**
 * Get focus ring styles based on theme
 */
export function getFocusRingClasses(theme: ThemeType): string {
  switch (theme) {
    case 'colorful':
      return 'focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a0033]';
    case 'dark':
      return 'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900';
    default:
      return 'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2';
  }
}

/**
 * Get colorful theme gradient style for a component
 */
export function getColorfulGradient(type: 'primary' | 'secondary' | 'accent' | 'highlight'): string {
  return colorfulThemeColors.gradients[type];
}

/**
 * Get colorful theme text color based on importance
 */
export function getColorfulTextClass(importance: 'primary' | 'secondary' | 'muted'): string {
  switch (importance) {
    case 'primary':
      return 'text-[#f0f8ff]'; // Bright text for headings
    case 'secondary':
      return 'text-[#f0f8ff]/90'; // Slightly dimmed for body text
    case 'muted':
      return 'text-[#f0f8ff]/70'; // More dimmed for less important text
    default:
      return 'text-[#f0f8ff]';
  }
}

/**
 * Get container styles for a colorful component
 */
export function getColorfulContainerClasses(variant: 'default' | 'bordered' | 'filled' | 'minimal'): string {
  switch (variant) {
    case 'bordered':
      return 'border-2 border-[rgba(128,0,255,0.7)] bg-[#1a0033] rounded-xl shadow-[0_4px_16px_rgba(255,0,204,0.25)]';
    case 'filled':
      return 'bg-[#1a0033] rounded-lg shadow-[0_4px_16px_rgba(255,0,204,0.25)]';
    case 'minimal':
      return 'bg-transparent';
    default:
      return 'border border-[rgba(128,0,255,0.3)] bg-[#1a0033] rounded-lg shadow-[0_4px_16px_rgba(255,0,204,0.25)]';
  }
}

/**
 * Get interactive state classes for a colorful component
 */
export function getColorfulInteractiveClasses(state: 'hover' | 'focus' | 'active' | 'disabled'): string {
  switch (state) {
    case 'hover':
      return 'data-hover:bg-[rgba(26,0,51,0.8)]';
    case 'focus':
      return 'data-focus:ring-2 data-focus:ring-[rgba(255,0,204,0.5)]';
    case 'active':
      return 'data-active:bg-[rgba(26,0,51,0.9)]';
    case 'disabled':
      return 'data-disabled:opacity-50 data-disabled:cursor-not-allowed';
    default:
      return '';
  }
}

/**
 * Get colorful theme overlay style
 * Returns style object for overlay element
 */
export function getColorfulOverlayStyles(mixBlendMode = 'overlay', opacity = 0.1): Record<string, unknown> {
  return {
    className: "absolute inset-0 pointer-events-none",
    style: {
      background: "linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)",
      opacity,
      mixBlendMode
    },
    "aria-hidden": "true"
  };
}

/**
 * Get colorful theme header styles
 */
export function getColorfulHeaderClasses(variant: 'default' | 'bordered' | 'filled' | 'minimal'): string {
  const baseClasses = 'bg-[#1a0033]';
  
  switch (variant) {
    case 'bordered':
      return `${baseClasses} border-b-2 border-[rgba(128,0,255,0.7)] data-hover:bg-[rgba(26,0,51,0.8)]`;
    case 'filled':
      return `${baseClasses} data-hover:bg-[rgba(26,0,51,0.8)]`;
    case 'minimal':
      return 'bg-transparent data-hover:bg-[rgba(128,0,255,0.1)] rounded-lg';
    default:
      return `${baseClasses} border-b border-[rgba(128,0,255,0.3)] data-hover:bg-[rgba(26,0,51,0.8)]`;
  }
}

/**
 * Get colorful theme content styles
 */
export function getColorfulContentClasses(variant: 'default' | 'bordered' | 'filled' | 'minimal'): string {
  switch (variant) {
    case 'bordered':
      return 'bg-[#1a0033] border-t-2 border-[rgba(128,0,255,0.7)]';
    case 'filled':
      return 'bg-[#1a0033]';
    case 'minimal':
      return 'bg-transparent border-l-4 border-[rgba(128,0,255,0.7)] ml-4';
    default:
      return 'bg-[#1a0033] border-t border-[rgba(128,0,255,0.3)]';
  }
}

/**
 * Get light/dark/colorful theme-appropriate icon colors
 */
export function getThemeIconColors(theme: ThemeType): string {
  switch (theme) {
    case 'colorful':
      return 'text-fuchsia-400';
    case 'dark':
      return 'text-gray-300';
    default:
      return 'text-gray-500 dark:text-gray-400';
  }
}

/**
 * Apply framer motion variants for colorful theme animations
 */
export const colorfulMotionVariants = colorfulThemeVariants;

/**
 * Get standardized component structure for colorful theme with framer-motion
 */
export function getColorfulMotionConfig(componentType: 'panel' | 'dialog' | 'dropdown' | 'tooltip'): Record<string, unknown> {
  // Different animation configs based on component type
  switch (componentType) {
    case 'panel':
      return {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.2, ease: 'easeOut' }
      };
    case 'dialog':
      return {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.2, ease: 'easeOut' }
      };
    case 'dropdown':
      return {
        initial: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 },
        transition: { duration: 0.15, ease: 'easeOut' }
      };
    case 'tooltip':
      return {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
        transition: { duration: 0.1, ease: 'easeOut' }
      };
    default:
      return colorfulThemeVariants.item;
  }
}

/**
 * Get css styles for glassmorphism effect based on strength
 */
export function getGlassmorphismStyle(strength: 'light' | 'medium' | 'strong'): React.CSSProperties {
  return colorfulThemeEffects.glassMorphism[strength];
}

/**
 * Apply css varaiables for the colorful theme
 * Useful for custom components that need to access theme values
 */
export function getCssVariables(): Record<string, string> {
  return {
    '--color-primary': colorfulThemeColors.colors.blue[500],
    '--color-accent': colorfulThemeColors.colors.purple[500], 
    '--color-secondary': colorfulThemeColors.colors.indigo[500],
    '--glow-primary': colorfulThemeColors.decorative.glowBlue,
    '--glow-accent': colorfulThemeColors.decorative.glowPurple,
    '--border-light': colorfulThemeColors.borders.white,
    '--border-medium': colorfulThemeColors.borders.whiteStrong,
    '--overlay-light': colorfulThemeColors.overlays.glass.light,
    '--overlay-medium': colorfulThemeColors.overlays.glass.medium,
    '--overlay-strong': colorfulThemeColors.overlays.glass.strong,
    '--gradient-primary': 'linear-gradient(to right, #3b82f6, #9333ea)',
    '--gradient-secondary': 'linear-gradient(to right, #9333ea, #ec4899)',
    '--bg-base': '#1a0033',
    '--text-primary': '#f0f8ff',
    '--text-secondary': 'rgba(240, 248, 255, 0.9)',
    '--text-muted': 'rgba(240, 248, 255, 0.7)',
  };
}

/**
 * Get border styles for colorful theme components
 */
export function getBorderClass(variant: 'default' | 'strong' | 'light' | 'white'): string {
  switch (variant) {
    case 'strong':
      return 'border-[rgba(128,0,255,0.7)]';
    case 'light':
      return 'border-[rgba(128,0,255,0.2)]';
    case 'white':
      return 'border-[rgba(255,255,255,0.2)]';
    default:
      return 'border-[rgba(128,0,255,0.3)]';
  }
}
