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
      className={`${className} ${getAnimationClass()}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}
