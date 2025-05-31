"use client";

import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import { useState } from "react";

// Icons (using Heroicons for consistency)
import {
  RectangleGroupIcon,
  DevicePhoneMobileIcon,
  Squares2X2Icon,
  QueueListIcon,
  ViewColumnsIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";

interface LayoutPattern {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  code: string;
  preview: React.ReactNode;
  category: "foundation" | "responsive" | "advanced";
  useCase: string;
}

export default function LayoutsSection() {
  const [activePattern, setActivePattern] = useState<string>("header-content-footer");

  const layoutPatterns: LayoutPattern[] = [
    {
      id: "header-content-footer",
      name: "Header-Content-Footer",
      description: "Classic three-section layout with header, main content area, and footer",
      icon: QueueListIcon,
      category: "foundation",
      useCase: "Most web applications, marketing sites, documentation",
      code: `<div className="min-h-screen flex flex-col">
  {/* Header */}
  <header className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Your App</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600">Home</a>
          <a href="#" className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600">About</a>
          <a href="#" className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600">Contact</a>
        </nav>
      </div>
    </div>
  </header>

  {/* Main Content */}
  <main className="flex-1 bg-neutral-50 dark:bg-neutral-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
        Main Content
      </h1>
      <p className="text-neutral-700 dark:text-neutral-300">
        Your page content goes here...
      </p>
    </div>
  </main>

  {/* Footer */}
  <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="text-center text-neutral-600 dark:text-neutral-400">
        © 2024 Your Company. All rights reserved.
      </div>
    </div>
  </footer>
</div>`,
      preview: (
        <div className="w-full h-48 bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
          <div className="h-8 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 flex items-center px-3">
            <div className="w-12 h-3 bg-primary-500 rounded"></div>
            <div className="ml-auto flex space-x-2">
              <div className="w-8 h-2 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
              <div className="w-8 h-2 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
              <div className="w-8 h-2 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
            </div>
          </div>
          <div className="flex-1 h-32 bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-800 p-3">
            <div className="w-24 h-4 bg-neutral-800 dark:bg-neutral-200 rounded mb-2"></div>
            <div className="w-full h-2 bg-neutral-400 dark:bg-neutral-500 rounded mb-1"></div>
            <div className="w-3/4 h-2 bg-neutral-400 dark:bg-neutral-500 rounded"></div>
          </div>
          <div className="h-8 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-center">
            <div className="w-32 h-2 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
          </div>
        </div>
      )
    },
    {
      id: "sidebar-content",
      name: "Sidebar-Content",
      description: "Two-column layout with fixed sidebar navigation and flexible content area",
      icon: ViewColumnsIcon,
      category: "foundation",
      useCase: "Admin dashboards, documentation sites, content management",
      code: `<div className="flex h-screen bg-neutral-50 dark:bg-neutral-950">
  {/* Sidebar */}
  <aside className="w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 flex-shrink-0">
    <div className="p-6">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
        Navigation
      </h2>
      <nav className="space-y-2">
        <a href="#" className="block px-3 py-2 rounded-md text-primary-600 bg-primary-50 dark:bg-primary-900/20">
          Dashboard
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800">
          Projects
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800">
          Settings
        </a>
      </nav>
    </div>
  </aside>

  {/* Main Content */}
  <main className="flex-1 overflow-auto">
    <header className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-6 py-4">
      <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
        Dashboard
      </h1>
    </header>
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
            Analytics
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            View your latest metrics
          </p>
        </div>
      </div>
    </div>
  </main>
</div>`,
      preview: (
        <div className="w-full h-48 bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 flex">
          <div className="w-16 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-700 p-2">
            <div className="w-8 h-3 bg-neutral-800 dark:bg-neutral-200 rounded mb-2"></div>
            <div className="space-y-1">
              <div className="w-10 h-2 bg-primary-500 rounded"></div>
              <div className="w-8 h-2 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
              <div className="w-9 h-2 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="h-8 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 flex items-center px-3">
              <div className="w-16 h-3 bg-neutral-800 dark:bg-neutral-200 rounded"></div>
            </div>
            <div className="flex-1 p-3 bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-800">
              <div className="grid grid-cols-2 gap-2 h-full">
                <div className="bg-white dark:bg-neutral-600 rounded p-2">
                  <div className="w-8 h-2 bg-neutral-400 dark:bg-neutral-800 rounded mb-1"></div>
                  <div className="w-12 h-1 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                </div>
                <div className="bg-white dark:bg-neutral-600 rounded p-2">
                  <div className="w-8 h-2 bg-neutral-400 dark:bg-neutral-800 rounded mb-1"></div>
                  <div className="w-12 h-1 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "card-grid",
      name: "Card Grid Layout",
      description: "Responsive grid of cards that adapts to different screen sizes",
      icon: Squares2X2Icon,
      category: "responsive",
      useCase: "Product listings, blog posts, portfolios, galleries",
      code: `<div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
        Product Catalog
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        Browse our collection of products
      </p>
    </header>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-md transition-shadow">
        <div className="aspect-square bg-neutral-200 dark:bg-neutral-700"></div>
        <div className="p-4">
          <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
            Product Name
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
            Product description goes here
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-neutral-900 dark:text-white">
              $99
            </span>
            <button className="px-3 py-1.5 bg-primary-600 text-white text-sm rounded-md hover:bg-primary-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      
      {/* Additional cards... */}
    </div>
  </div>
</div>`,
      preview: (
        <div className="w-full h-48 bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 p-3">
          <div className="mb-3">
            <div className="w-24 h-3 bg-neutral-800 dark:bg-neutral-200 rounded mb-1"></div>
            <div className="w-32 h-2 bg-neutral-400 dark:bg-neutral-500 rounded"></div>
          </div>
          <div className="grid grid-cols-3 gap-2 h-32">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white dark:bg-neutral-600 rounded overflow-hidden">
                <div className="h-12 bg-neutral-300 dark:bg-neutral-700"></div>
                <div className="p-2">
                  <div className="w-full h-1 bg-neutral-400 dark:bg-neutral-800 rounded mb-1"></div>
                  <div className="w-3/4 h-1 bg-neutral-300 dark:bg-neutral-700 rounded mb-1"></div>
                  <div className="flex justify-between items-center">
                    <div className="w-6 h-1 bg-neutral-500 dark:bg-neutral-900 rounded"></div>
                    <div className="w-4 h-3 bg-primary-500 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "hero-features",
      name: "Hero-Features Layout",
      description: "Landing page layout with prominent hero section followed by feature grid",
      icon: ViewfinderCircleIcon,
      category: "responsive",
      useCase: "Marketing sites, product pages, landing pages",
      code: `<div className="min-h-screen bg-white dark:bg-neutral-900">
  {/* Hero Section */}
  <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
          Build amazing products with our comprehensive design system and component library
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-neutral-50 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
          Why Choose Us
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Discover the features that make our platform the best choice for your next project
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
            Fast Performance
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Lightning-fast performance with optimized components
          </p>
        </div>
      </div>
    </div>
  </section>
</div>`,
      preview: (
        <div className="w-full h-48 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
          <div className="h-24 bg-gradient-to-r from-primary-600 to-primary-800 p-3 flex flex-col justify-center">
            <div className="w-32 h-4 bg-white rounded mx-auto mb-2"></div>
            <div className="w-40 h-2 bg-primary-200 rounded mx-auto mb-2"></div>
            <div className="flex gap-2 justify-center">
              <div className="w-12 h-3 bg-white rounded"></div>
              <div className="w-12 h-3 bg-transparent border border-white rounded"></div>
            </div>
          </div>
          <div className="h-24 bg-neutral-50 dark:bg-neutral-700 p-3">
            <div className="w-20 h-3 bg-neutral-800 dark:bg-neutral-200 rounded mx-auto mb-2"></div>
            <div className="w-28 h-2 bg-neutral-400 dark:bg-neutral-500 rounded mx-auto mb-2"></div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-4 h-4 bg-primary-200 dark:bg-primary-800 rounded mx-auto mb-1"></div>
                  <div className="w-8 h-1 bg-neutral-400 dark:bg-neutral-500 rounded mx-auto mb-1"></div>
                  <div className="w-full h-1 bg-neutral-300 dark:bg-neutral-600 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "masonry",
      name: "Masonry Layout",
      description: "Pinterest-style masonry layout for content of varying heights",
      icon: RectangleGroupIcon,
      category: "advanced",
      useCase: "Image galleries, blog grids, portfolio displays",
      code: `{/* CSS-only Masonry Layout */}
<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 p-6">
  <div className="break-inside-avoid bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden mb-6">
    <img 
      src="/image1.jpg" 
      alt="Example" 
      className="w-full h-auto"
    />
    <div className="p-4">
      <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
        Content Title
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        This is a short description that might be longer in some cards.
      </p>
    </div>
  </div>
  
  <div className="break-inside-avoid bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden mb-6">
    <img 
      src="/image2.jpg" 
      alt="Example" 
      className="w-full h-auto"
    />
    <div className="p-4">
      <h3 className="font-medium text-neutral-900 dark:text-white mb-2">
        Another Title
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        This content might be significantly longer, describing more details about the subject matter and providing additional context that would make this card taller than others.
      </p>
    </div>
  </div>
  
  {/* More cards... */}
</div>`,
      preview: (
        <div className="w-full h-48 bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 p-3">
          <div className="grid grid-cols-3 gap-2 h-full">
            <div className="space-y-2">
              <div className="bg-white dark:bg-neutral-600 rounded p-2 h-16">
                <div className="w-full h-6 bg-neutral-300 dark:bg-neutral-700 rounded mb-1"></div>
                <div className="w-full h-1 bg-neutral-400 dark:bg-neutral-800 rounded mb-1"></div>
                <div className="w-3/4 h-1 bg-neutral-400 dark:bg-neutral-800 rounded"></div>
              </div>
              <div className="bg-white dark:bg-neutral-600 rounded p-2 h-24">
                <div className="w-full h-8 bg-neutral-300 dark:bg-neutral-700 rounded mb-1"></div>
                <div className="w-full h-1 bg-neutral-400 dark:bg-neutral-800 rounded mb-1"></div>
                <div className="w-full h-1 bg-neutral-400 dark:bg-neutral-800 rounded mb-1"></div>
                <div className="w-2/3 h-1 bg-neutral-400 dark:bg-neutral-800 rounded"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white dark:bg-neutral-600 rounded p-2 h-20">
                <div className="w-full h-8 bg-neutral-300 dark:bg-neutral-700 rounded mb-1"></div>
                <div className="w-full h-1 bg-neutral-400 dark:bg-neutral-800 rounded mb-1"></div>
                <div className="w-full h-1 bg-neutral-400 dark:bg-neutral-800 rounded mb-1"></div>
                <div className="w-1/2 h-1 bg-neutral-400 dark:bg-neutral-800 rounded"></div>
              </div>
              <div className="bg-white dark:bg-neutral-600 rounded p-2 h-12">
                <div className="w-full h-4 bg-neutral-300 dark:bg-neutral-700 rounded mb-1"></div>
                <div className="w-3/4 h-1 bg-neutral-400 dark:bg-neutral-800 rounded"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white dark:bg-neutral-600 rounded p-2 h-14">
                <div className="w-full h-6 bg-neutral-300 dark:bg-neutral-700 rounded mb-1"></div>
                <div className="w-full h-1 bg-neutral-400 dark:bg-neutral-800 rounded mb-1"></div>
                <div className="w-4/5 h-1 bg-neutral-400 dark:bg-neutral-800 rounded"></div>
              </div>
              <div className="bg-white dark:bg-neutral-600 rounded p-2 h-28">
                <div className="w-full h-10 bg-neutral-300 dark:bg-neutral-700 rounded mb-1"></div>
                <div className="w-full h-1 bg-neutral-400 dark:bg-neutral-800 rounded mb-1"></div>
                <div className="w-full h-1 bg-neutral-400 dark:bg-neutral-800 rounded mb-1"></div>
                <div className="w-full h-1 bg-neutral-400 dark:bg-neutral-800 rounded mb-1"></div>
                <div className="w-2/3 h-1 bg-neutral-400 dark:bg-neutral-800 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "split-screen",
      name: "Split Screen Layout",
      description: "Two-panel layout perfect for comparisons or detailed content",
      icon: ViewColumnsIcon,
      category: "advanced",
      useCase: "Comparison pages, before/after content, dual content display",
      code: `<div className="min-h-screen flex flex-col lg:flex-row">
  {/* Left Panel */}
  <div className="flex-1 bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-900 text-white p-8 lg:p-12 flex items-center">
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6">
        Transform Your Workflow
      </h2>
      <p className="text-primary-100 text-lg mb-8 leading-relaxed">
        Experience a new level of productivity with our innovative platform. 
        Streamline your processes and achieve more with less effort.
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center">
          <svg className="w-5 h-5 mr-3 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Automated workflows
        </li>
        <li className="flex items-center">
          <svg className="w-5 h-5 mr-3 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Real-time collaboration
        </li>
        <li className="flex items-center">
          <svg className="w-5 h-5 mr-3 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Advanced analytics
        </li>
      </ul>
      <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-neutral-50 transition-colors">
        Get Started Today
      </button>
    </div>
  </div>

  {/* Right Panel */}
  <div className="flex-1 bg-white dark:bg-neutral-900 p-8 lg:p-12 flex items-center">
    <div className="max-w-lg mx-auto w-full">
      <div className="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-xl border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
          Start Your Free Trial
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Email address
            </label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Company name
            </label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
              placeholder="Your Company"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-primary-600 text-white py-3 rounded-md font-medium hover:bg-primary-700 transition-colors"
          >
            Start Free Trial
          </button>
        </form>
      </div>
    </div>
  </div>
</div>`,
      preview: (
        <div className="w-full h-48 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 flex">
          <div className="flex-1 bg-gradient-to-br from-primary-600 to-primary-800 p-3 flex flex-col justify-center">
            <div className="w-24 h-4 bg-white rounded mb-2"></div>
            <div className="w-full h-2 bg-primary-200 rounded mb-2"></div>
            <div className="w-4/5 h-2 bg-primary-200 rounded mb-3"></div>
            <div className="space-y-1">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-200 rounded-full mr-2"></div>
                <div className="w-12 h-1 bg-primary-200 rounded"></div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-200 rounded-full mr-2"></div>
                <div className="w-16 h-1 bg-primary-200 rounded"></div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-200 rounded-full mr-2"></div>
                <div className="w-14 h-1 bg-primary-200 rounded"></div>
              </div>
            </div>
            <div className="w-16 h-3 bg-white rounded mt-2"></div>
          </div>
          <div className="flex-1 bg-neutral-50 dark:bg-neutral-700 p-3 flex flex-col justify-center">
            <div className="w-20 h-3 bg-neutral-800 dark:bg-neutral-200 rounded mb-3"></div>
            <div className="space-y-2">
              <div>
                <div className="w-12 h-1 bg-neutral-400 dark:bg-neutral-500 rounded mb-1"></div>
                <div className="w-full h-2 bg-white dark:bg-neutral-600 border border-neutral-300 dark:border-neutral-500 rounded"></div>
              </div>
              <div>
                <div className="w-16 h-1 bg-neutral-400 dark:bg-neutral-500 rounded mb-1"></div>
                <div className="w-full h-2 bg-white dark:bg-neutral-600 border border-neutral-300 dark:border-neutral-500 rounded"></div>
              </div>
              <div className="w-full h-3 bg-primary-600 rounded"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const categories = [
    { id: "foundation", label: "Foundation", description: "Essential layout patterns" },
    { id: "responsive", label: "Responsive", description: "Adaptive layouts" },
    { id: "advanced", label: "Advanced", description: "Complex patterns" }
  ];

  const filteredPatterns = layoutPatterns.filter(pattern => 
    activePattern === "all" || pattern.category === activePattern || pattern.id === activePattern
  );

  return (
    <AnimatedSection 
      id="layouts" 
      className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-white to-neutral-50/50 dark:from-neutral-900 dark:to-neutral-950/80" 
      animation="slide-up"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 mb-5 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm backdrop-blur-sm">
            <RectangleGroupIcon className="w-4 h-4 mr-2" />
            Layout Patterns
          </div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-950 dark:text-white mb-6 tracking-tight">
            Common{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600">
              Layout
            </span>{" "}
            Patterns
          </h2>
          
          <p className="font-body text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl leading-relaxed mb-8">
            Proven layout patterns that provide structure and visual hierarchy to your applications. 
            These patterns serve as starting points for creating consistent, user-friendly interfaces.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActivePattern("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activePattern === "all"
                  ? "bg-primary-600 text-white shadow-md"
                  : "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700"
              }`}
            >
              All Patterns
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActivePattern(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activePattern === category.id
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Layout Patterns Grid */}
        <div className="space-y-12">
          {filteredPatterns.map((pattern) => (
            <div key={pattern.id} className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Pattern Info */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                      <pattern.icon className="w-6 h-6 text-primary-700 dark:text-primary-300" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">
                        {pattern.name}
                      </h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        pattern.category === 'foundation' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          : pattern.category === 'responsive'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                      }`}>
                        {pattern.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                    {pattern.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Best Used For:</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      {pattern.useCase}
                    </p>
                  </div>

                  {/* Interactive Preview */}
                  <div className="mb-6">
                    <h4 className="font-medium text-neutral-900 dark:text-white mb-3">Preview:</h4>
                    <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
                      {pattern.preview}
                    </div>
                  </div>
                </div>

                {/* Code Example */}
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-white mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Implementation
                  </h4>
                  <CodeSnippet 
                    code={pattern.code} 
                    language="jsx"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Layout Best Practices */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-white dark:from-primary-900/20 dark:to-neutral-800/50 p-8 rounded-xl border border-primary-200/50 dark:border-primary-800/30">
          <h3 className="font-heading font-semibold text-2xl text-neutral-950 dark:text-white mb-6">
            Layout Design Principles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/80 dark:bg-neutral-900/80 p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Visual Hierarchy</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Use layout to guide users through content with clear importance levels and reading flow.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-neutral-900/80 p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-4">
                <DevicePhoneMobileIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Mobile First</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Start with mobile layouts and progressively enhance for larger screens.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-neutral-900/80 p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Consistent Spacing</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Use consistent spacing patterns to create rhythm and improve readability.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-neutral-900/80 p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Content First</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Design layouts around your content needs, not arbitrary grid constraints.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-neutral-900/80 p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Touch Targets</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Ensure interactive elements are appropriately sized for touch interaction.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-neutral-900/80 p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Performance</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Consider loading times and optimize layouts for fast rendering and interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
