import AnimatedSection from "@/components/AnimatedSection";

export default function TintsSection() {
  return (
    <AnimatedSection id="tints" className="ds-section" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="section-label text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30">
            <span className="mr-2">🖌️</span> Transparency System
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 dark:text-white tracking-tight mb-4">Tints</h2>
          <p className="font-body text-lg text-neutral-500 dark:text-neutral-400 max-w-3xl">
            Our tint system provides transparent overlays for various UI elements.
          </p>
        </div>
        
        <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 mb-6">
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
