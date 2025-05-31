'use client';

import React from 'react';
import AccessibilityGuide from '../components/AccessibilityGuide';
import Header from '../components/Header';
import CodeSnippet from '../components/CodeSnippet';
import { useAccessibility } from '../utils/accessibility';

export default function AccessibilityUtilitiesPage() {
  const { announceToScreenReader, prefersReducedMotion } = useAccessibility();  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Accessibility Utilities
              </h1>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                A comprehensive set of tools and patterns for building accessible components following WCAG 2.1 standards and Headless UI best practices.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Integrated Headless UI Patterns
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our design system components utilize Headless UI patterns for unstyled, accessible UI components that work with any styling solution. This integration ensures all interactive elements meet WCAG accessibility standards.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Key Benefits</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Full keyboard navigation support with standardized patterns</li>
                  <li>Proper ARIA attributes automatically managed</li>
                  <li>Screen reader announcements for dynamic content</li>
                  <li>Focus management for modals and popups</li>
                  <li>Support for reduced motion preferences</li>
                </ul>
              </div>

              <div className="mt-6">
                <CodeSnippet 
                  code={`// Example: Using Headless UI Tab component with our accessibility patterns
import { Tab } from '@headlessui/react';
import { useUniqueId } from '../utils/headlessPatterns';

function MyTabs() {
  // Generate unique IDs for ARIA relationships
  const tabsId = useUniqueId('tabs');
  
  return (
    <Tab.Group>
      <Tab.List>
        <Tab id={\`\${tabsId}-tab-1\`} aria-controls={\`\${tabsId}-panel-1\`}>
          Tab 1
        </Tab>
        <Tab id={\`\${tabsId}-tab-2\`} aria-controls={\`\${tabsId}-panel-2\`}>
          Tab 2
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel 
          id={\`\${tabsId}-panel-1\`} 
          aria-labelledby={\`\${tabsId}-tab-1\`}
          tabIndex={0}
        >
          Content 1
        </Tab.Panel>
        <Tab.Panel 
          id={\`\${tabsId}-panel-2\`} 
          aria-labelledby={\`\${tabsId}-tab-2\`}
          tabIndex={0}
        >
          Content 2
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}`} 
                  language="tsx"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Focus Management
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Tools for managing keyboard focus according to WAI-ARIA authoring practices.
                </p>
                <CodeSnippet 
                  code={`// Trap focus in a modal
const cleanup = focusManager.trapFocus(modalElement);

// Restore focus when modal closes
cleanup(); // Restore focus to previous element`} 
                  language="tsx"
                />
              </div>
              
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Keyboard Navigation
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Standardized keyboard interactions for menus, lists, and other components.
                </p>
                <CodeSnippet 
                  code={`// Create arrow key navigation for a menu
const cleanup = keyboardNavigation.createMenuNavigation(
  menuElement,
  {
    onSelect: (item) => item.click()
  }
);`} 
                  language="tsx"
                />
              </div>
              
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Screen Reader Announcements
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Announce dynamic content changes to assistive technologies.
                </p>
                <div className="mb-4">
                  <button 
                    onClick={() => announceToScreenReader('This message was announced to screen readers', false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                  >
                    Announce Polite Message
                  </button>
                </div>
                <CodeSnippet 
                  code={`// Announce a message to screen readers
announceToScreenReader(
  'Item successfully added to cart', 
  false // Use 'false' for polite, 'true' for assertive
);`}
                  language="tsx" 
                />
              </div>
              
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Responsive Accessibility
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Adapt to user preferences like reduced motion and high contrast.
                </p>
                <div className="mb-4 text-gray-700 dark:text-gray-300">
                  Current user prefers reduced motion: <strong>{prefersReducedMotion ? 'Yes' : 'No'}</strong>
                </div>
                <CodeSnippet 
                  code={`// Use reduced motion preference
const prefersReducedMotion = responsive.useReducedMotion();

// Adjust animation duration
const duration = responsive.getAnimationDuration(300); // 0 if reduced motion is preferred`} 
                  language="tsx"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                ARIA Pattern Examples
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Pre-defined ARIA patterns for common components following WAI-ARIA 1.2 practices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="border dark:border-gray-700 rounded-md p-4">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Modal Dialog</h3>
                  <CodeSnippet 
                    code={`<div 
  role="dialog" 
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Modal Title</h2>
  <p id="modal-description">Modal content description.</p>
</div>`} 
                    language="html"
                  />
                </div>
                
                <div className="border dark:border-gray-700 rounded-md p-4">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Alert</h3>
                  <CodeSnippet 
                    code={`<div 
  role="alert" 
  aria-live="assertive"
>
  Error: Form submission failed.
</div>

<div 
  role="status" 
  aria-live="polite"
>
  Success: Your changes were saved.
</div>`} 
                    language="html"
                  />
                </div>
                
                <div className="border dark:border-gray-700 rounded-md p-4">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Tab Interface</h3>
                  <CodeSnippet 
                    code={`const tabProps = patterns.navigation.tabs(0);

<div {...tabProps}>
  <button {...tabProps.tab(0)}>Tab 1</button>
  <button {...tabProps.tab(1)}>Tab 2</button>
  
  <div {...tabProps.panel(0)}>Panel 1 content</div>
  <div {...tabProps.panel(1)}>Panel 2 content</div>
</div>`} 
                    language="tsx"
                  />
                </div>
                
                <div className="border dark:border-gray-700 rounded-md p-4">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Disclosure Button</h3>
                  <CodeSnippet 
                    code={`const disclosureProps = patterns.button.disclosure(false);

<button {...disclosureProps}>
  Show Details
</button>
<div id="disclosure-panel">
  Hidden content revealed on button click
</div>`} 
                    language="tsx"
                  />
                </div>
              </div>
            </div>
              <AccessibilityGuide />
        </div>
      </main>
    </div>
  );
}
