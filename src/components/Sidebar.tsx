'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Disclosure, Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import { 
  Bars3Icon,
  ChevronLeftIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { useAccessibility } from '../utils/accessibility';

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
  },  {
    id: 'components',
    label: 'Components',
    icon: '/components.svg',    items: [
      { id: 'buttons', label: 'Buttons' },
      { id: 'cards', label: 'Cards & Containers' },
      { id: 'tabs-pills', label: 'Tabs & Pills' },
      { id: 'accordions', label: 'Accordions' },
      { id: 'badges', label: 'Badges' },
      { id: 'inputs', label: 'Form Inputs' },
      { id: 'navigation', label: 'Navigation' },
      { id: 'feedback', label: 'Feedback Elements' }
    ],
    isExpanded: true
  },
  {    id: 'card-variants',
    label: 'Card Variants',
    icon: '/card.svg',
    items: [
      { id: 'basic-cards', label: 'Basic Cards' },
      { id: 'interactive-cards', label: 'Interactive Cards' },
      { id: 'media-cards', label: 'Media Cards' },
      { id: 'dashboard-cards', label: 'Dashboard Cards' },
      { id: 'profile-cards', label: 'Profile Cards' },
      { id: 'timeline-cards', label: 'Timeline Cards' }
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
  const { isOpen, toggleSidebar } = useSidebar();  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isClient, setIsClient] = useState(false);
  const { getButtonAttributes } = useAccessibility();
  
  // Set default state only on client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);    setTimeout(() => {
      setActiveSection('overview');
    }, 0);
  }, []);
  
  // Get all available sections for scrollspy
  const allSections = navCategories.flatMap(category => 
    category.items.map(item => item.id)
  );

  // Filter navigation items based on search term
  const filteredCategories = navCategories.map(category => ({
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
        className="md:hidden fixed bottom-6 right-6 z-[60] bg-neutral-100 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-400 p-3 rounded-lg shadow-lg flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-700/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
        {...getButtonAttributes('Toggle menu')}
      >
        <Bars3Icon className="h-5 w-5" aria-hidden="true" />
      </button>      {/* Headless UI Dialog for mobile sidebar */}      <Dialog 
        open={isOpen} 
        onClose={() => {}} // Disable automatic close on backdrop click
        className="relative z-40 md:hidden"
      >
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div 
            className="fixed inset-0 bg-neutral-950/25 transition-opacity" 
            onClick={toggleSidebar}
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-[280px]">
                  <SidebarContent 
                    filteredCategories={filteredCategories}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    toggleSidebar={toggleSidebar}
                    isClient={isClient}
                    isMobile={true}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Desktop sidebar */}
      <div 
        className={`hidden md:block fixed top-0 left-0 h-screen w-[280px] bg-white/95 dark:bg-neutral-900/95 border-r border-neutral-200 dark:border-neutral-800 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}
        role="complementary"
        aria-label="Sidebar navigation"
      >
        {/* Toggle button for sidebar at the right edge */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-10 top-4 p-2 bg-white dark:bg-neutral-800 rounded-r-lg shadow-md border border-l-0 border-neutral-200 dark:border-neutral-700 flex focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          {...getButtonAttributes(isOpen ? "Close sidebar" : "Open sidebar")}
        >
          <ChevronLeftIcon 
            className={`h-5 w-5 text-neutral-700 dark:text-neutral-300 transition-transform ${isOpen ? 'rotate-0' : 'rotate-180'}`} 
            aria-hidden="true" 
          />
        </button>
        
        <SidebarContent 
          filteredCategories={filteredCategories}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          toggleSidebar={toggleSidebar}
          isClient={isClient}
          isMobile={false}
        />
      </div>
    </>
  );
}

// Separate component for sidebar content to avoid duplication
function SidebarContent({ 
  filteredCategories, 
  searchTerm, 
  setSearchTerm, 
  activeSection, 
  setActiveSection, 
  toggleSidebar, 
  isClient,
  isMobile
}: {
  filteredCategories: NavCategory[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeSection: string | null;
  setActiveSection: (section: string) => void;
  toggleSidebar: () => void;
  isClient: boolean;
  isMobile: boolean;
}) {  return (
    <div 
      className="h-full bg-white/95 dark:bg-neutral-900/95 flex flex-col overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >{/* Header */}
      <div className="h-16 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-4">
        {isMobile ? (
          <Dialog.Title className="font-heading font-semibold text-neutral-950 dark:text-neutral-50">
            Design System Docs
          </Dialog.Title>
        ) : (
          <h2 className="font-heading font-semibold text-neutral-950 dark:text-neutral-50">
            Design System Docs
          </h2>
        )}
        {isMobile && (
          <button 
            onClick={toggleSidebar}
            className="text-neutral-700 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>
        {/* Search */}
      <div className="p-4 border-b border-neutral-200 dark:border-neutral-800" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <label htmlFor="sidebar-search" className="sr-only">
            Search navigation
          </label>          <input
            id="sidebar-search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            onFocus={(e) => e.stopPropagation()}
            className="w-full p-2.5 pl-10 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800/50 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white transition-all"
            role="searchbox"
            aria-label="Search navigation items"
          />
          <MagnifyingGlassIcon className="h-4 w-4 absolute left-3.5 top-3.5 text-neutral-500 dark:text-neutral-400" aria-hidden="true" />
        </div>
      </div>      {/* Navigation */}
      <nav 
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700 scrollbar-track-transparent pb-16 min-h-0"
        role="navigation"
        aria-label="Main navigation"
        onClick={(e) => e.stopPropagation()}
      >
        {filteredCategories.length > 0 ? (
          <div className="py-2">
            {filteredCategories.map((category) => (
              <Disclosure key={category.id} defaultOpen={category.isExpanded}>
                {({ open }) => (
                  <div className="mb-4">
                    <Disclosure.Button className="w-full flex items-center justify-between px-6 py-2 text-sm font-semibold text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ui-focus-visible:ring-2 ui-focus-visible:ring-blue-500 ui-focus-visible:ring-offset-2 transition-colors" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center">
                        <Image src={category.icon} width={16} height={16} alt="" className="mr-2 opacity-70" />
                        <span>{category.label}</span>
                      </div>
                      <ChevronDownIcon 
                        className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} 
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="mt-1 ml-6 space-y-1 border-l border-neutral-200 dark:border-neutral-700 pl-2">
                        <ul role="list">
                          {category.items.map((item) => (
                            <li key={item.id}>                              <Link
                                href={`#${item.id}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveSection(item.id);
                                  if (isMobile) {
                                    toggleSidebar();
                                  }
                                }}
                                className={`flex items-center px-4 py-2 text-sm transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                                  isClient && activeSection === item.id 
                                    ? 'bg-primary-50/80 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 shadow-sm' 
                                    : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800/50'
                                }`}
                                aria-current={isClient && activeSection === item.id ? 'page' : undefined}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        ) : (
          <div className="px-6 py-4 text-neutral-600 dark:text-neutral-400 text-sm" role="status">
            No results found
          </div>
        )}
      </nav>
      
      {/* Version info at bottom */}
      <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 text-xs text-neutral-500 dark:text-neutral-400">
        Alux Design System • v1.0.0
      </div>
    </div>
  );
}
