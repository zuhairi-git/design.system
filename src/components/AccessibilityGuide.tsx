'use client';

import React from 'react';
import { 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const AccessibilityGuide = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Accessibility Guidelines
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          WCAG 2.1 compliance and Headless UI best practices for your design system
        </p>
      </header>

      {/* Key Principles */}
      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
          Core Accessibility Principles
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              1. Perceivable
            </h3>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
              <li>• Provide text alternatives for images</li>
              <li>• Ensure sufficient color contrast (4.5:1 minimum)</li>
              <li>• Make content adaptable to different presentations</li>
              <li>• Use semantic HTML elements</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              2. Operable
            </h3>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
              <li>• Make all functionality keyboard accessible</li>
              <li>• Provide users enough time to read content</li>
              <li>• Don&apos;t use content that causes seizures</li>
              <li>• Help users navigate and find content</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              3. Understandable
            </h3>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
              <li>• Make text readable and understandable</li>
              <li>• Make content appear and operate predictably</li>
              <li>• Help users avoid and correct mistakes</li>
              <li>• Use clear and simple language</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              4. Robust
            </h3>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
              <li>• Maximize compatibility with assistive technologies</li>
              <li>• Use valid, semantic markup</li>
              <li>• Ensure content works across different browsers</li>
              <li>• Future-proof your content</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Headless UI Benefits */}
      <section className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <InformationCircleIcon className="w-6 h-6 text-blue-500 mr-2" />
          Why Headless UI Enhances Accessibility
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                Built-in ARIA Support
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Automatic ARIA attributes, roles, and properties for proper screen reader support.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                Keyboard Navigation
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Complete keyboard support with arrow keys, Enter, Space, Escape, and more.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                Focus Management
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Proper focus trapping, restoration, and visible focus indicators.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                Screen Reader Tested
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Components are tested with NVDA, JAWS, VoiceOver, and other assistive technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Component-specific Guidelines */}
      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Component Accessibility Features
        </h2>
        
        <div className="space-y-6">
          {/* Accordion */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              Accordion Components
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Enhanced Features
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Proper <code>aria-expanded</code> states</li>
                  <li>• <code>aria-controls</code> relationships</li>
                  <li>• Keyboard navigation (Enter, Space)</li>
                  <li>• Focus management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Usage Guidelines
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Use descriptive headers</li>
                  <li>• Group related content logically</li>
                  <li>• Consider single vs. multiple expansion</li>
                  <li>• Provide clear visual feedback</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              Tabs & Pills
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Enhanced Features
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Arrow key navigation</li>
                  <li>• <code>tablist</code> and <code>tab</code> roles</li>
                  <li>• <code>aria-selected</code> states</li>
                  <li>• Automatic tabpanel associations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Usage Guidelines
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Use for related content sections</li>
                  <li>• Keep tab labels concise</li>
                  <li>• Ensure content is distinct</li>
                  <li>• Consider tab overflow on small screens</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Modals */}
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              Modal Dialogs
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Enhanced Features
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Focus trapping within modal</li>
                  <li>• Escape key to close</li>
                  <li>• <code>aria-modal</code> and <code>role=&quot;dialog&quot;</code></li>
                  <li>• Background scroll prevention</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Usage Guidelines
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Use sparingly for critical actions</li>
                  <li>• Provide clear close methods</li>
                  <li>• Include descriptive titles</li>
                  <li>• Consider mobile responsiveness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Guidelines */}
      <section className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <ExclamationTriangleIcon className="w-6 h-6 text-amber-500 mr-2" />
          Accessibility Testing Checklist
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
              Automated Testing
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Use axe-core browser extension</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Run Lighthouse accessibility audits</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Validate HTML markup</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Check color contrast ratios</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
              Manual Testing
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Navigate using only keyboard</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Test with screen readers (NVDA, VoiceOver)</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Verify focus indicators are visible</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Test at 200% zoom level</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Implementation Examples
        </h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              Focus Styles (Tailwind CSS)
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md text-sm overflow-x-auto">
              <code className="text-gray-800 dark:text-gray-200">
{`/* Focus ring styles */
focus:outline-none 
focus:ring-2 
focus:ring-blue-500 
focus:ring-offset-2
focus:ring-offset-white
dark:focus:ring-offset-gray-800

/* For Headless UI components */
ui-focus-visible:outline-none 
ui-focus-visible:ring-2 
ui-focus-visible:ring-blue-500`}
              </code>
            </pre>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              Screen Reader Only Text
            </h3>
            <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md text-sm overflow-x-auto">
              <code className="text-gray-800 dark:text-gray-200">
{`<span className="sr-only">
  Additional context for screen readers
</span>

/* CSS */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Additional Resources
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
              Documentation
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.w3.org/WAI/WCAG21/quickref/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  WCAG 2.1 Quick Reference
                </a>
              </li>
              <li>
                <a 
                  href="https://headlessui.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Headless UI Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://www.w3.org/WAI/ARIA/apg/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  ARIA Authoring Practices Guide
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
              Testing Tools
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.deque.com/axe/browser-extensions/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  axe DevTools Browser Extension
                </a>
              </li>
              <li>
                <a 
                  href="https://wave.webaim.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  WAVE Web Accessibility Evaluator
                </a>
              </li>
              <li>
                <a 
                  href="https://www.nvaccess.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  NVDA Screen Reader (Free)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityGuide;
