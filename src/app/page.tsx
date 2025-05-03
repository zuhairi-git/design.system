import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ColorCard from "@/components/ColorCard";
import TypographyCard from "@/components/TypographyCard";
import AnimatedSection from "@/components/AnimatedSection";
import ColorExtractor from "@/components/ColorExtractor";
import FeatureCard from "@/components/FeatureCard";
import FixCardLinks from "@/components/FixCardLinks";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <FixCardLinks />      
      <Header title="Alux Design System" />        <div className="flex flex-1 pt-0 relative">
        <Sidebar />
        
        <main className="flex-1 w-full p-0 md:pl-[280px] overflow-x-hidden max-w-[100vw]">          {/* Overview Section */}          <AnimatedSection id="overview" className="px-4 sm:px-6 py-10 sm:py-12 md:px-10 lg:px-20" animation="slide-up">
            <div className="w-full">
              <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-neutral-950 dark:text-white mb-4 sm:mb-6">
                Alux Design System
              </h1>
              
              <p className="font-body text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mb-8 sm:mb-12">
                A comprehensive design system featuring a complete set of guidelines, components, and resources to create consistent and beautiful user interfaces.
              </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fade-in">
                {[
                  {
                    title: "Colors",
                    description: "Complete color palette including primary, accent, and semantic colors",
                    link: "#colors",
                    icon: "🎨"
                  },
                  {
                    title: "Typography",
                    description: "Font styles and hierarchy for all text elements",
                    link: "#typography",
                    icon: "✍️"
                  },
                  {
                    title: "Spacing",
                    description: "4-point grid system for consistent spacing",
                    link: "#spacing",
                    icon: "📏"
                  },
                  {
                    title: "Grids",
                    description: "Layout grids for different screen sizes",
                    link: "#grids",
                    icon: "🔲"
                  },
                  {
                    title: "Breakpoints",
                    description: "Responsive breakpoints for different devices",
                    link: "#breakpoints",
                    icon: "📱"
                  },
                  {
                    title: "Drop Shadows",
                    description: "Shadow styles for elevation and depth",
                    link: "#shadows",
                    icon: "👥"
                  },
                  {
                    title: "Tints",
                    description: "Transparent layers for highlighting elements",
                    link: "#tints",
                    icon: "🖌️"
                  }
                ].map((item, index) => (
                  <FeatureCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          {/* Colors Section */}
          <AnimatedSection id="colors" className="px-4 sm:px-6 py-10 sm:py-12 md:px-10 lg:px-20 bg-neutral-50 dark:bg-neutral-900/30" animation="fade-in">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-neutral-950 dark:text-white mb-4">Colors</h2>
              <p className="font-body text-neutral-700 dark:text-neutral-300 mb-10 max-w-3xl">
                Our color system is designed to be accessible and flexible, with theme-specific palettes for light, dark, and colorful modes.
              </p>
              
              <ColorExtractor 
                title="Color Picker" 
                description="Upload or drag an image to extract its color palette" 
              />
              
              <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mt-12 mb-4">Light Theme</h3>
              <p className="font-body text-neutral-700 dark:text-neutral-300 mb-6">Clean and professional color palette for default light mode.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <ColorCard 
                  shade="Background" 
                  color="bg-white" 
                  name="#ffffff"
                />
                <ColorCard 
                  shade="Foreground" 
                  color="text-neutral-800"
                  name="#1f2937"
                />
                <ColorCard 
                  shade="Primary" 
                  color="text-blue-500"
                  name="#3b82f6"
                />
                <ColorCard 
                  shade="Primary Hover" 
                  color="text-blue-600"
                  name="#2563eb"
                />
                <ColorCard 
                  shade="Primary Glow" 
                  color="shadow-blue-200/20"
                  name="rgba(59, 130, 246, 0.2)"
                />
                <div className="col-span-1 md:col-span-3 card overflow-hidden p-0">
                  <div 
                    className="h-24 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                  ></div>
                  <div className="p-3 bg-white dark:bg-neutral-800">
                    <p className="font-body text-sm font-medium text-neutral-950 dark:text-white">Gradient</p>
                    <p className="font-body text-xs text-neutral-700 dark:text-neutral-400">from #3b82f6 via #a855f7 to #3b82f6</p>
                  </div>
                </div>
              </div>
              
              <h4 className="font-heading font-medium text-lg text-neutral-950 dark:text-white mt-8 mb-3">Card Styling</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <ColorCard 
                  shade="Card From" 
                  color="bg-neutral-50/90"
                  name="rgba(253, 253, 253, 0.9)"
                />
                <ColorCard 
                  shade="Card To" 
                  color="bg-neutral-100/90"
                  name="rgba(243, 244, 246, 0.9)"
                />
                <ColorCard 
                  shade="Card Border" 
                  color="border-neutral-200/50"
                  name="rgba(229, 231, 235, 0.5)"
                />
                <ColorCard 
                  shade="Card Border Hover" 
                  color="border-blue-300/50"
                  name="rgba(96, 165, 250, 0.5)"
                />
                <ColorCard 
                  shade="Card Shadow" 
                  color="shadow-purple-500/10"
                  name="rgba(168, 85, 247, 0.1)"
                />
              </div>

              <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mt-12 mb-4">Dark Theme</h3>
              <p className="font-body text-neutral-700 dark:text-neutral-300 mb-6">Sophisticated dark palette for late night browsing.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <ColorCard 
                  shade="Background" 
                  color="bg-neutral-900" 
                  name="#0a0a0a"
                />
                <ColorCard 
                  shade="Foreground" 
                  color="text-neutral-100"
                  name="#ededed"
                />
                <ColorCard 
                  shade="Primary" 
                  color="text-blue-500"
                  name="#3b82f6"
                />
                <ColorCard 
                  shade="Primary Hover" 
                  color="text-blue-600"
                  name="#2563eb"
                />
                <ColorCard 
                  shade="Primary Glow" 
                  color="shadow-blue-500/20"
                  name="rgba(59, 130, 246, 0.2)"
                />
                <div className="col-span-1 md:col-span-3 card overflow-hidden p-0">
                  <div 
                    className="h-24 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                  ></div>
                  <div className="p-3 bg-white dark:bg-neutral-800">
                    <p className="font-body text-sm font-medium text-neutral-950 dark:text-white">Gradient</p>
                    <p className="font-body text-xs text-neutral-700 dark:text-neutral-400">from #3b82f6 via #a855f7 to #3b82f6</p>
                  </div>
                </div>
              </div>
              
              <h4 className="font-heading font-medium text-lg text-neutral-950 dark:text-white mt-8 mb-3">Card Styling</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <ColorCard 
                  shade="Card From" 
                  color="bg-neutral-800/90"
                  name="rgba(31, 41, 55, 0.9)"
                />
                <ColorCard 
                  shade="Card To" 
                  color="bg-neutral-900/90"
                  name="rgba(17, 24, 39, 0.9)"
                />
                <ColorCard 
                  shade="Card Border" 
                  color="border-neutral-600/50"
                  name="rgba(75, 85, 99, 0.5)"
                />
                <ColorCard 
                  shade="Card Border Hover" 
                  color="border-blue-300/50"
                  name="rgba(96, 165, 250, 0.5)"
                />
                <ColorCard 
                  shade="Card Shadow" 
                  color="shadow-blue-500/20"
                  name="rgba(59, 130, 246, 0.2)"
                />
              </div>
              
              <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mt-12 mb-4">Colorful Theme</h3>
              <p className="font-body text-neutral-700 dark:text-neutral-300 mb-6">Vibrant cosmic-inspired palette for creative applications.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <ColorCard 
                  shade="Background" 
                  color="bg-indigo-950" 
                  name="#050023"
                />
                <ColorCard 
                  shade="Foreground" 
                  color="text-blue-50"
                  name="#f0f8ff"
                />
                <ColorCard 
                  shade="Primary" 
                  color="text-pink-600"
                  name="#ff00cc"
                />
                <ColorCard 
                  shade="Primary Hover" 
                  color="text-fuchsia-600"
                  name="#d100ff"
                />
                <ColorCard 
                  shade="Primary Glow" 
                  color="shadow-pink-600/30"
                  name="rgba(255, 0, 204, 0.3)"
                />
                <div className="col-span-1 md:col-span-3 card overflow-hidden p-0">
                  <div 
                    className="h-24 w-full bg-gradient-to-r from-cyan-400 via-pink-500 to-blue-500"
                    style={{ background: "linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)" }}
                  ></div>
                  <div className="p-3 bg-white dark:bg-neutral-800">
                    <p className="font-body text-sm font-medium text-neutral-950 dark:text-white">Cosmic Gradient</p>
                    <p className="font-body text-xs text-neutral-700 dark:text-neutral-400">linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)</p>
                  </div>
                </div>
              </div>
              
              <h4 className="font-heading font-medium text-lg text-neutral-950 dark:text-white mt-8 mb-3">Card Styling</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <ColorCard 
                  shade="Card From" 
                  color="bg-indigo-900/80"
                  name="rgba(20, 10, 50, 0.8)"
                />
                <ColorCard 
                  shade="Card To" 
                  color="bg-indigo-950/80"
                  name="rgba(10, 5, 30, 0.8)"
                />
                <ColorCard 
                  shade="Card Border" 
                  color="border-purple-500/30"
                  name="rgba(128, 0, 255, 0.3)"
                />
                <ColorCard 
                  shade="Card Border Hover" 
                  color="border-cyan-400/60"
                  name="rgba(0, 255, 255, 0.6)"
                />
                <ColorCard 
                  shade="Card Shadow" 
                  color="shadow-pink-600/30"
                  name="rgba(255, 0, 204, 0.3)"
                />
                <ColorCard 
                  shade="Text Accent" 
                  color="text-pink-600"
                  name="#ff00cc"
                />
              </div>
            </div>
          </AnimatedSection>
            {/* Typography Section */}
          <AnimatedSection id="typography" className="px-4 sm:px-6 py-10 sm:py-12 md:px-10 lg:px-20" animation="fade-in">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-neutral-950 dark:text-white mb-4">Typography</h2>
              <p className="font-body text-neutral-700 dark:text-neutral-300 mb-10 max-w-3xl">
                Our typography system uses Poppins for headings, Roboto for body text, and Tajawal for Arabic content, 
                providing a clean and readable experience across different languages.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                <TypographyCard
                  title="Display"
                  description="Used for hero sections and prominent headlines"
                  fontFamily="Poppins"
                  fontWeight="700"
                  fontSize="48px"
                  lineHeight="1.2"
                  sampleText="The quick brown fox jumps over the lazy dog"
                  language="en"
                />
                
                <TypographyCard
                  title="Heading 1"
                  description="Main section headings"
                  fontFamily="Poppins"
                  fontWeight="700"
                  fontSize="36px"
                  lineHeight="1.3"
                  sampleText="The quick brown fox jumps over the lazy dog"
                  language="en"
                />
                
                <TypographyCard
                  title="Heading 2"
                  description="Sub-section headings"
                  fontFamily="Poppins"
                  fontWeight="700"
                  fontSize="30px"
                  lineHeight="1.3"
                  sampleText="The quick brown fox jumps over the lazy dog"
                  language="en"
                />
                
                <TypographyCard
                  title="Heading 3"
                  description="Component and group headings"
                  fontFamily="Poppins"
                  fontWeight="600"
                  fontSize="24px"
                  lineHeight="1.4"
                  sampleText="The quick brown fox jumps over the lazy dog"
                  language="en"
                />
                
                <TypographyCard
                  title="Heading 4"
                  description="Card and content area headings"
                  fontFamily="Poppins"
                  fontWeight="600"
                  fontSize="20px"
                  lineHeight="1.4"
                  sampleText="The quick brown fox jumps over the lazy dog"
                  language="en"
                />
                
                <TypographyCard
                  title="Body Large"
                  description="Lead paragraphs and important content"
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="18px"
                  lineHeight="1.6"
                  sampleText="The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
                  language="en"
                />
                
                <TypographyCard
                  title="Body"
                  description="Standard body text"
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="1.5"
                  sampleText="The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
                  language="en"
                />
                
                <TypographyCard
                  title="Body Small"
                  description="Captions and supporting text"
                  fontFamily="Roboto"
                  fontWeight="400"
                  fontSize="14px"
                  lineHeight="1.5"
                  sampleText="The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  language="en"
                />
                
                <TypographyCard
                  title="عنوان رئيسي"
                  description="Arabic main heading"
                  fontFamily="Tajawal"
                  fontWeight="700"
                  fontSize="36px"
                  lineHeight="1.3"
                  sampleText="الثعلب البني السريع يقفز فوق الكلب الكسول"
                  language="ar"
                />
                
                <TypographyCard
                  title="نص عربي"
                  description="Arabic body text"
                  fontFamily="Tajawal"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="1.5"
                  sampleText="الثعلب البني السريع يقفز فوق الكلب الكسول. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة."
                  language="ar"
                />              </div>
            </div>
          </AnimatedSection>
            {/* Spacing Section */}
          <AnimatedSection id="spacing" className="px-4 sm:px-6 py-10 sm:py-12 md:px-10 lg:px-20 bg-neutral-50 dark:bg-neutral-900/30" animation="fade-in">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-neutral-950 dark:text-white mb-4">Spacing</h2>
              <p className="font-body text-neutral-700 dark:text-neutral-300 mb-10 max-w-3xl">
                Our spacing system follows a 4-point grid, providing consistent spacing across the UI.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[4, 8, 12, 16, 20, 24, 32, 40, 48, 64].map((space, index) => (
                  <div key={index} className="card p-5">
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-heading font-semibold text-neutral-950 dark:text-white">{space}px</p>
                      <p className="font-body text-sm text-neutral-700 dark:text-neutral-400">Space {index + 1}</p>
                    </div>
                    <div className="bg-primary-100 dark:bg-primary-900 h-20 w-full flex items-center justify-center">
                      <div 
                        className="bg-primary-700 dark:bg-primary-400"
                        style={{ width: `${space}px`, height: `${space}px` }}
                      ></div>
                    </div>
                  </div>
                ))}              </div>            </div>
          </AnimatedSection>
            {/* Breakpoints Section */}
          <AnimatedSection id="breakpoints" className="px-4 sm:px-6 py-10 sm:py-12 md:px-10 lg:px-20" animation="slide-up">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-neutral-950 dark:text-white mb-4">Breakpoints</h2>
              <p className="font-body text-neutral-700 dark:text-neutral-300 mb-10 max-w-3xl">
                Our responsive breakpoints ensure layouts adapt seamlessly across different screen sizes.
              </p>
              
              <div className="space-y-6">
                {[
                  { name: "Small (Mobile)", size: "< 640px", description: "Single column layouts with stacked elements" },
                  { name: "Medium (Tablet)", size: "≥ 640px", description: "Two column layouts begin to appear" },
                  { name: "Large (Laptop)", size: "≥ 1024px", description: "Multi-column layouts with more complex components" },
                  { name: "X-Large (Desktop)", size: "≥ 1280px", description: "Full layouts with optimal spacing and density" }
                ].map((breakpoint, index) => (
                  <div key={index} className="card p-6 hover-scale">
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-neutral-950 dark:text-white">{breakpoint.name}</h3>
                        <p className="font-body text-primary-700 dark:text-primary-400 font-medium">{breakpoint.size}</p>
                      </div>
                      <p className="font-body mt-2 md:mt-0 text-neutral-700 dark:text-neutral-400">{breakpoint.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
            {/* Shadows Section */}
          <AnimatedSection id="shadows" className="px-4 sm:px-6 py-10 sm:py-12 md:px-10 lg:px-20 bg-neutral-50 dark:bg-neutral-900/30" animation="slide-up">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-neutral-950 dark:text-white mb-4">Drop Shadows</h2>
              <p className="font-body text-neutral-700 dark:text-neutral-300 mb-10 max-w-3xl">
                Our shadow system creates depth and elevation in the interface.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Shadow Small", value: "0px 1px 2px rgba(0, 0, 0, 0.05)" },
                  { name: "Shadow Medium", value: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)" },
                  { name: "Shadow Large", value: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)" },
                  { name: "Shadow X-Large", value: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)" }
                ].map((shadow, index) => (
                  <div key={index} className="hover-scale">
                    <div 
                      className="h-40 bg-white dark:bg-neutral-800 rounded-lg mb-4 flex items-center justify-center"
                      style={{ boxShadow: shadow.value }}
                    >
                      <span className="font-body text-neutral-500 dark:text-neutral-400">
                        {shadow.name}
                      </span>
                    </div>
                    <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 font-medium mb-1">{shadow.name}</p>
                    <p className="font-body text-xs text-neutral-600 dark:text-neutral-400 break-words">{shadow.value}</p>
                  </div>
                ))}
              </div>
            </div>          </AnimatedSection>
          
          {/* Tints Section */}
          <AnimatedSection id="tints" className="px-4 sm:px-6 py-10 sm:py-12 md:px-10 lg:px-20" animation="slide-up">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-neutral-950 dark:text-white mb-4">Tints</h2>
              <p className="font-body text-neutral-700 dark:text-neutral-300 mb-10 max-w-3xl">
                Our tint system provides transparent overlays for various UI elements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Primary Light", color: "rgba(30, 104, 128, 0.1)", textColor: "text-primary-900" },
                  { name: "Primary Medium", color: "rgba(30, 104, 128, 0.2)", textColor: "text-primary-900" },
                  { name: "Primary Dark", color: "rgba(30, 104, 128, 0.4)", textColor: "text-white" },
                  { name: "Accent Light", color: "rgba(254, 73, 17, 0.1)", textColor: "text-accent-900" },
                  { name: "Accent Medium", color: "rgba(254, 73, 17, 0.2)", textColor: "text-accent-900" },
                  { name: "Accent Dark", color: "rgba(254, 73, 17, 0.4)", textColor: "text-white" },
                ].map((tint, index) => (
                  <div key={index} className="hover-scale">
                    <div 
                      className="h-32 rounded-lg mb-4 flex items-center justify-center"
                      style={{ backgroundColor: tint.color }}
                    >
                      <span className={`font-body font-medium ${tint.textColor}`}>
                        {tint.name}
                      </span>
                    </div>                    <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 font-medium">{tint.name}</p>
                    <p className="font-body text-xs text-neutral-600 dark:text-neutral-400">{tint.color}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </main>
      </div>
      
      <footer className="bg-neutral-950 text-white py-10 px-6 md:px-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-heading font-bold text-xl mb-2">Alux Design System</h2>
            <p className="font-body text-neutral-400 text-sm">© {new Date().getFullYear()} All rights reserved</p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#overview" className="font-body text-neutral-300 hover:text-white transition-colors">Overview</a>
            <a href="#colors" className="font-body text-neutral-300 hover:text-white transition-colors">Colors</a>
            <a href="#typography" className="font-body text-neutral-300 hover:text-white transition-colors">Typography</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
