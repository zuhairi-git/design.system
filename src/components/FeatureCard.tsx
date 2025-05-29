'use client';

import { ReactNode } from 'react';
import { announceLiveRegion } from '../utils/accessibility';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  materialIcon?: React.ElementType;
  link: string;
  ariaLabel?: string;
}

export default function FeatureCard({ 
  title, 
  description, 
  icon, 
  materialIcon: MaterialIcon, 
  link,   ariaLabel 
}: FeatureCardProps) {
  const handleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    const targetId = link.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', link);
      
      // Announce navigation to screen readers
      announceLiveRegion(`Navigated to ${title} section`);
      
      // Set focus to the target element for screen readers
      targetElement.focus();
    }
  };

  return (
    <article className="group">
      <a
        href={link}
        onClick={handleClick}
        className="p-5 sm:p-7 relative overflow-hidden group block no-underline cursor-pointer rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
        aria-label={ariaLabel || `Navigate to ${title} section`}
        role="button"
        tabIndex={0}        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e);
          }
        }}
      >
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-blue-500/10 dark:bg-blue-500/10 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
          {MaterialIcon ? (
            <MaterialIcon className="text-[24px]" aria-hidden="true" />
          ) : (
            <span className="text-2xl" aria-hidden="true">{icon}</span>
          )}
        </div>
        
        <h2 className="font-heading font-bold text-lg sm:text-xl text-primary-700 dark:text-primary-400 mb-2 sm:mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
          {title}
        </h2>
        
        <p className="font-body text-sm sm:text-base text-neutral-700 dark:text-neutral-400 mb-5 sm:mb-7">
          {description}
        </p>
        
        <span 
          className="font-body text-sm font-medium text-primary-700 group-hover:text-primary-600 dark:text-primary-400 dark:group-hover:text-primary-300 inline-flex items-center"
          aria-hidden="true"
        >
          View {title} <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
        </span>
        
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
          aria-hidden="true"
        />
        
        <div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500/30 via-primary-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
          aria-hidden="true"
        />
      </a>
    </article>
  );
}
