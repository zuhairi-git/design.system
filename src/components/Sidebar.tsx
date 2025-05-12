'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Types for navigation items
type NavItem = {
  id: string;
  label: string;
  icon?: string;
};

type NavCategory = {
  id: string;
  label: string;
  icon: string;
  items: NavItem[];
  isExpanded?: boolean;
};

// Create a context for sidebar state
export const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: () => {}
});

// Hook to use sidebar context
export const useSidebar = () => useContext(SidebarContext);

// Define sidebar navigation structure with categories
const navCategories: NavCategory[] = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: '/window.svg',
    items: [
      { id: 'overview', label: 'Overview' },
      { id: 'installation', label: 'Installation' },
      { id: 'usage', label: 'Usage Guidelines' }
    ],
    isExpanded: true
  },
  {
    id: 'foundations',
    label: 'Design Foundations',
    icon: '/globe.svg',
    items: [
      { id: 'colors', label: 'Color System' },
      { id: 'typography', label: 'Typography' },
      { id: 'spacing', label: 'Spacing' },
      { id: 'grids', label: 'Grid System' }
    ],
    isExpanded: true
  },
  {
    id: 'components',
    label: 'Components',
    icon: '/components.svg',
    items: [
      { id: 'buttons', label: 'Buttons' },
      { id: 'cards', label: 'Cards & Containers' },
      { id: 'inputs', label: 'Form Inputs' },
      { id: 'navigation', label: 'Navigation' },
      { id: 'feedback', label: 'Feedback Elements' }
    ],
    isExpanded: true
  },
  {
    id: 'card-variants',
    label: 'Card Variants',
    icon: '/card.svg',
    items: [
      { id: 'basic-cards', label: 'Basic Cards' },
      { id: 'interactive-cards', label: 'Interactive Cards' },
      { id: 'media-cards', label: 'Media Cards' },
      { id: 'dashboard-cards', label: 'Dashboard Cards' },
      { id: 'profile-cards', label: 'Profile Cards' }
    ],
    isExpanded: true
  },
  {
    id: 'patterns',
    label: 'Design Patterns',
    icon: '/patterns.svg',
    items: [
      { id: 'layouts', label: 'Layout Patterns' },
      { id: 'forms', label: 'Form Patterns' },
      { id: 'data-display', label: 'Data Display' },
      { id: 'navigation-patterns', label: 'Navigation Patterns' }
    ],
    isExpanded: true
  },
  {
    id: 'utilities',
    label: 'Utilities',
    icon: '/utilities.svg',
    items: [
      { id: 'breakpoints', label: 'Breakpoints' },
      { id: 'shadows', label: 'Drop Shadows' },
      { id: 'tints', label: 'Tints & Overlays' },
      { id: 'animations', label: 'Animations' }
    ],
    isExpanded: true
  }
];

export default function Sidebar() {
  // Use the context values provided from the parent component
  const { isOpen, toggleSidebar } = useSidebar();
  
  // Start with null to avoid hydration mismatch between server and client
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [categories, setCategories] = useState<NavCategory[]>(navCategories);
  
  // Set default state only on client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
    // Only set active section after client-side hydration is complete
    // to avoid hydration mismatches with server rendering
    setTimeout(() => {
      setActiveSection('overview');
    }, 0);
  }, []);
  
  // Toggle category expansion
  const toggleCategoryExpansion = (categoryId: string) => {
    setCategories(prevCategories => 
      prevCategories.map(category => 
        category.id === categoryId 
          ? { ...category, isExpanded: !category.isExpanded } 
          : category
      )
    );
  };
  
  // Get all available sections for scrollspy
  const allSections = navCategories.flatMap(category => 
    category.items.map(item => item.id)
  );

  // Filter navigation items based on search term
  const filteredCategories = categories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  // Function to handle scroll and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = allSections.map(id => document.getElementById(id));
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
  }, [allSections]);

  return (
    <>
      {/* Mobile Navigation Toggle - bottom right corner */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed bottom-6 right-6 z-[60] bg-neutral-100 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-400 p-3 rounded-lg shadow-lg flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700/70 transition-all duration-200"
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-neutral-950/10 transition-opacity duration-300 z-40 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={toggleSidebar}
        aria-hidden="true"
      ></div>
      
      {/* Sidebar - hidden by default */}
      <div 
        className={`fixed top-0 left-0 h-screen w-[280px] bg-white/95 dark:bg-neutral-900/95 border-r border-neutral-200 dark:border-neutral-800 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}
      >
        {/* Toggle button for sidebar at the right edge */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-10 top-4 p-2 bg-white dark:bg-neutral-800 rounded-r-lg shadow-md border border-l-0 border-neutral-200 dark:border-neutral-700 hidden md:flex"
          aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
          </svg>
        </button>
        
        <div className="h-16 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-4">
          <div className="font-heading font-semibold text-neutral-950 dark:text-neutral-50">
            Design System Docs
          </div>
          <button 
            onClick={toggleSidebar}
            className="text-neutral-700 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2.5 pl-10 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800/50 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white transition-all"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 absolute left-3.5 top-3.5 text-neutral-500 dark:text-neutral-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <nav className="h-[calc(100vh-120px)] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700 scrollbar-track-transparent pb-16">
          {filteredCategories.length > 0 ? (
            <div className="py-2">
              {filteredCategories.map((category) => (
                <div key={category.id} className="mb-4">
                  <button
                    onClick={() => toggleCategoryExpansion(category.id)}
                    className="w-full flex items-center justify-between px-6 py-2 text-sm font-semibold text-neutral-900 dark:text-white"
                  >
                    <div className="flex items-center">
                      <Image src={category.icon} width={16} height={16} alt="" className="mr-2 opacity-70" />
                      {category.label}
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 transition-transform ${category.isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {category.isExpanded && (
                    <ul className="mt-1 ml-6 space-y-1 border-l border-neutral-200 dark:border-neutral-700 pl-2">
                      {category.items.map((item) => (
                        <li key={item.id}>
                          <Link
                            href={`#${item.id}`}
                            onClick={() => {
                              setActiveSection(item.id);
                              if (window.innerWidth < 768) {
                                toggleSidebar(); // Close sidebar on mobile when clicking a link
                              }
                            }}
                            className={`flex items-center px-4 py-2 text-sm transition-all duration-200 rounded-lg ${
                              isClient && activeSection === item.id 
                                ? 'bg-primary-50/80 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 shadow-sm' 
                                : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800/50'
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="px-6 py-4 text-neutral-600 dark:text-neutral-400 text-sm">No results found</div>
          )}
        </nav>
        
        {/* Version info at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 text-xs text-neutral-500 dark:text-neutral-400">
          Alux Design System • v1.0.0
        </div>
      </div>
    </>
  );
}
