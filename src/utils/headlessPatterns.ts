/**
 * Headless UI Best Practices and Patterns
 * 
 * This utility provides standardized patterns for implementing Headless UI components
 * with consistent accessibility features and data handling.
 */

import { useCallback, useEffect, useState } from 'react';

// Type definition for data fetching options
type FetchOptions<T> = {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  initialData?: T;
  enabled?: boolean;
  refetchOnMount?: boolean;
  refetchOnWindowFocus?: boolean;
};

/**
 * Standardized data fetching hook following Headless UI patterns
 * Can be used with any component that needs data from an API
 */
export function useComponentData<T>(
  fetchFn: () => Promise<T>,
  options: FetchOptions<T> = {}
){
  const {
    onSuccess,
    onError,
    initialData,
    enabled = true,
    refetchOnMount = true,
    refetchOnWindowFocus = false,
  } = options;

  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!enabled) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await fetchFn();
      setData(result);
      onSuccess?.(result);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('An unknown error occurred');
      setError(error);
      onError?.(error);
      return undefined;
    } finally {
      setIsLoading(false);
    }
  }, [fetchFn, enabled, onSuccess, onError]);

  useEffect(() => {
    if (refetchOnMount) {
      fetchData();
    }
  }, [fetchData, refetchOnMount]);

  useEffect(() => {
    if (!refetchOnWindowFocus) return;

    const handleFocus = () => {
      fetchData();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [fetchData, refetchOnWindowFocus]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
  };
}

/**
 * Enhanced keyboard navigation based on Headless UI patterns
 */
export function useKeyboardNavigation() {
  const handleFirstItem = (items: HTMLElement[]) => {
    items[0]?.focus();
  };

  const handleLastItem = (items: HTMLElement[]) => {
    items[items.length - 1]?.focus();
  };

  const handleNextItem = (
    items: HTMLElement[],
    currentIndex: number,
    loop = true
  ) => {
    if (currentIndex === -1) return;
    
    const nextIndex = currentIndex + 1;
    if (nextIndex >= items.length) {
      if (loop) items[0]?.focus();
    } else {
      items[nextIndex]?.focus();
    }
  };

  const handlePreviousItem = (
    items: HTMLElement[],
    currentIndex: number,
    loop = true
  ) => {
    if (currentIndex === -1) return;
    
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      if (loop) items[items.length - 1]?.focus();
    } else {
      items[prevIndex]?.focus();
    }
  };

  return {
    handleFirstItem,
    handleLastItem,
    handleNextItem,
    handlePreviousItem,
  };
}

/**
 * Consistent focus management based on Headless UI patterns
 */
export function useFocusManagement() {
  // Store the element to restore focus to when a component is closed
  const [previousFocusElement, setPreviousFocusElement] = useState<HTMLElement | null>(null);

  const storePreviousFocus = useCallback(() => {
    setPreviousFocusElement(document.activeElement as HTMLElement);
  }, []);

  const restorePreviousFocus = useCallback(() => {
    if (previousFocusElement && previousFocusElement.focus) {
      setTimeout(() => previousFocusElement.focus(), 10);
    }
  }, [previousFocusElement]);

  return {
    storePreviousFocus,
    restorePreviousFocus,
  };
}

/**
 * Standardized component state management following Headless UI patterns
 */
export function useComponentState<T>(initialState: T) {
  const [state, setState] = useState<T>(initialState);
  
  const updateState = useCallback((newState: Partial<T>) => {
    setState(prevState => ({
      ...prevState,
      ...newState,
    }));
  }, []);

  return [state, updateState] as const;
}

/**
 * Create unique IDs for ARIA relationships
 */
export function useUniqueId(prefix = 'headlessui') {
  const [id] = useState(() => `${prefix}-${Math.random().toString(36).substr(2, 9)}`);
  return id;
}

/**
 * Utility for managing component disclosure state (open/closed)
 */
export function useDisclosureState(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  
  return { isOpen, open, close, toggle };
}

/**
 * Standardized announcement for screen readers
 */
export function useAnnouncement() {
  const announce = useCallback((message: string, assertive = false) => {
    const announcementElement = document.createElement('div');
    announcementElement.setAttribute('aria-live', assertive ? 'assertive' : 'polite');
    announcementElement.setAttribute('aria-atomic', 'true');
    announcementElement.className = 'sr-only';
    
    document.body.appendChild(announcementElement);
    
    // Use setTimeout to ensure the element is in the DOM before changing the content
    setTimeout(() => {
      announcementElement.textContent = message;
    }, 50);
    
    // Remove the element after the announcement has been read
    setTimeout(() => {
      if (document.body.contains(announcementElement)) {
        document.body.removeChild(announcementElement);
      }
    }, 3000);
  }, []);
  
  return announce;
}
