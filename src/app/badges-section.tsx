import AnimatedSection from "@/components/AnimatedSection";
import { BadgeShowcase } from "@/components/Badges";

export default function BadgesSection() {
  return (
    <AnimatedSection id="badges" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950/60 dark:to-neutral-900" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 rounded-full shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Status Components
          </div>
          
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">
            Badges
          </h2>
          
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mb-8 leading-relaxed">
            Versatile badge components for status indicators, notifications, counts, and featured content. Designed with semantic colors and accessibility in mind.
          </p>
        </div>

        <BadgeShowcase />

        {/* Badge Types */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Status Badges</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Communicate state and status with semantic colors and clear iconography.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Notification Badges</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Overlay badges on buttons and icons to show pending notifications.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Count Badges</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Display numerical values with automatic truncation for large numbers.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Featured Badges</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Highlight special content with animated and gradient badge styles.
            </p>
          </div>
        </div>

        {/* Design Guidelines */}
        <div className="mt-16 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800/30">
          <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-4">
            Design Guidelines
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-emerald-900 dark:text-emerald-100 mb-2">Color Usage</h4>
              <ul className="space-y-1 text-emerald-800 dark:text-emerald-200">
                <li>• Use semantic colors for status (red for error, green for success)</li>
                <li>• Maintain sufficient contrast ratios for accessibility</li>
                <li>• Apply gradients sparingly in colorful theme</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-emerald-900 dark:text-emerald-100 mb-2">Typography</h4>
              <ul className="space-y-1 text-emerald-800 dark:text-emerald-200">
                <li>• Keep text concise and scannable</li>
                <li>• Use appropriate font sizes for different badge sizes</li>
                <li>• Consider icon placement and spacing</li>
              </ul>
            </div>            <div>
              <h4 className="font-medium text-emerald-900 dark:text-emerald-100 mb-2">Accessibility</h4>
              <ul className="space-y-1 text-emerald-800 dark:text-emerald-200">
                <li>• Provide aria-label for screen readers</li>
                <li>• Don&apos;t rely solely on color for meaning</li>
                <li>• Ensure adequate touch targets (minimum 44px)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Common Use Cases
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">E-commerce Applications</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Product status badges (New, Sale, Out of Stock)</li>
                <li>• Shopping cart notification counts</li>
                <li>• User role indicators (Premium, VIP)</li>
                <li>• Review count badges</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">Dashboard Interfaces</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• System status indicators (Online, Offline, Error)</li>
                <li>• Notification counts for messages</li>
                <li>• Priority level badges (High, Medium, Low)</li>
                <li>• Progress status markers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
