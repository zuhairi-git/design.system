'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// Mock language context for demo purposes
const useLanguage = () => {
  const [locale, setLocale] = useState('en');
  return { locale, setLocale };
};

// Mock theme context for demo purposes
const useTheme = () => {
  const [theme] = useState<'light' | 'dark' | 'colorful'>('light');
  return { theme };
};

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const { theme } = useTheme();
  const [announcement, setAnnouncement] = useState('');

  // Language configurations with flags and labels
  const languages = [
    { code: 'en', flag: '🇬🇧', label: 'English', shortLabel: 'EN' },
    { code: 'fi', flag: '🇫🇮', label: 'Suomi', shortLabel: 'FI' }
  ] as const;

  // Get current language
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  // Get theme-specific styling for dropdown button
  const getButtonStyles = () => {
    switch (theme) {
      case 'light':
        return 'bg-white/50 hover:bg-white/70 border border-gray-200/50 text-gray-700 hover:text-blue-600';
      case 'dark':
        return 'bg-gray-800/50 hover:bg-gray-800/70 border border-gray-600/50 text-gray-300 hover:text-white';
      case 'colorful':
        return 'bg-purple-900/20 hover:bg-purple-900/30 border border-purple-200/30 text-gray-300 hover:text-white';
      default:
        return 'bg-white/50 hover:bg-white/70 border border-gray-200/50 text-gray-700 hover:text-blue-600';
    }
  };

  // Get theme-specific styling for dropdown menu
  const getMenuStyles = () => {
    switch (theme) {
      case 'light':
        return 'bg-white/95 border border-gray-200';
      case 'dark':
        return 'bg-gray-900/95 border border-gray-700';
      case 'colorful':
        return 'bg-purple-900/95 border border-purple-700';
      default:
        return 'bg-white/95 border border-gray-200';
    }
  };

  // Get theme-specific styling for menu items
  const getItemStyles = (isActive: boolean = false) => {
    const baseClasses = 'transition-all duration-200';
    switch (theme) {
      case 'light':
        return `${baseClasses} ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`;
      case 'dark':
        return `${baseClasses} ${isActive ? 'bg-blue-900/20 text-blue-400' : 'text-gray-300 hover:bg-gray-800'}`;
      case 'colorful':
        return `${baseClasses} ${isActive ? 'bg-purple-500/20 text-purple-300' : 'text-gray-300 hover:bg-purple-800/30'}`;
      default:
        return `${baseClasses} ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`;
    }
  };

  const handleLanguageChange = (newLocale: string) => {
    setLocale(newLocale);
    const selectedLanguage = languages.find(lang => lang.code === newLocale);
    if (selectedLanguage) {
      setAnnouncement(`Language changed to ${selectedLanguage.label}`);
    }
  };

  return (
    <>
      <Menu as="div" className="relative">
        {({ open }) => (
          <>
            <div className="relative">
              <Menu.Button
                className={`flex items-center gap-2 py-2 px-3 rounded-lg ${getButtonStyles()} backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                title={`Current language: ${currentLanguage.label}`}
              >
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Current language flag and code */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg leading-none">{currentLanguage.flag}</span>
                    <span className="text-sm font-medium">{currentLanguage.shortLabel}</span>
                  </div>
                  
                  {/* Dropdown arrow */}
                  <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </Menu.Button>
            </div>            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className={`absolute top-full right-0 mt-2 w-48 ${getMenuStyles()} backdrop-blur-lg shadow-xl rounded-xl overflow-hidden z-50`}
                >
                  <Menu.Items static className="focus:outline-none">
                    <div className="p-2">
                      {languages.map((language, index) => (                        <Menu.Item key={language.code}>
                          {() => (
                            <motion.button
                              onClick={() => handleLanguageChange(language.code)}
                              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium ${getItemStyles(locale === language.code)} focus:outline-none`}
                              whileHover={{ x: 2 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.15, delay: index * 0.05 }}
                            >                              {/* Language flag */}
                              <span className="text-lg">{language.flag}</span>
                            
                              {/* Language details */}
                              <div className="flex-1 text-left">
                                <div className="font-medium">{language.label}</div>
                                <div className="text-xs opacity-75">{language.shortLabel}</div>
                              </div>
                              
                              {/* Selected indicator */}
                              {locale === language.code && (
                                <motion.div
                                  layoutId="language-selected"
                                  className="w-2 h-2 bg-blue-500 rounded-full"
                                  initial={false}
                                  transition={{ duration: 0.2, ease: "easeOut" }}
                                />
                              )}
                            </motion.button>
                          )}
                        </Menu.Item>                    ))}
                  </div>
                </Menu.Items>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </Menu>

      {/* Screen reader announcement */}
      {announcement && (
        <div 
          role="status" 
          aria-live="polite" 
          aria-atomic="true"
          className="sr-only"
        >
          {announcement}
        </div>
      )}
    </>
  );
}
