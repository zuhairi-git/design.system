// File: src/app/timeline-cards.tsx
import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import TimelineCard from "@/components/TimelineCard";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function TimelineCardsSection() {
  return (
    <AnimatedSection id="timeline-cards" className="ds-section" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="section-label text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30">
            <RocketLaunchIcon className="mr-2" fontSize="small" /> Timeline Cards
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 dark:text-white tracking-tight mb-4">Timeline Cards</h2>
          <p className="font-body text-lg text-neutral-500 dark:text-neutral-400 max-w-3xl">
            Cards designed for showing professional experience, career timelines, or event histories across different themes.
          </p>
        </div>

        {/* Light theme timeline card */}
        <div className="mb-14">
          <div className="flex items-center mb-4">
            <LightModeIcon className="mr-2 text-amber-500" />
            <h3 className="font-heading font-semibold text-lg text-neutral-900 dark:text-white">Light Theme Timeline Card</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <TimelineCard
              theme="light"
              materialIcon={RocketLaunchIcon}
              title="Product Designer | Product Owner"
              date="2023 – Present"
              location="Webropol, Helsinki, Finland"
              description="Product vision, specifying features, prototyping, and handing off design system to developers."
            />
          </div>
        </div>
        
        {/* Dark theme timeline card */}
        <div className="mb-14">
          <div className="flex items-center mb-4">
            <DarkModeIcon className="mr-2 text-blue-500" />
            <h3 className="font-heading font-semibold text-lg text-neutral-900 dark:text-white">Dark Theme Timeline Card</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <TimelineCard
              theme="dark"
              materialIcon={RocketLaunchIcon}
              title="Product Designer | Product Owner"
              date="2023 – Present"
              location="Webropol, Helsinki, Finland"
              description="Product vision, specifying features, prototyping, and handing off design system to developers."
            />
          </div>
        </div>
        
        {/* Colorful theme timeline card */}
        <div className="mb-14">
          <div className="flex items-center mb-4">
            <AutoAwesomeIcon className="mr-2 text-fuchsia-500" />
            <h3 className="font-heading font-semibold text-lg text-neutral-900 dark:text-white">Colorful Theme Timeline Card</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <TimelineCard
              theme="colorful"
              materialIcon={RocketLaunchIcon}
              title="Product Designer | Product Owner"
              date="2023 – Present"
              location="Webropol, Helsinki, Finland"
              description="Product vision, specifying features, prototyping, and handing off design system to developers."
            />
          </div>
        </div>

        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg border border-neutral-200/50 dark:border-neutral-800/50">
          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Code Example</h3>          <CodeSnippet 
            code={`<TimelineCard
  theme="light" // Options: 'light', 'dark', 'colorful'
  materialIcon={RocketLaunchIcon} // Material UI icon (when using this, the icon prop becomes optional)
  title="Product Designer | Product Owner"
  date="2023 – Present"
  location="Webropol, Helsinki, Finland"
  description="Product vision, specifying features, prototyping, and handing off design system to developers."
/>`}
            language="jsx"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
