'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'scale-in';
  delay?: number;
}

export default function AnimatedSection({
  id,
  className = '',
  children,
  animation = 'fade-in',
  delay = 0
}: AnimatedSectionProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const getAnimationClass = () => {
    if (!hasAnimated) return 'opacity-0';
    
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-up':
        return 'animate-slide-up';
      case 'slide-down':
        return 'animate-slide-down';
      case 'scale-in':
        return 'animate-scale-in';
      default:
        return 'animate-fade-in';
    }
  };
  return (
    <section
      id={id}
      ref={ref}
      className={`${className} ${getAnimationClass()} relative`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-2xl"></div>
      </div>
      {children}
    </section>
  );
}
