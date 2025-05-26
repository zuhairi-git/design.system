'use client';

import { useState } from 'react';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';

type TabsPillsProps = {
  theme?: 'light' | 'dark' | 'colorful';
  variant?: 'tabs' | 'pills';
  items?: string[];
  size?: 'sm' | 'md' | 'lg';
};

export default function TabsPills({ 
  theme = 'light', 
  variant = 'tabs',
  items = ['Overview', 'Features', 'Pricing', 'Support'],
  size = 'md'
}: TabsPillsProps) {
  const [activeTab, setActiveTab] = useState(0);

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
      tab: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      activeTab: 'text-blue-600 bg-blue-50 border-blue-200',
      pill: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      activePill: 'text-white bg-blue-600 shadow-md hover:bg-blue-700',
      content: 'bg-gray-50/50',
      border: 'border-gray-200'
    },
    dark: {
      container: 'bg-gray-900 border border-gray-700',
      tab: 'text-gray-400 hover:text-gray-100 hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900',
      activeTab: 'text-blue-400 bg-blue-900/30 border-blue-700',
      pill: 'text-gray-400 hover:text-gray-100 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900',
      activePill: 'text-white bg-blue-600 shadow-lg hover:bg-blue-700',
      content: 'bg-gray-800/30',
      border: 'border-gray-700'
    },
    colorful: {
      container: 'bg-gradient-to-br from-cyan-50 via-purple-50 to-blue-50 border border-purple-200',
      tab: 'text-purple-600 hover:text-purple-800 hover:bg-purple-100/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2',
      activeTab: 'text-purple-700 bg-gradient-to-r from-cyan-100 to-purple-100 border-purple-300 shadow-sm',
      pill: 'text-purple-600 hover:text-purple-800 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2',
      activePill: 'text-white bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 shadow-lg hover:shadow-xl',
      content: 'bg-gradient-to-r from-purple-50/80 to-pink-50/80',
      border: 'border-purple-200'
    }
  };
  const currentTheme = themeClasses[theme];
  const currentSize = sizeClasses[size];

  // Handle keyboard navigation for accessibility
  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const nextIndex = (index + 1) % items.length;
      setActiveTab(nextIndex);
      // Focus the next tab
      const nextButton = document.querySelector(`[data-tab-index="${nextIndex}"]`) as HTMLElement;
      nextButton?.focus();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const prevIndex = index === 0 ? items.length - 1 : index - 1;
      setActiveTab(prevIndex);
      // Focus the previous tab
      const prevButton = document.querySelector(`[data-tab-index="${prevIndex}"]`) as HTMLElement;
      prevButton?.focus();
    } else if (event.key === 'Home') {
      event.preventDefault();
      setActiveTab(0);
      const firstButton = document.querySelector(`[data-tab-index="0"]`) as HTMLElement;
      firstButton?.focus();
    } else if (event.key === 'End') {
      event.preventDefault();
      setActiveTab(items.length - 1);
      const lastButton = document.querySelector(`[data-tab-index="${items.length - 1}"]`) as HTMLElement;
      lastButton?.focus();
    }
  };

  if (variant === 'pills') {
    return (
      <div className={`p-6 rounded-xl ${currentTheme.container}`}>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Pills Navigation ({theme} theme)
        </h3>
        <div 
          className="flex flex-wrap gap-2" 
          role="tablist" 
          aria-label="Navigation pills"
        >
          {items.map((item, index) => (
            <button
              key={index}
              data-tab-index={index}
              onClick={() => setActiveTab(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`panel-${index}`}
              tabIndex={activeTab === index ? 0 : -1}
              className={`${currentSize.padding} ${currentSize.text} rounded-full font-medium transition-all duration-200 ${
                activeTab === index ? currentTheme.activePill : currentTheme.pill
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        
        {/* Content area */}
        <div 
          className={`mt-6 ${currentSize.content} rounded-lg ${currentTheme.content}`}
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
            {items[activeTab]} Content
          </h4>
          <p className={`${currentSize.text} text-gray-600 dark:text-gray-400`}>
            This is the content for the {items[activeTab].toLowerCase()} section. 
            Pills provide a clean, rounded navigation style perfect for categories and filters.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 rounded-xl ${currentTheme.container}`}>
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Tab Navigation ({theme} theme)
      </h3>
      
      {/* Tab headers */}
      <div 
        className={`flex ${currentTheme.border} border-b`}
        role="tablist"
        aria-label="Navigation tabs"
      >
        {items.map((item, index) => (
          <button
            key={index}
            data-tab-index={index}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            className={`${currentSize.padding} ${currentSize.text} font-medium border-b-2 transition-all duration-200 ${
              activeTab === index 
                ? `${currentTheme.activeTab} border-current` 
                : `${currentTheme.tab} border-transparent`
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      
      {/* Tab content */}
      <div 
        className={`mt-6 ${currentSize.content} rounded-lg ${currentTheme.content}`}
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
          {items[activeTab]} Content
        </h4>
        <p className={`${currentSize.text} text-gray-600 dark:text-gray-400`}>
          This is the content for the {items[activeTab].toLowerCase()} section. 
          Tabs provide clear navigation between related content sections.
        </p>
        
        {/* Enhanced interactive element for active tab */}
        {activeTab === 1 && (
          <div className={`mt-4 p-3 rounded-lg bg-white dark:bg-gray-800 border ${currentTheme.border}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <PlayArrowRoundedIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className={`${currentSize.text} font-medium text-gray-900 dark:text-white`}>
                    Now Playing: Design System Features
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Interactive Components Demo
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Pause"
                >
                  <PauseRoundedIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                </button>
                <button 
                  className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Next track"
                >
                  <SkipNextRoundedIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                </button>
                <button 
                  className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Volume"
                >
                  <VolumeUpRoundedIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                <div className="bg-blue-500 h-1 rounded-full w-1/3" role="progressbar" aria-valuenow={33} aria-valuemin={0} aria-valuemax={100}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>1:23</span>
                <span>4:56</span>
              </div>
            </div>
          </div>
        )}
      </div>
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
