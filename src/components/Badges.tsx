'use client';

import { 
  CheckCircleIcon,
  XMarkIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
  StarIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import { useAccessibility } from '../utils/accessibility';

type BadgeProps = {
  theme?: 'light' | 'dark' | 'colorful';
  variant?: 'status' | 'notification' | 'count' | 'featured';
  status?: 'success' | 'error' | 'warning' | 'info' | 'new' | 'hot';
  children?: React.ReactNode;
  count?: number;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
  pulse?: boolean;
  ariaLabel?: string;
};

export default function Badge({ 
  theme = 'light', 
  variant = 'status',
  status = 'info',
  children,
  count,
  showIcon = true,
  size = 'md',
  pulse = false,
  ariaLabel
}: BadgeProps) {
  const { getBadgeLabel } = useAccessibility();

  // Generate accessible label
  const accessibleLabel = getBadgeLabel(variant, status, count, ariaLabel);

  // Size configurations
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  };

  // Icon size configurations
  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };
  // Status icons
  const statusIcons = {
    success: CheckCircleIcon,
    error: XMarkIcon,
    warning: ExclamationTriangleIcon,
    info: InformationCircleIcon,
    new: StarIcon,
    hot: ArrowTrendingUpIcon
  };
  // Theme and status configurations based on theme-colors.txt
  const getClasses = () => {
    const baseClasses = `inline-flex items-center font-medium rounded-full transition-all duration-200 ${sizeClasses[size]} ${
      pulse ? 'animate-pulse' : ''
    }`;
    
    if (theme === 'light') {
      const lightVariants = {
        success: 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100',
        error: 'bg-red-50 text-red-700 border border-red-200 hover:bg-red-100',
        warning: 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100',
        info: 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100',
        new: 'bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100',
        hot: 'bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100'
      };
      return `${baseClasses} ${lightVariants[status]}`;
    }

    if (theme === 'dark') {
      const darkVariants = {
        success: 'bg-emerald-900/30 text-emerald-400 border border-emerald-700/50 hover:bg-emerald-900/50',
        error: 'bg-red-900/30 text-red-400 border border-red-700/50 hover:bg-red-900/50',
        warning: 'bg-amber-900/30 text-amber-400 border border-amber-700/50 hover:bg-amber-900/50',
        info: 'bg-blue-900/30 text-blue-400 border border-blue-700/50 hover:bg-blue-900/50',
        new: 'bg-purple-900/30 text-purple-400 border border-purple-700/50 hover:bg-purple-900/50',
        hot: 'bg-orange-900/30 text-orange-400 border border-orange-700/50 hover:bg-orange-900/50'
      };
      return `${baseClasses} ${darkVariants[status]}`;
    }

    // Colorful theme with cosmic gradients
    const colorfulVariants = {
      success: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40',
      error: 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/40',
      warning: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40',
      info: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40',
      new: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40',
      hot: 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40'
    };
    return `${baseClasses} ${colorfulVariants[status]}`;
  };
  const IconComponent = statusIcons[status];
  if (variant === 'notification') {
    return (
      <span className="relative inline-flex" role="group" aria-label="Button with notification badge">
        {children}
        <span 
          className={`absolute -top-1 -right-1 ${getClasses()} min-w-[1.25rem] h-5 flex items-center justify-center`}
          role="status"
          aria-label={accessibleLabel}
          aria-live="polite"
        >
          <span className="sr-only">{accessibleLabel}</span>
          <span aria-hidden="true">
            {count !== undefined ? (count > 99 ? '99+' : count) : '!'}
          </span>
        </span>
      </span>
    );
  }

  if (variant === 'count') {
    return (
      <span 
        className={`${getClasses()} min-w-[1.5rem] justify-center`}
        role="status"
        aria-label={accessibleLabel}
      >
        <span className="sr-only">{accessibleLabel}</span>
        <span aria-hidden="true">
          {count !== undefined ? (count > 999 ? '999+' : count) : '0'}
        </span>
      </span>
    );
  }
  if (variant === 'featured') {
    return (
      <span 
        className={`${getClasses()} ${pulse ? 'animate-pulse' : ''}`}
        role="status"
        aria-label={accessibleLabel}
      >
        {showIcon && IconComponent && (
          <IconComponent className={`${iconSizes[size]} mr-1`} aria-hidden="true" />
        )}
        <span>{children}</span>
      </span>
    );
  }

  return (
    <span 
      className={getClasses()}
      role="status"
      aria-label={accessibleLabel}
    >
      {showIcon && IconComponent && (
        <IconComponent className={`${iconSizes[size]} mr-1`} aria-hidden="true" />
      )}
      <span>{children}</span>
    </span>
  );
}

// Badge showcase component
export function BadgeShowcase() {
  return (
    <div className="space-y-8" role="main" aria-labelledby="badge-showcase-title">
      <header className="sr-only">
        <h2 id="badge-showcase-title">Badge Component Showcase</h2>
      </header>
      
      {/* Light Theme */}
      <section className="p-6 bg-white rounded-xl border border-neutral-200" aria-labelledby="light-theme-title">
        <h3 id="light-theme-title" className="text-lg font-semibold mb-4 text-neutral-900">
          Badges - Light Theme
        </h3>
        
        <div className="space-y-4">
          <div role="group" aria-labelledby="status-badges-light">
            <h4 id="status-badges-light" className="text-sm font-medium mb-2 text-neutral-600">Status Badges</h4>
            <div className="flex flex-wrap gap-2">
              <Badge theme="light" status="success">Success</Badge>
              <Badge theme="light" status="error">Error</Badge>
              <Badge theme="light" status="warning">Warning</Badge>
              <Badge theme="light" status="info">Info</Badge>
              <Badge theme="light" status="new">New</Badge>
              <Badge theme="light" status="hot">Hot</Badge>
            </div>
          </div>
          
          <div role="group" aria-labelledby="notification-badges-light">
            <h4 id="notification-badges-light" className="text-sm font-medium mb-2 text-neutral-600">Notification Badges</h4>
            <div className="flex flex-wrap gap-4">
              <Badge theme="light" variant="notification" status="error" count={5}>
                <button 
                  className="p-2 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-describedby="messages-badge"
                >
                  Messages
                </button>
              </Badge>
              <Badge theme="light" variant="notification" status="info">
                <button 
                  className="p-2 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-describedby="notifications-badge"
                >
                  Notifications
                </button>
              </Badge>
            </div>
          </div>
          
          <div role="group" aria-labelledby="count-badges-light">
            <h4 id="count-badges-light" className="text-sm font-medium mb-2 text-neutral-600">Count Badges</h4>
            <div className="flex flex-wrap gap-2">
              <Badge theme="light" variant="count" status="success" count={42} />
              <Badge theme="light" variant="count" status="info" count={128} />
              <Badge theme="light" variant="count" status="warning" count={7} />
            </div>
          </div>
        </div>
      </section>

      {/* Dark Theme */}
      <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-700">
        <h3 className="text-lg font-semibold mb-4 text-white">
          Badges - Dark Theme
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2 text-neutral-400">Status Badges</h4>
            <div className="flex flex-wrap gap-2">
              <Badge theme="dark" status="success">Success</Badge>
              <Badge theme="dark" status="error">Error</Badge>
              <Badge theme="dark" status="warning">Warning</Badge>
              <Badge theme="dark" status="info">Info</Badge>
              <Badge theme="dark" status="new">New</Badge>
              <Badge theme="dark" status="hot">Hot</Badge>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2 text-neutral-400">Featured Badges</h4>
            <div className="flex flex-wrap gap-2">
              <Badge theme="dark" variant="featured" status="new">Latest Release</Badge>
              <Badge theme="dark" variant="featured" status="hot">Trending</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Colorful Theme */}
      <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
        <h3 className="text-lg font-semibold mb-4 text-purple-900">
          Badges - Colorful Theme
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2 text-purple-700">Gradient Status Badges</h4>
            <div className="flex flex-wrap gap-2">
              <Badge theme="colorful" status="success">Success</Badge>
              <Badge theme="colorful" status="error">Error</Badge>
              <Badge theme="colorful" status="warning">Warning</Badge>
              <Badge theme="colorful" status="info">Info</Badge>
              <Badge theme="colorful" status="new">New</Badge>
              <Badge theme="colorful" status="hot">Hot</Badge>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2 text-purple-700">Different Sizes</h4>
            <div className="flex flex-wrap gap-2 items-center">
              <Badge theme="colorful" status="success" size="sm">Small</Badge>
              <Badge theme="colorful" status="info" size="md">Medium</Badge>
              <Badge theme="colorful" status="warning" size="lg">Large</Badge>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2 text-purple-700">Podcast Player Inspired</h4>
            <div className="flex flex-wrap gap-2 items-center">
              <Badge theme="colorful" status="hot" showIcon={false}>Live</Badge>
              <Badge theme="colorful" status="new">Now Playing</Badge>
              <Badge theme="colorful" status="info" variant="count" count={1} />
              <Badge theme="colorful" status="success">1x Speed</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
