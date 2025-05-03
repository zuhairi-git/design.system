'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  // Initialize these on the client-side only to avoid hydration mismatch
  const [langMode, setLangMode] = useState<'en' | 'ar'>('en');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  // Mark when component is mounted on client
  useEffect(() => {
    setIsClient(true);
    // Delay setting the active section to avoid hydration mismatch
    setTimeout(() => {
      setActiveSection('overview'); // Set initial active section only on client after hydration
    }, 0);
  }, []);

  // Handle language toggle
  const toggleLang = () => {
    const newLang = langMode === 'en' ? 'ar' : 'en';
    setLangMode(newLang);
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', newLang);
    localStorage.setItem('language', newLang);
  };
  
  // Detect scroll position to change header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Detect active section based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const detectActiveSection = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    // Set initial language from localStorage if available
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLangMode(savedLang);
      document.documentElement.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', savedLang);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', detectActiveSection);
    
    // Initial check
    handleScroll();
    detectActiveSection();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', detectActiveSection);
    };
  }, []);

  // Handle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Close mobile menu when clicking a link
  const handleNavLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'spacing', label: 'Spacing' },
    { id: 'breakpoints', label: 'Breakpoints' },
    { id: 'shadows', label: 'Shadows' },
    { id: 'tints', label: 'Tints' }
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-30 w-full bg-white dark:bg-neutral-900 border-b transition-all duration-300 ${
          scrolled 
            ? 'border-neutral-300 dark:border-neutral-800 shadow-sm backdrop-blur-md bg-opacity-90 dark:bg-opacity-90' 
            : 'border-transparent'
        }`}
      >        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">            
            {/* Left side - Alux title */}
            <div className="flex items-center">
              <Link 
                href="#overview" 
                className="flex items-center" 
                onClick={() => handleNavLinkClick('overview')}
              >
                <h1 className="font-heading font-bold text-lg text-neutral-950 dark:text-white">
                  Alux
                </h1>
              </Link>
            </div>
              {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map(link => (
                <Link 
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => handleNavLinkClick(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isClient && activeSection === link.id 
                      ? 'text-primary-700 bg-primary-50 dark:text-primary-400 dark:bg-primary-900/20' 
                      : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* Right side buttons */}
            <div className="flex items-center space-x-2">
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
              
              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 dark:text-neutral-300 md:hidden focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">            {navLinks.map(link => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleNavLinkClick(link.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isClient && activeSection === link.id 
                    ? 'text-primary-700 bg-primary-50 dark:text-primary-400 dark:bg-primary-900/20' 
                    : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
      
      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-20 md:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}
