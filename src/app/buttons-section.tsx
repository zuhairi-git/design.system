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
          {/* Button Sizes */}
        <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg mb-8">
          <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
            <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </span>
            Button Sizes
          </h3>
          <div className="space-y-6">
            <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-medium text-neutral-950 dark:text-white mb-4">Primary Button Sizes</h4>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300">
                  Small
                </button>
                <button className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300">
                  Medium
                </button>
                <button className="px-6 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300">
                  Large
                </button>
                <button className="px-8 py-4 text-lg font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300">
                  Extra Large
                </button>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto">
                <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`/* Small */
px-3 py-1.5 text-xs font-medium rounded-lg

/* Medium */
px-4 py-2 text-sm font-medium rounded-lg

/* Large */
px-6 py-3 text-base font-medium rounded-lg

/* Extra Large */
px-8 py-4 text-lg font-medium rounded-lg`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Button Variants */}
        <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg mb-8">
          <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
            <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </span>
            Button Variants
          </h3>
          
          <div className="space-y-8">
            {/* Primary Buttons */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-medium text-neutral-950 dark:text-white mb-4">Primary</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                <button className="px-6 py-3 font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  Primary Button
                </button>
                <button className="px-6 py-3 font-medium rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  Primary Rounded
                </button>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto">
                <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white`}
                </pre>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-medium text-neutral-950 dark:text-white mb-4">Secondary</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                <button className="px-6 py-3 font-medium rounded-lg bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-900 dark:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                  Secondary Button
                </button>
                <button className="px-6 py-3 font-medium rounded-full bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-900 dark:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                  Secondary Rounded
                </button>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto">
                <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-900 dark:text-white`}
                </pre>
              </div>
            </div>

            {/* Tertiary Buttons */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-medium text-neutral-950 dark:text-white mb-4">Tertiary</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                <button className="px-6 py-3 font-medium rounded-lg bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all duration-300">
                  Tertiary Button
                </button>
                <button className="px-6 py-3 font-medium rounded-full bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all duration-300">
                  Tertiary Rounded
                </button>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto">
                <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300`}
                </pre>
              </div>
            </div>

            {/* Outline Buttons */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-medium text-neutral-950 dark:text-white mb-4">Outline</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                <button className="px-6 py-3 font-medium rounded-lg bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white transition-all duration-300">
                  Outline Button
                </button>
                <button className="px-6 py-3 font-medium rounded-full bg-transparent border-2 border-purple-600 hover:bg-purple-600 text-purple-600 hover:text-white transition-all duration-300">
                  Outline Rounded
                </button>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto">
                <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Status Buttons */}
        <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg mb-8">
          <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
            <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Status Buttons
          </h3>
          
          <div className="space-y-8">
            {/* Info Buttons */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-medium text-neutral-950 dark:text-white mb-4">Info</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                <button className="px-6 py-3 font-medium rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  Info Button
                </button>
                <button className="px-6 py-3 font-medium rounded-lg bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white transition-all duration-300">
                  Info Outline
                </button>
                <button className="px-6 py-3 font-medium rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 transition-all duration-300">
                  Info Light
                </button>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto">
                <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`/* Solid */ bg-blue-600 hover:bg-blue-700 text-white
/* Outline */ border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white  
/* Light */ bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300`}
                </pre>
              </div>
            </div>

            {/* Success Buttons */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-medium text-neutral-950 dark:text-white mb-4">Success</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                <button className="px-6 py-3 font-medium rounded-lg bg-green-600 hover:bg-green-700 text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  Success Button
                </button>
                <button className="px-6 py-3 font-medium rounded-lg bg-transparent border-2 border-green-600 hover:bg-green-600 text-green-600 hover:text-white transition-all duration-300">
                  Success Outline
                </button>
                <button className="px-6 py-3 font-medium rounded-lg bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/50 text-green-700 dark:text-green-300 transition-all duration-300">
                  Success Light
                </button>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto">
                <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`/* Solid */ bg-green-600 hover:bg-green-700 text-white
/* Outline */ border-2 border-green-600 hover:bg-green-600 text-green-600 hover:text-white
/* Light */ bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300`}
                </pre>
              </div>
            </div>

            {/* Warning Buttons */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-medium text-neutral-950 dark:text-white mb-4">Warning</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                <button className="px-6 py-3 font-medium rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  Warning Button
                </button>
                <button className="px-6 py-3 font-medium rounded-lg bg-transparent border-2 border-amber-600 hover:bg-amber-600 text-amber-600 hover:text-white transition-all duration-300">
                  Warning Outline
                </button>
                <button className="px-6 py-3 font-medium rounded-lg bg-amber-50 dark:bg-amber-900/30 hover:bg-amber-100 dark:hover:bg-amber-900/50 text-amber-700 dark:text-amber-300 transition-all duration-300">
                  Warning Light
                </button>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto">
                <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`/* Solid */ bg-amber-600 hover:bg-amber-700 text-white
/* Outline */ border-2 border-amber-600 hover:bg-amber-600 text-amber-600 hover:text-white
/* Light */ bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300`}
                </pre>
              </div>
            </div>

            {/* Danger Buttons */}
            <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-medium text-neutral-950 dark:text-white mb-4">Danger</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                <button className="px-6 py-3 font-medium rounded-lg bg-red-600 hover:bg-red-700 text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  Danger Button
                </button>
                <button className="px-6 py-3 font-medium rounded-lg bg-transparent border-2 border-red-600 hover:bg-red-600 text-red-600 hover:text-white transition-all duration-300">
                  Danger Outline
                </button>
                <button className="px-6 py-3 font-medium rounded-lg bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/50 text-red-700 dark:text-red-300 transition-all duration-300">
                  Danger Light
                </button>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto">
                <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`/* Solid */ bg-red-600 hover:bg-red-700 text-white
/* Outline */ border-2 border-red-600 hover:bg-red-600 text-red-600 hover:text-white
/* Light */ bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Effects */}
        <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg mb-14">
          <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
            <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </span>
            Special Effects
          </h3>
          
          <div className="p-6 bg-gradient-to-br from-indigo-900/20 to-blue-900/20 rounded-lg border border-indigo-500/20 backdrop-blur-md">
            <div className="flex flex-wrap gap-6 mb-4">
              <button 
                className="cosmic-shimmer px-8 py-4 rounded-full font-medium transition-all duration-300 text-white border border-transparent shadow-lg relative overflow-hidden" 
                style={{
                  backgroundImage: 'linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 3s ease infinite'
                }}
              >
                <span className="relative z-10">Cosmic Button</span>
              </button>
              <button className="px-6 py-3 font-medium rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Hover Scale
              </button>
              <button className="px-6 py-3 font-medium rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:rotate-2">
                Hover Rotate
              </button>
            </div>
            <div className="bg-neutral-950/40 p-4 rounded-md overflow-auto mt-4">
              <pre className="text-xs text-neutral-100 font-mono">
{`/* Cosmic Shimmer */
backgroundImage: 'linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)'
backgroundSize: '200% 200%'
animation: 'gradientShift 3s ease infinite'

/* Hover Scale */
transform hover:scale-105

/* Hover Rotate */
hover:rotate-2`}
              </pre>
            </div>
          </div>
          
          <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-md overflow-auto mt-6">
            <pre className="text-xs text-neutral-800 dark:text-neutral-200 font-mono">
{`/* CSS Keyframes */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

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
  100% { transform: translateX(100%); }
}`}
            </pre>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
