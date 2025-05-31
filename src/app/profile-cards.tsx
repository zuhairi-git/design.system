// File: src/app/profile-cards.tsx
import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import PersonIcon from '@mui/icons-material/Person';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { getCardBackground } from "@/utils/cardThemes";

// Profile Card component with theme support
interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  theme: 'light' | 'dark' | 'colorful';
  variant?: 'basic' | 'compact' | 'horizontal';
}

function ProfileCard({ name, title, description, theme, variant = 'basic' }: ProfileCardProps) {
  // Get card styles based on theme and variant
  const getCardStyles = () => {
    if (theme === 'colorful') {
      return 'bg-[#1a0033] border-[rgba(128,0,255,0.7)] shadow-[0_4px_16px_rgba(255,0,204,0.25)]';
    } else if (theme === 'dark') {
      return 'bg-[#18181b] border-neutral-600 shadow-lg';
    } else {
      return 'bg-white border-neutral-300 shadow-md';
    }
  };

  // Get avatar styles based on theme
  const getAvatarStyles = () => {
    if (theme === 'colorful') {
      return 'bg-fuchsia-500/10';
    } else if (theme === 'dark') {
      return 'bg-blue-500/10';
    } else {
      return 'bg-blue-500/10';
    }
  };

  // Get text styles based on theme
  const getNameStyles = () => {
    if (theme === 'colorful') return 'text-white';
    if (theme === 'dark') return 'text-white';
    return 'text-neutral-900';
  };

  const getTitleStyles = () => {
    if (theme === 'colorful') return 'text-cyan-300';
    if (theme === 'dark') return 'text-neutral-300';
    return 'text-neutral-500';
  };

  const getDescriptionStyles = () => {
    if (theme === 'colorful') return 'text-white/90';
    if (theme === 'dark') return 'text-neutral-200';
    return 'text-neutral-700';
  };

  // Get social icon styles based on theme
  const getSocialIconStyles = () => {
    if (theme === 'colorful') return 'bg-fuchsia-500/10 text-fuchsia-400';
    if (theme === 'dark') return 'bg-blue-500/10 text-blue-400';
    return 'bg-blue-500/10 text-blue-500';
  };

  const bgStyle = theme === 'colorful' ? getCardBackground('colorful') : {};

  // Get variant-specific layout
  const getLayout = () => {
    switch (variant) {
      case 'compact':
        return (
          <div className={`rounded-xl border overflow-hidden ${getCardStyles()}`} style={bgStyle}>
            <div className="p-5 flex items-center">
              <div className={`w-12 h-12 rounded-full ${getAvatarStyles()} mr-4 overflow-hidden flex items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${theme === 'colorful' ? 'text-fuchsia-400' : theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className={`font-heading text-lg font-medium ${getNameStyles()} mb-0.5`}>{name}</h3>
                <p className={`font-body text-sm ${getTitleStyles()}`}>{title}</p>
              </div>
            </div>
          </div>
        );
      
      case 'horizontal':
        return (
          <div className={`rounded-xl border overflow-hidden ${getCardStyles()}`} style={bgStyle}>
            <div className="flex">
              <div className={`${getAvatarStyles()} w-24 flex items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-10 w-10 ${theme === 'colorful' ? 'text-fuchsia-400' : theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-5">
                <h3 className={`font-heading text-lg font-medium ${getNameStyles()} mb-1`}>{name}</h3>
                <p className={`font-body text-sm ${getTitleStyles()} mb-2`}>{title}</p>
                <p className={`font-body text-sm ${getDescriptionStyles()}`}>{description}</p>
              </div>
            </div>
          </div>
        );
      
      default: // basic
        return (
          <div className={`rounded-xl border overflow-hidden ${getCardStyles()}`} style={bgStyle}>
            <div className="p-6 flex flex-col items-center text-center">
              <div className={`w-24 h-24 rounded-full ${getAvatarStyles()} mb-4 overflow-hidden flex items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-12 w-12 ${theme === 'colorful' ? 'text-fuchsia-400' : theme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className={`font-heading text-lg font-medium ${getNameStyles()} mb-1`}>{name}</h3>
              <p className={`font-body text-sm ${getTitleStyles()} mb-3`}>{title}</p>
              <p className={`font-body text-sm ${getDescriptionStyles()} mb-4`}>{description}</p>
              <div className="flex space-x-3">
                <button className={`p-1.5 rounded-full ${getSocialIconStyles()}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className={`p-1.5 rounded-full ${getSocialIconStyles()}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
                <button className={`p-1.5 rounded-full ${getSocialIconStyles()}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div className="relative">{getLayout()}</div>
      {theme === 'colorful' && (
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(135deg, #3b82f6, #a855f7, #6366f1)",
          opacity: 0.10,
          mixBlendMode: 'overlay'
        }} />
      )}
    </>
  );
}

export default function ProfileCardsSection() {
  return (
    <AnimatedSection id="profile-cards" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950/60 dark:to-neutral-900" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <PersonIcon className="mr-2" fontSize="small" /> User Profiles
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Profile Cards</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Cards designed for displaying user profiles, team members, and contact information - available in Light, Dark, and Colorful themes.
          </p>
        </div>

        {/* Light theme profile cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <LightModeIcon className="mr-2 text-amber-500" />
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">Light Theme Profile Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <ProfileCard
              theme="light"
              variant="basic"
              name="Alex Morgan"
              title="Product Designer"
              description="UI/UX specialist with 5+ years of experience in creating beautiful, functional interfaces."
            />
            <ProfileCard
              theme="light"
              variant="compact"
              name="Jamie Wilson"
              title="Frontend Developer"
              description="Specializes in React and modern JavaScript frameworks"
            />
            <ProfileCard
              theme="light"
              variant="horizontal"
              name="Casey Taylor"
              title="UX Researcher"
              description="Creating user-centered designs through research and testing"
            />
          </div>
        </div>
        
        {/* Dark theme profile cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <DarkModeIcon className="mr-2 text-blue-500" />
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">Dark Theme Profile Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <ProfileCard
              theme="dark"
              variant="basic"
              name="Alex Morgan"
              title="Product Designer"
              description="UI/UX specialist with 5+ years of experience in creating beautiful, functional interfaces."
            />
            <ProfileCard
              theme="dark"
              variant="compact"
              name="Jamie Wilson"
              title="Frontend Developer"
              description="Specializes in React and modern JavaScript frameworks"
            />
            <ProfileCard
              theme="dark"
              variant="horizontal"
              name="Casey Taylor"
              title="UX Researcher"
              description="Creating user-centered designs through research and testing"
            />
          </div>
        </div>
        
        {/* Colorful theme profile cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <AutoAwesomeIcon className="mr-2 text-fuchsia-500" />
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">Colorful Theme Profile Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <ProfileCard
              theme="colorful"
              variant="basic"
              name="Alex Morgan"
              title="Product Designer"
              description="UI/UX specialist with 5+ years of experience in creating beautiful, functional interfaces."
            />
            <ProfileCard
              theme="colorful"
              variant="compact"
              name="Jamie Wilson"
              title="Frontend Developer"
              description="Specializes in React and modern JavaScript frameworks"
            />
            <ProfileCard
              theme="colorful"
              variant="horizontal"
              name="Casey Taylor"
              title="UX Researcher"
              description="Creating user-centered designs through research and testing"
            />
          </div>
        </div>

        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg border border-neutral-200/50 dark:border-neutral-800/50">
          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Code Example</h3>
          <CodeSnippet 
            code={`<ProfileCard
  theme="light" // Options: 'light', 'dark', 'colorful'
  variant="basic" // Options: 'basic', 'compact', 'horizontal'
  name="Alex Morgan"
  title="Product Designer"
  description="UI/UX specialist with experience in creating interfaces."
/>`}
            language="jsx"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
