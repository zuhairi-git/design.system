// File: src/app/basic-cards.tsx
import AnimatedSection from "@/components/AnimatedSection";
import ThemeCard from "@/components/ThemeCard";
import CodeSnippet from "@/components/CodeSnippet";
import StyleIcon from '@mui/icons-material/Style';

export default function BasicCardsSection() {
  return (
    <AnimatedSection id="basic-cards" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950/60 dark:to-neutral-900" animation="fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <StyleIcon className="mr-2" fontSize="small" /> Card Variants
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Basic Cards</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Simple card components for displaying content in a clean, consistent format.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Basic Card - Light */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700">
            <div className="p-6">
              <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white mb-2">Basic Card</h3>
              <p className="font-body text-sm text-neutral-600 dark:text-neutral-300">
                A simple card with minimal styling, perfect for general content display.
              </p>
            </div>
          </div>
          
          {/* Info Card */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl shadow-md overflow-hidden border border-blue-200 dark:border-blue-800/30">
            <div className="p-6">
              <h3 className="font-heading text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Info Card</h3>
              <p className="font-body text-sm text-blue-700 dark:text-blue-200">
                Used for displaying information or helpful tips to users.
              </p>
            </div>
          </div>
          
          {/* Success Card */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl shadow-md overflow-hidden border border-green-200 dark:border-green-800/30">
            <div className="p-6">
              <h3 className="font-heading text-lg font-medium text-green-800 dark:text-green-300 mb-2">Success Card</h3>
              <p className="font-body text-sm text-green-700 dark:text-green-200">
                Used to confirm successful actions or positive outcomes.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg mb-8 border border-neutral-200/50 dark:border-neutral-800/50">
          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Code Example</h3>
          <CodeSnippet 
            code={`<div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700">
  <div className="p-6">
    <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white mb-2">Card Title</h3>
    <p className="font-body text-sm text-neutral-600 dark:text-neutral-300">
      Card content goes here.
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
