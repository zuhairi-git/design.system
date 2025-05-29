/**
 * Accessibility utilities following WCAG 2.1 guidelines and Headless UI best practices
 */

import { useUniqueId } from './headlessPatterns';
import { useState, useEffect, useCallback, useRef } from 'react';

// Focus management utilities
export const focusManager = {
  /**
   * Get all focusable elements within a container
   */
  getFocusableElements: (container: HTMLElement): HTMLElement[] => {
    const focusableSelectors = [
      'a[href]:not([tabindex="-1"])',
      'area[href]:not([tabindex="-1"])',
      'input:not([disabled]):not([type="hidden"]):not([aria-hidden]):not([tabindex="-1"])',
      'select:not([disabled]):not([aria-hidden]):not([tabindex="-1"])',
      'textarea:not([disabled]):not([aria-hidden]):not([tabindex="-1"])',
      'button:not([disabled]):not([aria-hidden]):not([tabindex="-1"])',
      'iframe:not([tabindex="-1"])',
      'object:not([tabindex="-1"])',
      'embed:not([tabindex="-1"])',
      '[contenteditable]:not([tabindex="-1"])',
      '[tabindex]:not([tabindex="-1"])',
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

// Focus management utilities for complex components - Updated for Headless UI compatibility
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

// Enhanced keyboard navigation utilities with Headless UI compatibility
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
          return;
      }

      if (nextIndex !== currentIndex && nextIndex >= 0 && nextIndex < items.length) {
        items[nextIndex].focus();
        onSelect?.(items[nextIndex]);
      }
    };

    container.addEventListener('keydown', handleKeydown);
    return () => {
      container.removeEventListener('keydown', handleKeydown);
    };
  },

  /**
   * Enhanced navigation for tabbed interfaces
   */
  createTabNavigation: (container: HTMLElement, options = {}) => {
    return keyboardNavigation.createArrowNavigation(
      container,
      '[role="tab"]',
      { orientation: 'horizontal', ...options }
    );
  },

  /**
   * Enhanced navigation for menu interfaces
   */
  createMenuNavigation: (container: HTMLElement, options = {}) => {
    return keyboardNavigation.createArrowNavigation(
      container,
      '[role="menuitem"]:not([aria-disabled="true"])',
      { orientation: 'vertical', ...options }
    );
  },
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

// Responsive utilities for accessibility - Updated for improved compatibility
export const responsive = {
  /**
   * Check if user prefers reduced motion
   */
  prefersReducedMotion: () => {
    if (typeof window === 'undefined') return false;
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
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-contrast: high)').matches;
  },

  /**
   * Hook to monitor reduced motion preference
   */
  useReducedMotion: () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(
      typeof window !== 'undefined'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false
    );

    useEffect(() => {
      if (typeof window === 'undefined') return;

      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return prefersReducedMotion;
  },
};

// Common accessibility patterns enhanced for Headless UI
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
   * Button patterns enhanced for Headless UI
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
    disclosure: (expanded: boolean) => ({
      'aria-expanded': expanded,
      'aria-controls': 'disclosure-panel',
    }),
  },

  /**
   * Navigation patterns for Headless UI
   */
  navigation: {
    tabs: (selectedIndex: number) => ({
      role: 'tablist',
      'aria-orientation': 'horizontal',
      tab: (index: number) => ({
        role: 'tab',
        'aria-selected': index === selectedIndex,
        'aria-controls': `tab-panel-${index}`,
        id: `tab-${index}`,
        tabIndex: index === selectedIndex ? 0 : -1,
      }),
      panel: (index: number) => ({
        role: 'tabpanel',
        'aria-labelledby': `tab-${index}`,
        id: `tab-panel-${index}`,
        tabIndex: 0,
      }),
    }),

    menu: {
      role: 'menu',
      'aria-orientation': 'vertical',
      item: (disabled: boolean) => ({
        role: 'menuitem',
        'aria-disabled': disabled,
        tabIndex: disabled ? -1 : 0,
      }),
    },
  },
};

/**
 * Enhanced hook for accessibility utilities in components
 */
export function useAccessibility() {
  const uniqueId = useUniqueId();

  const announceToScreenReader = useCallback((message: string, assertive: boolean = false) => {
    const announcerElement = document.createElement('div');
    announcerElement.setAttribute('aria-live', assertive ? 'assertive' : 'polite');
    announcerElement.setAttribute('aria-atomic', 'true');
    announcerElement.className = 'sr-only';
    announcerElement.textContent = message;

    document.body.appendChild(announcerElement);

    setTimeout(() => {
      document.body.removeChild(announcerElement);
    }, 3000);
  }, []);

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
      tabIndex: 0,
    }),

    // Generate live region attributes for dynamic content
    getLiveRegionAttributes: (priority: 'polite' | 'assertive' = 'polite') => ({
      'aria-live': priority,
      'aria-atomic': 'true',
    }),

    // Enhanced functionality
    uniqueId,
    announceToScreenReader,
    prefersReducedMotion: responsive.useReducedMotion(),
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

/**
 * Custom hook for managing focus traps in modals, dialogs, etc.
 * Compatible with Headless UI components
 */
export function useFocusTrap() {
  const [trapElement, setTrapElement] = useState<HTMLElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!trapElement) return;

    // Store previously focused element
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Setup trap
    const cleanup = focusManager.trapFocus(trapElement);

    return () => {
      cleanup();
      // Restore focus when trap is removed
      if (previousFocusRef.current) {
        setTimeout(() => previousFocusRef.current?.focus(), 0);
      }
    };
  }, [trapElement]);

  return setTrapElement;
}
