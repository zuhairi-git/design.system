"use client";

import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { useAccessibility } from '@/utils/accessibility';

interface BackToTopButtonProps {
  className?: string;
  threshold?: number;
}

export default function BackToTopButton({ 
  className = '', 
  threshold = 100 
}: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(true); // Always visible for testing
  const { getButtonAttributes } = useAccessibility();
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
        console.log('Back to top button should be visible');
      } else {
        setIsVisible(false);
        console.log('Back to top button hidden');
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Check initial scroll position
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  if (!isVisible) {
    // For testing - always show the button
    // return null;
  }
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-xl flex items-center justify-center"
      {...getButtonAttributes('Back to top')}
      aria-label="Back to top"
    >
      <ArrowUpIcon className="w-8 h-8" />
    </button>
  );
}
