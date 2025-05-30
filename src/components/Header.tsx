'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { 
  ChevronDownIcon 
} from '@heroicons/react/24/outline';
import { useAccessibility } from '../utils/accessibility';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const { getButtonAttributes } = useAccessibility();
  
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
    // Handle navigation link clicks
  const handleNavLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };const navLinks = [
    { id: 'overview', label: 'Home' },
    { id: 'foundations', label: 'Foundations', submenu: ['colors', 'typography', 'spacing', 'grids'] },
    { id: 'components', label: 'Components', submenu: ['buttons', 'tabs-pills', 'badges', 'cards'] },
    { id: 'patterns', label: 'Patterns', submenu: ['layouts', 'navigation', 'forms'] },
    { id: 'utilities', label: 'Utilities', submenu: ['breakpoints', 'shadows', 'tints'] }
  ];  return (
    <>
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled 
            ? 'border-b border-neutral-200 dark:border-neutral-800/80 shadow-md backdrop-blur-xl bg-white/90 dark:bg-neutral-900/95' 
            : 'bg-transparent'
        }`}
        role="banner"
        aria-label="Site header"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">          <div className="flex items-center justify-between h-16 sm:h-20">            {/* Left side - Logo & Title */}
            <div className="flex items-center">
              <Link 
                href="#overview" 
                className="flex items-center group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg" 
                onClick={() => handleNavLinkClick('overview')}
                aria-label="Go to homepage"
              >
                <h1 className="font-heading font-bold text-xl text-neutral-950 dark:text-white">
                  {title || "Alux"}
                </h1>
              </Link>
            </div>{/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
              {navLinks.map(link => (
                link.submenu ? (
                  <Menu as="div" key={link.id} className="relative">
                    <Menu.Button 
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ui-focus-visible:ring-2 ui-focus-visible:ring-blue-500 ui-focus-visible:ring-offset-2 ${
                        isClient && (activeSection === link.id || (link.submenu && link.submenu.includes(activeSection || '')))
                          ? 'text-primary-700 bg-primary-50/70 dark:text-primary-400 dark:bg-primary-900/30 shadow-sm' 
                          : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800/40'
                      }`}
                      {...getButtonAttributes(`${link.label} menu`)}
                    >
                      <span>{link.label}</span>
                      <ChevronDownIcon className="h-4 w-4 ml-1 ui-open:rotate-180 transition-transform" aria-hidden="true" />
                    </Menu.Button>
                    
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 mt-1 w-48 origin-top-left bg-white dark:bg-neutral-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-neutral-200 dark:border-neutral-700 z-50">
                        <div className="py-1">
                          {link.submenu.map(subId => {
                            const subLabel = navLinks.find(item => item.id === subId)?.label || 
                                            subId.charAt(0).toUpperCase() + subId.slice(1);
                            return (
                              <Menu.Item key={subId}>
                                {({ active }) => (
                                  <Link
                                    href={`#${subId}`}
                                    onClick={() => handleNavLinkClick(subId)}
                                    className={`block px-4 py-2 text-sm transition-colors ${
                                      active
                                        ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-700 dark:text-white'
                                        : isClient && activeSection === subId
                                          ? 'text-primary-700 bg-primary-50/70 dark:text-primary-400 dark:bg-primary-900/30'
                                          : 'text-neutral-700 dark:text-neutral-300'
                                    }`}
                                  >
                                    {subLabel}
                                  </Link>
                                )}
                              </Menu.Item>
                            );
                          })}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Link 
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => handleNavLinkClick(link.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      isClient && activeSection === link.id
                        ? 'text-primary-700 bg-primary-50/70 dark:text-primary-400 dark:bg-primary-900/30 shadow-sm' 
                        : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800/40'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>{/* Right side buttons */}            <div className="flex items-center">                {/* Theme toggle removed */}</div>
          </div>
        </div>
      </header>
    </>
  );
}
