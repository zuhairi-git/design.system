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
      href={link}
      className="p-5 sm:p-7 relative overflow-hidden group block no-underline cursor-pointer rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
        <span className="text-2xl">{icon}</span>
      </div>
      
      <h2 className="font-heading font-bold text-lg sm:text-xl text-primary-700 dark:text-primary-400 mb-2 sm:mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">{title}</h2>
      
      <p className="font-body text-sm sm:text-base text-neutral-700 dark:text-neutral-400 mb-5 sm:mb-7">{description}</p>
      
      <span 
        className="font-body text-sm font-medium text-primary-700 group-hover:text-primary-600 dark:text-primary-400 dark:group-hover:text-primary-300 inline-flex items-center"
      >
        View {title} <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
      </span>
      
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
      />
      
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500/30 via-primary-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
    </a>
  );
}
