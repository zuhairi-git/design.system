'use client';

import React, { useState } from 'react';
import { Menu, Disclosure, Tab, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UserIcon,
  CogIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import CodeSnippet from '@/components/CodeSnippet';
import AnimatedSection from '@/components/AnimatedSection';
import AdvancedNavigation from '@/components/demo/AdvancedNavigation';

export default function NavigationSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sample navigation data
  const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'Profile', href: '#', icon: UserIcon, current: false },
    { name: 'Settings', href: '#', icon: CogIcon, current: false },
    { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  ];

  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ];

  const breadcrumbNavigation = [
    { name: 'Home', href: '#', current: false },
    { name: 'Components', href: '#', current: false },
    { name: 'Navigation', href: '#', current: true },
  ];

  return (
    <AnimatedSection id="navigation" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Navigation Components
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Comprehensive navigation patterns built with Headless UI and Tailwind CSS for seamless user experiences.
          </p>
        </div>

        <div className="space-y-16">
          
          {/* Header Navigation */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Header Navigation
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Modern header with dropdown menus, search, and mobile responsiveness.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden">
              <div className="bg-white dark:bg-neutral-900 shadow">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 justify-between">
                    <div className="flex">
                      <div className="flex flex-shrink-0 items-center">
                        <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                        <span className="ml-2 text-lg font-semibold text-neutral-900 dark:text-white">
                          Brand
                        </span>
                      </div>
                      <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                              item.current
                                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                                : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300'
                            }`}
                          >
                            <item.icon className="h-4 w-4 mr-2" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                      {/* Search */}
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" />
                        </div>
                        <input
                          type="text"
                          className="block w-full rounded-md border-0 bg-neutral-100 dark:bg-neutral-800 py-1.5 pl-10 pr-3 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:bg-white dark:focus:bg-neutral-700 focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6 transition-colors"
                          placeholder="Search..."
                        />
                      </div>

                      {/* User menu */}
                      <Menu as="div" className="relative ml-3">
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white dark:bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-neutral-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={`block px-4 py-2 text-sm transition-colors ${
                                      active
                                        ? 'bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white'
                                        : 'text-neutral-700 dark:text-neutral-300'
                                    }`}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex items-center sm:hidden">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md bg-white dark:bg-neutral-900 p-2 text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      >
                        {mobileMenuOpen ? (
                          <XMarkIcon className="h-6 w-6" />
                        ) : (
                          <Bars3Icon className="h-6 w-6" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile menu */}
                <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                  <div className="space-y-1 pb-3 pt-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`block border-l-4 py-2 pl-3 pr-4 text-sm font-medium transition-colors ${
                          item.current
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                            : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-800 dark:hover:text-neutral-200'
                        }`}
                      >
                        <div className="flex items-center">
                          <item.icon className="h-4 w-4 mr-3" />
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <CodeSnippet
              title="Header Navigation"
              code={`<div className="bg-white dark:bg-neutral-900 shadow">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 justify-between">
      <div className="flex">
        <div className="flex flex-shrink-0 items-center">
          <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
          <span className="ml-2 text-lg font-semibold">Brand</span>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={\`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium \${
                item.current
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-neutral-500 hover:border-neutral-300'
              }\`}
            >
              <item.icon className="h-4 w-4 mr-2" />
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>`}
            />
          </div>

          {/* Sidebar Navigation */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Sidebar Navigation
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Collapsible sidebar with nested navigation using Disclosure components.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden">
              <div className="flex h-64">
                <nav className="w-64 bg-neutral-900 dark:bg-neutral-800">
                  <div className="p-4">
                    <div className="space-y-1">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-neutral-800 dark:bg-neutral-700 px-3 py-2 text-left text-sm font-medium text-white hover:bg-neutral-700 dark:hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                              <span className="flex items-center">
                                <HomeIcon className="h-4 w-4 mr-3" />
                                Dashboard
                              </span>
                              <ChevronRightIcon
                                className={`h-4 w-4 transition-transform ${
                                  open ? 'rotate-90' : ''
                                }`}
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
                              <Disclosure.Panel className="mt-1 space-y-1 pl-6">
                                <a href="#" className="block rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-700 hover:text-white">
                                  Overview
                                </a>
                                <a href="#" className="block rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-700 hover:text-white">
                                  Analytics
                                </a>
                                <a href="#" className="block rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-700 hover:text-white">
                                  Reports
                                </a>
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>

                      <a href="#" className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 dark:hover:bg-neutral-700 hover:text-white">
                        <UserIcon className="h-4 w-4 mr-3" />
                        Users
                      </a>

                      <a href="#" className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 dark:hover:bg-neutral-700 hover:text-white">
                        <CogIcon className="h-4 w-4 mr-3" />
                        Settings
                      </a>
                    </div>
                  </div>
                </nav>
                <div className="flex-1 p-6 bg-neutral-50 dark:bg-neutral-900">
                  <h4 className="text-lg font-medium text-neutral-900 dark:text-white">
                    Main Content Area
                  </h4>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    Content area with sidebar navigation.
                  </p>
                </div>
              </div>
            </div>

            <CodeSnippet
              title="Sidebar Navigation with Disclosure"
              code={`<Disclosure>
  {({ open }) => (
    <>
      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-neutral-800 px-3 py-2 text-left text-sm font-medium text-white hover:bg-neutral-700">
        <span className="flex items-center">
          <HomeIcon className="h-4 w-4 mr-3" />
          Dashboard
        </span>
        <ChevronRightIcon
          className={\`h-4 w-4 transition-transform \${open ? 'rotate-90' : ''}\`}
        />
      </Disclosure.Button>
      <Disclosure.Panel className="mt-1 space-y-1 pl-6">
        <a href="#" className="block rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-700">
          Overview
        </a>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>`}
            />
          </div>

          {/* Breadcrumb Navigation */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Breadcrumb Navigation
              </h3>              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Hierarchical navigation showing the user&apos;s location within the application.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 p-6">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-4">
                  {breadcrumbNavigation.map((item, index) => (
                    <li key={item.name}>
                      <div className="flex items-center">
                        {index > 0 && (
                          <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-neutral-400 mr-4" />
                        )}
                        <a
                          href={item.href}
                          className={`text-sm font-medium transition-colors ${
                            item.current
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300'
                          }`}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </div>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            <CodeSnippet
              title="Breadcrumb Navigation"
              code={`<nav className="flex" aria-label="Breadcrumb">
  <ol className="flex items-center space-x-4">
    {breadcrumbNavigation.map((item, index) => (
      <li key={item.name}>
        <div className="flex items-center">
          {index > 0 && (
            <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-neutral-400 mr-4" />
          )}
          <a
            href={item.href}
            className={\`text-sm font-medium \${
              item.current
                ? 'text-blue-600'
                : 'text-neutral-500 hover:text-neutral-700'
            }\`}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        </div>
      </li>
    ))}
  </ol>
</nav>`}
            />
          </div>

          {/* Tab Navigation */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Tab Navigation
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Tabbed interface for organizing content into distinct sections.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden">
              <Tab.Group>
                <Tab.List className="flex space-x-1 bg-neutral-100 dark:bg-neutral-700 p-1">
                  <Tab
                    className={({ selected }) =>
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all ${
                        selected
                          ? 'bg-white dark:bg-neutral-800 text-blue-700 dark:text-blue-400 shadow'
                          : 'text-neutral-700 dark:text-neutral-300 hover:bg-white/[0.12] hover:text-blue-600'
                      }`
                    }
                  >
                    Recent
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all ${
                        selected
                          ? 'bg-white dark:bg-neutral-800 text-blue-700 dark:text-blue-400 shadow'
                          : 'text-neutral-700 dark:text-neutral-300 hover:bg-white/[0.12] hover:text-blue-600'
                      }`
                    }
                  >
                    Popular
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all ${
                        selected
                          ? 'bg-white dark:bg-neutral-800 text-blue-700 dark:text-blue-400 shadow'
                          : 'text-neutral-700 dark:text-neutral-300 hover:bg-white/[0.12] hover:text-blue-600'
                      }`
                    }
                  >
                    Trending
                  </Tab>
                </Tab.List>
                <Tab.Panels className="p-6">
                  <Tab.Panel className="space-y-4">
                    <h4 className="font-medium text-neutral-900 dark:text-white">Recent Items</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Your most recently accessed items appear here.
                    </p>
                  </Tab.Panel>
                  <Tab.Panel className="space-y-4">
                    <h4 className="font-medium text-neutral-900 dark:text-white">Popular Items</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      The most popular items across all users.
                    </p>
                  </Tab.Panel>
                  <Tab.Panel className="space-y-4">
                    <h4 className="font-medium text-neutral-900 dark:text-white">Trending Items</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Items that are currently trending.
                    </p>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>

            <CodeSnippet
              title="Tab Navigation"
              code={`<Tab.Group>
  <Tab.List className="flex space-x-1 bg-neutral-100 p-1">
    <Tab
      className={({ selected }) =>
        \`w-full rounded-lg py-2.5 text-sm font-medium leading-5 \${
          selected
            ? 'bg-white text-blue-700 shadow'
            : 'text-neutral-700 hover:bg-white/[0.12]'
        }\`
      }
    >
      Recent
    </Tab>
  </Tab.List>
  <Tab.Panels className="p-6">
    <Tab.Panel>
      <h4 className="font-medium">Recent Items</h4>
      <p>Your most recently accessed items.</p>
    </Tab.Panel>
  </Tab.Panels>
</Tab.Group>`}
            />
          </div>

          {/* Advanced Interactive Navigation */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Advanced Interactive Navigation
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Feature-rich navigation with animations, dropdowns, theme switching, and mobile-first design.
              </p>
            </div>            <div className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden">
              {/* Live Advanced Navigation Demo */}
              <div className="relative min-h-[80px] overflow-visible">
                <AdvancedNavigation />
              </div>
              
              {/* Demo Content Area */}
              <div className="p-8">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    Interactive Advanced Navigation
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    This is a fully interactive navigation component with all the advanced features including 
                    dropdowns, animations, theme switching, and mobile responsiveness. Try clicking the dropdown arrows 
                    and mobile menu button to see it in action.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Features List */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6">
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                  Key Features
                </h4>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Animated dropdowns with nested navigation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Theme switching (Light/Dark/Colorful)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Multi-language support with flags
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Mobile-first responsive design
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    Smooth scroll animations and transitions
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    Keyboard navigation and ARIA support
                  </li>
                </ul>
              </div>

              {/* Mobile Preview */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6">
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                  Mobile Navigation
                </h4>
                <div className="bg-neutral-900 dark:bg-neutral-700 rounded-lg p-4 space-y-3">
                  {/* Mobile menu items */}
                  <div className="bg-white/10 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <HomeIcon className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-white font-medium">Home</span>
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                        <UserIcon className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-white font-medium">Portfolio</span>
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
                  </div>

                  <div className="bg-white/5 rounded-lg p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
                      <CogIcon className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-white font-medium">Design</span>
                  </div>
                </div>
              </div>
            </div>            <CodeSnippet
              title="Advanced Navigation Component"
              code={`'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon, 
  UserIcon, 
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon 
} from '@heroicons/react/24/outline';
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitcher from './LanguageSwitcher';

const AdvancedNavigation = () => {
  const { scrollY } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);

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

  return (
    <motion.header
      className="fixed w-full z-[60]"
      style={{ backgroundColor, backdropFilter: backdropBlur }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <Link href="/" className="text-2xl font-bold">
            Ali Al-Zuhairi
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Home Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-white/50 hover:bg-white/70 border border-gray-200/50 backdrop-blur-sm">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <HomeIcon className="w-3 h-3 text-blue-500" />
                  </div>
                  <span className="font-medium text-sm">Home</span>
                </Link>
                <button onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
              </div>
              
              <AnimatePresence>
                {homeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg shadow-lg rounded-lg"
                  >
                    {/* Dropdown content */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme & Language Controls */}
            <div className="flex items-center space-x-3">
              <LanguageSwitcher />
              <ThemeSwitch />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg"
          >
            {/* Mobile navigation content */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default AdvancedNavigation;`}
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
