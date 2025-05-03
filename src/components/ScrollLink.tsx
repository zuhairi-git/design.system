'use client';

import { ReactNode } from 'react';

interface ScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/**
 * A client-side component that handles smooth scrolling to page sections
 */
export default function ScrollLink({ href, children, className = '' }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle links that start with # (internal links)
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Smooth scroll to element
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without page reload
        if (window.history) {
          window.history.pushState(null, '', href);
        }
      }
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
