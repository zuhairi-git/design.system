// File: src/app/media-cards.tsx
import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import ImageIcon from '@mui/icons-material/Image';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Image from 'next/image';
import { getCardBackground } from "@/utils/cardThemes";

// Media Card component with theme support
interface MediaCardProps {
  title: string;
  description: string;
  imagePath: string;
  theme: 'light' | 'dark' | 'colorful';
  variant?: 'basic' | 'overlay' | 'horizontal';
}

function MediaCard({ title, description, imagePath, theme, variant = 'basic' }: MediaCardProps) {
  // Get card styles based on theme and variant
  const getCardStyles = () => {
    if (theme === 'colorful') {
      return 'bg-[#1a0033] border-[rgba(128,0,255,0.7)] shadow-[0_4px_16px_rgba(255,0,204,0.25)]';
    } else if (theme === 'dark') {
      return variant !== 'overlay' ? 'bg-[#18181b] border-neutral-600 shadow-lg' : '';
    } else {
      return variant !== 'overlay' ? 'bg-white border-neutral-300 shadow-md' : '';
    }
  };

  // Get text styles based on theme and variant
  const getTitleStyles = () => {
    if (variant === 'overlay') {
      return 'text-white drop-shadow-md';
    } else if (theme === 'colorful') {
      return 'text-white';
    } else if (theme === 'dark') {
      return 'text-white';
    }
    return 'text-neutral-900';
  };

  const getDescriptionStyles = () => {
    if (variant === 'overlay') {
      return 'text-white/90 drop-shadow-md';
    } else if (theme === 'colorful') {
      return 'text-white/90';
    } else if (theme === 'dark') {
      return 'text-neutral-200';
    }
    return 'text-neutral-700';
  };

  const getBgOverlayStyles = () => {
    if (variant === 'overlay') {
      if (theme === 'colorful') {
        return 'bg-gradient-to-t from-[rgba(10,5,30,0.8)] to-transparent';
      } else if (theme === 'dark') {
        return 'bg-gradient-to-t from-neutral-900/90 to-transparent';
      } else {
        return 'bg-gradient-to-t from-black/60 to-transparent';
      }
    }
    return '';
  };

  const bgStyle = theme === 'colorful' && variant !== 'overlay' ? getCardBackground('colorful') : {};

  // Get variant-specific layout
  const getLayout = () => {
    switch (variant) {
      case 'overlay':
        return (
          <div className="relative rounded-xl shadow-md overflow-hidden group h-64">
            <div className="absolute inset-0">
              <Image 
                src={imagePath}
                alt={title}
                fill
                style={{objectFit: "cover"}}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className={`absolute inset-0 ${getBgOverlayStyles()}`}></div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className={`font-heading text-lg font-medium mb-1.5 ${getTitleStyles()}`}>{title}</h3>
              <p className={`font-body text-sm ${getDescriptionStyles()}`}>
                {description}
              </p>
            </div>
          </div>
        );
      
      case 'horizontal':
        return (
          <div className={`rounded-xl border overflow-hidden ${getCardStyles()} flex flex-col md:flex-row`} style={bgStyle}>
            <div className="relative md:w-48 h-48 md:h-auto">
              <Image 
                src={imagePath}
                alt={title}
                fill
                style={{objectFit: "cover"}}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 flex-1">
              <h3 className={`font-heading text-lg font-medium mb-2 ${getTitleStyles()}`}>{title}</h3>
              <p className={`font-body text-sm ${getDescriptionStyles()}`}>
                {description}
              </p>
            </div>
          </div>
        );
      
      default: // basic
        return (
          <div className={`rounded-xl overflow-hidden group ${getCardStyles()}`} style={bgStyle}>
            <div className="relative h-48 w-full overflow-hidden">
              <Image 
                src={imagePath}
                alt={title}
                fill
                style={{objectFit: "cover"}}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className={`font-heading text-lg font-medium mb-2 ${getTitleStyles()}`}>{title}</h3>
              <p className={`font-body text-sm ${getDescriptionStyles()}`}>
                {description}
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div className="relative">{getLayout()}</div>
      {theme === 'colorful' && variant !== 'overlay' && (
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)",
          opacity: 0.10,
          mixBlendMode: 'overlay'
        }} />
      )}
    </>
  );
}

export default function MediaCardsSection() {
  return (
    <AnimatedSection id="media-cards" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950/60 dark:to-neutral-900" animation="fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <ImageIcon className="mr-2" fontSize="small" /> Rich Media
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Media Cards</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Cards designed to showcase images, videos, and other rich media content - available in Light, Dark, and Colorful themes.
          </p>
        </div>

        {/* Light theme media cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <LightModeIcon className="mr-2 text-amber-500" />
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">Light Theme Media Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <MediaCard 
              theme="light"
              variant="basic"
              title="Basic Image Card"
              description="Simple card with an image at the top and content below."
              imagePath="/img/brooke-lark-lcZ9NxhOSlo-unsplash.jpg"
            />
            <MediaCard 
              theme="light"
              variant="overlay"
              title="Overlay Text Card"
              description="Card with text overlay on the image for a more dramatic effect."
              imagePath="/img/brooke-lark-pXEsx3kRuNc-unsplash.jpg"
            />
            <MediaCard 
              theme="light"
              variant="horizontal"
              title="Horizontal Card"
              description="Card with image on the side for a balanced layout."
              imagePath="/img/brooke-lark-V4MBq8kue3U-unsplash.jpg"
            />
          </div>
        </div>
        
        {/* Dark theme media cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <DarkModeIcon className="mr-2 text-blue-500" />
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">Dark Theme Media Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <MediaCard 
              theme="dark"
              variant="basic"
              title="Basic Image Card"
              description="Simple card with an image at the top and content below."
              imagePath="/img/brooke-lark-lcZ9NxhOSlo-unsplash.jpg"
            />
            <MediaCard 
              theme="dark"
              variant="overlay"
              title="Overlay Text Card"
              description="Card with text overlay on the image for a more dramatic effect."
              imagePath="/img/brooke-lark-pXEsx3kRuNc-unsplash.jpg"
            />
            <MediaCard 
              theme="dark"
              variant="horizontal"
              title="Horizontal Card"
              description="Card with image on the side for a balanced layout."
              imagePath="/img/brooke-lark-V4MBq8kue3U-unsplash.jpg"
            />
          </div>
        </div>
        
        {/* Colorful theme media cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <AutoAwesomeIcon className="mr-2 text-fuchsia-500" />
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">Colorful Theme Media Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <MediaCard 
              theme="colorful"
              variant="basic"
              title="Basic Image Card"
              description="Simple card with an image at the top and content below."
              imagePath="/img/brooke-lark-lcZ9NxhOSlo-unsplash.jpg"
            />
            <MediaCard 
              theme="colorful"
              variant="overlay"
              title="Overlay Text Card"
              description="Card with text overlay on the image for a more dramatic effect."
              imagePath="/img/brooke-lark-pXEsx3kRuNc-unsplash.jpg"
            />
            <MediaCard 
              theme="colorful"
              variant="horizontal"
              title="Horizontal Card"
              description="Card with image on the side for a balanced layout."
              imagePath="/img/brooke-lark-V4MBq8kue3U-unsplash.jpg"
            />
          </div>
        </div>

        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg border border-neutral-200/50 dark:border-neutral-800/50">
          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Code Example</h3>
          <CodeSnippet 
            code={`<MediaCard
  theme="light" // Options: 'light', 'dark', 'colorful'
  variant="basic" // Options: 'basic', 'overlay', 'horizontal'
  title="Card Title"
  description="Card description text"
  imagePath="/path/to/image.jpg"
/>`}
            language="jsx"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
