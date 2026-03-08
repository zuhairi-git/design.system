'use client';

import React from 'react';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const AccessibilityGuide = () => {
  return (
    <div className="space-y-8">
      {/* Key Principles */}
      <section className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl p-6">
        <h3 className="font-heading text-2xl font-semibold text-neutral-900 dark:text-white mb-4 flex items-center">
          <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
          Core POUR Principles
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-heading text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">
              1. Perceivable
            </h4>
            <ul className="space-y-1 font-body text-sm text-neutral-600 dark:text-neutral-400">
              <li>• Provide text alternatives for images</li>
              <li>• Ensure color contrast ≥ 4.5:1 (normal text)</li>
              <li>• Make content adaptable to different presentations</li>
              <li>• Use semantic HTML elements</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">
              2. Operable
            </h4>
            <ul className="space-y-1 font-body text-sm text-neutral-600 dark:text-neutral-400">
              <li>• Make all functionality keyboard accessible</li>
              <li>• Provide users enough time to read content</li>
              <li>• <strong>Target size ≥ 24×24px</strong> <span className="text-primary-600 dark:text-primary-400">(2.2)</span></li>
              <li>• <strong>Dragging alternatives required</strong> <span className="text-primary-600 dark:text-primary-400">(2.2)</span></li>
              <li>• <strong>Focus must not be obscured</strong> <span className="text-primary-600 dark:text-primary-400">(2.2)</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">
              3. Understandable
            </h4>
            <ul className="space-y-1 font-body text-sm text-neutral-600 dark:text-neutral-400">
              <li>• Make text readable and understandable</li>
              <li>• Make content appear and operate predictably</li>
              <li>• <strong>Don&apos;t require redundant entry</strong> <span className="text-primary-600 dark:text-primary-400">(2.2)</span></li>
              <li>• <strong>Accessible authentication</strong> <span className="text-primary-600 dark:text-primary-400">(2.2)</span></li>
              <li>• <strong>Consistent help placement</strong> <span className="text-primary-600 dark:text-primary-400">(2.2)</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">
              4. Robust
            </h4>
            <ul className="space-y-1 font-body text-sm text-neutral-600 dark:text-neutral-400">
              <li>• Maximize compatibility with assistive technologies</li>
              <li>• Use valid, semantic markup</li>
              <li>• Ensure content works across different browsers</li>
              <li>• Future-proof your content</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Headless UI Benefits */}
      <section className="bg-primary-50/50 dark:bg-primary-900/10 border border-primary-200/50 dark:border-primary-800/30 rounded-xl p-6">
        <h3 className="font-heading text-2xl font-semibold text-neutral-900 dark:text-white mb-4 flex items-center">
          <InformationCircleIcon className="w-6 h-6 text-primary-500 mr-2" />
          Headless UI &amp; Accessibility
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-heading font-medium text-neutral-800 dark:text-neutral-200">
                Built-in ARIA Support
              </h4>
              <p className="font-body text-sm text-neutral-600 dark:text-neutral-400">
                Automatic ARIA attributes, roles, and properties for proper screen reader support.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-medium text-neutral-800 dark:text-neutral-200">
                Keyboard Navigation
              </h4>
              <p className="font-body text-sm text-neutral-600 dark:text-neutral-400">
                Complete keyboard support with arrow keys, Enter, Space, Escape, and more.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-heading font-medium text-neutral-800 dark:text-neutral-200">
                Focus Management
              </h4>
              <p className="font-body text-sm text-neutral-600 dark:text-neutral-400">
                Proper focus trapping, restoration, and visible focus indicators meeting WCAG 2.4.13.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-medium text-neutral-800 dark:text-neutral-200">
                Screen Reader Tested
              </h4>
              <p className="font-body text-sm text-neutral-600 dark:text-neutral-400">
                Components are tested with NVDA, JAWS, VoiceOver, and other assistive technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Accessibility Features */}
      <section className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl p-6">
        <h3 className="font-heading text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
          Component Accessibility Features
        </h3>

        <div className="space-y-6">
          <div className="border-l-4 border-primary-500 pl-4">
            <h4 className="font-heading text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">
              Accordion Components
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-heading font-medium text-neutral-700 dark:text-neutral-300 mb-1 text-sm">
                  Enhanced Features
                </h5>
                <ul className="font-body text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                  <li>• Proper <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-1 rounded">aria-expanded</code> states</li>
                  <li>• <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-1 rounded">aria-controls</code> relationships</li>
                  <li>• Keyboard navigation (Enter, Space)</li>
                  <li>• Focus management</li>
                </ul>
              </div>
              <div>
                <h5 className="font-heading font-medium text-neutral-700 dark:text-neutral-300 mb-1 text-sm">
                  Usage Guidelines
                </h5>
                <ul className="font-body text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                  <li>• Use descriptive headers</li>
                  <li>• Group related content logically</li>
                  <li>• Consider single vs. multiple expansion</li>
                  <li>• Provide clear visual feedback</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-heading text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">
              Tabs &amp; Pills
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-heading font-medium text-neutral-700 dark:text-neutral-300 mb-1 text-sm">
                  Enhanced Features
                </h5>
                <ul className="font-body text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                  <li>• Arrow key navigation</li>
                  <li>• <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-1 rounded">tablist</code> and <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-1 rounded">tab</code> roles</li>
                  <li>• <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-1 rounded">aria-selected</code> states</li>
                  <li>• Automatic tabpanel associations</li>
                </ul>
              </div>
              <div>
                <h5 className="font-heading font-medium text-neutral-700 dark:text-neutral-300 mb-1 text-sm">
                  Usage Guidelines
                </h5>
                <ul className="font-body text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                  <li>• Use for related content sections</li>
                  <li>• Keep tab labels concise</li>
                  <li>• Ensure content is distinct</li>
                  <li>• Consider tab overflow on small screens</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-heading text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">
              Modal Dialogs
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-heading font-medium text-neutral-700 dark:text-neutral-300 mb-1 text-sm">
                  Enhanced Features
                </h5>
                <ul className="font-body text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                  <li>• Focus trapping within modal</li>
                  <li>• Escape key to close</li>
                  <li>• <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-1 rounded">aria-modal</code> and <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-1 rounded">role=&quot;dialog&quot;</code></li>
                  <li>• Background scroll prevention</li>
                </ul>
              </div>
              <div>
                <h5 className="font-heading font-medium text-neutral-700 dark:text-neutral-300 mb-1 text-sm">
                  Usage Guidelines
                </h5>
                <ul className="font-body text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
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

      {/* Testing Checklist */}
      <section className="bg-amber-50/50 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-800/30 rounded-xl p-6">
        <h3 className="font-heading text-2xl font-semibold text-neutral-900 dark:text-white mb-4 flex items-center">
          <ExclamationTriangleIcon className="w-6 h-6 text-amber-500 mr-2" />
          WCAG 2.2 Testing Checklist
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-heading text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
              Automated Testing
            </h4>
            <ul className="space-y-2 font-body text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Run axe-core or Lighthouse audits</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Validate HTML for semantic correctness</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Check color contrast ratios (≥ 4.5:1)</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Verify target sizes ≥ 24×24px (2.5.8)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
              Manual Testing
            </h4>
            <ul className="space-y-2 font-body text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Navigate using only keyboard</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Verify focus is never obscured (2.4.11)</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Test with screen readers (NVDA, VoiceOver)</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Test at 200% zoom and on mobile</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl p-6">
        <h3 className="font-heading text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
          Additional Resources
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-heading text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
              Documentation
            </h4>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a
                  href="https://www.w3.org/TR/WCAG22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  WCAG 2.2 Specification
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/WAI/WCAG22/quickref/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  WCAG 2.2 Quick Reference
                </a>
              </li>
              <li>
                <a
                  href="https://headlessui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Headless UI Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/WAI/ARIA/apg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  ARIA Authoring Practices Guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
              Testing Tools
            </h4>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a
                  href="https://www.deque.com/axe/browser-extensions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  axe DevTools Browser Extension
                </a>
              </li>
              <li>
                <a
                  href="https://wave.webaim.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  WAVE Web Accessibility Evaluator
                </a>
              </li>
              <li>
                <a
                  href="https://www.nvaccess.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
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
