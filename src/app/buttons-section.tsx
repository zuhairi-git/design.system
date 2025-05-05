import AnimatedSection from "@/components/AnimatedSection";

export default function ButtonsSection() {
  return (
    <AnimatedSection id="buttons" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950/60" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <span className="mr-2">👆</span> Button System
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Buttons</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Our button system offers consistent interactive elements with theme variations.
          </p>
        </div>
        
        <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg mb-14">
          <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
            <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            Light Theme Button
          </h3>
          <div className="mb-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <div className="flex flex-wrap gap-6 mb-4">
              <button className="inline-block px-8 py-4 rounded-full font-medium transition-all duration-300 bg-blue-500 hover:bg-blue-600 text-white">
                View Portfolio
              </button>
            </div>
            <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto mt-4">
              <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`/* Base styles */
inline-block px-8 py-4 rounded-full font-medium transition-all duration-300
bg-blue-500 hover:bg-blue-600 text-white`}
              </pre>
            </div>
          </div>
          
          <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
            <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </span>
            Dark Theme Button
          </h3>
          <div className="mb-8 p-6 bg-neutral-800 dark:bg-neutral-900 rounded-lg border border-neutral-700 dark:border-neutral-800">
            <div className="flex flex-wrap gap-6 mb-4">
              <button className="inline-block px-8 py-4 rounded-full font-medium transition-all duration-300 bg-blue-500 hover:bg-blue-600 text-white">
                View Portfolio
              </button>
            </div>
            <div className="bg-neutral-950 dark:bg-neutral-950 p-4 rounded-md overflow-auto mt-4">
              <pre className="text-xs text-neutral-400 dark:text-neutral-400 font-mono">
{`/* Base styles */
inline-block px-8 py-4 rounded-full font-medium transition-all duration-300
bg-blue-500 hover:bg-blue-600 text-white`}
              </pre>
            </div>
          </div>
          
          <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
            <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </span>
            Colorful Theme Button
          </h3>
          <div className="mb-8 p-6 bg-gradient-to-br from-indigo-900/20 to-blue-900/20 rounded-lg border border-indigo-500/20 backdrop-blur-md">
            <div className="flex flex-wrap gap-6 mb-4">
              <button 
                className="cosmic-shimmer inline-block px-8 py-4 rounded-full font-medium transition-all duration-300 text-white border border-transparent shadow-lg relative overflow-hidden" 
                style={{
                  backgroundImage: 'linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 3s ease infinite'
                }}
              >
                <span className="relative z-10">View Portfolio</span>
              </button>
            </div>
            <div className="bg-neutral-950/40 p-4 rounded-md overflow-auto mt-4">
              <pre className="text-xs text-neutral-100 font-mono">
{`/* Base styles */
inline-block px-8 py-4 rounded-full font-medium transition-all duration-300
text-white border border-transparent shadow-lg cosmic-shimmer

/* Inline styles */
backgroundImage: 'linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)'
backgroundSize: '200% 200%'
animation: 'gradientShift 3s ease infinite'`}
              </pre>
            </div>
          </div>
          
          <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-4">Animation Effects</h3>
          <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-md overflow-auto mb-8">
            <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`/* Cosmic shimmer effect */
.cosmic-shimmer {
  position: relative;
  overflow: hidden;
}

.cosmic-shimmer::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
