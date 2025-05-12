// File: src/app/accessibility-utilities.tsx
import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export default function AccessibilityUtilitiesSection() {
  return (
    <AnimatedSection id="accessibility-utilities" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950/60" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <AccessibilityNewIcon className="mr-2" fontSize="small" /> A11Y
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Accessibility Utilities</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Helper classes and tools to ensure your interfaces are accessible to all users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Visually Hidden */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
            <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-3">Visually Hidden</h3>
            <p className="font-body text-neutral-700 dark:text-neutral-300 mb-4">
              Hide content visually while keeping it accessible to screen readers.
            </p>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg mb-4">
              <span className="sr-only">This text is visible to screen readers but hidden visually</span>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                The element above this text contains content that is only visible to screen readers. 
                Inspect the element to see the hidden text.
              </p>
            </div>
            <CodeSnippet 
              code={`<span className="sr-only">This text is visible to screen readers but hidden visually</span>

/* CSS for sr-only class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}`}
              language="jsx"
            />
          </div>

          {/* Focus Indicators */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
            <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-3">Focus Indicators</h3>
            <p className="font-body text-neutral-700 dark:text-neutral-300 mb-4">
              Ensure interactive elements have clear focus states for keyboard navigation.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <button className="px-4 py-2 bg-primary-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900">
                Default Focus Style
              </button>
              <button className="px-4 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900">
                Blue Focus Ring
              </button>
              <button className="px-4 py-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-md focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-2 focus-visible:outline-yellow-500">
                Dashed Outline
              </button>
            </div>
            <CodeSnippet 
              code={`/* Default focus style */
.focus-style {
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900;
}

/* High contrast focus style */
.focus-style-high-contrast {
  @apply focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-2 focus-visible:outline-yellow-500;
}`}
              language="css"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Color Contrast */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
            <h3 className="font-heading text-lg font-semibold text-neutral-900 dark:text-white mb-3">Color Contrast</h3>
            <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Utilities to ensure text has sufficient contrast against backgrounds.
            </p>
            <div className="space-y-3 mb-4">
              <div className="p-3 bg-white dark:bg-neutral-900 rounded-md">
                <p className="text-neutral-900 dark:text-white font-medium">High contrast (AAA) - 7:1+</p>
              </div>
              <div className="p-3 bg-white dark:bg-neutral-900 rounded-md">
                <p className="text-neutral-700 dark:text-neutral-300">Good contrast (AA) - 4.5:1+</p>
              </div>
              <div className="p-3 bg-white dark:bg-neutral-900 rounded-md">
                <p className="text-neutral-400 dark:text-neutral-500 line-through">Poor contrast - Below 4.5:1</p>
              </div>
            </div>
          </div>

          {/* Keyboard Navigation */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
            <h3 className="font-heading text-lg font-semibold text-neutral-900 dark:text-white mb-3">Keyboard Navigation</h3>
            <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Ensure all interactive elements can be accessed via keyboard.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <button className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-md hover:bg-primary-200 dark:hover:bg-primary-800/40">Tab</button>
              <button className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-600">Enter</button>
              <button className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-600">Space</button>
              <button className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-600">Esc</button>
              <button className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-600">↑ ↓ ← →</button>
            </div>
          </div>

          {/* ARIA Attributes */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
            <h3 className="font-heading text-lg font-semibold text-neutral-900 dark:text-white mb-3">ARIA Attributes</h3>
            <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Common ARIA attributes to enhance screen reader compatibility.
            </p>
            <div className="space-y-2 mb-4">
              <div className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                aria-label="Description"
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                aria-labelledby="element-id"
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                aria-describedby="element-id"
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                aria-hidden="true|false"
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                role="button|tab|dialog"
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg border border-neutral-200/50 dark:border-neutral-800/50">
          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Accessibility Best Practices</h3>
          <ul className="space-y-3 mb-4 text-neutral-800 dark:text-neutral-200">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Use semantic HTML elements (<code className="text-sm bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded">&lt;button&gt;</code>, <code className="text-sm bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded">&lt;a&gt;</code>, <code className="text-sm bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded">&lt;nav&gt;</code>, etc.) instead of generic <code className="text-sm bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded">&lt;div&gt;</code> elements</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Provide alternative text for all images with the <code className="text-sm bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded">alt</code> attribute</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Ensure color is not the only means of conveying information</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Make sure text can be resized up to 200% without breaking the layout</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Use appropriate heading hierarchy (h1, h2, h3, etc.) to create a logical document outline</span>
            </li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
