'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon, 
  UserIcon, 
  CogIcon, 
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  PhotoIcon,
  VideoCameraIcon,
  EnvelopeIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitcher from './LanguageSwitcher';

// FocusTrap mock for demo
const FocusTrap = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const AdvancedNavigation = () => {
  const { scrollY } = useScroll();
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  
  const homeDropdownRef = useRef<HTMLDivElement>(null);
  const portfolioDropdownRef = useRef<HTMLDivElement>(null);
  const blogDropdownRef = useRef<HTMLDivElement>(null);
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
      if (blogDropdownRef.current && !blogDropdownRef.current.contains(event.target as Node)) {
        setBlogDropdownOpen(false);
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
        setBlogDropdownOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Smooth background transitions based on scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(4px)", "blur(12px)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0.1, 0.3]
  );
  return (
    <motion.header
      className="relative w-full z-10 transition-all duration-300"
      style={{ 
        backgroundColor, 
        backdropFilter: backdropBlur,
        borderBottom: `1px solid rgba(0, 0, 0, ${borderOpacity})`
      }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/" 
              className="text-2xl font-bold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Ali Al-Zuhairi
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-6"
          >
            {/* Home Dropdown */}
            <div className="relative group" ref={homeDropdownRef}>
              <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white/50 hover:bg-white/70 dark:bg-neutral-800/50 dark:hover:bg-neutral-800/70 border border-neutral-200/50 dark:border-neutral-600/50 backdrop-blur-sm transition-all duration-200 hover:shadow-lg hover:scale-105">
                <Link href="/" className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/50">
                    <HomeIcon className="w-3 h-3 text-blue-500" />
                  </div>
                  <span className="font-medium text-sm">Home</span>
                </Link>
                <button
                  onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                  className="ml-1 p-1 w-6 h-6 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                  aria-expanded={homeDropdownOpen}
                  aria-haspopup="true"
                >
                  <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${homeDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              <AnimatePresence>
                {homeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-lg shadow-lg rounded-lg border border-neutral-200/50 dark:border-neutral-600/50 overflow-hidden z-50"
                  >
                    <div className="p-2">
                      <Link href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <HomeIcon className="w-4 h-4 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium text-neutral-900 dark:text-white">Overview</div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">Main landing page</div>
                        </div>
                      </Link>
                      
                      <Link href="#about" className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <InformationCircleIcon className="w-4 h-4 text-green-500" />
                        </div>
                        <div>
                          <div className="font-medium text-neutral-900 dark:text-white">About Me</div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">Personal information</div>
                        </div>
                      </Link>
                      
                      <Link href="#contact" className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <EnvelopeIcon className="w-4 h-4 text-orange-500" />
                        </div>
                        <div>
                          <div className="font-medium text-neutral-900 dark:text-white">Contact</div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">Get in touch</div>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Portfolio Dropdown */}
            <div className="relative group" ref={portfolioDropdownRef}>
              <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white/50 hover:bg-white/70 dark:bg-neutral-800/50 dark:hover:bg-neutral-800/70 border border-neutral-200/50 dark:border-neutral-600/50 backdrop-blur-sm transition-all duration-200 hover:shadow-lg hover:scale-105">
                <Link href="/portfolio" className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-purple-100 dark:bg-purple-900/50">
                    <UserIcon className="w-3 h-3 text-purple-500" />
                  </div>
                  <span className="font-medium text-sm">Portfolio</span>
                </Link>
                <button
                  onClick={() => setPortfolioDropdownOpen(!portfolioDropdownOpen)}
                  className="ml-1 p-1 w-6 h-6 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                  aria-expanded={portfolioDropdownOpen}
                  aria-haspopup="true"
                >
                  <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${portfolioDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              <AnimatePresence>
                {portfolioDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-lg shadow-lg rounded-lg border border-neutral-200/50 dark:border-neutral-600/50 overflow-hidden z-50"
                  >
                    <div className="p-2">
                      <div className="grid grid-cols-2 gap-2">
                        <Link href="/portfolio/web" className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <CodeBracketIcon className="w-5 h-5 text-blue-500" />
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-neutral-900 dark:text-white text-sm">Web Development</div>
                            <div className="text-xs text-neutral-500 dark:text-neutral-400">Frontend & Backend</div>
                          </div>
                        </Link>
                        
                        <Link href="/portfolio/design" className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <PaintBrushIcon className="w-5 h-5 text-purple-500" />
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-neutral-900 dark:text-white text-sm">UI/UX Design</div>
                            <div className="text-xs text-neutral-500 dark:text-neutral-400">Digital Experiences</div>
                          </div>
                        </Link>
                        
                        <Link href="/portfolio/photography" className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <PhotoIcon className="w-5 h-5 text-green-500" />
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-neutral-900 dark:text-white text-sm">Photography</div>
                            <div className="text-xs text-neutral-500 dark:text-neutral-400">Visual Stories</div>
                          </div>
                        </Link>
                        
                        <Link href="/portfolio/video" className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <VideoCameraIcon className="w-5 h-5 text-orange-500" />
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-neutral-900 dark:text-white text-sm">Video Production</div>
                            <div className="text-xs text-neutral-500 dark:text-neutral-400">Motion Graphics</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Simple Design Link */}
            <Link href="/design" className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white/50 hover:bg-white/70 dark:bg-neutral-800/50 dark:hover:bg-neutral-800/70 border border-neutral-200/50 dark:border-neutral-600/50 text-neutral-700 dark:text-neutral-300 backdrop-blur-sm transition-all duration-200 hover:shadow-lg hover:scale-105">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-900/50">
                <CogIcon className="w-3 h-3 text-green-500" />
              </div>
              <span className="font-medium text-sm">Design</span>
            </Link>

            {/* Blog Dropdown */}
            <div className="relative group" ref={blogDropdownRef}>
              <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white/50 hover:bg-white/70 dark:bg-neutral-800/50 dark:hover:bg-neutral-800/70 border border-neutral-200/50 dark:border-neutral-600/50 backdrop-blur-sm transition-all duration-200 hover:shadow-lg hover:scale-105">
                <Link href="/blog" className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-orange-100 dark:bg-orange-900/50">
                    <DocumentTextIcon className="w-3 h-3 text-orange-500" />
                  </div>
                  <span className="font-medium text-sm">Blog</span>
                </Link>
                <button
                  onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
                  className="ml-1 p-1 w-6 h-6 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                  aria-expanded={blogDropdownOpen}
                  aria-haspopup="true"
                >
                  <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${blogDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              <AnimatePresence>
                {blogDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-lg shadow-lg rounded-lg border border-neutral-200/50 dark:border-neutral-600/50 overflow-hidden z-50"
                  >
                    <div className="p-2">
                      <Link href="/blog" className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <DocumentTextIcon className="w-4 h-4 text-orange-500" />
                        </div>
                        <div>
                          <div className="font-medium text-neutral-900 dark:text-white">All Posts</div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">Latest articles</div>
                        </div>
                      </Link>
                      
                      <Link href="/blog/tech" className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <CodeBracketIcon className="w-4 h-4 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium text-neutral-900 dark:text-white">Technology</div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">Tech insights</div>
                        </div>
                      </Link>
                      
                      <Link href="/blog/design" className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <PaintBrushIcon className="w-4 h-4 text-purple-500" />
                        </div>
                        <div>
                          <div className="font-medium text-neutral-900 dark:text-white">Design</div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">Creative process</div>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme & Language Controls */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-neutral-300/50 dark:border-neutral-600/50">
              <LanguageSwitcher />
              <ThemeSwitch />
            </div>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-expanded={menuOpen}
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <FocusTrap>
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg border-t border-neutral-200/50 dark:border-neutral-600/50 shadow-lg"
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="space-y-4">
                  {/* Mobile Home Section */}
                  <div>
                    <Link 
                      href="/" 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <HomeIcon className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="font-medium text-neutral-900 dark:text-white">Home</span>
                    </Link>
                    
                    <div className="ml-11 space-y-2 mt-2">
                      <Link 
                        href="#about" 
                        className="block p-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        About Me
                      </Link>
                      <Link 
                        href="#contact" 
                        className="block p-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        Contact
                      </Link>
                    </div>
                  </div>

                  {/* Mobile Portfolio Section */}
                  <div>
                    <Link 
                      href="/portfolio" 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                        <UserIcon className="w-4 h-4 text-purple-500" />
                      </div>
                      <span className="font-medium text-neutral-900 dark:text-white">Portfolio</span>
                    </Link>
                    
                    <div className="ml-11 space-y-2 mt-2">
                      <Link 
                        href="/portfolio/web" 
                        className="block p-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        Web Development
                      </Link>
                      <Link 
                        href="/portfolio/design" 
                        className="block p-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        UI/UX Design
                      </Link>
                      <Link 
                        href="/portfolio/photography" 
                        className="block p-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        Photography
                      </Link>
                      <Link 
                        href="/portfolio/video" 
                        className="block p-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        Video Production
                      </Link>
                    </div>
                  </div>

                  {/* Mobile Design Link */}
                  <Link 
                    href="/design" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
                      <CogIcon className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="font-medium text-neutral-900 dark:text-white">Design</span>
                  </Link>

                  {/* Mobile Blog Section */}
                  <div>
                    <Link 
                      href="/blog" 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                        <DocumentTextIcon className="w-4 h-4 text-orange-500" />
                      </div>
                      <span className="font-medium text-neutral-900 dark:text-white">Blog</span>
                    </Link>
                    
                    <div className="ml-11 space-y-2 mt-2">
                      <Link 
                        href="/blog/tech" 
                        className="block p-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        Technology
                      </Link>
                      <Link 
                        href="/blog/design" 
                        className="block p-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        Design
                      </Link>
                    </div>
                  </div>

                  {/* Mobile Theme & Language Controls */}
                  <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-neutral-900 dark:text-white">Preferences</span>
                      <div className="flex items-center space-x-3">
                        <LanguageSwitcher />
                        <ThemeSwitch />
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </motion.div>
          </FocusTrap>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default AdvancedNavigation;
