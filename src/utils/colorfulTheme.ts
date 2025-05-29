// Colorful Theme Configuration for Design System
export const colorfulThemeColors = {
  // Primary Gradients
  gradients: {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-500',
    accent: 'bg-gradient-to-r from-blue-400 to-indigo-500',
    highlight: 'bg-gradient-to-r from-indigo-500 to-purple-600',
    
    // Background gradients
    heroBackground: 'bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20',
    cardBackground: 'bg-gradient-to-br from-blue-800/10 to-purple-800/10',
    
    // Animated gradients for effects
    animatedGlow: [
      'linear-gradient(to right, rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4), rgba(99, 102, 241, 0.4))',
      'linear-gradient(to right, rgba(99, 102, 241, 0.4), rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4))',
      'linear-gradient(to right, rgba(168, 85, 247, 0.4), rgba(99, 102, 241, 0.4), rgba(59, 130, 246, 0.4))',
    ],
    
    animatedBackground: [
      'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(168, 85, 247, 0.1) 100%)',
      'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)',
      'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(168, 85, 247, 0.1) 100%)'
    ]
  },

  // Individual Colors
  colors: {
    // Blues
    blue: {
      50: 'rgb(239, 246, 255)',
      100: 'rgb(219, 234, 254)',
      200: 'rgb(191, 219, 254)',
      300: 'rgb(147, 197, 253)',
      400: 'rgb(96, 165, 250)',   // Primary blue
      500: 'rgb(59, 130, 246)',   // Main blue
      600: 'rgb(37, 99, 235)',
      700: 'rgb(29, 78, 216)',
      800: 'rgb(30, 64, 175)',
      900: 'rgb(30, 58, 138)',
    },

    // Purples
    purple: {
      50: 'rgb(250, 245, 255)',
      100: 'rgb(243, 232, 255)',
      200: 'rgb(233, 213, 255)',
      300: 'rgb(196, 181, 253)',
      400: 'rgb(168, 85, 247)',   // Primary purple
      500: 'rgb(147, 51, 234)',   // Main purple
      600: 'rgb(126, 34, 206)',
      700: 'rgb(107, 33, 168)',
      800: 'rgb(88, 28, 135)',
      900: 'rgb(68, 24, 108)',
    },

    // Indigos
    indigo: {
      50: 'rgb(238, 242, 255)',
      100: 'rgb(224, 231, 255)',
      200: 'rgb(199, 210, 254)',
      300: 'rgb(165, 180, 252)',
      400: 'rgb(129, 140, 248)',
      500: 'rgb(99, 102, 241)',   // Main indigo
      600: 'rgb(79, 70, 229)',
      700: 'rgb(67, 56, 202)',
      800: 'rgb(55, 48, 163)',
      900: 'rgb(49, 46, 129)',
    },

    // Pinks (for secondary gradients)
    pink: {
      50: 'rgb(253, 242, 248)',
      100: 'rgb(252, 231, 243)',
      200: 'rgb(251, 207, 232)',
      300: 'rgb(249, 168, 212)',
      400: 'rgb(244, 114, 182)',
      500: 'rgb(236, 72, 153)',
      600: 'rgb(219, 39, 119)',
      700: 'rgb(190, 24, 93)',
      800: 'rgb(157, 23, 77)',
      900: 'rgb(131, 24, 67)',
    }
  },

  // Opacity variants for overlays and effects
  overlays: {
    // Glass effects
    glass: {
      light: 'rgba(255, 255, 255, 0.1)',
      medium: 'rgba(255, 255, 255, 0.2)',
      strong: 'rgba(255, 255, 255, 0.3)'
    },
    
    // Color overlays
    blue: {
      light: 'rgba(59, 130, 246, 0.1)',
      medium: 'rgba(59, 130, 246, 0.2)',
      strong: 'rgba(59, 130, 246, 0.4)'
    },
    
    purple: {
      light: 'rgba(168, 85, 247, 0.1)',
      medium: 'rgba(168, 85, 247, 0.2)',
      strong: 'rgba(168, 85, 247, 0.4)'
    },
    
    indigo: {
      light: 'rgba(99, 102, 241, 0.1)',
      medium: 'rgba(99, 102, 241, 0.2)',
      strong: 'rgba(99, 102, 241, 0.4)'
    }
  },

  // Border colors
  borders: {
    blue: 'rgba(96, 165, 250, 0.3)',
    purple: 'rgba(168, 85, 247, 0.3)',
    indigo: 'rgba(99, 102, 241, 0.3)',
    white: 'rgba(255, 255, 255, 0.1)',
    whiteStrong: 'rgba(255, 255, 255, 0.2)'
  },

  // Decorative elements
  decorative: {
    // Dot grid patterns
    dotGrid: 'radial-gradient(circle, rgba(96, 165, 250, 0.2) 1px, transparent 1px)',
    
    // Glow effects
    glowBlue: '0 0 20px rgba(59, 130, 246, 0.3)',
    glowPurple: '0 0 20px rgba(168, 85, 247, 0.3)',
    glowIndigo: '0 0 20px rgba(99, 102, 241, 0.3)',
    
    // Animated glow orbs
    orbBlue: 'rgba(59, 130, 246, 0.2)',
    orbPurple: 'rgba(168, 85, 247, 0.2)',
    orbIndigo: 'rgba(99, 102, 241, 0.2)'
  }
};

// Utility function to get theme-appropriate colors
export const getColorfulThemeColor = (colorPath: string): string | Record<string, unknown> => {
  const keys = colorPath.split('.');
  let value: Record<string, unknown> | string = colorfulThemeColors;
  
  for (const key of keys) {
    if (typeof value === 'object' && value !== null) {
      value = value[key] as Record<string, unknown> | string;
      if (value === undefined) {
        console.warn(`Color not found: ${colorPath}`);
        return 'transparent';
      }
    } else {
      console.warn(`Invalid path: ${colorPath}`);
      return 'transparent';
    }
  }
  
  return value;
};

// Common color combinations for easy access
export const colorfulThemeCombinations = {
  // Hero sections
  hero: {
    background: colorfulThemeColors.gradients.heroBackground,
    title: 'text-white',
    subtitle: 'text-gray-300',
    accent: colorfulThemeColors.colors.blue[400]
  },
  
  // Cards
  card: {
    background: colorfulThemeColors.gradients.cardBackground,
    border: colorfulThemeColors.borders.whiteStrong,
    text: 'text-white',
    subtext: 'text-gray-300'
  },
  
  // Buttons
  button: {
    primary: colorfulThemeColors.gradients.primary,
    secondary: colorfulThemeColors.gradients.secondary,
    ghost: 'bg-transparent border border-white/20',
    text: 'text-white'
  },
  
  // Interactive elements
  interactive: {
    hover: colorfulThemeColors.overlays.blue.medium,
    focus: colorfulThemeColors.overlays.purple.medium,
    active: colorfulThemeColors.overlays.indigo.medium
  }
};

export const colorfulThemeEffects = {
  // Animation keyframes for colorful theme
  animations: {
    // Gradient rotation for buttons and backgrounds
    gradientRotation: {
      keyframes: [
        'linear-gradient(to right, rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4), rgba(99, 102, 241, 0.4))',
        'linear-gradient(to right, rgba(99, 102, 241, 0.4), rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4))',
        'linear-gradient(to right, rgba(168, 85, 247, 0.4), rgba(99, 102, 241, 0.4), rgba(59, 130, 246, 0.4))',
      ],
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse"
    },
    
    // Background gradient animation
    backgroundFlow: {
      keyframes: [
        'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(168, 85, 247, 0.1) 100%)',
        'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)',
        'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(168, 85, 247, 0.1) 100%)'
      ],
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse"
    },
    
    // Pulsing orbs
    pulseOrb: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse"
    }
  },

  // CSS patterns for backgrounds
  patterns: {
    // Dot grid pattern
    dotGrid: {
      backgroundImage: 'radial-gradient(circle, rgba(96, 165, 250, 0.2) 1px, transparent 1px)',
      backgroundSize: '30px 30px'
    },
    
    // Subtle line patterns
    verticalLines: 'linear-gradient(to bottom, transparent, rgba(96, 165, 250, 0.3), transparent)',
    horizontalLines: 'linear-gradient(to right, transparent, rgba(168, 85, 247, 0.3), transparent)'
  },

  // Decorative corner elements
  decorativeElements: {
    topLeft: {
      border: '2px solid rgba(96, 165, 250, 0.3)',
      borderRight: 'none',
      borderBottom: 'none',
      borderTopLeftRadius: '8px'
    },
    
    bottomRight: {
      border: '2px solid rgba(168, 85, 247, 0.3)',
      borderLeft: 'none',
      borderTop: 'none',
      borderBottomRightRadius: '8px'
    }
  },

  // Glass morphism effects
  glassMorphism: {
    light: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    
    medium: {
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(15px)',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    
    strong: {
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.4)'
    }
  }
};

// Framer Motion variants for colorful theme animations
export const colorfulThemeVariants = {
  // Container animations
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  },
  
  // Item animations with colorful effects
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },
  
  // Glow effect animation
  glow: {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [0.8, 1.1, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }
};
