/**
 * Accessibility utilities following WCAG 2.1 guidelines and Headless UI best practices
 */

// Focus management utilities
export const focusManager = {
  /**
   * Get all focusable elements within a container
   */
  getFocusableElements: (container: HTMLElement): HTMLElement[] => {
    const focusableSelectors = [
      'a[href]',
      'area[href]',
      'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
      'select:not([disabled]):not([aria-hidden])',
      'textarea:not([disabled]):not([aria-hidden])',
      'button:not([disabled]):not([aria-hidden])',
      'iframe',
      'object',
      'embed',
      '[contenteditable]',
      '[tabindex]:not([tabindex^="-"])',
    ].join(',');

    return Array.from(container.querySelectorAll(focusableSelectors)).filter(
      (element) => {
        const htmlElement = element as HTMLElement;
        return (
          htmlElement.offsetWidth > 0 &&
          htmlElement.offsetHeight > 0 &&
          getComputedStyle(htmlElement).visibility !== 'hidden'
        );
      }
    ) as HTMLElement[];
  },

  /**
   * Trap focus within a container (useful for modals)
   */
  trapFocus: (container: HTMLElement) => {
    const focusableElements = focusManager.getFocusableElements(container);
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstFocusable) {
            event.preventDefault();
            lastFocusable?.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastFocusable) {
            event.preventDefault();
            firstFocusable?.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleKeydown);
    firstFocusable?.focus();

    return () => {
      container.removeEventListener('keydown', handleKeydown);
    };
  },

  /**
   * Save and restore focus for better UX
   */
  saveFocus: () => {
    const activeElement = document.activeElement as HTMLElement;
    return () => {
      if (activeElement && activeElement.focus) {
        activeElement.focus();
      }
    };
  },
};

// Focus management utilities for complex components
export const manageFocus = {
  /**
   * Set focus to the first focusable element within a container
   */
  focusFirst: (container: HTMLElement) => {
    const focusableElements = focusManager.getFocusableElements(container);
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  },

  /**
   * Set focus to the last focusable element within a container
   */
  focusLast: (container: HTMLElement) => {
    const focusableElements = focusManager.getFocusableElements(container);
    if (focusableElements.length > 0) {
      focusableElements[focusableElements.length - 1].focus();
    }
  },

  /**
   * Store the currently focused element and return a function to restore focus
   */
  storeFocus: () => {
    const activeElement = document.activeElement as HTMLElement;
    return () => {
      if (activeElement && activeElement.focus) {
        activeElement.focus();
      }
    };
  },

  /**
   * Create a focus trap within a container
   */
  trapFocus: (container: HTMLElement) => {
    const focusableElements = focusManager.getFocusableElements(container);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  },
};

// Keyboard navigation utilities
export const keyboardNavigation = {
  /**
   * Standard keyboard navigation for lists/menus
   */
  createArrowNavigation: (
    container: HTMLElement,
    itemSelector: string,
    options: {
      loop?: boolean;
      orientation?: 'horizontal' | 'vertical' | 'both';
      onSelect?: (item: HTMLElement) => void;
    } = {}
  ) => {
    const { loop = true, orientation = 'vertical', onSelect } = options;

    const handleKeydown = (event: KeyboardEvent) => {
      const items = Array.from(container.querySelectorAll(itemSelector)) as HTMLElement[];
      const currentIndex = items.findIndex((item) => item === document.activeElement);

      if (currentIndex === -1) return;

      let nextIndex = currentIndex;

      switch (event.key) {
        case 'ArrowDown':
          if (orientation === 'vertical' || orientation === 'both') {
            event.preventDefault();
            nextIndex = currentIndex + 1;
            if (nextIndex >= items.length && loop) nextIndex = 0;
          }
          break;
        case 'ArrowUp':
          if (orientation === 'vertical' || orientation === 'both') {
            event.preventDefault();
            nextIndex = currentIndex - 1;
            if (nextIndex < 0 && loop) nextIndex = items.length - 1;
          }
          break;
        case 'ArrowRight':
          if (orientation === 'horizontal' || orientation === 'both') {
            event.preventDefault();
            nextIndex = currentIndex + 1;
            if (nextIndex >= items.length && loop) nextIndex = 0;
          }
          break;
        case 'ArrowLeft':
          if (orientation === 'horizontal' || orientation === 'both') {
            event.preventDefault();
            nextIndex = currentIndex - 1;
            if (nextIndex < 0 && loop) nextIndex = items.length - 1;
          }
          break;
        case 'Home':
          event.preventDefault();
          nextIndex = 0;
          break;
        case 'End':
          event.preventDefault();
          nextIndex = items.length - 1;
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          onSelect?.(items[currentIndex]);
          break;
      }

      if (nextIndex !== currentIndex && items[nextIndex]) {
        items[nextIndex].focus();
      }
    };

    container.addEventListener('keydown', handleKeydown);
    return () => container.removeEventListener('keydown', handleKeydown);
  },
};

// ARIA utilities
export const ariaUtils = {
  /**
   * Generate unique IDs for ARIA relationships
   */
  generateId: (prefix = 'headlessui') => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },

  /**
   * Announce content to screen readers
   */
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);

    setTimeout(() => {
      announcer.textContent = message;
    }, 100);

    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 2000);
  },

  /**
   * Set up proper ARIA relationships for accordions
   */
  setupAccordion: (
    triggerId: string,
    panelId: string,
    isExpanded: boolean
  ) => ({
    trigger: {
      'aria-expanded': isExpanded,
      'aria-controls': panelId,
      id: triggerId,
    },
    panel: {
      'aria-labelledby': triggerId,
      id: panelId,
      role: 'region',
    },
  }),
};

// Screen reader utilities
export const screenReader = {
  /**
   * Screen reader only text
   */
  srOnly: 'absolute left-[-10000px] top-auto w-px h-px overflow-hidden',

  /**
   * Create skip links for keyboard navigation
   */
  createSkipLink: (target: string, text: string) => ({
    href: `#${target}`,
    className: `
      absolute left-[-10000px] top-auto w-px h-px overflow-hidden
      focus:left-2 focus:top-2 focus:w-auto focus:h-auto focus:overflow-visible
      focus:z-50 focus:bg-white focus:text-black focus:p-2 focus:rounded focus:shadow-lg
      focus:no-underline
    `,
    children: text,
    onFocus: () => {
      const targetElement = document.getElementById(target);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }),
};

// Color contrast utilities
export const colorContrast = {
  /**
   * Calculate color contrast ratio
   */
  getContrastRatio: (foreground: string, background: string): number => {
    const getLuminance = (color: string) => {
      const rgb = hexToRgb(color);
      if (!rgb) return 0;
      
      const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((c) => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    };

    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const brightest = Math.max(l1, l2);
    const darkest = Math.min(l1, l2);
    
    return (brightest + 0.05) / (darkest + 0.05);
  },

  /**
   * Check if color combination meets WCAG standards
   */
  meetsWCAG: (
    foreground: string,
    background: string,
    level: 'AA' | 'AAA' = 'AA',
    size: 'normal' | 'large' = 'normal'
  ): boolean => {
    const ratio = colorContrast.getContrastRatio(foreground, background);
    
    if (level === 'AAA') {
      return size === 'large' ? ratio >= 4.5 : ratio >= 7;
    } else {
      return size === 'large' ? ratio >= 3 : ratio >= 4.5;
    }
  },
};

// Responsive utilities for accessibility
export const responsive = {
  /**
   * Check if user prefers reduced motion
   */
  prefersReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  /**
   * Get appropriate animation duration based on user preference
   */
  getAnimationDuration: (normalDuration: number) => {
    return responsive.prefersReducedMotion() ? 0 : normalDuration;
  },

  /**
   * Check if user prefers high contrast
   */
  prefersHighContrast: () => {
    return window.matchMedia('(prefers-contrast: high)').matches;
  },
};

// Common accessibility patterns
export const patterns = {
  /**
   * Modal accessibility pattern
   */
  modal: {
    role: 'dialog',
    'aria-modal': true,
    'aria-labelledby': 'modal-title',
    'aria-describedby': 'modal-description',
  },

  /**
   * Alert pattern
   */
  alert: (type: 'error' | 'warning' | 'success' | 'info') => ({
    role: type === 'error' ? 'alert' : 'status',
    'aria-live': type === 'error' ? 'assertive' : 'polite',
  }),

  /**
   * Button patterns
   */
  button: {
    primary: {
      'aria-label': 'Primary action',
    },
    toggle: (pressed: boolean) => ({
      'aria-pressed': pressed,
      role: 'switch',
    }),
    menu: (expanded: boolean) => ({
      'aria-expanded': expanded,
      'aria-haspopup': true,
    }),
  },
};

/**
 * Custom hook for accessibility utilities in components
 */
export function useAccessibility() {
  return {
    // Generate accessible badge label
    getBadgeLabel: (variant: string, status: string, count?: number, customLabel?: string) => {
      if (customLabel) return customLabel;
      
      if (variant === 'notification') {
        return `${count !== undefined ? count : 'New'} ${status} notifications`;
      }
      
      if (variant === 'count') {
        return `Count: ${count !== undefined ? count : '0'}`;
      }
      
      return `${status} badge`;
    },
    
    // Generate accessible button attributes
    getButtonAttributes: (label: string, pressed?: boolean, expanded?: boolean) => ({
      'aria-label': label,
      'aria-pressed': pressed,
      'aria-expanded': expanded,
      tabIndex: 0
    }),
    
    // Generate live region attributes for dynamic content
    getLiveRegionAttributes: (priority: 'polite' | 'assertive' = 'polite') => ({
      'aria-live': priority,
      'aria-atomic': 'true'
    })
  };
}

/**
 * Announces content to screen readers via live region
 */
export function announceLiveRegion(message: string, priority: 'polite' | 'assertive' = 'polite') {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement is made
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}
