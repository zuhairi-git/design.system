'use client';

import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

export default function FeatureCard({ title, description, icon, link }: FeatureCardProps) {
  return (
    <a
      href={link}      className="p-4 sm:p-6 relative overflow-hidden group block no-underline cursor-pointer rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all duration-300 hover:animate-hover-lift"
      onClick={(e) => {
        // Use client-side navigation for smoother scrolling to the section
        e.preventDefault();
        const targetId = link.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Update URL without triggering page reload
          window.history.pushState(null, '', link);
        }
      }}
    >      <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{icon}</div>
      <h2 className="font-heading font-bold text-lg sm:text-xl text-primary-700 dark:text-primary-400 mb-1.5 sm:mb-2">{title}</h2>
      <p className="font-body text-sm sm:text-base text-neutral-700 dark:text-neutral-400 mb-4 sm:mb-6">{description}</p>
      <span 
        className="font-body text-sm font-medium text-primary-700 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center"
      >
        View {title} <span className="ml-1">→</span>
      </span>      <div 
        className="absolute inset-0 bg-gradient-to-r from-primary-400/10 via-primary-300/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
      />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-400/0 transform origin-left scale-x-0 group-hover:scale-x-100 group-hover:bg-primary-400/20 transition-transform duration-300 ease-out"></div>
    </a>
  );
}
