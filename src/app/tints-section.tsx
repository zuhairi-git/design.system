import AnimatedSection from "@/components/AnimatedSection";

export default function TintsSection() {
  return (
    <AnimatedSection id="tints" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <span className="mr-2">🖌️</span> Transparency System
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Tints</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Our tint system provides transparent overlays for various UI elements.
          </p>
        </div>
        
        <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm p-8 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Primary Light", color: "rgba(30, 104, 128, 0.1)", textColor: "text-primary-900 dark:text-primary-700", usage: "Subtle backgrounds" },
              { name: "Primary Medium", color: "rgba(30, 104, 128, 0.2)", textColor: "text-primary-900 dark:text-primary-700", usage: "Highlighted areas" },
              { name: "Primary Dark", color: "rgba(30, 104, 128, 0.4)", textColor: "text-white", usage: "Strong emphasis" },
              { name: "Accent Light", color: "rgba(254, 73, 17, 0.1)", textColor: "text-accent-900", usage: "Subtle accents" },
              { name: "Accent Medium", color: "rgba(254, 73, 17, 0.2)", textColor: "text-accent-900", usage: "Highlighted accents" },
              { name: "Accent Dark", color: "rgba(254, 73, 17, 0.4)", textColor: "text-white", usage: "Strong accent emphasis" },
            ].map((tint, index) => (
              <div key={index} className="hover:-translate-y-1 transition-all duration-300">
                <div 
                  className="h-40 rounded-xl mb-4 flex items-center justify-center shadow-md overflow-hidden"
                  style={{ backgroundColor: tint.color }}
                >
                  <div className="text-center p-4 backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-lg">
                    <span className={`font-heading font-medium ${tint.textColor} block mb-2`}>
                      {tint.name}
                    </span>
                    <span className={`font-body text-xs opacity-80 ${tint.textColor}`}>
                      {tint.usage}
                    </span>
                  </div>
                </div>
                <div className="px-1">
                  <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 font-medium mb-1">{tint.name}</p>
                  <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400">{tint.color}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
