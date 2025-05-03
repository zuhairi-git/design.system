'use client';

import { useEffect } from 'react';

export default function FixCardLinks() {
  useEffect(() => {
    // Function to make feature cards fully clickable
    const makeFeatureCardsClickable = () => {      // Find all cards with links inside them
      const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;
      
      cards.forEach(card => {
        // Find the link inside the card
        const link = card.querySelector('a');
        if (link) {
          // Make the entire card clickable
          card.addEventListener('click', (e) => {
            // Prevent the default behavior of the link
            e.preventDefault();
            
            // Get the href attribute of the link
            const href = link.getAttribute('href');
            
            // If the href is a hash link, scroll to the section
            if (href && href.startsWith('#')) {
              const targetId = href.substring(1);
              const targetElement = document.getElementById(targetId);
              
              if (targetElement) {
                // Smooth scroll to the target section
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Update the URL without reloading the page
                if (window.history) {
                  window.history.pushState(null, '', href);
                }
              }
            } else if (href) {
              // If it's a regular link, navigate to it
              window.location.href = href;
            }
          });
            // Add styling to indicate the card is clickable
          (card as HTMLElement).style.cursor = 'pointer';
        }
      });
    };
    
    // Wait for the DOM to be fully loaded
    setTimeout(makeFeatureCardsClickable, 500);
    
    // Re-apply when the window is resized
    window.addEventListener('resize', makeFeatureCardsClickable);
    
    return () => {
      window.removeEventListener('resize', makeFeatureCardsClickable);
    };
  }, []);
  
  return null; // This component doesn't render anything
}
