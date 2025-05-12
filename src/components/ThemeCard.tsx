'use client';

import { ReactNode } from 'react';
import { SvgIconProps } from '@mui/material';
import { CardTheme, getCardBackground } from '@/utils/cardThemes';

interface ThemeCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  materialIcon?: React.ElementType<SvgIconProps>;
  variant: 'default' | 'minimal' | 'gradient' | 'bordered' | 'elevated' | 'glass';
  theme?: 'light' | 'dark' | 'system' | 'colorful' | 'light-enhanced' | 'dark-enhanced';
  className?: string;
  onClick?: () => void;
}

export default function ThemeCard({ 
  title, 
  description, 
  icon,
  materialIcon: MaterialIcon,
  variant = 'default',
  theme = 'system',
  className = '',
  onClick
}: ThemeCardProps) {
  
  // Base styles that apply to all variants
  const baseStyles = "relative overflow-hidden rounded-xl transition-all duration-300";
    // Variant-specific styles using theme-colors.txt values
  const variantStyles = {
    default: "p-6 bg-white dark:bg-[#0a0a0a] border border-[rgba(229,231,235,0.5)] dark:border-[rgba(75,85,99,0.5)] shadow-sm hover:shadow-md",
    minimal: "p-5 bg-white dark:bg-[#0a0a0a] hover:bg-[#f9fafb] dark:hover:bg-[rgba(17,24,39,0.9)] transition-colors",
    gradient: "p-6 bg-gradient-to-br from-[rgba(59,130,246,0.1)] to-white dark:from-[rgba(59,130,246,0.2)] dark:to-[#0a0a0a] border border-[rgba(59,130,246,0.2)] dark:border-[rgba(59,130,246,0.3)]",
    bordered: "p-6 bg-white dark:bg-[#0a0a0a] border-2 border-[#3b82f6] dark:border-[#3b82f6]/40 hover:border-[#2563eb] dark:hover:border-[#2563eb]/60",
    elevated: "p-6 bg-white dark:bg-[#0a0a0a] border border-[rgba(229,231,235,0.5)] dark:border-[rgba(75,85,99,0.5)] shadow-lg hover:-translate-y-1",
    glass: "p-6 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md border border-white/20 dark:border-[rgba(75,85,99,0.3)] shadow-sm"
  };
  // Theme override styles (forced theme regardless of system theme)
  // Colors directly from theme-colors.txt
  const themeStyles = {
    light: "!bg-white !text-[#1f2937] !border-[rgba(229,231,235,0.5)]",
    dark: "!bg-[#0a0a0a] !text-[#ededed] !border-[rgba(75,85,99,0.5)]",
    system: "", // No override, use system theme
    
    // Colorful theme with gradient background from theme-colors.txt
    colorful: "!text-[#f0f8ff] !border-[rgba(128,0,255,0.3)] !shadow-[0_4px_12px_rgba(255,0,204,0.3)]",
    
    // Enhanced light theme with subtle gradients and shadows
    'light-enhanced': "!text-[#1f2937] !border-[rgba(229,231,235,0.5)] !shadow-[0_4px_12px_rgba(168,85,247,0.1)]",
    
    // Enhanced dark theme matching the existing dark theme styles
    'dark-enhanced': "!text-[#ededed] !border-[rgba(75,85,99,0.5)] !shadow-[0_4px_12px_rgba(59,130,246,0.2)]"
  };  // Determine icon background style based on theme-colors.txt
  const getIconStyle = () => {
    if (theme === 'colorful') return "bg-[rgba(128,0,255,0.2)] text-[#00ffff]";
    if (theme === 'dark' || theme === 'dark-enhanced') return "bg-[rgba(31,41,55,0.9)] text-[#3b82f6]";
    if (theme === 'light' || theme === 'light-enhanced') return "bg-[rgba(59,130,246,0.1)] text-[#2563eb]";
    return "bg-[rgba(59,130,246,0.1)] dark:bg-[rgba(59,130,246,0.2)] text-[#3b82f6] dark:text-[#3b82f6]";
  };
  // Determine text colors based on theme-colors.txt
  const getTitleStyle = () => {
    // For colorful theme, add the heading-glow effect from theme-colors.txt
    if (theme === 'colorful') return "text-[#f0f8ff]" + (variant === 'gradient' ? " cosmic-title" : "");
    if (theme === 'dark' || theme === 'dark-enhanced') return "text-[#ededed]";
    if (theme === 'light' || theme === 'light-enhanced') return "text-[#1f2937]";
    return "text-[#1f2937] dark:text-[#ededed]";
  };

  const getDescriptionStyle = () => {
    if (theme === 'colorful') return "text-[#f0f8ff]/90";
    if (theme === 'dark' || theme === 'dark-enhanced') return "text-[#d1d5db]";
    if (theme === 'light' || theme === 'light-enhanced') return "text-[#374151]";
    return "text-[#374151] dark:text-[#d1d5db]";
  };
  // Generate background style based on theme
  const getBackgroundStyle = () => {
    if (theme === 'colorful') {
      return {
        background: variant === 'glass' 
          ? 'linear-gradient(to bottom right, rgba(20, 10, 50, 0.8), rgba(10, 5, 30, 0.8))' 
          : 'linear-gradient(to bottom right, rgba(20, 10, 50, 0.8), rgba(10, 5, 30, 0.8))'
      };
    }
    if (theme === 'light-enhanced') {
      return {
        background: variant === 'glass'
          ? 'linear-gradient(to bottom right, rgba(253, 253, 253, 0.9), rgba(243, 244, 246, 0.9))'
          : 'linear-gradient(to bottom right, rgba(253, 253, 253, 0.9), rgba(243, 244, 246, 0.9))'
      };
    }
    if (theme === 'dark-enhanced') {
      return {
        background: variant === 'glass'
          ? 'linear-gradient(to bottom, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9))'
          : 'linear-gradient(to bottom, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9))'
      };
    }
    return {};
  };
  return (
    <div 
      className={`${baseStyles} ${variantStyles[variant]} ${themeStyles[theme]} ${className}`}
      onClick={onClick}
      style={theme === 'colorful' || theme === 'light-enhanced' || theme === 'dark-enhanced' ? getBackgroundStyle() : {}}
    >      {(icon || MaterialIcon) && (
        <div className={`flex items-center justify-center w-10 h-10 mb-4 rounded-lg ${getIconStyle()}`}>
          {MaterialIcon ? (
            <MaterialIcon fontSize="medium" className="text-[22px]" />
          ) : (
            <span className="text-xl">{icon}</span>
          )}
        </div>
      )}
      
      <h3 className={`font-heading font-bold text-lg mb-2 ${getTitleStyle()}`}>
        {title}
      </h3>
      
      <p className={`font-body text-sm ${getDescriptionStyle()}`}>
        {description}
      </p>
      
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(59,130,246,0.1)] via-transparent to-transparent pointer-events-none" />
      )}
      
      {variant === 'glass' && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/10 pointer-events-none" />
      )}
        {/* Special effects for colorful theme using the cosmic-gradient from theme-colors.txt */}
      {theme === 'colorful' && (
        <div className="absolute inset-0 pointer-events-none" 
             style={{
               background: "linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)",
               opacity: 0.15,
               animation: variant === 'gradient' ? 'gradientShift 8s ease infinite' : 'none'
             }}
        />
      )}
      
      {/* Special effects for enhanced light theme */}
      {theme === 'light-enhanced' && (
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(59,130,246,0.05)] via-white/5 to-transparent pointer-events-none" />
      )}
      
      {/* Special effects for enhanced dark theme */}
      {theme === 'dark-enhanced' && (
        <div className="absolute inset-0" 
             style={{
               background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent 50%, rgba(168, 85, 247, 0.05))",
               pointerEvents: "none"
             }}
        />
      )}
    </div>
  );
}
