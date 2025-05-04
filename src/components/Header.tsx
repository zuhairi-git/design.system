'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// Image import removed as it's not being used
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
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled 
            ? 'border-b border-neutral-200 dark:border-neutral-800/80 shadow-md backdrop-blur-xl bg-white/90 dark:bg-neutral-900/95' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left side - Logo & Title */}
            <div className="flex items-center">
              <Link 
                href="#overview" 
                className="flex items-center group" 
                onClick={() => handleNavLinkClick('overview')}
              >
                <div className="mr-2 bg-primary-500 text-white rounded-md p-1.5 group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h1 className="font-heading font-bold text-xl text-neutral-950 dark:text-white">
                  {title || "Alux"}
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
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isClient && activeSection === link.id 
                      ? 'text-primary-700 bg-primary-50/70 dark:text-primary-400 dark:bg-primary-900/30 shadow-sm' 
                      : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800/40'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
              {/* Right side buttons */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={toggleLang}
                className="flex items-center justify-center p-2 rounded-full bg-neutral-100 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200 hover:scale-105"
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
                className="inline-flex items-center justify-center p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300 md:hidden hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200"
                aria-expanded={mobileMenuOpen ? 'true' : 'false'}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
          {/* Mobile menu, show/hide based on menu state */}
        <div 
          className={`${mobileMenuOpen ? 'max-h-96 opacity-100 border-t' : 'max-h-0 opacity-0 border-transparent'} 
            md:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg border-neutral-200 dark:border-neutral-800 
            overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className={`px-4 py-4 space-y-2 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 delay-100`}>
            {navLinks.map(link => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleNavLinkClick(link.id)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isClient && activeSection === link.id 
                    ? 'text-primary-700 bg-primary-50/70 dark:text-primary-400 dark:bg-primary-900/30 shadow-sm' 
                    : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800/40'
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
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 md:hidden transition-opacity duration-300"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}
