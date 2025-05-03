import { Suspense } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ColorCard from "@/components/ColorCard";
import TypographyCard from "@/components/TypographyCard";
import AnimatedSection from "@/components/AnimatedSection";
import ColorExtractor from "@/components/ColorExtractor";
import ColorPalette from "@/components/ColorPalette";
import CodeSnippet from "@/components/CodeSnippet";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Alux Design System" />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-0 md:ml-[280px]">
          {/* Overview Section */}
          <AnimatedSection id="overview" className="px-6 py-12 md:px-10 lg:px-20" animation="slide-up">
            <div className="max-w-7xl mx-auto">
              <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-950 dark:text-white mb-6">
                Alux Design System
              </h1>
              
              <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mb-12">
                A comprehensive design system featuring a complete set of guidelines, components, and resources to create consistent and beautiful user interfaces.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
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
                  },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="card hover-scale p-6 transition-all relative overflow-hidden group"
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h2 className="font-heading font-bold text-xl text-primary-700 dark:text-primary-400 mb-2">{item.title}</h2>
                    <p className="font-body text-neutral-700 dark:text-neutral-400 mb-6">{item.description}</p>
                    <a 
                      href={item.link}
                      className="font-body text-sm font-medium text-primary-700 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center"
                    >
                      View {item.title} <span className="ml-1">→</span>
                    </a>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          {/* Colors Section */}
          <AnimatedSection id="colors" className="px-6 py-12 md:px-10 lg:px-20 bg-neutral-50 dark:bg-neutral-900/30" animation="fade-in">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-neutral-950 dark:text-white mb-4">Colors</h2>
              <p className="font-body text-neutral-700 dark:text-neutral-300 mb-10 max-w-3xl">
                Our color system is designed to be accessible and flexible, with a range of primary, accent, and semantic colors.
              </p>
              
              <ColorExtractor 
                title="Color Picker" 
                description="Upload or drag an image to extract its color palette" 
              />
              
              <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mt-12 mb-4">Primary Colors</h3>
              <p className="font-body text-neutral-700 dark:text-neutral-300 mb-6">Used for primary brand elements and interactive components.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-10">
                {[
                  { shade: "50", color: "#eefbfd" },
                  { shade: "100", color: "#d5f4f8" },
                  { shade: "200", color: "#b0e8f1" },
                  { shade: "300", color: "#79d6e7" },
                  { shade: "400", color: "#3fbcd5" },
                  { shade: "500", color: "#209fba" },
                  { shade: "600", color: "#16809d" },
                  { shade: "700", color: "#1e6880" },
                  { shade: "800", color: "#215669" },
                  { shade: "900", color: "#204859" },
                  { shade: "950", color: "#102e3c" },
                ].map((item, index) => (
                  <ColorCard 
                    key={index} 
                    shade={item.shade} 
                    color={`primary-${item.shade}`}
                    name={item.color}
                  />
                ))}
              </div>
              
              <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mt-10 mb-4">Accent Colors</h3>
              <p className="font-body text-neutral-700 dark:text-neutral-300 mb-6">Used to emphasize secondary actions and highlight information.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-10">
                {[
                  { shade: "50", color: "#fff4ed" },
                  { shade: "100", color: "#ffe5d4" },
                  { shade: "200", color: "#ffc8a8" },
                  { shade: "300", color: "#ffa171" },
                  { shade: "400", color: "#ff6429" },
                  { shade: "500", color: "#fe4911" },
                  { shade: "600", color: "#ef2107" },
                  { shade: "700", color: "#c61e08" },
                  { shade: "800", color: "#9d1a0f" },
                  { shade: "900", color: "#7e1910" },
                  { shade: "950", color: "#440806" },
                ].map((item, index) => (
                  <ColorCard 
                    key={index} 
                    shade={item.shade} 
                    color={`accent-${item.shade}`}
                    name={item.color}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          {/* Typography Section */}
          <section id="typography" className="px-6 py-12 md:px-10 lg:px-20">
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
                />
              </div>
            </div>
          </section>
          
          {/* Spacing Section */}
          <section id="spacing" className="px-6 py-12 md:px-10 lg:px-20 bg-neutral-50 dark:bg-neutral-900/30">
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
                ))}
              </div>
            </div>
          </section>
          
          {/* Breakpoints Section */}
          <section id="breakpoints" className="px-6 py-12 md:px-10 lg:px-20">
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
          </section>
          
          {/* Shadows Section */}
          <section id="shadows" className="px-6 py-12 md:px-10 lg:px-20 bg-neutral-50 dark:bg-neutral-900/30">
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
            </div>
          </section>
          
          {/* Tints Section */}
          <section id="tints" className="px-6 py-12 md:px-10 lg:px-20">
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
                    </div>
                    <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 font-medium">{tint.name}</p>
                    <p className="font-body text-xs text-neutral-600 dark:text-neutral-400">{tint.color}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <footer className="bg-neutral-950 text-white py-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
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
