'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { useAccessibility } from '../utils/accessibility';

interface SidebarToggleProps {
  onClick: () => void;
  className?: string;
}

export default function SidebarToggle({ onClick, className = '' }: SidebarToggleProps) {
  const { getButtonAttributes } = useAccessibility();

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200 ${className}`}
      {...getButtonAttributes('Toggle sidebar navigation')}
    >
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
