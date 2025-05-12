import AnimatedSection from "@/components/AnimatedSection";
import ThemeCard from "@/components/ThemeCard";
import CodeSnippet from "@/components/CodeSnippet";

export default function CardsSection() {
  return (
    <AnimatedSection id="cards" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950/60 dark:to-neutral-900" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <span className="mr-2">🃏</span> Card System
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Cards</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            A flexible card system with multiple variants and themes to showcase content across your interface.
          </p>
        </div>
        
        <div className="space-y-14">          {/* Theme Cards */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
              <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </span>
              Theme Cards
            </h3>
            <div className="mb-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">                <ThemeCard 
                  variant="default"
                  theme="light-enhanced"
                  title="Light Theme"
                  description="Clean, bright design with subtle gradients optimized for daylight viewing."
                  icon="☀️"
                />
                <ThemeCard 
                  variant="default"
                  theme="dark-enhanced"
                  title="Dark Theme"
                  description="Sophisticated dark palette (#0a0a0a) with blue accents for night browsing."
                  icon="🌙"
                />
                <ThemeCard 
                  variant="default"
                  theme="colorful"
                  title="Cosmic Theme"
                  description="Vibrant cosmic gradient with cyan, magenta and blue from #00ffff to #ff00cc to #3b82f6."
                  icon="✨"
                />
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto mt-6">
                <CodeSnippet code={`<ThemeCard 
  variant="default"
  theme="light-enhanced" // Options: 'light-enhanced', 'dark-enhanced', 'colorful'
  title="Theme Card"
  description="Card description goes here"
  icon="📄"
/>`} />
              </div>
            </div>
          </div>
          
          {/* Card Variants */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
              <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </span>
              Card Variants
            </h3>
            <div className="mb-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <ThemeCard 
                  variant="minimal"
                  title="Minimal Card"
                  description="A clean, minimalist card that changes background on hover."
                  icon="✨"
                />
                <ThemeCard 
                  variant="gradient"
                  title="Gradient Card"
                  description="Features a subtle gradient background for visual interest."
                  icon="🌈"
                />
                <ThemeCard 
                  variant="bordered"
                  title="Bordered Card"
                  description="Uses a colored border to highlight important content."
                  icon="📏"
                />
                <ThemeCard 
                  variant="elevated"
                  title="Elevated Card"
                  description="Raises on hover to create a sense of depth and interaction."
                  icon="⬆️"
                />
                <ThemeCard 
                  variant="glass"
                  title="Glass Card"
                  description="Transparent backdrop with blur effect for a modern look."
                  icon="🔍"
                />
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto mt-6">
                <CodeSnippet code={`// Available variants: 'default' | 'minimal' | 'gradient' | 'bordered' | 'elevated' | 'glass'
<ThemeCard 
  variant="gradient"
  title="Gradient Card"
  description="Card description goes here"
  icon="🌈"
/>`} />
              </div>
            </div>
          </div>
            {/* Themed Card Variants */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
              <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Themed Variants
            </h3>
            <div className="mb-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <ThemeCard 
                  variant="elevated"
                  theme="light-enhanced"
                  title="Elevated Light"
                  description="Light theme with elevation effect that raises on hover."
                  icon="⬆️"
                />
                <ThemeCard 
                  variant="glass"
                  theme="dark-enhanced"
                  title="Glass Dark"
                  description="Dark theme with a subtle glass effect and backdrop blur."
                  icon="🔍"
                />                <ThemeCard 
                  variant="gradient"
                  theme="colorful"
                  title="Cosmic Gradient"
                  description="Cosmic gradient with cyan (#00ffff), magenta (#ff00cc), and blue (#3b82f6) accents."
                  icon="✨"
                  className="hover:shadow-[0_8px_24px_rgba(255,0,204,0.4)]"
                />
                <ThemeCard 
                  variant="bordered"
                  theme="light-enhanced"
                  title="Bordered Light"
                  description="Light theme with prominent border for emphasis."
                  icon="📏"
                />
                <ThemeCard 
                  variant="minimal"
                  theme="dark-enhanced"
                  title="Minimal Dark"
                  description="Clean dark theme with hover effects and minimal styling."
                  icon="🖤"
                />
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto mt-6">
                <CodeSnippet code={`<ThemeCard 
  variant="glass"
  theme="dark-enhanced"
  title="Glass Dark"
  description="Dark theme with glass effect"
  icon="🔍"
/>`} />
              </div>
            </div>
          </div>
          
          {/* Interactive Cards */}
          <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg">
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mb-6 flex items-center">
              <span className="inline-flex items-center justify-center w-7 h-7 mr-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </span>
              Interactive Usage
            </h3>
            <div className="mb-8 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-heading font-medium text-lg text-neutral-950 dark:text-white mb-3">Card with onClick Handler</h4>
                  <ThemeCard 
                    variant="elevated"
                    title="Click Me"
                    description="This card has an onClick handler that can trigger custom actions."
                    icon="👆"
                    className="cursor-pointer hover:ring-2 hover:ring-primary-400/50 dark:hover:ring-primary-500/30"
                    onClick={() => alert('Card clicked!')}
                  />
                </div>                <div>
                  <h4 className="font-heading font-medium text-lg text-neutral-950 dark:text-white mb-3">Dynamic Theme Switching</h4>
                  <ThemeCard 
                    variant="bordered"
                    theme="colorful"
                    title="Theme Switcher"
                    description="This card showcases our vibrant colorful theme with bordered variant."
                    icon="🎨"
                    className="hover:scale-[1.02] transition-transform"
                    onClick={() => alert('This could trigger a theme change in your application!')}
                  />
                </div>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-md overflow-auto mt-6">                <CodeSnippet code={`// Interactive card with theme and onClick handler
<ThemeCard 
  variant="bordered"
  theme="colorful"
  title="Theme Switcher"
  description="Dynamic theme switching card"
  icon="🎨"
  className="hover:scale-[1.02] transition-transform"
  onClick={() => handleThemeChange()}
/>`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
