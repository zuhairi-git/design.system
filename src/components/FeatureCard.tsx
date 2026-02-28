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
        className="p-6 sm:p-7 block no-underline cursor-pointer rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg hover:shadow-primary-500/5 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200"
        aria-label={ariaLabel || `Navigate to ${title} section`}
        role="button"
        tabIndex={0}        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e);
          }
        }}
      >
        <div className="flex items-center justify-center w-11 h-11 mb-5 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors duration-200">
          {MaterialIcon ? (
            <MaterialIcon className="text-[22px]" aria-hidden="true" />
          ) : (
            <span className="text-xl" aria-hidden="true">{icon}</span>
          )}
        </div>
        
        <h2 className="font-heading font-semibold text-base sm:text-lg text-neutral-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-200">
          {title}
        </h2>
        
        <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 mb-5 leading-relaxed">
          {description}
        </p>
        
        <span 
          className="font-body text-sm font-medium text-primary-600 dark:text-primary-400 inline-flex items-center"
          aria-hidden="true"
        >
          Explore <span className="ml-1.5 group-hover:ml-2.5 transition-all duration-200">&rarr;</span>
        </span>
      </a>
    </article>
  );
}
