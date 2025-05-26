import AnimatedSection from "@/components/AnimatedSection";
import { TabsPillsShowcase } from "@/components/TabsPills";

export default function TabsPillsSection() {
  return (
    <AnimatedSection id="tabs-pills" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950/60" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 rounded-full shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Navigation Components
          </div>
          
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">
            Tabs & Pills
          </h2>
          
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mb-8 leading-relaxed">
            Interactive navigation components with keyboard accessibility support. Choose between classic tabs with underline indicators or modern pill-style navigation with rounded corners.
          </p>
        </div>

        <TabsPillsShowcase />

        {/* Usage Guidelines */}
        <div className="mt-16 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800/30">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
            Accessibility Features
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800 dark:text-blue-200">
            <div>
              <h4 className="font-medium mb-2">Keyboard Navigation</h4>
              <ul className="space-y-1 text-blue-700 dark:text-blue-300">
                <li>• Arrow keys navigate between tabs</li>
                <li>• Home/End keys jump to first/last tab</li>
                <li>• Tab key moves focus to content panel</li>
                <li>• Proper focus management and indicators</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">ARIA Support</h4>
              <ul className="space-y-1 text-blue-700 dark:text-blue-300">
                <li>• Role attributes for tabs and panels</li>
                <li>• aria-selected for active states</li>
                <li>• aria-controls linking tabs to content</li>
                <li>• Proper labeling for screen readers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Usage Examples
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">When to use Tabs</h4>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Content sections within same context</li>
                <li>• Settings panels and configuration</li>
                <li>• Data visualization dashboards</li>
                <li>• Multi-step forms with navigation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">When to use Pills</h4>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Filter options and categories</li>
                <li>• Tag-based navigation</li>
                <li>• Preference selection</li>
                <li>• Compact navigation menus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
