// File: src/app/dashboard-cards.tsx
import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import DashboardIcon from '@mui/icons-material/Dashboard';

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
            Card components designed for displaying data, statistics, and analytics in dashboards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Stat Card */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-body text-sm font-medium text-neutral-500 dark:text-neutral-400">Total Users</h3>
              <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="font-heading text-3xl font-bold text-neutral-900 dark:text-white">1,284</p>
                <p className="flex items-center text-xs text-green-600 dark:text-green-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  12.5% increase
                </p>
              </div>
            </div>
          </div>
          
          {/* Progress Card */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-body text-sm font-medium text-neutral-500 dark:text-neutral-400">Project Progress</h3>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="mb-2">
              <p className="font-heading text-3xl font-bold text-neutral-900 dark:text-white">75%</p>
            </div>
            <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5">
              <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
            </div>
          </div>
          
          {/* Activity Card */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-body text-sm font-medium text-neutral-500 dark:text-neutral-400">Recent Activity</h3>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-xs text-neutral-600 dark:text-neutral-300">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <p>New user registration</p>
                <span className="ml-auto text-neutral-400">2m ago</span>
              </li>
              <li className="flex items-center text-xs text-neutral-600 dark:text-neutral-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <p>Project milestone completed</p>
                <span className="ml-auto text-neutral-400">1h ago</span>
              </li>
              <li className="flex items-center text-xs text-neutral-600 dark:text-neutral-300">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                <p>System notification</p>
                <span className="ml-auto text-neutral-400">5h ago</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Area Chart Card */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white">Weekly Revenue</h3>
              <div className="flex space-x-2">
                <button className="bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 px-2 py-1 text-xs rounded">
                  Week
                </button>
                <button className="bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 px-2 py-1 text-xs rounded">
                  Month
                </button>
                <button className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-2 py-1 text-xs rounded">
                  Year
                </button>
              </div>
            </div>
            <div className="h-56 w-full bg-neutral-50 dark:bg-neutral-900/50 rounded-lg flex items-center justify-center">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Chart placeholder - Revenue data visualization</p>
            </div>
          </div>
          
          {/* User Demographics Card */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
            <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white mb-4">User Demographics</h3>
            <div className="h-56 w-full bg-neutral-50 dark:bg-neutral-900/50 rounded-lg flex items-center justify-center">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Chart placeholder - User demographics</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg mb-8 border border-neutral-200/50 dark:border-neutral-800/50">
          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Code Example</h3>
          <CodeSnippet 
            code={`<div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 border border-neutral-200 dark:border-neutral-700">
  <div className="flex items-center justify-between mb-4">
    <h3 className="font-body text-sm font-medium text-neutral-500 dark:text-neutral-400">Total Users</h3>
    <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </div>
  </div>
  <div className="flex items-end justify-between">
    <div>
      <p className="font-heading text-3xl font-bold text-neutral-900 dark:text-white">1,284</p>
      <p className="flex items-center text-xs text-green-600 dark:text-green-400 mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        12.5% increase
      </p>
    </div>
  </div>
</div>`}
            language="jsx"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
