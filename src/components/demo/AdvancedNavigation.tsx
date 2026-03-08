'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HomeIcon,
  UserIcon,
  SparklesIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitcher from './LanguageSwitcher';

const AdvancedNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);

  const homeDropdownRef = useRef<HTMLDivElement>(null);
  const portfolioDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (homeDropdownRef.current && !homeDropdownRef.current.contains(event.target as Node)) {
        setHomeDropdownOpen(false);
      }
      if (portfolioDropdownRef.current && !portfolioDropdownRef.current.contains(event.target as Node)) {
        setPortfolioDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setHomeDropdownOpen(false);
        setPortfolioDropdownOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className="w-full flex justify-center p-4">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-50 flex items-center justify-between px-2 py-2 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-lg border border-neutral-200/50 dark:border-neutral-700/50 max-w-4xl w-full"
      >
        {/* Brand / Profile */}
        <div className="flex-shrink-0 ml-1">
          <Link href="/" className="block relative group">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white dark:ring-neutral-800 shadow-sm group-hover:ring-blue-500 transition-all duration-300">
              <Image
                src="/img/profile/image.png"
                alt="Ali Al-Zuahri"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 mx-4">
          {/* Home Dropdown */}
          <div className="relative" ref={homeDropdownRef}>
            <button
              onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-expanded={homeDropdownOpen}
            >
              <span>Home</span>
              <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${homeDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {homeDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden"
                >
                  <div className="p-1">
                    <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg">
                      <HomeIcon className="w-4 h-4" />
                      Overview
                    </Link>
                    <Link href="#about" className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg">
                      <UserIcon className="w-4 h-4" />
                      About
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Portfolio Dropdown */}
          <div className="relative" ref={portfolioDropdownRef}>
            <button
              onClick={() => setPortfolioDropdownOpen(!portfolioDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-expanded={portfolioDropdownOpen}
            >
              <span>Portfolio</span>
              <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${portfolioDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {portfolioDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden"
                >
                  <div className="p-1">
                    <Link href="/portfolio/web" className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg">
                      <SparklesIcon className="w-4 h-4" />
                      Projects
                    </Link>
                    <Link href="/portfolio/design" className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg">
                      <DocumentTextIcon className="w-4 h-4" />
                      Case Studies
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/blog" className="px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            Blog
          </Link>

          <Link href="/audio" className="px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            Audio Library
          </Link>

          <Link href="/prompts" className="px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            Prompts
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-neutral-200 dark:border-neutral-700">
            <LanguageSwitcher />
            <ThemeSwitch />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 p-2 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 md:hidden overflow-hidden"
            >
              <div className="space-y-1">
                <Link href="/" className="block px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                  Home
                </Link>
                <Link href="/portfolio" className="block px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                  Portfolio
                </Link>
                <Link href="/blog" className="block px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                  Blog
                </Link>
                <Link href="/audio" className="block px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                  Audio Library
                </Link>
                <Link href="/prompts" className="block px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                  Prompts
                </Link>

                <div className="pt-2 mt-2 border-t border-neutral-100 dark:border-neutral-800 flex justify-between px-4 py-2">
                  <div className="flex gap-2">
                    <LanguageSwitcher />
                    <ThemeSwitch />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};

export default AdvancedNavigation;
