'use client';

import React from 'react';
import { Disclosure, Tab, Transition } from '@headlessui/react';
import {
  ChevronRightIcon,
  HomeIcon,
  UserIcon,
  CogIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import CodeSnippet from '@/components/CodeSnippet';
import AnimatedSection from '@/components/AnimatedSection';
import AdvancedNavigation from '@/components/demo/AdvancedNavigation';
import Image from 'next/image';

export default function NavigationSection() {
  const breadcrumbNavigation = [
    { name: 'Home', href: '#', current: false },
    { name: 'Components', href: '#', current: false },
    { name: 'Navigation', href: '#', current: true },
  ];

  return (
    <AnimatedSection id="navigation" className="ds-section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="section-label text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20">
            <Bars3Icon className="w-4 h-4" /> Navigation Patterns
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 dark:text-white tracking-tight mb-4">
            Navigation Components
          </h2>
          <p className="font-body text-lg text-neutral-500 dark:text-neutral-400 max-w-3xl">
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
                Modern floating navigation bar with rounded profile, dropdowns, and theme controls.
              </p>
            </div>

            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-8 overflow-hidden">
              <div className="flex justify-center">
                <div className="relative z-10 flex items-center justify-between px-2 py-2 rounded-full bg-white dark:bg-neutral-800 shadow-lg border border-neutral-200 dark:border-neutral-700 max-w-4xl w-full">
                  {/* Brand / Profile */}
                  <div className="flex-shrink-0 ml-1">
                    <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white dark:ring-neutral-800 shadow-sm">
                      <Image
                        src="/img/profile/image.png"
                        alt="Ali Al-Zuahri"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Desktop Navigation */}
                  <nav className="hidden md:flex items-center space-x-1 mx-4">
                    <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-neutral-900 dark:text-white rounded-full bg-neutral-100 dark:bg-neutral-700">
                      <span>Home</span>
                      <ChevronRightIcon className="w-3 h-3 rotate-90" />
                    </button>

                    <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                      <span>Portfolio</span>
                      <ChevronRightIcon className="w-3 h-3 rotate-90" />
                    </button>

                    <a href="#" className="px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                      Blog
                    </a>

                    <a href="#" className="px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                      Audio Library
                    </a>

                    <a href="#" className="px-3 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                      Prompts
                    </a>
                  </nav>

                  {/* Right Actions */}
                  <div className="flex items-center gap-2 pl-2 border-l border-neutral-200 dark:border-neutral-700">
                    <span className="px-2 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-700 rounded text-neutral-600 dark:text-neutral-300">
                      EN
                    </span>
                    <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
                      <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CodeSnippet
              title="Floating Header Navigation"
              code={`<div className="flex items-center justify-between px-2 py-2 rounded-full bg-white dark:bg-neutral-800 shadow-lg border border-neutral-200 dark:border-neutral-700 w-full max-w-4xl">
  {/* Profle Image Brand */}
  <div className="flex-shrink-0 ml-1">
    <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white dark:ring-neutral-800 shadow-sm">
      <img src="/img/profile/image.png" alt="Profile" className="w-full h-full object-cover" />
    </div>
  </div>

  {/* Navigation Links */}
  <nav className="hidden md:flex items-center space-x-1 mx-4">
    <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-neutral-900 dark:text-white rounded-full bg-neutral-100 dark:bg-neutral-700">
      <span>Home</span>
      <ChevronDownIcon className="w-3 h-3" />
    </button>
    <a href="#" className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900">
      Portfolio
    </a>
    <a href="#" className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900">
      Blog
    </a>
  </nav>

  {/* Right Controls */}
  <div className="flex items-center gap-2 pl-2 border-l border-neutral-200">
    <LanguageSwitcher />
    <ThemeToggle />
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
                                className={`h-4 w-4 transition-transform ${open ? 'rotate-90' : ''
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
                          className={`text-sm font-medium transition-colors ${item.current
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
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all ${selected
                        ? 'bg-white dark:bg-neutral-800 text-blue-700 dark:text-blue-400 shadow'
                        : 'text-neutral-700 dark:text-neutral-300 hover:bg-white/[0.12] hover:text-blue-600'
                      }`
                    }
                  >
                    Recent
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all ${selected
                        ? 'bg-white dark:bg-neutral-800 text-blue-700 dark:text-blue-400 shadow'
                        : 'text-neutral-700 dark:text-neutral-300 hover:bg-white/[0.12] hover:text-blue-600'
                      }`
                    }
                  >
                    Popular
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all ${selected
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
              </div>            </div>

          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
