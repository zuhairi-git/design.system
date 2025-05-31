'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Combobox, Menu, Transition, Disclosure } from '@headlessui/react';
import { 
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  BookmarkIcon,
  ClockIcon,
  ArrowRightIcon,
  Bars3Icon,
  HomeIcon,
  SwatchIcon,
  CubeIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  BookOpenIcon,
  CodeBracketIcon,
  CommandLineIcon,
  DocumentTextIcon,
  RectangleGroupIcon
} from '@heroicons/react/24/outline';
import { useAccessibility } from '../utils/accessibility';
import SidebarToggle from './SidebarToggle';

// Search suggestions type
interface SearchSuggestion {
  id: string;
  label: string;
  category: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  keywords?: string[];
}

// Navigation structure matching sidebar
interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  children?: NavigationItem[];
  description?: string;
  tags?: string[];
}

type HeaderProps = {
  title: string;
  onSidebarToggle?: () => void;
};

export default function Header({ title, onSidebarToggle }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const { getButtonAttributes } = useAccessibility();
  const searchInputRef = useRef<HTMLInputElement>(null);  // Navigation structure matching sidebar exactly
  const navigationItems: NavigationItem[] = [
    {
      id: 'overview',
      label: 'Overview',
      icon: HomeIcon,
      href: '#overview',
      description: 'Design system overview and getting started',
      tags: ['home', 'overview', 'introduction']
    },
    {
      id: 'foundations',
      label: 'Foundations',
      icon: SwatchIcon,
      description: 'Core design principles and tokens',
      tags: ['foundations', 'design', 'tokens'],
      children: [
        {
          id: 'colors',
          label: 'Colors',
          icon: SwatchIcon,
          href: '#colors',
          description: 'Color palette and usage guidelines',
          tags: ['colors', 'palette', 'theme']
        },
        {
          id: 'typography',
          label: 'Typography',
          icon: DocumentTextIcon,
          href: '#typography',
          description: 'Font families, sizes, and text styles',
          tags: ['typography', 'fonts', 'text']
        },
        {
          id: 'spacing',
          label: 'Spacing',
          icon: RectangleGroupIcon,
          href: '#spacing',
          description: 'Spacing scale and layout principles',
          tags: ['spacing', 'layout', 'margins', 'padding']
        },
        {
          id: 'grids',
          label: 'Grids',
          icon: RectangleGroupIcon,
          href: '#grids',
          description: 'Grid systems and responsive layouts',
          tags: ['grids', 'layout', 'responsive']
        }
      ]
    },
    {
      id: 'components',
      label: 'Components',
      icon: CubeIcon,
      description: 'Reusable UI components',
      tags: ['components', 'ui', 'elements'],
      children: [
        {
          id: 'buttons',
          label: 'Buttons',
          icon: CubeIcon,
          href: '#buttons',
          description: 'Button variants and interactive elements',
          tags: ['buttons', 'actions', 'interactive']
        },
        {
          id: 'tabs-pills',
          label: 'Tabs & Pills',
          icon: CubeIcon,
          href: '#tabs-pills',
          description: 'Navigation tabs and pill components',
          tags: ['tabs', 'pills', 'navigation']
        },
        {
          id: 'badges',
          label: 'Badges',
          icon: CubeIcon,
          href: '#badges',
          description: 'Status indicators and labels',
          tags: ['badges', 'status', 'labels']
        },
        {
          id: 'cards',
          label: 'Cards',
          icon: CubeIcon,
          href: '#cards',
          description: 'Card layouts and containers',
          tags: ['cards', 'containers', 'layout']
        },
        {
          id: 'accordions',
          label: 'Accordions',
          icon: CubeIcon,
          href: '#accordions',
          description: 'Collapsible content sections',
          tags: ['accordions', 'collapse', 'expand', 'disclosure']
        }
      ]
    },
    {
      id: 'patterns',
      label: 'Patterns',
      icon: PuzzlePieceIcon,
      description: 'Design patterns and templates',
      tags: ['patterns', 'templates', 'examples'],
      children: [
        {
          id: 'layouts',
          label: 'Layouts',
          icon: RectangleGroupIcon,
          href: '#layouts',
          description: 'Common layout patterns',
          tags: ['layouts', 'structure', 'templates']
        },
        {
          id: 'navigation',
          label: 'Navigation',
          icon: Bars3Icon,
          href: '#navigation',
          description: 'Navigation patterns and menus',
          tags: ['navigation', 'menus', 'routing']
        },
        {
          id: 'forms',
          label: 'Forms',
          icon: DocumentTextIcon,
          href: '#forms',
          description: 'Form layouts and validation',
          tags: ['forms', 'inputs', 'validation']
        }
      ]
    },
    {
      id: 'utilities',
      label: 'Utilities',
      icon: WrenchScrewdriverIcon,
      description: 'Utility classes and helpers',
      tags: ['utilities', 'helpers', 'tools'],
      children: [
        {
          id: 'breakpoints',
          label: 'Breakpoints',
          icon: CommandLineIcon,
          href: '#breakpoints',
          description: 'Responsive breakpoint utilities',
          tags: ['breakpoints', 'responsive', 'mobile']
        },
        {
          id: 'shadows',
          label: 'Shadows',
          icon: CommandLineIcon,
          href: '#shadows',
          description: 'Shadow and elevation utilities',
          tags: ['shadows', 'elevation', 'depth']
        },
        {
          id: 'tints',
          label: 'Tints',
          icon: CommandLineIcon,
          href: '#tints',
          description: 'Color tint and opacity utilities',
          tags: ['tints', 'opacity', 'colors']
        }
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: BookOpenIcon,
      description: 'Additional resources and documentation',
      tags: ['resources', 'docs', 'help'],
      children: [
        {
          id: 'accessibility',
          label: 'Accessibility',
          icon: BookOpenIcon,
          href: '#accessibility',
          description: 'Accessibility guidelines and best practices',
          tags: ['accessibility', 'a11y', 'inclusive']
        },
        {
          id: 'code-examples',
          label: 'Code Examples',
          icon: CodeBracketIcon,
          href: '#code-examples',
          description: 'Implementation examples and snippets',
          tags: ['code', 'examples', 'implementation']
        }
      ]
    }
  ];

  // Search suggestions based on navigation structure
  const searchSuggestions: SearchSuggestion[] = navigationItems.reduce((acc, item) => {
    if (item.href) {
      acc.push({
        id: item.id,
        label: item.label,
        category: 'Main',
        href: item.href,
        icon: item.icon,
        description: item.description,
        keywords: item.tags
      });
    }
    if (item.children) {
      item.children.forEach(child => {
        if (child.href) {
          acc.push({
            id: child.id,
            label: child.label,
            category: item.label,
            href: child.href,
            icon: child.icon,
            description: child.description,
            keywords: child.tags
          });
        }
      });
    }
    return acc;
  }, [] as SearchSuggestion[]);// Filter search suggestions based on query
  const filteredSuggestions = searchQuery.trim()
    ? searchSuggestions.filter(suggestion => {
        const searchableText = [
          suggestion.label,
          suggestion.category,
          suggestion.description || '',
          ...(suggestion.keywords || [])
        ].join(' ').toLowerCase();
        return searchableText.includes(searchQuery.toLowerCase());
      }).slice(0, 6)
    : [];

  // Load recent searches from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('header-recent-searches');
      if (stored) {
        try {
          setRecentSearches(JSON.parse(stored));
        } catch (e) {
          console.error('Failed to parse recent searches:', e);
        }
      }
    }
  }, []);

  // Save search to recent searches
  const saveRecentSearch = (query: string) => {
    if (!query.trim()) return;
    
    const updated = [query, ...recentSearches.filter(q => q !== query)].slice(0, 5);
    setRecentSearches(updated);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('header-recent-searches', JSON.stringify(updated));
    }
  };

  // Handle search submission
  const handleSearchSubmit = (suggestion?: SearchSuggestion) => {
    if (suggestion) {
      saveRecentSearch(suggestion.label);
      setSearchQuery('');
      setSearchFocused(false);
      // Navigate to the suggestion
      const element = document.querySelector(suggestion.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (searchQuery.trim()) {
      saveRecentSearch(searchQuery);
      setSearchQuery('');
      setSearchFocused(false);
    }
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Focus search with Cmd/Ctrl + K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
        setSearchFocused(true);
      }
      
      // Clear search with Escape
      if (e.key === 'Escape' && searchFocused) {
        setSearchQuery('');
        setSearchFocused(false);
        searchInputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [searchFocused]);  // Mark when component is mounted on client
  useEffect(() => {
    setIsClient(true);
    setTimeout(() => {
      setActiveSection('overview');
    }, 0);
  }, []);  // Detect scroll position and active sections
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const detectActiveSection = () => {
      const sections = document.querySelectorAll('section[id]');
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

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', detectActiveSection);
    
    handleScroll();
    detectActiveSection();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', detectActiveSection);
    };
  }, []);  // Handle navigation link clicks
  const handleNavLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };
  // Create nav links from navigation structure
  const navLinks = navigationItems.map(item => ({
    id: item.id,
    label: item.label,
    icon: item.icon,
    submenu: item.children?.map(child => child.id) || undefined
  }));return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'border-b border-neutral-200/80 dark:border-neutral-700/60 shadow-lg backdrop-blur-xl bg-white/95 dark:bg-neutral-900/95' 
            : 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md'
        }`}
        role="banner"
        aria-label="Site header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            
            {/* Left: Logo & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {onSidebarToggle && (
                <SidebarToggle 
                  onClick={onSidebarToggle}
                  className="lg:hidden"
                />
              )}
              
              <Link 
                href="#overview" 
                className="flex items-center group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg p-1" 
                onClick={() => handleNavLinkClick('overview')}
                aria-label="Go to homepage"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <h1 className="font-heading font-bold text-xl text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {title || "Alux"}
                  </h1>
                </div>
              </Link>
            </div>

            {/* Center: Enhanced Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">              <Combobox value={searchQuery} onChange={(value) => setSearchQuery(value || '')}>
                <div className="relative w-full">
                  <div className={`relative flex items-center transition-all duration-200 ${
                    searchFocused 
                      ? 'ring-2 ring-primary-500 shadow-lg' 
                      : 'ring-1 ring-neutral-300 dark:ring-neutral-600 hover:ring-neutral-400 dark:hover:ring-neutral-500'
                  } rounded-xl bg-white dark:bg-neutral-800/90 backdrop-blur-sm`}>
                    
                    <MagnifyingGlassIcon className="absolute left-4 h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                    
                    <Combobox.Input
                      ref={searchInputRef}
                      className="w-full pl-12 pr-24 py-3.5 text-sm bg-transparent border-0 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none"
                      placeholder="Search components, colors, patterns..."
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      displayValue={(query: string) => query}
                    />
                    
                    <div className="absolute right-3 flex items-center space-x-2">
                      {searchQuery && (                        <button
                          onClick={() => {
                            setSearchQuery('');
                            searchInputRef.current?.focus();
                          }}
                          className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                          aria-label="Clear search"
                        >
                          <XMarkIcon className="h-4 w-4 text-neutral-400" />
                        </button>
                      )}
                      
                      <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs font-medium font-mono bg-neutral-100 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-md text-neutral-600 dark:text-neutral-400">
                        ⌘K
                      </kbd>
                    </div>
                  </div>

                  {/* Search Dropdown */}
                  {(searchFocused && (filteredSuggestions.length > 0 || recentSearches.length > 0)) && (
                    <Combobox.Options className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-neutral-800 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden z-50">
                      
                      {/* Search Results */}
                      {filteredSuggestions.length > 0 && (
                        <div className="p-2">
                          <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 px-3 py-2 uppercase tracking-wide">
                            Search Results
                          </div>
                          {filteredSuggestions.map((suggestion) => (
                            <Combobox.Option
                              key={suggestion.id}
                              value={suggestion}
                              className={({ active }) =>
                                `flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                                  active
                                    ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700/50'
                                }`
                              }
                              onClick={() => handleSearchSubmit(suggestion)}
                            >
                              <div className="flex items-center space-x-3">                                <span className="w-5 h-5 text-neutral-500 dark:text-neutral-400" aria-hidden="true">
                                  <suggestion.icon className="w-full h-full" />
                                </span>
                                <div>
                                  <div className="font-medium text-sm">{suggestion.label}</div>
                                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                    {suggestion.category} • {suggestion.description}
                                  </div>
                                </div>
                              </div>
                              <ArrowRightIcon className="h-4 w-4 opacity-50" />
                            </Combobox.Option>
                          ))}
                        </div>
                      )}

                      {/* Recent Searches */}
                      {!searchQuery.trim() && recentSearches.length > 0 && (
                        <div className="p-2 border-t border-neutral-200 dark:border-neutral-700">
                          <div className="flex items-center justify-between px-3 py-2">
                            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                              Recent Searches
                            </span>
                            <button
                              onClick={() => {
                                setRecentSearches([]);
                                localStorage.removeItem('header-recent-searches');
                              }}
                              className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                            >
                              Clear
                            </button>
                          </div>
                          {recentSearches.map((recent, index) => (                            <button
                              key={index}
                              onClick={() => {
                                setSearchQuery(recent);
                                searchInputRef.current?.focus();
                              }}
                              className="flex items-center space-x-3 w-full p-3 rounded-full text-left hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors"
                            >
                              <ClockIcon className="h-4 w-4 text-neutral-400" />
                              <span className="text-sm text-neutral-700 dark:text-neutral-300">{recent}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* No Results */}
                      {searchQuery.trim() && filteredSuggestions.length === 0 && (                        <div className="p-6 text-center">
                          <MagnifyingGlassIcon className="h-8 w-8 text-neutral-300 dark:text-neutral-600 mx-auto mb-2" />
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            No results found for &ldquo;{searchQuery}&rdquo;
                          </p>
                          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                            Try searching for components, colors, or patterns
                          </p>
                        </div>
                      )}
                    </Combobox.Options>
                  )}
                </div>
              </Combobox>
            </div>            {/* Right: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
              {navLinks.map(link => (
                link.submenu ? (
                  <Menu as="div" key={link.id} className="relative">
                    <Menu.Button 
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                        isClient && (activeSection === link.id || (link.submenu && link.submenu.includes(activeSection || '')))
                          ? 'text-primary-700 bg-primary-50 dark:text-primary-300 dark:bg-primary-900/30 shadow-sm' 
                          : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800/50'
                      }`}
                      {...getButtonAttributes(`${link.label} menu`)}
                    >
                      <link.icon className="w-4 h-4" aria-hidden="true" />
                      <span>{link.label}</span>
                      <ChevronDownIcon className="h-4 w-4 ui-open:rotate-180 transition-transform duration-200" aria-hidden="true" />
                    </Menu.Button>
                      <Transition
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95 translate-y-1"
                      enterTo="transform opacity-100 scale-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="transform opacity-100 scale-100 translate-y-0"
                      leaveTo="transform opacity-0 scale-95 translate-y-1"
                    ><Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right bg-white dark:bg-neutral-800 rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 focus:outline-none border border-neutral-200/80 dark:border-neutral-700/60 z-50 p-1">
                        {link.submenu?.map(subId => {
                          const navItem = navigationItems.find(nav => nav.id === link.id);
                          const subItem = navItem?.children?.find(child => child.id === subId);
                          
                          if (!subItem) return null;
                          
                          return (
                            <Menu.Item key={subId}>
                              {({ active }) => (
                                <Link
                                  href={subItem.href || `#${subId}`}
                                  onClick={() => handleNavLinkClick(subId)}
                                  className={`flex items-center space-x-3 px-3 py-2.5 text-sm rounded-lg transition-all duration-150 ${
                                    active
                                      ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
                                      : isClient && activeSection === subId
                                        ? 'text-primary-600 bg-primary-50/50 dark:text-primary-400 dark:bg-primary-900/20'
                                        : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700/50'
                                  }`}
                                >
                                  <subItem.icon className="w-4 h-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true" />
                                  <div className="flex-1">
                                    <div className="font-medium">{subItem.label}</div>
                                    {subItem.description && (
                                      <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                                        {subItem.description}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              )}
                            </Menu.Item>
                          );
                        })}
                      </Menu.Items>
                    </Transition>
                  </Menu>                ) : (
                  <Link 
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => handleNavLinkClick(link.id)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                      isClient && activeSection === link.id
                        ? 'text-primary-700 bg-primary-50 dark:text-primary-300 dark:bg-primary-900/30 shadow-sm' 
                        : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800/50'
                    }`}
                  >
                    <link.icon className="w-4 h-4" aria-hidden="true" />
                    <span>{link.label}</span>
                  </Link>
                )
              ))}
            </nav>            {/* Right: Quick Actions */}
            <div className="flex items-center space-x-2">              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden p-2.5 rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>

              {/* Bookmarks / Favorites */}
              <button 
                className="hidden sm:flex p-2.5 rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                aria-label="Bookmarked items"
                title="Quick access to bookmarked components"
              >
                <BookmarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>        {/* Mobile Search Overlay */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 transition-all duration-300 ${
          searchFocused ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="p-4">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                className="w-full pl-10 pr-10 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Search design system&hellip;"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    handleSearchSubmit();
                  }
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700"
                >
                  <XMarkIcon className="h-4 w-4 text-neutral-400" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 shadow-lg transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="p-4 space-y-2">            {/* Mobile Search */}
            <div className="relative mb-4">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                className="w-full pl-10 pr-10 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Search design system&hellip;"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    handleSearchSubmit();
                    setMobileMenuOpen(false);
                  }                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700"
                >
                  <XMarkIcon className="h-4 w-4 text-neutral-400" />
                </button>
              )}
            </div>            {/* Mobile Navigation Items with Accordions */}
            {navLinks.map(link => (
              link.submenu ? (
                <Disclosure key={link.id}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center justify-between w-full px-4 py-3 text-left text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors">
                        <div className="flex items-center space-x-3">
                          <link.icon className="w-4 h-4" aria-hidden="true" />
                          <span>{link.label}</span>
                        </div>
                        <ChevronRightIcon 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            open ? 'rotate-90' : ''
                          }`}
                        />
                      </Disclosure.Button>
                      
                      <Transition
                        enter="transition duration-200 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-150 ease-in"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >                        <Disclosure.Panel className="mt-2 ml-4 space-y-1">
                          {link.submenu?.map(subId => {
                            const navItem = navigationItems.find(nav => nav.id === link.id);
                            const subItem = navItem?.children?.find(child => child.id === subId);
                            
                            if (!subItem) return null;
                            
                            return (
                              <Link
                                key={subId}
                                href={subItem.href || `#${subId}`}
                                onClick={() => {
                                  handleNavLinkClick(subId);
                                  setMobileMenuOpen(false);
                                }}
                                className={`flex items-center space-x-3 px-3 py-2.5 text-sm rounded-lg transition-all duration-150 ${
                                  isClient && activeSection === subId
                                    ? 'text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-primary-900/30'
                                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700/50'
                                }`}
                              >
                                <subItem.icon className="w-4 h-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true" />
                                <div>
                                  <div className="font-medium">{subItem.label}</div>
                                  {subItem.description && (
                                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                                      {subItem.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ) : (
                <Link 
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => {
                    handleNavLinkClick(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isClient && activeSection === link.id
                      ? 'text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-primary-900/30'
                      : 'text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                  }`}
                >
                  <link.icon className="w-4 h-4" aria-hidden="true" />
                  <span>{link.label}</span>
                </Link>
              )
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
