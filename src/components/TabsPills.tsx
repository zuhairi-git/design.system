'use client';

import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { useUniqueId, useAnnouncement } from '../utils/headlessPatterns';
import {
  getFocusRingClasses,
  getColorfulContainerClasses,
  getColorfulTextClass
} from '../utils/headlessThemeIntegration';

type TabsPillsProps = {
  theme?: 'light' | 'dark' | 'colorful';
  variant?: 'tabs' | 'pills';
  items?: string[];
  size?: 'sm' | 'md' | 'lg';
  defaultIndex?: number;
  onChange?: (index: number) => void;
  ariaLabel?: string;
};

export default function TabsPills({ 
  theme = 'light', 
  variant = 'tabs',
  items = ['Overview', 'Features', 'Pricing', 'Support'],
  size = 'md',
  defaultIndex = 0,
  onChange,
  ariaLabel
}: TabsPillsProps) {
  // Size configurations
  const sizeClasses = {
    sm: {
      text: 'text-xs',
      padding: variant === 'pills' ? 'px-3 py-1.5' : 'px-3 py-2',
      content: 'p-3'
    },
    md: {
      text: 'text-sm',
      padding: variant === 'pills' ? 'px-4 py-2' : 'px-4 py-3',
      content: 'p-4'
    },
    lg: {
      text: 'text-base',
      padding: variant === 'pills' ? 'px-5 py-2.5' : 'px-5 py-3.5',
      content: 'p-5'
    }
  };

  // Theme configurations based on theme-colors.txt
  const themeClasses = {
    light: {
      container: 'bg-white border border-gray-200',
      tab: 'text-gray-600 data-hover:text-gray-900 data-hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
      activeTab: 'text-blue-600 bg-blue-50 border-blue-200',
      pill: 'text-gray-600 data-hover:text-gray-900 data-hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
      activePill: 'text-white bg-blue-600 shadow-md data-hover:bg-blue-700',
      content: 'bg-gray-50/50',
      border: 'border-gray-200'
    },
    dark: {
      container: 'bg-gray-900 border border-gray-700',
      tab: 'text-gray-400 data-hover:text-gray-100 data-hover:bg-gray-800/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900',
      activeTab: 'text-blue-400 bg-blue-900/30 border-blue-700',
      pill: 'text-gray-400 data-hover:text-gray-100 data-hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900',
      activePill: 'text-white bg-blue-600 shadow-lg data-hover:bg-blue-700',
      content: 'bg-gray-800/30',
      border: 'border-gray-700'
    },    colorful: {
      container: getColorfulContainerClasses('default'),
      tab: `${getColorfulTextClass('primary')} data-hover:text-[#f0f8ff] data-hover:bg-[rgba(128,0,255,0.15)] ${getFocusRingClasses('colorful')}`,
      activeTab: `${getColorfulTextClass('primary')} bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-purple-500/50 shadow-sm`,
      pill: `${getColorfulTextClass('primary')} data-hover:text-[#f0f8ff] data-hover:bg-[rgba(128,0,255,0.2)] ${getFocusRingClasses('colorful')}`,
      activePill: 'text-white bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 shadow-lg data-hover:shadow-xl',
      content: 'bg-gradient-to-r from-blue-900/10 to-purple-900/10',
      border: 'border-[rgba(128,0,255,0.3)]'
    }
  };
  const currentTheme = themeClasses[theme];
  const currentSize = sizeClasses[size];
  
  // Generate unique IDs for ARIA relationships
  const tabsId = useUniqueId('tabs');
  
  // Announcements for screen readers
  const announce = useAnnouncement();
    // Track selected index for announcements and accessibility
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  
  // Handle tab change
  const handleChange = (index: number) => {
    // Only announce if the index has changed
    if (index !== selectedIndex) {
      setSelectedIndex(index);
      onChange?.(index);
      announce(`${items[index]} tab selected`, false);
    }
  };

  if (variant === 'pills') {
    return (
      <div className={`p-6 rounded-xl ${currentTheme.container}`}>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Pills Navigation ({theme} theme)
        </h3>
        <Tab.Group 
          defaultIndex={defaultIndex}
          onChange={handleChange}
          as="div"
          role="tablist"
          aria-label={ariaLabel || "Navigation Pills"}
          id={tabsId}
        >
          <Tab.List className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  `${currentSize.padding} ${currentSize.text} rounded-full font-medium transition-all duration-200 ${
                    selected ? currentTheme.activePill : currentTheme.pill
                  }`
                }
                id={`${tabsId}-tab-${index}`}
                aria-controls={`${tabsId}-panel-${index}`}
              >
                {item}
              </Tab>
            ))}
          </Tab.List>
          
          <Tab.Panels className="mt-6">
            {items.map((item, index) => (
              <Tab.Panel 
                key={index}
                className={`${currentSize.content} rounded-lg ${currentTheme.content} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                id={`${tabsId}-panel-${index}`}
                aria-labelledby={`${tabsId}-tab-${index}`}
                tabIndex={0}
              >                <h4 className={`font-medium ${theme === 'colorful' ? getColorfulTextClass('primary') : 'text-gray-900 dark:text-white'} mb-2`}>
                  {item} Content
                </h4>
                <p className={`${currentSize.text} ${theme === 'colorful' ? getColorfulTextClass('secondary') : 'text-gray-600 dark:text-gray-400'}`}>
                  This is the content for the {item.toLowerCase()} section. 
                  Pills provide a clean, rounded navigation style perfect for categories and filters.
                </p>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    );
  }

  return (
    <div className={`p-6 rounded-xl ${currentTheme.container}`}>
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Tab Navigation ({theme} theme)
      </h3>
      
      <Tab.Group 
        defaultIndex={defaultIndex}
        onChange={handleChange}
        as="div"
        role="tablist"
        aria-label={ariaLabel || "Navigation Tabs"}
        id={tabsId}
      >
        <Tab.List className={`flex ${currentTheme.border} border-b`}>
          {items.map((item, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                `${currentSize.padding} ${currentSize.text} font-medium border-b-2 transition-all duration-200 ${
                  selected 
                    ? `${currentTheme.activeTab} border-current` 
                    : `${currentTheme.tab} border-transparent`
                }`
              }
              id={`${tabsId}-tab-${index}`}
              aria-controls={`${tabsId}-panel-${index}`}
            >
              {item}
            </Tab>
          ))}
        </Tab.List>
        
        <Tab.Panels className="mt-6">
          {items.map((item, index) => (
            <Tab.Panel 
              key={index}
              className={`${currentSize.content} rounded-lg ${currentTheme.content} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
              id={`${tabsId}-panel-${index}`}
              aria-labelledby={`${tabsId}-tab-${index}`}
              tabIndex={0}
            >              <h4 className={`font-medium ${theme === 'colorful' ? getColorfulTextClass('primary') : 'text-gray-900 dark:text-white'} mb-2`}>
                {item} Content
              </h4>
              <p className={`${currentSize.text} ${theme === 'colorful' ? getColorfulTextClass('secondary') : 'text-gray-600 dark:text-gray-400'}`}>
                This is the content for the {item.toLowerCase()} section. 
                Tabs provide clear navigation between related content sections.
              </p>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

// Comprehensive showcase component
export function TabsPillsShowcase() {
  return (
    <div className="space-y-8">
      {/* Light Theme */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Tabs & Pills - Light Theme</h2>
        <div className="grid gap-6">
          <TabsPills theme="light" variant="tabs" size="md" />
          <TabsPills theme="light" variant="pills" size="md" />
        </div>
      </div>

      {/* Dark Theme */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-white">Tabs & Pills - Dark Theme</h2>
        <div className="grid gap-6">
          <TabsPills theme="dark" variant="tabs" size="md" />
          <TabsPills theme="dark" variant="pills" size="md" />
        </div>
      </div>

      {/* Colorful Theme */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-purple-900">Tabs & Pills - Colorful Theme</h2>
        <div className="grid gap-6">
          <TabsPills theme="colorful" variant="tabs" size="md" />
          <TabsPills theme="colorful" variant="pills" size="md" />
        </div>
      </div>

      {/* Size Variations */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Size Variations</h2>
        <div className="grid gap-6">
          <TabsPills theme="light" variant="pills" size="sm" items={['Small', 'Medium', 'Large']} />
          <TabsPills theme="light" variant="pills" size="md" items={['Small', 'Medium', 'Large']} />
          <TabsPills theme="light" variant="pills" size="lg" items={['Small', 'Medium', 'Large']} />
        </div>
      </div>
    </div>
  );
}
