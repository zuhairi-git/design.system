'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { Transition, Disclosure, Combobox } from '@headlessui/react';
import { 
  MagnifyingGlassIcon,
  ChevronDownIcon,
  XMarkIcon,
  HomeIcon,
  SwatchIcon,
  CubeIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  BookOpenIcon,
  CodeBracketIcon,
  CommandLineIcon,
  Bars3Icon,
  DocumentTextIcon,
  RectangleGroupIcon
} from '@heroicons/react/24/outline';
import { useAccessibility } from '../utils/accessibility';
import Link from 'next/link';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  children?: NavigationItem[];
  description?: string;
  tags?: string[];
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

// Navigation structure
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
    children: [      {
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
      },      {
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

export default function Sidebar({ isOpen, onToggle, className = '' }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['foundations', 'components']));
  const { getButtonAttributes } = useAccessibility();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Flatten all navigation items for search
  const allItems = useMemo(() => {
    const flatten = (items: NavigationItem[]): NavigationItem[] => {
      return items.reduce((acc, item) => {
        acc.push(item);
        if (item.children) {
          acc.push(...flatten(item.children));
        }
        return acc;
      }, [] as NavigationItem[]);
    };
    return flatten(navigationItems);
  }, []);

  // Filter items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return navigationItems;
    }

    const query = searchQuery.toLowerCase();
    const matchingItems = allItems.filter(item => {
      const searchableText = [
        item.label,
        item.description || '',
        ...(item.tags || [])
      ].join(' ').toLowerCase();
      
      return searchableText.includes(query);
    });

    // Group results by parent if they exist
    const grouped = new Map<string, NavigationItem[]>();
    const topLevel: NavigationItem[] = [];

    matchingItems.forEach(item => {
      const parent = navigationItems.find(nav => 
        nav.children?.some(child => child.id === item.id)
      );
      
      if (parent && item.href) {
        if (!grouped.has(parent.id)) {
          grouped.set(parent.id, []);
        }
        grouped.get(parent.id)!.push(item);
      } else if (item.href || item.children) {
        topLevel.push(item);
      }
    });

    // Create filtered navigation structure
    const result: NavigationItem[] = [...topLevel];
    grouped.forEach((children, parentId) => {
      const parent = navigationItems.find(nav => nav.id === parentId);
      if (parent && !result.find(item => item.id === parentId)) {
        result.push({
          ...parent,
          children: children
        });
      }
    });

    return result;
  }, [searchQuery, allItems]);

  // Handle search keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape' && searchQuery) {
        setSearchQuery('');
        searchInputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [searchQuery]);

  // Auto-expand sections when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      const parentIds = new Set<string>();
      filteredItems.forEach(item => {
        if (item.children) {
          parentIds.add(item.id);
        }
      });
      setExpandedSections(parentIds);
    }
  }, [searchQuery, filteredItems]);

  // Handle section expansion
  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  // Handle navigation
  const handleNavClick = (item: NavigationItem) => {
    if (item.href) {
      setActiveSection(item.id);
      // Close mobile sidebar after navigation
      if (window.innerWidth < 768) {
        onToggle();
      }
    }
  };

  // Clear search when sidebar closes on mobile
  useEffect(() => {
    if (!isOpen && window.innerWidth < 768) {
      setSearchQuery('');
    }
  }, [isOpen]);

  const renderNavigationItem = (item: NavigationItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.has(item.id);
    const isActive = activeSection === item.id;
    const IconComponent = item.icon;

    if (hasChildren) {
      return (
        <Disclosure key={item.id} defaultOpen={isExpanded}>
          {({ open }) => (
            <div className={level > 0 ? 'ml-4' : ''}>              <Disclosure.Button
                className={`w-full flex items-center justify-between px-3 py-2.5 text-left rounded-lg transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900 ${
                  isActive
                    ? 'bg-primary-50 text-primary-900 dark:bg-primary-900/20 dark:text-primary-100 shadow-sm'
                    : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800/50'
                }`}
                onClick={() => toggleSection(item.id)}
                {...getButtonAttributes(`Toggle ${item.label} section`)}
              >
                <div className="flex items-center min-w-0 flex-1">
                  <IconComponent className={`h-5 w-5 mr-3 flex-shrink-0 transition-colors duration-200 ${
                    isActive 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200'
                  }`} />
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-sm truncate">{item.label}</div>
                    {item.description && (
                      <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">
                        {item.description}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {item.children && (
                    <div className="bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs px-1.5 py-0.5 rounded-md font-medium">
                      {item.children.length}
                    </div>
                  )}
                  <ChevronDownIcon 
                    className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
                      open ? 'rotate-180' : ''
                    } ${
                      isActive 
                        ? 'text-primary-600 dark:text-primary-400' 
                        : 'text-neutral-400'
                    }`}
                  />
                </div>
              </Disclosure.Button>
                <Transition
                show={open}
                enter="transition-all duration-300 ease-out"
                enterFrom="opacity-0 max-h-0 -translate-y-1"
                enterTo="opacity-100 max-h-96 translate-y-0"
                leave="transition-all duration-200 ease-in"
                leaveFrom="opacity-100 max-h-96 translate-y-0"
                leaveTo="opacity-0 max-h-0 -translate-y-1"
              >
                <Disclosure.Panel className="mt-2 ml-6 space-y-1 overflow-hidden border-l border-neutral-200 dark:border-neutral-700 pl-3">
                  {item.children?.map(child => renderNavigationItem(child, level + 1))}
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      );
    }    return (
      <Link
        key={item.id}
        href={item.href || '#'}
        onClick={() => handleNavClick(item)}
        className={`flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900 ${
          level > 0 ? 'ml-2' : ''
        } ${
          isActive
            ? 'bg-primary-100 text-primary-900 dark:bg-primary-900/30 dark:text-primary-100 shadow-sm border-l-2 border-primary-500'
            : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800/50 hover:border-l-2 hover:border-transparent'
        }`}
      >
        <IconComponent className={`h-4 w-4 mr-3 flex-shrink-0 transition-colors duration-200 ${
          isActive 
            ? 'text-primary-600 dark:text-primary-400' 
            : 'text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200'
        }`} />
        <div className="min-w-0 flex-1">
          <div className="font-medium text-sm truncate">{item.label}</div>
          {item.description && level === 0 && (
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">
              {item.description}
            </div>
          )}
        </div>
        {isActive && (
          <div className="w-2 h-2 bg-primary-500 rounded-full ml-2"></div>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Mobile backdrop */}
      <Transition
        show={isOpen}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div 
          className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onToggle}
          aria-hidden="true"
        />
      </Transition>      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } md:z-40 ${!isOpen ? 'md:hidden' : ''} ${className}`}
        role="navigation"
        aria-label="Main navigation sidebar"
      >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Navigation
            </h2>
            <button
              onClick={onToggle}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              {...getButtonAttributes('Close sidebar')}
            >
              <XMarkIcon className="h-5 w-5 text-neutral-500" />
            </button>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">            <Combobox value={searchQuery} onChange={(value) => setSearchQuery(value || '')}>
              <div className="relative">
                <Combobox.Input
                  ref={searchInputRef}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Search navigation... (⌘K)"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  displayValue={(query: string) => query}
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-0.5 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700"
                  >
                    <XMarkIcon className="h-3 w-3 text-neutral-400" />
                  </button>
                )}
              </div>
            </Combobox>
            
            {searchQuery && (
              <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                {filteredItems.length === 0 ? 'No results found' : 
                 `${filteredItems.length} result${filteredItems.length !== 1 ? 's' : ''} found`}
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {filteredItems.length === 0 ? (
              <div className="text-center py-8 text-neutral-500 dark:text-neutral-400">
                <MagnifyingGlassIcon className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No navigation items found</p>
                <p className="text-xs mt-1">Try adjusting your search terms</p>
              </div>
            ) : (
              filteredItems.map(item => renderNavigationItem(item))
            )}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
            <div className="text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
              <div className="flex items-center justify-between">
                <span>Keyboard shortcuts:</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Search</span>
                <kbd className="px-1.5 py-0.5 text-xs font-mono bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded">
                  ⌘K
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>Clear search</span>
                <kbd className="px-1.5 py-0.5 text-xs font-mono bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded">
                  Esc
                </kbd>              </div>
            </div>
          </div>
        </aside>
    </>
  );
}

// Hook for sidebar state management
export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(prev => !prev);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  // Close sidebar on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); // Always open on desktop
      } else {
        setIsOpen(false); // Closed by default on mobile
      }
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isOpen,
    toggle,
    open,
    close
  };
}
