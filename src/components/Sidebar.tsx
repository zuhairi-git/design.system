'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type NavItem = {
  id: string;
  label: string;
  icon?: string;
};

const navItems: NavItem[] = [
  { id: 'overview', label: 'Overview', icon: '/window.svg' },
  { id: 'colors', label: 'Colors', icon: '/file.svg' },
  { id: 'typography', label: 'Typography', icon: '/file.svg' },
  { id: 'spacing', label: 'Spacing', icon: '/file.svg' },
  { id: 'grids', label: 'Grids', icon: '/file.svg' },
  { id: 'breakpoints', label: 'Breakpoints', icon: '/file.svg' },
  { id: 'shadows', label: 'Drop Shadows', icon: '/file.svg' },
  { id: 'tints', label: 'Tints', icon: '/file.svg' },
  { id: 'components', label: 'Components', icon: '/file.svg' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isClient, setIsClient] = useState(false);
  
  // Set default state only on client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
    setActiveSection('overview');
  }, []);
  
  // Filter nav items based on search term
  const filteredNavItems = navItems.filter(item => 
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle scroll and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Add offset for header

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const sectionHeight = section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-primary-700 text-white p-2 rounded-lg shadow-md"
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-neutral-950 bg-opacity-50 md:hidden transition-opacity z-40 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div 
        className={`fixed md:sticky top-0 h-full md:h-screen w-[280px] max-w-[80vw] md:max-w-none bg-white dark:bg-neutral-900 border-r border-neutral-300 dark:border-neutral-800 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="p-4 border-b border-neutral-300 dark:border-neutral-800 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/globe.svg" alt="Logo" width={24} height={24} className="text-primary-700" />
            <h1 className="text-lg font-heading font-bold text-neutral-950 dark:text-white">
              Design System
            </h1>
          </Link>
          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden text-neutral-700 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 border-b border-neutral-300 dark:border-neutral-800">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-9 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 absolute left-2.5 top-3 text-neutral-500 dark:text-neutral-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <nav className="h-[calc(100vh-130px)] overflow-y-auto">
          <ul className="py-2">
            {filteredNavItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection(item.id);
                  }}                  className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors border-l-4 ${
                    isClient && activeSection === item.id 
                      ? 'bg-primary-50 text-primary-700 border-primary-700 dark:bg-primary-900/20 dark:text-primary-300 dark:border-primary-400' 
                      : 'border-transparent text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800'
                  }`}
                >
                  {item.icon && <Image src={item.icon} width={16} height={16} alt="" className="opacity-80" />}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
