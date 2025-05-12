// File: src/app/spacing.tsx
import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import SpaceBarIcon from '@mui/icons-material/SpaceBar';

export default function SpacingSection() {
  // Array of spacing values
  const spacingValues = [
    { name: "0", value: "0px", tailwind: "0" },
    { name: "0.5", value: "0.125rem (2px)", tailwind: "0.5" },
    { name: "1", value: "0.25rem (4px)", tailwind: "1" },
    { name: "1.5", value: "0.375rem (6px)", tailwind: "1.5" },
    { name: "2", value: "0.5rem (8px)", tailwind: "2" },
    { name: "2.5", value: "0.625rem (10px)", tailwind: "2.5" },
    { name: "3", value: "0.75rem (12px)", tailwind: "3" },
    { name: "3.5", value: "0.875rem (14px)", tailwind: "3.5" },
    { name: "4", value: "1rem (16px)", tailwind: "4" },
    { name: "5", value: "1.25rem (20px)", tailwind: "5" },
    { name: "6", value: "1.5rem (24px)", tailwind: "6" },
    { name: "8", value: "2rem (32px)", tailwind: "8" },
    { name: "10", value: "2.5rem (40px)", tailwind: "10" },
    { name: "12", value: "3rem (48px)", tailwind: "12" },
    { name: "16", value: "4rem (64px)", tailwind: "16" },
    { name: "20", value: "5rem (80px)", tailwind: "20" },
    { name: "24", value: "6rem (96px)", tailwind: "24" },
  ];

  return (
    <AnimatedSection id="spacing" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950/60" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <SpaceBarIcon className="mr-2" fontSize="small" /> Foundation
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Spacing System</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            A consistent spacing scale helps create harmony in your layouts. Use these spacing values throughout your interface to maintain rhythm and hierarchy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Spacing Scale */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700">
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Spacing Scale</h3>
              <p className="font-body text-neutral-700 dark:text-neutral-300 mb-6">
                Our spacing scale is based on a 4px grid system, providing consistent increments for layouts.
              </p>
              <div className="space-y-4">
                {spacingValues.slice(0, 10).map((spacing, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 flex-shrink-0">
                      <div 
                        className="bg-primary-500 dark:bg-primary-400"
                        style={{ 
                          height: '12px', 
                          width: spacing.name === '0' ? '2px' : `${parseFloat(spacing.name) * 4}px`
                        }}
                      ></div>
                    </div>
                    <div className="ml-6">
                      <p className="font-medium text-neutral-900 dark:text-white text-sm">{spacing.name}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{spacing.value}</p>
                    </div>
                    <div className="ml-auto font-mono text-xs text-neutral-500 dark:text-neutral-400">
                      {spacing.tailwind}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Use these values with margin, padding, gap, and other spacing utilities.
                </p>
              </div>
            </div>
          </div>

          {/* Spacing Usage */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700">
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Using Spacing</h3>
              
              <div className="mb-6">
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Margin</h4>
                <CodeSnippet 
                  code={`<div className="mt-4">Margin top (1rem)</div>
<div className="mr-6">Margin right (1.5rem)</div>
<div className="mb-8">Margin bottom (2rem)</div>
<div className="ml-2">Margin left (0.5rem)</div>
<div className="mx-4">Horizontal margin (1rem)</div>
<div className="my-6">Vertical margin (1.5rem)</div>
<div className="m-8">All sides margin (2rem)</div>`}
                  language="jsx"
                />
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Padding</h4>
                <CodeSnippet 
                  code={`<div className="pt-4">Padding top</div>
<div className="pr-6">Padding right</div>
<div className="pb-8">Padding bottom</div>
<div className="pl-2">Padding left</div>
<div className="px-4">Horizontal padding</div>
<div className="py-6">Vertical padding</div>
<div className="p-8">All sides padding</div>`}
                  language="jsx"
                />
              </div>
              
              <div>
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Gap</h4>
                <CodeSnippet 
                  code={`<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div className="grid grid-cols-3 gap-x-4 gap-y-8">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`}
                  language="jsx"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Spacing Examples */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700 mb-10">
          <div className="p-6">
            <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Spacing Examples</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-3">Card Spacing</h4>
                <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-4">
                  <div className="bg-white dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 shadow-sm">
                    <div className="p-4">
                      <h5 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">Card Title</h5>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Card description with consistent spacing around text elements.</p>
                      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700 flex justify-end">
                        <button className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm rounded-md">Action</button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-4 gap-1">
                    <div className="text-center">
                      <div className="h-6 bg-primary-100 dark:bg-primary-900/30"></div>
                      <p className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">p-4</p>
                    </div>
                    <div className="text-center">
                      <div className="h-6 bg-blue-100 dark:bg-blue-900/30"></div>
                      <p className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">mb-2</p>
                    </div>
                    <div className="text-center">
                      <div className="h-6 bg-purple-100 dark:bg-purple-900/30"></div>
                      <p className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">mb-4</p>
                    </div>
                    <div className="text-center">
                      <div className="h-6 bg-green-100 dark:bg-green-900/30"></div>
                      <p className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">pt-4</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-3">Button Group Spacing</h4>
                <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-md">Save</button>
                      <button className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md">Cancel</button>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-md">Save</button>
                      <button className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md">Cancel</button>
                    </div>
                    <div className="flex items-center gap-6">
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-md">Save</button>
                      <button className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md">Cancel</button>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-1">
                    <div className="text-center">
                      <div className="h-6 bg-yellow-100 dark:bg-yellow-900/30"></div>
                      <p className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">gap-2</p>
                    </div>
                    <div className="text-center">
                      <div className="h-6 bg-yellow-100 dark:bg-yellow-900/30"></div>
                      <p className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">gap-4</p>
                    </div>
                    <div className="text-center">
                      <div className="h-6 bg-yellow-100 dark:bg-yellow-900/30"></div>
                      <p className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">gap-6</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg border border-neutral-200/50 dark:border-neutral-800/50">
          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Spacing Best Practices</h3>
          <ul className="space-y-3 text-neutral-800 dark:text-neutral-200">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Use consistent spacing values from the spacing scale</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Apply larger spacing between major sections, smaller spacing between related elements</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Use appropriate spacing to establish visual hierarchy</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Maintain consistent spacing in similar components</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Adjust spacing responsively for different screen sizes</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              <span>Avoid arbitrary spacing values outside the spacing scale</span>
            </li>
            <li className="flex items-start">              <span className="text-red-500 mr-2">✗</span>
              <span>Don&apos;t use inconsistent spacing for similar elements</span>
            </li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
