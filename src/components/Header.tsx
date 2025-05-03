'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const [langMode, setLangMode] = useState<'en' | 'ar'>('en');

  const toggleLang = () => {
    const newLang = langMode === 'en' ? 'ar' : 'en';
    setLangMode(newLang);
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', newLang);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white dark:bg-neutral-900 border-b border-neutral-300 dark:border-neutral-800 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and title (only visible on mobile) */}
          <div className="flex md:hidden items-center">
            <Image src="/globe.svg" alt="Logo" width={24} height={24} />
            <h1 className="ml-2 font-heading font-bold text-lg text-neutral-950 dark:text-white">
              {title}
            </h1>
          </div>
          
          {/* Center navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              href="#overview" 
              className="px-3 py-2 rounded-md text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors"
            >
              Overview
            </Link>
            <Link 
              href="#colors" 
              className="px-3 py-2 rounded-md text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors"
            >
              Colors
            </Link>
            <Link 
              href="#typography" 
              className="px-3 py-2 rounded-md text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors"
            >
              Typography
            </Link>
            <Link 
              href="#components" 
              className="px-3 py-2 rounded-md text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors"
            >
              Components
            </Link>
          </nav>
          
          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLang}
              className="flex items-center justify-center p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Switch language"
            >
              <span className="text-sm font-medium">
                {langMode === 'en' ? 'ع' : 'En'}
              </span>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
