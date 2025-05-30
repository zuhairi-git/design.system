// File: src/app/dashboard-cards.tsx
import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { getCardBackground } from "@/utils/cardThemes";

// Dashboard Card component with theme support
interface DashboardCardProps {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  icon: React.ReactNode;
  iconBgColor?: string; // Optional now, as we use unified styling
  iconColor?: string;   // Optional now, as we use unified styling
  theme: 'light' | 'dark' | 'colorful';
  variant?: 'stat' | 'progress' | 'chart';
  progress?: number;
}

function DashboardCard({ 
  title, 
  value, 
  change, 
  isPositive = true, 
  icon, 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  iconBgColor, // No longer used, kept for backward compatibility
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  iconColor,    // No longer used, kept for backward compatibility
  theme, 
  variant = 'stat',
  progress = 75
}: DashboardCardProps) {
  
  // Get card styles based on theme
  const getCardStyles = () => {
    if (theme === 'colorful') {
      return 'border border-[rgba(128,0,255,0.3)] shadow-[0_4px_12px_rgba(255,0,204,0.3)]';
    } else if (theme === 'dark') {
      return 'bg-neutral-800 border-neutral-700 shadow-md';
    } else {
      return 'bg-white border-neutral-200 shadow-md';
    }
  };

  // Get text styles based on theme
  const getTitleStyles = () => {
    if (theme === 'colorful') return 'text-[#f0f8ff]/80';
    if (theme === 'dark') return 'text-neutral-400';
    return 'text-neutral-500';
  };

  const getValueStyles = () => {
    if (theme === 'colorful') return 'text-[#f0f8ff]';
    if (theme === 'dark') return 'text-white';
    return 'text-neutral-900';
  };

  // Get icon background styles based on theme
  const getIconBgStyles = () => {
    if (theme === 'colorful') {
      // For colorful theme, use unified fuchsia-500/10
      return 'bg-fuchsia-500/10';
    } else if (theme === 'dark') {
      // For dark theme, use unified blue-500/10
      return 'bg-blue-500/10';
    } else {
      // For light theme, use unified blue-500/10
      return 'bg-blue-500/10';
    }
  };

  // Get icon color styles based on theme
  const getIconColorStyles = () => {
    if (theme === 'colorful') {
      // For colorful theme, use unified text-fuchsia-400
      return 'text-fuchsia-400';
    } else if (theme === 'dark') {
      // For dark theme, use unified text-blue-400
      return 'text-blue-400';
    } else {
      // For light theme, use unified text-blue-500
      return 'text-blue-500';
    }
  };

  // Get change text color
  const getChangeColor = () => {
    if (isPositive) {
      if (theme === 'colorful') return 'text-[#00ff80]';
      if (theme === 'dark') return 'text-green-400';
      return 'text-green-600';
    } else {
      if (theme === 'colorful') return 'text-[#ff3366]';
      if (theme === 'dark') return 'text-red-400';
      return 'text-red-600';
    }
  };

  // Get progress bar colors
  const getProgressColors = () => {
    if (theme === 'colorful') {
      return {
        bg: 'bg-[rgba(128,0,255,0.2)]',
        fill: 'bg-gradient-to-r from-[#3b82f6] to-[#a855f7]'
      };
    } else if (theme === 'dark') {
      return {
        bg: 'bg-neutral-700',
        fill: 'bg-blue-500'
      };
    } else {
      return {
        bg: 'bg-neutral-200',
        fill: 'bg-blue-600'
      };
    }
  };

  const bgStyle = theme === 'colorful' ? getCardBackground('colorful') : {};

  const renderVariant = () => {
    switch (variant) {      case 'progress':
        const progressColors = getProgressColors();
        return (
          <div className={`rounded-xl overflow-hidden p-6 ${getCardStyles()}`} style={bgStyle}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`font-body text-sm font-medium ${getTitleStyles()}`}>{title}</h3>
              <div className={`p-2 rounded-lg ${getIconBgStyles()}`}>
                <span className={getIconColorStyles()}>
                  {icon}
                </span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className={`font-heading text-lg font-medium ${getValueStyles()}`}>{value}</p>
                <p className={`text-xs font-medium ${getChangeColor()}`}>{change}</p>
              </div>
              
              <div className={`h-2 rounded-full ${progressColors.bg} overflow-hidden`}>
                <div 
                  className={`h-full rounded-full ${progressColors.fill}`} 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        );      case 'chart':
        return (
          <div className={`rounded-xl overflow-hidden p-6 ${getCardStyles()}`} style={bgStyle}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`font-body text-sm font-medium ${getTitleStyles()}`}>{title}</h3>
              <div className={`p-2 rounded-lg ${getIconBgStyles()}`}>
                <span className={getIconColorStyles()}>
                  {icon}
                </span>
              </div>
            </div>
            
            <div className="flex items-end justify-between">
              <div>
                <p className={`font-heading text-3xl font-bold ${getValueStyles()}`}>{value}</p>
                <p className={`flex items-center text-xs ${getChangeColor()} mt-1`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isPositive ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                  {change}
                </p>
              </div>
              
              <div className="relative h-16 w-28">
                {/* Sparkline Chart with Smooth Curve and Dots */}
                <svg viewBox="0 0 100 50" className="h-full w-full overflow-visible">
                  {/* Define gradient for path fill */}
                  <defs>
                    <linearGradient id="sparklineGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor={
                        theme === 'colorful' ? '#a855f7' : 
                        theme === 'dark' ? 'rgb(34, 197, 94)' : 
                        'rgb(22, 163, 74)'
                      } stopOpacity="0.3" />
                      <stop offset="100%" stopColor={
                        theme === 'colorful' ? '#a855f7' : 
                        theme === 'dark' ? 'rgb(34, 197, 94)' : 
                        'rgb(22, 163, 74)'
                      } stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Background Grid */}
                  <g className="opacity-20">
                    {[10, 20, 30, 40].map(y => (
                      <line 
                        key={`grid-${y}`} 
                        x1="0" 
                        y1={y} 
                        x2="100" 
                        y2={y} 
                        stroke={theme === 'light' ? "#9ca3af" : "#6b7280"} 
                        strokeWidth="0.5" 
                        strokeDasharray="1,1"
                      />
                    ))}
                  </g>
                  
                  {/* Smooth Line */}
                  {(() => {
                    const points = [
                      [0, 30],
                      [20, 20], 
                      [40, 35], 
                      [60, 15], 
                      [80, 25], 
                      [100, 10]
                    ];
                    
                    const pathD = points.reduce((path, point, i) => {
                      if (i === 0) return `M ${point[0]} ${point[1]}`;
                      
                      // Calculate control points for smooth curve
                      const prev = points[i-1];
                      const cp1x = prev[0] + (point[0] - prev[0]) / 2;
                      const cp1y = prev[1];
                      const cp2x = prev[0] + (point[0] - prev[0]) / 2;
                      const cp2y = point[1];
                      
                      return `${path} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${point[0]},${point[1]}`;
                    }, "");
                    
                    // For fill, add points to create closed path
                    const fillPathD = `${pathD} L 100,50 L 0,50 Z`;
                    
                    return (
                      <>
                        {/* Fill under the curve */}
                        <path 
                          d={fillPathD}
                          fill="url(#sparklineGradient)" 
                        />
                        
                        {/* Stroke line */}
                        <path 
                          d={pathD}
                          fill="none" 
                          stroke={
                            theme === 'colorful' 
                              ? '#a855f7' 
                              : theme === 'dark' 
                                ? 'rgb(34, 197, 94)' 
                                : 'rgb(22, 163, 74)'
                          } 
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        
                        {/* Data Points */}
                        {points.map((point, idx) => (
                          <circle 
                            key={idx} 
                            cx={point[0]} 
                            cy={point[1]} 
                            r="2"
                            className={
                              theme === 'colorful' 
                                ? 'fill-white stroke-[#a855f7] stroke-2' 
                                : theme === 'dark' 
                                  ? 'fill-neutral-900 stroke-green-500 stroke-2'
                                  : 'fill-white stroke-green-600 stroke-2'
                            }
                          />
                        ))}
                        
                        {/* Highlight last point */}
                        <circle 
                          cx="100" 
                          cy="10" 
                          r="3"
                          className={
                            theme === 'colorful' 
                              ? 'fill-white stroke-[#a855f7] stroke-2' 
                              : theme === 'dark' 
                                ? 'fill-neutral-900 stroke-green-500 stroke-2'
                                : 'fill-white stroke-green-600 stroke-2'
                          }
                        />
                      </>
                    );
                  })()}
                </svg>
              </div>
            </div>
          </div>
        );
      
      default: // stat
        return (
          <div className={`rounded-xl overflow-hidden p-6 ${getCardStyles()}`} style={bgStyle}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`font-body text-sm font-medium ${getTitleStyles()}`}>{title}</h3>
              <div className={`p-2 rounded-lg ${getIconBgStyles()}`}>
                <span className={getIconColorStyles()}>
                  {icon}
                </span>
              </div>
            </div>
            
            <div className="flex items-end justify-between">
              <div>
                <p className={`font-heading text-3xl font-bold ${getValueStyles()}`}>{value}</p>
                <p className={`flex items-center text-xs ${getChangeColor()} mt-1`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isPositive ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                  {change}
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {renderVariant()}
      {theme === 'colorful' && (
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(135deg, #3b82f6, #a855f7, #6366f1)",
          opacity: 0.07,
          mixBlendMode: 'overlay'
        }} />
      )}
    </>
  );
}

export default function DashboardCardsSection() {
  return (
    <AnimatedSection id="dashboard-cards" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20" animation="fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <DashboardIcon className="mr-2" fontSize="small" /> Analytics
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Dashboard Cards</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Card components designed for displaying data, statistics, and analytics in dashboards - available in Light, Dark, and Colorful themes.
          </p>
        </div>

        {/* Light theme dashboard cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <LightModeIcon className="mr-2 text-amber-500" />
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">Light Theme Dashboard Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <DashboardCard
              theme="light"
              variant="stat"
              title="Total Users"
              value="1,284"
              change="12.5% increase"
              isPositive={true}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              iconBgColor="bg-blue-500/10"
              iconColor="text-blue-500"
            />
            <DashboardCard
              theme="light"
              variant="progress"
              title="Project Progress"
              value="68%"
              change="4% this week"
              progress={68}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              iconBgColor="bg-blue-500/10"
              iconColor="text-blue-500"
            />
            <DashboardCard
              theme="light"
              variant="chart"
              title="Revenue"
              value="$12,628"
              change="8.2% increase"
              isPositive={true}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              iconBgColor="bg-blue-500/10"
              iconColor="text-blue-500"
            />
          </div>
        </div>
        
        {/* Dark theme dashboard cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <DarkModeIcon className="mr-2 text-blue-500" />
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">Dark Theme Dashboard Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <DashboardCard
              theme="dark"
              variant="stat"
              title="Total Users"
              value="1,284"
              change="12.5% increase"
              isPositive={true}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              iconBgColor="bg-blue-500/10"
              iconColor="text-blue-400"
            />
            <DashboardCard
              theme="dark"
              variant="progress"
              title="Project Progress"
              value="68%"
              change="4% this week"
              progress={68}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              iconBgColor="bg-blue-500/10"
              iconColor="text-blue-400"
            />
            <DashboardCard
              theme="dark"
              variant="chart"
              title="Revenue"
              value="$12,628"
              change="8.2% increase"
              isPositive={true}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              iconBgColor="bg-blue-500/10"
              iconColor="text-blue-400"
            />
          </div>
        </div>
        
        {/* Colorful theme dashboard cards */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <AutoAwesomeIcon className="mr-2 text-fuchsia-500" />
            <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white">Colorful Theme Dashboard Cards</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <DashboardCard
              theme="colorful"
              variant="stat"
              title="Total Users"
              value="1,284"
              change="12.5% increase"
              isPositive={true}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              iconBgColor="bg-fuchsia-500/10"
              iconColor="text-fuchsia-400"
            />
            <DashboardCard
              theme="colorful"
              variant="progress"
              title="Project Progress"
              value="68%"
              change="4% this week"
              progress={68}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              iconBgColor="bg-fuchsia-500/10"
              iconColor="text-fuchsia-400"
            />
            <DashboardCard
              theme="colorful"
              variant="chart"
              title="Revenue"
              value="$12,628"
              change="8.2% increase"
              isPositive={true}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              iconBgColor="bg-fuchsia-500/10"
              iconColor="text-fuchsia-400"
            />
          </div>
        </div>

        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg border border-neutral-200/50 dark:border-neutral-800/50">
          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Code Example</h3>
          <CodeSnippet 
            code={`<DashboardCard
  theme="light" // Options: 'light', 'dark', 'colorful'
  variant="stat" // Options: 'stat', 'progress', 'chart'
  title="Total Users"
  value="1,284"
  change="12.5% increase"
  isPositive={true}
  icon={<UserIcon className="h-5 w-5" />}
  // Icon styling is now handled automatically based on theme:
  // Light theme: bg-blue-500/10 text-blue-500
  // Dark theme: bg-blue-500/10 text-blue-400
  // Colorful theme: bg-fuchsia-500/10 text-fuchsia-400
/>`}
            language="jsx"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
