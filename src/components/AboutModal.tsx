'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type AboutModalProps = {
  isOpen: boolean;
  onCloseAction: () => void;  // Renamed to indicate it's an action
};

export default function AboutModal({ isOpen, onCloseAction: onClose }: AboutModalProps) {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div 
          className="relative bg-white dark:bg-neutral-900 rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              {/* Image and social links */}
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary-100 dark:border-primary-900">
                  {/* Replace with your actual image if available */}
                  <Image
                    src="https://alux.space/images/ali-alzuhairi.jpg"
                    alt="Ali Al-Zuhairi"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.src = 'https://via.placeholder.com/200?text=Ali+Al-Zuhairi';
                    }}
                  />
                </div>
                
                {/* Social links */}
                <div className="flex gap-3 mt-4">
                  <Link href="https://twitter.com/alialzuhairi" target="_blank" rel="noopener noreferrer" 
                    className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </Link>
                  <Link href="https://www.linkedin.com/in/alialzuhairi/" target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </Link>
                  <Link href="https://github.com/alialzuhairi" target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Bio and details */}
              <div className="flex-1">
                <h2 className="text-2xl font-heading font-bold text-neutral-950 dark:text-white mb-3">Ali Al-Zuhairi</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">Product Owner & Design Leader — Helsinki, Finland</p>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                  I&apos;m a passionate dreamer and creative soul who believes in the power of design to transform ideas into meaningful experiences. 
                  With my journey spanning across continents – from Damascus to Helsinki – I&apos;ve learned that great design is about more than 
                  just aesthetics; it&apos;s about touching hearts and solving real problems.
                </p>
                
                {/* Skills section */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'UI/UX Design', 'Product Management', 'Design Systems', 'Figma & Adobe CC',
                      'Research', 'Design Leadership', 'Project Management', 'Web/mobile UI'
                    ].map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-sm bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Work experience highlights */}
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-3">Current Position</h3>
                  <div className="mb-4">
                    <p className="font-medium text-neutral-800 dark:text-neutral-200">Product Designer | Product Owner</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">Webropol, Helsinki — 2023 - Present</p>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm mt-1">
                      Product vision, specifying features, prototyping, and handing off design system to developers.
                    </p>
                  </div>
                </div>
                
                {/* Portfolio link */}
                <Link 
                  href="https://alux.space/portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
