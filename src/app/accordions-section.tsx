import AnimatedSection from "@/components/AnimatedSection";
import { AccordionShowcase } from "@/components/Accordion";

export default function AccordionSection() {
  return (
    <AnimatedSection id="accordions" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950/60" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 rounded-full shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Expandable Components
          </div>
          
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">
            Accordions
          </h2>
          
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mb-8 leading-relaxed">
            Collapsible content sections with multiple variants, icon support, badges, and nested tab functionality. Perfect for FAQs, documentation, and content organization with full accessibility support.
          </p>
        </div>

        <AccordionShowcase />

        {/* Code Examples */}
        <div className="mt-16 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
          <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
            <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-gray-100 dark:bg-gray-900/40 text-gray-600 dark:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            Usage Examples
          </h3>
          
          <div className="space-y-6">
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-medium text-neutral-950 dark:text-white mb-4">Basic Accordion</h4>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto">
                <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`import Accordion from '@/components/Accordion';

const items = [
  {
    id: 'item-1',
    title: 'Accordion Item 1',
    content: 'Content for the first accordion item.',
    icon: <InfoIcon />,
    badge: { text: 'New', variant: 'info' }
  }
];

<Accordion items={items} />`}
                </pre>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-medium text-neutral-950 dark:text-white mb-4">Advanced Configuration</h4>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto">
                <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`<Accordion 
  items={items}
  variant="bordered"        // default | bordered | filled | minimal
  allowMultiple={true}      // Allow multiple items open
  iconPosition="right"      // left | right
  size="lg"                // sm | md | lg
  theme="colorful"         // light | dark | colorful
/>`}
                </pre>
              </div>
            </div>            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-medium text-neutral-950 dark:text-white mb-4">Item with Nested Tabs</h4>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto">
                <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`const itemWithTabs = {
  id: 'complex-item',
  title: 'Component Documentation',
  content: 'This section contains detailed documentation.',
  hasNestedTabs: true,      // Enables nested tabs
  badge: { text: 'Interactive', variant: 'success' }
};`}
                </pre>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-medium text-neutral-950 dark:text-white mb-4">Theme Variations</h4>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto">
                <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`// Light theme (default)
<Accordion items={items} theme="light" />

// Dark theme with enhanced contrast
<Accordion items={items} theme="dark" />

// Colorful theme with purple/blue gradients
<Accordion items={items} theme="colorful" variant="bordered" />`}
                </pre>
              </div>
            </div>
          </div>
        </div>        {/* Design Principles */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800/30">
            <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
              Design Principles
            </h3>
            <ul className="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
              <li>• <strong>Progressive Disclosure:</strong> Show information when needed</li>
              <li>• <strong>Visual Hierarchy:</strong> Clear indication of expandable content</li>
              <li>• <strong>Consistent Interaction:</strong> Predictable expand/collapse behavior</li>
              <li>• <strong>Content Organization:</strong> Logical grouping of related information</li>
              <li>• <strong>Theme Consistency:</strong> Adapts to light, dark, and colorful themes</li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800/30">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
              Accessibility Features
            </h3>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <li>• <strong>ARIA Support:</strong> Proper aria-expanded and aria-controls</li>
              <li>• <strong>Keyboard Navigation:</strong> Space/Enter to toggle sections</li>
              <li>• <strong>Focus Management:</strong> Theme-adaptive focus indicators</li>
              <li>• <strong>Screen Readers:</strong> Descriptive labels and state announcements</li>
              <li>• <strong>High Contrast:</strong> Enhanced visibility in all themes</li>
            </ul>
          </div>
        </div>

        {/* Theme Features */}
        <div className="mt-16 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800/30">
          <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
            Theme-Specific Features
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-purple-800 dark:text-purple-200">
            <div>
              <h4 className="font-medium mb-2 text-purple-900 dark:text-purple-100">🌟 Colorful Theme</h4>
              <ul className="space-y-1">
                <li>• Purple & blue gradients</li>
                <li>• Enhanced badge borders</li>
                <li>• Vibrant focus indicators</li>
                <li>• Dynamic icon coloring</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-purple-900 dark:text-purple-100">🌙 Dark Theme</h4>
              <ul className="space-y-1">
                <li>• High contrast backgrounds</li>
                <li>• Optimized text readability</li>
                <li>• Subtle hover effects</li>
                <li>• Enhanced border visibility</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-purple-900 dark:text-purple-100">☀️ Light Theme</h4>
              <ul className="space-y-1">
                <li>• Clean, minimal styling</li>
                <li>• Subtle shadow effects</li>
                <li>• Standard focus rings</li>
                <li>• Classic color palette</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mt-16 p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-800/30">
          <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-4">
            When to Use Accordions
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-amber-800 dark:text-amber-200">
            <div>
              <h4 className="font-medium mb-2 text-amber-900 dark:text-amber-100">✅ Good For</h4>
              <ul className="space-y-1">
                <li>• FAQ sections</li>
                <li>• Documentation organization</li>
                <li>• Settings panels</li>
                <li>• Progressive forms</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-amber-900 dark:text-amber-100">⚠️ Consider Alternatives</h4>
              <ul className="space-y-1">
                <li>• Frequently accessed content</li>
                <li>• Complex interactive content</li>
                <li>• Short content sections</li>
                <li>• Time-sensitive information</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-amber-900 dark:text-amber-100">🚫 Avoid For</h4>
              <ul className="space-y-1">
                <li>• Primary navigation</li>
                <li>• Critical user actions</li>
                <li>• Single item lists</li>
                <li>• Complex data tables</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
