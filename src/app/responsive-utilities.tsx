// File: src/app/responsive-utilities.tsx
import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import DevicesIcon from '@mui/icons-material/Devices';

export default function ResponsiveUtilitiesSection() {
  return (
    <AnimatedSection id="responsive-utilities" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20" animation="fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <DevicesIcon className="mr-2" fontSize="small" /> Responsive Design
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Responsive Utilities</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Tools and classes to build responsive interfaces that work across all screen sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Visibility Classes */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
            <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-3">Visibility Utilities</h3>
            <p className="font-body text-neutral-700 dark:text-neutral-300 mb-4">
              Classes to show or hide content at specific breakpoints.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100 text-sm mb-2">Show/Hide at Breakpoints</h4>
                <div className="space-y-2">
                  <div className="text-xs text-neutral-700 dark:text-neutral-300 font-mono">hidden md:block</div>
                  <div className="text-xs text-neutral-700 dark:text-neutral-300 font-mono">block lg:hidden</div>
                  <div className="text-xs text-neutral-700 dark:text-neutral-300 font-mono">sm:hidden xl:block</div>
                </div>
              </div>
              <div className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100 text-sm mb-2">Display Types</h4>
                <div className="space-y-2">
                  <div className="text-xs text-neutral-700 dark:text-neutral-300 font-mono">block md:inline-block</div>
                  <div className="text-xs text-neutral-700 dark:text-neutral-300 font-mono">flex lg:grid</div>
                  <div className="text-xs text-neutral-700 dark:text-neutral-300 font-mono">hidden md:flex</div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <CodeSnippet 
                code={`<!-- Hidden on mobile, visible from medium breakpoint up -->
<div className="hidden md:block">
  Only visible on medium screens and up
</div>

<!-- Visible on mobile, hidden from large breakpoint up -->
<div className="block lg:hidden">
  Only visible on small and medium screens
</div>`}
                language="jsx"
              />
            </div>
          </div>

          {/* Responsive Spacing */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
            <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-3">Responsive Spacing</h3>
            <p className="font-body text-neutral-700 dark:text-neutral-300 mb-4">
              Apply different spacing values at different breakpoints.
            </p>
            <div className="space-y-4">
              <div className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                <div className="flex flex-wrap gap-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-xs font-mono text-primary-800 dark:text-primary-300 rounded-md">
                    p-4 md:p-6 lg:p-8
                  </div>
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-xs font-mono text-primary-800 dark:text-primary-300 rounded-md">
                    mx-2 sm:mx-4 lg:mx-auto
                  </div>
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-xs font-mono text-primary-800 dark:text-primary-300 rounded-md">
                    mb-4 md:mb-8
                  </div>
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-xs font-mono text-primary-800 dark:text-primary-300 rounded-md">
                    gap-2 lg:gap-6
                  </div>
                </div>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-900/90 p-4 rounded-md relative">
                <div className="w-full h-12 bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 rounded-md flex items-center justify-center">
                  <span className="text-primary-700 dark:text-primary-400 text-xs">p-4 md:p-6 lg:p-8</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <CodeSnippet 
                code={`<!-- Responsive padding that increases at larger sizes -->
<div className="p-4 md:p-6 lg:p-8">
  This content has responsive padding
</div>

<!-- Responsive margin -->
<div className="mx-2 sm:mx-4 lg:mx-auto max-w-2xl">
  This content has responsive horizontal margins
</div>`}
                language="jsx"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Layout Utilities */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
            <h3 className="font-heading text-lg font-semibold text-neutral-900 dark:text-white mb-3">Flex to Grid</h3>
            <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Switch between layouts at different breakpoints.
            </p>
            <div className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded-md mb-3">
              <div className="text-xs text-neutral-700 dark:text-neutral-300 font-mono">flex md:grid md:grid-cols-2 lg:grid-cols-3</div>
            </div>
            <div className="border border-dashed border-neutral-300 dark:border-neutral-700 p-3 rounded-md">
              <div className="flex md:grid md:grid-cols-2 gap-2">
                <div className="w-full h-12 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-xs text-blue-800 dark:text-blue-300">Item 1</div>
                <div className="w-full h-12 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-xs text-blue-800 dark:text-blue-300">Item 2</div>
              </div>
            </div>
          </div>

          {/* Responsive Typography */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
            <h3 className="font-heading text-lg font-semibold text-neutral-900 dark:text-white mb-3">Responsive Text</h3>
            <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Adjust text sizes across breakpoints.
            </p>
            <div className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded-md mb-3">
              <div className="text-xs text-neutral-700 dark:text-neutral-300 font-mono">text-xl md:text-2xl lg:text-3xl</div>
            </div>
            <div className="border border-dashed border-neutral-300 dark:border-neutral-700 p-3 rounded-md">
              <h4 className="text-xl md:text-2xl lg:text-3xl font-heading text-neutral-900 dark:text-white">Responsive Heading</h4>
            </div>
          </div>

          {/* Container Queries */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
            <h3 className="font-heading text-lg font-semibold text-neutral-900 dark:text-white mb-3">Container Queries</h3>
            <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 mb-4">
              Modern responsive technique based on container size.
            </p>            <div className="p-3 bg-neutral-50 dark:bg-neutral-900 rounded-md mb-3">
              <div className="text-xs text-neutral-700 dark:text-neutral-300 font-mono">@container (min-width: 400px) {'{'}<br/>
  .card {'{'}<br/>
    flex-direction: row;<br/>
  {'}'}<br/>
{'}'}</div>
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
              Container queries respond to the container size rather than viewport size
            </div>
          </div>
        </div>

        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg border border-neutral-200/50 dark:border-neutral-800/50">          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Example: Responsive Card Layout</h3>
          <CodeSnippet 
            code={`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
  {'{'} items.map(item => (
    <div key={item.id} className="bg-white dark:bg-neutral-800 p-4 md:p-6 rounded-xl shadow-md">
      <h3 className="text-base md:text-lg font-medium">{'{'} item.title {'}'}</h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 hidden sm:block">
        {'{'} item.description {'}'}
      </p>
      <div className="mt-4 flex sm:block lg:flex items-center justify-between">
        <span className="text-primary-600">{'{'} item.price {'}'}</span>
        <button className="mt-0 sm:mt-2 lg:mt-0 px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 
          text-primary-800 dark:text-primary-300 rounded-md">
          View Details
        </button>
      </div>
    </div>
  )) {'}'}
</div>`}
            language="jsx"
          />
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            This example shows how to create a responsive card layout that:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            <li>• Displays 1 column on mobile, 2 on small screens, 3 on large screens, and 4 on extra large screens</li>
            <li>• Hides descriptions on mobile to save space</li>
            <li>• Changes the layout of price and button elements at different breakpoints</li>
            <li>• Increases padding and gap spacing on larger screens</li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
