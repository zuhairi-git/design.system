// File: src/app/profile-cards.tsx
import AnimatedSection from "@/components/AnimatedSection";
import CodeSnippet from "@/components/CodeSnippet";
import PersonIcon from '@mui/icons-material/Person';

export default function ProfileCardsSection() {
  return (
    <AnimatedSection id="profile-cards" className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950/60 dark:to-neutral-900" animation="slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
            <PersonIcon className="mr-2" fontSize="small" /> User Profiles
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">Profile Cards</h2>
          <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Cards designed for displaying user profiles, team members, and contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Basic Profile Card */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-neutral-200 dark:bg-neutral-700 mb-4 overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white mb-1">Alex Morgan</h3>
              <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 mb-3">Product Designer</p>
              <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                UI/UX specialist with 5+ years of experience in creating beautiful, functional interfaces.
              </p>
              <div className="flex space-x-3">
                <button className="p-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-full text-neutral-600 dark:text-neutral-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="p-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-full text-neutral-600 dark:text-neutral-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
                <button className="p-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-full text-neutral-600 dark:text-neutral-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Horizontal Profile Card */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700 flex flex-col sm:flex-row">
            <div className="sm:w-1/3 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center p-6">
              <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="sm:w-2/3 p-6">
              <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white mb-1">Sarah Johnson</h3>
              <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 mb-3">Senior Developer</p>
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-500 dark:text-neutral-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs text-neutral-600 dark:text-neutral-400">sarah@example.com</span>
                </div>
                <div className="flex items-center ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-500 dark:text-neutral-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-xs text-neutral-600 dark:text-neutral-400">+1 234-567-890</span>
                </div>
              </div>
              <button className="w-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 py-1.5 text-sm font-medium rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors">
                View Profile
              </button>
            </div>
          </div>
          
          {/* Team Member Card */}
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700">
            <div className="h-28 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
            <div className="px-5 pt-0 pb-5 relative">
              <div className="absolute -top-12 w-24 h-24 mx-auto rounded-full border-4 border-white dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-800">
                <div className="w-full h-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="mt-14 text-center">
                <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white mb-1">Michael Chen</h3>
                <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 mb-3">UI Engineer</p>
                <div className="flex justify-center space-x-1 mb-3">
                  <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs rounded">Tailwind</span>
                  <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs rounded">TypeScript</span>
                </div>
                <div className="flex justify-center space-x-2">
                  <button className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
                    Message
                  </button>
                  <button className="px-3 py-1 bg-primary-500 text-white text-xs rounded-lg hover:bg-primary-600 transition-colors">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg mb-8 border border-neutral-200/50 dark:border-neutral-800/50">
          <h3 className="font-heading text-xl font-semibold text-neutral-900 dark:text-white mb-4">Code Example</h3>
          <CodeSnippet 
            code={`<div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden border border-neutral-200 dark:border-neutral-700">
  <div className="p-6 flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full bg-neutral-200 dark:bg-neutral-700 mb-4 overflow-hidden flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>
    <h3 className="font-heading text-lg font-medium text-neutral-900 dark:text-white mb-1">User Name</h3>
    <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 mb-3">Job Title</p>
    <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 mb-4">
      User description or bio information goes here.
    </p>
    <div className="flex space-x-3">
      <!-- Social links here -->
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
