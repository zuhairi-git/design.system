// Card theme utility functions for consistent card theming across components

// Theme types
export type CardTheme = 'light' | 'dark' | 'colorful';

// Utility function to get theme-specific card base styles
export function getCardThemeStyles(theme: CardTheme) {
  switch (theme) {
    case 'light':
      return {
        background: 'linear-gradient(to bottom right, rgba(253, 253, 253, 0.9), rgba(243, 244, 246, 0.9))',
        border: 'rgba(229, 231, 235, 0.5)',
        text: {
          primary: '#1f2937',
          secondary: '#374151'
        },
        shadow: '0 4px 12px rgba(168, 85, 247, 0.1)',
        classes: {
          base: 'bg-white border border-[rgba(229,231,235,0.5)]',
          text: 'text-[#1f2937]',
          textSecondary: 'text-[#374151]'
        }
      };
    
    case 'dark':
      return {
        background: 'linear-gradient(to bottom, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9))',
        border: 'rgba(75, 85, 99, 0.5)',
        text: {
          primary: '#ededed',
          secondary: '#d1d5db'
        },
        shadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
        classes: {
          base: 'bg-[#0a0a0a] border border-[rgba(75,85,99,0.5)]',
          text: 'text-[#ededed]',
          textSecondary: 'text-[#d1d5db]'
        }
      };
    
    case 'colorful':
      return {
        background: 'linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)',
        overlay: 'linear-gradient(to bottom right, rgba(20, 10, 50, 0.8), rgba(10, 5, 30, 0.8))',
        border: 'rgba(128, 0, 255, 0.3)',
        text: {
          primary: '#f0f8ff',
          secondary: '#f0f8ff/90'
        },
        shadow: '0 4px 12px rgba(255, 0, 204, 0.3)',
        classes: {
          base: 'border border-[rgba(128,0,255,0.3)]',
          text: 'text-[#f0f8ff]',
          textSecondary: 'text-[#f0f8ff]/90'
        }
      };
  }
}

// Helper function to get card classes based on theme
export function getCardClasses(theme: CardTheme, baseClasses: string = '') {
  const themeStyles = getCardThemeStyles(theme);
  return `${baseClasses} ${themeStyles.classes.base}`;
}

// Helper to create card backgrounds with proper theme
export function getCardBackground(theme: CardTheme) {
  const styles = getCardThemeStyles(theme);
  
  if (theme === 'colorful') {
    return {
      background: styles.overlay,
      boxShadow: styles.shadow
    };
  }
  
  return {
    background: styles.background,
    boxShadow: styles.shadow
  };
}
