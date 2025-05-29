'use client';

import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useAccessibility } from '../utils/accessibility';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { getButtonAttributes } = useAccessibility();

  useEffect(() => {
    // Check system preference and stored preference
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
                      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDarkMode);
    
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches);
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = (enabled: boolean) => {
    setIsAnimating(true);
    setDarkMode(enabled);
    
    // Store preference
    localStorage.setItem('theme', enabled ? 'dark' : 'light');
    
    // Apply theme
    if (enabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Reset animation after 500ms
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <Switch
      checked={darkMode}
      onChange={toggleDarkMode}
      className={`
        group inline-flex h-10 w-10 items-center justify-center rounded-full
        bg-white/80 dark:bg-neutral-800/80 
        text-neutral-700 dark:text-neutral-300 
        hover:bg-neutral-100 dark:hover:bg-neutral-700/80 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transition-all duration-200 shadow-sm backdrop-blur-sm 
        border border-neutral-200/50 dark:border-neutral-700/50
        ui-focus-visible:ring-2 ui-focus-visible:ring-blue-500 ui-focus-visible:ring-offset-2
        ${isAnimating ? 'animate-pulse' : ''}
      `}
      {...getButtonAttributes(
        darkMode ? 'Switch to light mode' : 'Switch to dark mode'
      )}
    >
      <span className="sr-only">
        {darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
      
      <div className="relative w-5 h-5">
        {/* Sun icon for light mode */}
        <SunIcon 
          className={`
            absolute inset-0 h-5 w-5 transition-all duration-300 ease-in-out
            ${darkMode ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}
          `}
          aria-hidden="true"
        />
        
        {/* Moon icon for dark mode */}
        <MoonIcon 
          className={`
            absolute inset-0 h-5 w-5 transition-all duration-300 ease-in-out
            ${darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}
          `}
          aria-hidden="true"
        />
      </div>
    </Switch>
  );
}
