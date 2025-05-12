// File: src/app/interactive-cards.tsx
import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import TouchAppIcon from '@mui/icons-material/TouchApp';

export default function InteractiveCardsSection() {
  return (
    <AnimatedSection id="interactive-cards" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20" animation="fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <TouchAppIcon className="mr-2" fontSize="small" /> Interactive Elements
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Interactive Cards</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Cards with interactive elements that respond to user actions like hover, click, and touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Hover Effect Card */}
          <div className="group bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <div className="p-6">
              <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Hover Effect Card</h3>
              <p className="font-body text-sm text-neutral-600 dark:text-neutral-300">
                This card animates on hover with a subtle lift and color change.
              </p>
            </div>
          </div>
          
          {/* Click Ripple Card */}
          <div className="relative bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700 cursor-pointer active:bg-neutral-50 dark:active:bg-neutral-700/50 transition-colors">
            <div className="p-6">
              <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white mb-2">Click Effect Card</h3>
              <p className="font-body text-sm text-neutral-600 dark:text-neutral-300">
                This card has a tactile click effect when pressed.
              </p>
            </div>
          </div>
          
          {/* Expandable Card */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700">
            <div className="p-6">
              <div className="flex items-center justify-between cursor-pointer">
                <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white">Expandable Card</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
                <p>Click the header to expand and collapse this card.</p>
                <div className="mt-2 pt-2 border-t border-neutral-200 dark:border-neutral-700">
                  <p className="text-xs">Additional content that can be shown or hidden.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg mb-8 border border-neutral-200/50 dark:border-neutral-800/50">
          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Code Example</h3>
          <CodeSnippet 
            code={`<div className="group bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
  <div className="p-6">
    <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Interactive Card</h3>
    <p className="font-body text-sm text-neutral-600 dark:text-neutral-300">
      This card animates on hover with a subtle lift and color change.
    </p>
  </div>
</div>`}
            language="jsx"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
