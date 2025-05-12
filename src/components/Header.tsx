'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// Image import removed as it's not being used
import ThemeToggle from './ThemeToggle';
import { useSidebar } from './Sidebar';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {  // Initialize these on the client-side only to avoid hydration mismatch
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  
  // Access sidebar context for the toggle button
  const { isOpen, toggleSidebar } = useSidebar();
  
  // Mark when component is mounted on client
  useEffect(() => {
    setIsClient(true);
    // Delay setting the active section to avoid hydration mismatch
    setTimeout(() => {
      setActiveSection('overview'); // Set initial active section only on client after hydration
    }, 0);
  }, []);
  // No language initialization or toggle functionality
  
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
    };    // Language switcher has been removed

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
  // Mobile menu toggle function is no longer used since we're using the sidebar toggle
  // Removed unused function
  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  //   if (!mobileMenuOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = '';
  //   }
  // };
  // Handle navigation link clicks
  const handleNavLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    // We no longer need the mobile menu state handling since we're using the sidebar
  };  const navLinks = [
    { id: 'overview', label: 'Home' },
    { id: 'foundations', label: 'Foundations', submenu: ['colors', 'typography', 'spacing', 'grids'] },
    { id: 'components', label: 'Components', submenu: ['buttons', 'cards'] },
    { id: 'patterns', label: 'Patterns', submenu: ['layouts', 'navigation', 'forms'] },
    { id: 'utilities', label: 'Utilities', submenu: ['breakpoints', 'shadows', 'tints'] }
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
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left side - Hamburger menu, Logo & Title */}
            <div className="flex items-center">              {/* Hamburger Menu Toggle for Sidebar */}
              <button 
                onClick={toggleSidebar}
                className="mr-3 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700/70 transition-all duration-200"
                aria-label="Toggle sidebar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
              
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
            </div>            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map(link => (
                <div key={link.id} className="relative group">
                  <Link 
                    href={link.submenu ? `#${link.submenu[0]}` : `#${link.id}`}
                    onClick={() => handleNavLinkClick(link.submenu ? link.submenu[0] : link.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center ${
                      isClient && (activeSection === link.id || (link.submenu && link.submenu.includes(activeSection || '')))
                        ? 'text-primary-700 bg-primary-50/70 dark:text-primary-400 dark:bg-primary-900/30 shadow-sm' 
                        : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800/40'
                    }`}
                  >
                    {link.label}
                    {link.submenu && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  
                  {link.submenu && (
                    <div className="absolute left-0 mt-1 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-neutral-200 dark:border-neutral-700">
                      {link.submenu.map(subId => {
                        const subLabel = navLinks.find(item => item.id === subId)?.label || 
                                        subId.charAt(0).toUpperCase() + subId.slice(1);
                        return (
                          <Link
                            key={subId}
                            href={`#${subId}`}
                            onClick={() => handleNavLinkClick(subId)}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isClient && activeSection === subId
                                ? 'text-primary-700 bg-primary-50/70 dark:text-primary-400 dark:bg-primary-900/30'
                                : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-primary-400 dark:hover:bg-neutral-700/50'
                            }`}
                          >
                            {subLabel}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </nav>              {/* Right side buttons */}            <div className="flex items-center">
                <ThemeToggle />
                {/* Mobile menu button - completely removed from rendering */}
              {/* We're using the sidebar toggle instead of a separate mobile menu button
              {mobileMenuOpen && (
                <button
                  className="hidden"
                  aria-expanded="true"
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )} */}            </div>
          </div>
        </div>
      </header>
    </>
  );
}
