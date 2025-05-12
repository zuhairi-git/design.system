'use client';

import { useState, useEffect } from 'react';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const toggleDarkMode = () => {
    setIsAnimating(true);
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    // Store preference
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    
    // Apply theme
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Reset animation after 500ms
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`flex items-center justify-center p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700/80 transition-colors shadow-sm backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 ${isAnimating ? 'animate-pulse' : ''}`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
          <WbSunnyRoundedIcon className="h-5 w-5 align-middle" fontSize="small" />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
          <DarkModeRoundedIcon className="h-5 w-5 align-middle" fontSize="small" />
        </div>
      </div>
    </button>
  );
}
