// File: src/app/media-cards.tsx
import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import ImageIcon from '@mui/icons-material/Image';
import Image from 'next/image';

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
            Cards designed to showcase images, videos, and other rich media content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Basic Image Card */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700 group">
            <div className="relative h-48 w-full overflow-hidden">
              <Image 
                src="/img/brooke-lark-lcZ9NxhOSlo-unsplash.jpg"
                alt="Food image"
                fill
                style={{objectFit: "cover"}}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white mb-2">Basic Image Card</h3>
              <p className="font-body text-sm text-neutral-600 dark:text-neutral-300">
                Simple card with an image at the top and content below.
              </p>
            </div>
          </div>
          
          {/* Overlay Text Card */}
          <div className="relative rounded-xl shadow-md overflow-hidden group h-64">
            <div className="absolute inset-0">
              <Image 
                src="/img/brooke-lark-pXEsx3kRuNc-unsplash.jpg"
                alt="Food image"
                fill
                style={{objectFit: "cover"}}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
              <h3 className="font-heading text-lg font-medium text-white mb-2">Overlay Text Card</h3>
              <p className="font-body text-sm text-neutral-200">
                Text overlaid on an image with a gradient background.
              </p>
            </div>
          </div>
          
          {/* Gallery Card */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700">
            <div className="grid grid-cols-2 gap-1">
              <div className="relative h-24 w-full overflow-hidden">
                <Image 
                  src="/img/brooke-lark-GTMGG-xvxdU-unsplash.jpg"
                  alt="Food image 1"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="relative h-24 w-full overflow-hidden">
                <Image 
                  src="/img/brooke-lark-rS26chimPaA-unsplash.jpg"
                  alt="Food image 2"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="relative h-24 w-full overflow-hidden">
                <Image 
                  src="/img/brooke-lark-V4MBq8kue3U-unsplash.jpg"
                  alt="Food image 3"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="relative h-24 w-full overflow-hidden">
                <Image 
                  src="/img/brooke-lark-lcZ9NxhOSlo-unsplash.jpg"
                  alt="Food image 4"
                  fill
                  style={{objectFit: "cover"}}
                />
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white mb-2">Gallery Card</h3>
              <p className="font-body text-sm text-neutral-600 dark:text-neutral-300">
                Card displaying multiple images in a grid layout.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg mb-8 border border-neutral-200/50 dark:border-neutral-800/50">
          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Code Example</h3>
          <CodeSnippet 
            code={`<div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700 group">
  <div className="relative h-48 w-full overflow-hidden">
    <Image 
      src="/images/photo.jpg"
      alt="Card image"
      fill
      style={{objectFit: "cover"}}
      className="transition-transform duration-500 group-hover:scale-105"
    />
  </div>
  <div className="p-5">
    <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white mb-2">Media Card Title</h3>
    <p className="font-body text-sm text-neutral-600 dark:text-neutral-300">
      Card content description goes here.
    </p>
  </div>
</div>`}
            language="jsx"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
