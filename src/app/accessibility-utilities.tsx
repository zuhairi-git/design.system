'use client';

import React from 'react';
import AccessibilityGuide from '../components/AccessibilityGuide';
import CodeSnippet from '../components/CodeSnippet';
import AnimatedSection from '../components/AnimatedSection';
import { useAccessibility } from '../utils/accessibility';
import {
  ShieldCheckIcon,
  CursorArrowRaysIcon,
  EyeIcon,
  HandRaisedIcon,
  KeyIcon,
  ArrowPathIcon,
  LockClosedIcon,
  FingerPrintIcon,
  QuestionMarkCircleIcon,
  ArrowsPointingOutIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const wcag22Criteria = [
  {
    id: '2.4.11',
    title: 'Focus Not Obscured (Minimum)',
    level: 'AA',
    icon: <EyeIcon className="w-5 h-5" />,
    description: 'When a UI component receives keyboard focus, it must not be entirely hidden by author-created content.',
    example: `// Ensure focused elements are not covered by sticky headers/footers
.sticky-header {
  /* Account for focus scrolling */
  scroll-padding-top: 80px;
}

/* Use scroll-margin on focusable elements */
button:focus, a:focus, input:focus {
  scroll-margin-top: 80px;
  scroll-margin-bottom: 80px;
}`,
    lang: 'css',
  },
  {
    id: '2.4.13',
    title: 'Focus Appearance',
    level: 'AAA',
    icon: <CursorArrowRaysIcon className="w-5 h-5" />,
    description: 'Focus indicators must have sufficient size (≥ 2px outline) and contrast ratio (≥ 3:1) against the unfocused state.',
    example: `/* WCAG 2.2 compliant focus indicators */
:focus-visible {
  outline: 2px solid var(--primary-600);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Enhanced for dark mode */
.dark :focus-visible {
  outline-color: var(--primary-400);
}`,
    lang: 'css',
  },
  {
    id: '2.5.7',
    title: 'Dragging Movements',
    level: 'AA',
    icon: <HandRaisedIcon className="w-5 h-5" />,
    description: 'Any action achievable by dragging must have a single-pointer alternative that does not require dragging.',
    example: `// Provide click alternatives for drag operations
function SortableList({ items, onReorder }) {
  return (
    <ul role="listbox" aria-label="Sortable items">
      {items.map((item, i) => (
        <li key={item.id} role="option"
            draggable // Drag support
        >
          {item.label}
          {/* Single-pointer alternatives */}
          <button aria-label={\`Move \${item.label} up\`}
                  onClick={() => onReorder(i, i - 1)}>
            ↑
          </button>
          <button aria-label={\`Move \${item.label} down\`}
                  onClick={() => onReorder(i, i + 1)}>
            ↓
          </button>
        </li>
      ))}
    </ul>
  );
}`,
    lang: 'tsx',
  },
  {
    id: '2.5.8',
    title: 'Target Size (Minimum)',
    level: 'AA',
    icon: <ArrowsPointingOutIcon className="w-5 h-5" />,
    description: 'Interactive targets must be at least 24×24 CSS pixels, unless an equivalent larger target exists or the target is inline.',
    example: `/* Minimum 24×24px target size */
button, a, input[type="checkbox"],
input[type="radio"], select {
  min-width: 24px;
  min-height: 24px;
}

/* Recommended: 44×44px for optimal touch */
.btn {
  min-height: 44px;
  padding: 8px 16px;
}

/* Ensure spacing between small targets */
.icon-button {
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}`,
    lang: 'css',
  },
  {
    id: '3.2.6',
    title: 'Consistent Help',
    level: 'A',
    icon: <QuestionMarkCircleIcon className="w-5 h-5" />,
    description: 'Help mechanisms (contact info, chat, FAQ links) must appear in the same relative order across pages.',
    example: `// Consistent help placement across pages
function PageLayout({ children }) {
  return (
    <div>
      <Header /> {/* Always contains nav */}
      <main>{children}</main>
      <Footer>
        {/* Help always in same order */}
        <HelpLink href="/faq">FAQ</HelpLink>
        <HelpLink href="/contact">
          Contact Support
        </HelpLink>
        <LiveChatWidget />
      </Footer>
    </div>
  );
}`,
    lang: 'tsx',
  },
  {
    id: '3.3.7',
    title: 'Redundant Entry',
    level: 'A',
    icon: <ArrowPathIcon className="w-5 h-5" />,
    description: 'Information previously entered by the user must be auto-populated or available to select — never require re-entry.',
    example: `// Auto-populate from previous steps
function CheckoutForm({ userProfile }) {
  return (
    <form>
      <fieldset>
        <legend>Shipping Address</legend>
        {/* Pre-fill from profile */}
        <input defaultValue={userProfile.name}
               aria-label="Full name" />
        <input defaultValue={userProfile.address}
               aria-label="Address" />
      </fieldset>
      <fieldset>
        <legend>Billing Address</legend>
        {/* Option to reuse data */}
        <label>
          <input type="checkbox" />
          Same as shipping address
        </label>
      </fieldset>
    </form>
  );
}`,
    lang: 'tsx',
  },
  {
    id: '3.3.8',
    title: 'Accessible Authentication (Minimum)',
    level: 'AA',
    icon: <LockClosedIcon className="w-5 h-5" />,
    description: 'Authentication must not require cognitive function tests (e.g., memorizing passwords). Allow paste, password managers, and WebAuthn.',
    example: `// Allow paste and password managers
<input
  type="password"
  autoComplete="current-password"
  aria-label="Password"
  /* Never block paste! */
/>

{/* Offer passwordless alternatives */}
<button type="button">
  Sign in with passkey
</button>
<button type="button">
  Sign in with email link
</button>`,
    lang: 'tsx',
  },
  {
    id: '3.3.9',
    title: 'Accessible Authentication (Enhanced)',
    level: 'AAA',
    icon: <FingerPrintIcon className="w-5 h-5" />,
    description: 'No object recognition or personal-content recognition tests at any step in authentication. Prefer WebAuthn / passkeys.',
    example: `// WebAuthn / passkey authentication
async function authenticateWithPasskey() {
  const credential = await navigator
    .credentials.get({
      publicKey: {
        challenge: serverChallenge,
        allowCredentials: [{
          id: credentialId,
          type: 'public-key',
        }],
        userVerification: 'preferred',
      },
    });

  // Send credential to server
  await verifyOnServer(credential);
}`,
    lang: 'tsx',
  },
];

function LevelBadge({ level }: { level: string }) {
  const colors = {
    A: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border-green-200 dark:border-green-800',
    AA: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    AAA: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  };
  return (
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${colors[level as keyof typeof colors] || colors.AA}`}>
      {level}
    </span>
  );
}

export default function AccessibilityUtilitiesPage() {
  const { announceToScreenReader, prefersReducedMotion } = useAccessibility();

  return (
    <AnimatedSection
      id="accessibility-utilities"
      className="ds-section"
      animation="fade-in"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="section-label text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20">
            <ShieldCheckIcon className="w-4 h-4" /> Inclusive Design
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 dark:text-white tracking-tight mb-4">
            Accessibility Utilities
          </h2>
          <p className="font-body text-lg text-neutral-500 dark:text-neutral-400 max-w-3xl">
            A comprehensive set of tools and patterns for building accessible components following <strong className="text-neutral-700 dark:text-neutral-200">WCAG 2.2</strong> standards and Headless UI best practices.
          </p>
        </div>

        <div className="space-y-12">

          {/* ── WCAG 2.2 New Criteria ── */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
              What&apos;s New in WCAG 2.2
            </h3>
            <p className="font-body text-neutral-500 dark:text-neutral-400 mb-6 max-w-3xl">
              WCAG 2.2 introduces 9 new success criteria focused on improved support for users with cognitive disabilities, mobile users, and people with low vision.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {wcag22Criteria.map((criterion) => (
                <div
                  key={criterion.id}
                  className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex-shrink-0">
                          {criterion.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">{criterion.id}</span>
                            <LevelBadge level={criterion.level} />
                          </div>
                          <h4 className="font-heading font-semibold text-neutral-900 dark:text-white text-sm mt-0.5">
                            {criterion.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                    <p className="font-body text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                      {criterion.description}
                    </p>
                    <CodeSnippet code={criterion.example} language={criterion.lang} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Developer Utilities ── */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
              Developer Utilities
            </h3>
            <p className="font-body text-neutral-500 dark:text-neutral-400 mb-6 max-w-3xl">
              Built-in hooks and utilities for managing focus, keyboard navigation, screen reader announcements, and respecting user preferences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <EyeIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-neutral-900 dark:text-white">
                    Focus Management
                  </h4>
                </div>
                <p className="font-body text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  Trap, save, and restore keyboard focus following WAI-ARIA authoring practices. Ensures focus is never obscured (WCAG 2.4.11).
                </p>
                <CodeSnippet
                  code={`// Trap focus in a modal (WCAG 2.4.11 compliant)
const cleanup = focusManager.trapFocus(modalElement);

// Restore focus when modal closes
cleanup(); // Restore focus to previous element`}
                  language="tsx"
                />
              </div>

              <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                    <KeyIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-neutral-900 dark:text-white">
                    Keyboard Navigation
                  </h4>
                </div>
                <p className="font-body text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  Standardized keyboard interactions for menus, lists, tabs, and other composite widgets.
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

              <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                    <CheckCircleIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-neutral-900 dark:text-white">
                    Screen Reader Announcements
                  </h4>
                </div>
                <p className="font-body text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  Announce dynamic content changes to assistive technologies via live regions.
                </p>
                <div className="mb-4">
                  <button
                    onClick={() => announceToScreenReader('This message was announced to screen readers', false)}
                    className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                  >
                    Announce Polite Message
                  </button>
                </div>
                <CodeSnippet
                  code={`// Announce a message to screen readers
announceToScreenReader(
  'Item successfully added to cart', 
  false // 'false' for polite, 'true' for assertive
);`}
                  language="tsx"
                />
              </div>

              <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                    <ArrowPathIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-neutral-900 dark:text-white">
                    Responsive Preferences
                  </h4>
                </div>
                <p className="font-body text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  Detect and respect user preferences for reduced motion, high contrast, and more.
                </p>
                <div className="mb-4 font-body text-neutral-700 dark:text-neutral-300 text-sm">
                  Prefers reduced motion: <strong>{prefersReducedMotion ? 'Yes' : 'No'}</strong>
                </div>
                <CodeSnippet
                  code={`// Respect reduced motion preference
const prefersReducedMotion = responsive.useReducedMotion();

// Conditionally animate
const duration = responsive.getAnimationDuration(300);
// Returns 0 if user prefers reduced motion`}
                  language="tsx"
                />
              </div>
            </div>
          </div>

          {/* ── ARIA Pattern Examples ── */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-xl p-6">
            <h3 className="font-heading text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
              ARIA Pattern Examples
            </h3>
            <p className="font-body text-neutral-500 dark:text-neutral-400 mb-6">
              Pre-defined ARIA patterns for common components following WAI-ARIA 1.2 authoring practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                <h4 className="font-heading font-medium text-neutral-800 dark:text-neutral-200 mb-2">Modal Dialog</h4>
                <CodeSnippet
                  code={`<div 
  role="dialog" 
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-desc"
>
  <h2 id="modal-title">Modal Title</h2>
  <p id="modal-desc">Description text.</p>
</div>`}
                  language="html"
                />
              </div>

              <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                <h4 className="font-heading font-medium text-neutral-800 dark:text-neutral-200 mb-2">Live Regions</h4>
                <CodeSnippet
                  code={`{/* Assertive: errors, urgent */}
<div role="alert" aria-live="assertive">
  Error: Form submission failed.
</div>

{/* Polite: status updates */}
<div role="status" aria-live="polite">
  Your changes were saved.
</div>`}
                  language="html"
                />
              </div>

              <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                <h4 className="font-heading font-medium text-neutral-800 dark:text-neutral-200 mb-2">Tab Interface</h4>
                <CodeSnippet
                  code={`<div role="tablist" aria-label="Tabs">
  <button role="tab" aria-selected="true"
    aria-controls="panel-1" id="tab-1">
    Tab 1
  </button>
  <button role="tab" aria-selected="false"
    aria-controls="panel-2" id="tab-2"
    tabIndex={-1}>
    Tab 2
  </button>
</div>
<div role="tabpanel" id="panel-1"
  aria-labelledby="tab-1">
  Content 1
</div>`}
                  language="html"
                />
              </div>

              <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                <h4 className="font-heading font-medium text-neutral-800 dark:text-neutral-200 mb-2">Disclosure</h4>
                <CodeSnippet
                  code={`<button aria-expanded="false"
  aria-controls="details-panel">
  Show Details
</button>
<div id="details-panel" hidden>
  Hidden content revealed on click.
</div>`}
                  language="html"
                />
              </div>
            </div>
          </div>

          {/* ── Accessibility Guide Component ── */}
          <AccessibilityGuide />
        </div>
      </div>
    </AnimatedSection>
  );
}
