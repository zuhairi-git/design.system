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
  threshold = 200 
}: BackToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { getButtonAttributes } = useAccessibility();  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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
  };  if (!isVisible) {
    return null;
  }  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-gradient-to-b from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white shadow-lg flex items-center justify-center transition-all duration-300 ${className}`}
      {...getButtonAttributes('Back to top')}
      aria-label="Back to top"
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
}
