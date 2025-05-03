'use client';

import { useState } from 'react';

interface CodeSnippetProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeSnippet({ code, language = 'css', title }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-4">
      {title && (
        <div className="bg-neutral-200 dark:bg-neutral-800 py-2 px-4 rounded-t-md border-b border-neutral-300 dark:border-neutral-700">
          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-300">{title}</p>
        </div>
      )}
      <div className="relative">
        <pre className={`bg-neutral-100 dark:bg-neutral-900 p-4 overflow-x-auto font-mono text-sm text-neutral-800 dark:text-neutral-300 ${!title ? 'rounded-md' : 'rounded-b-md'}`}>
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 bg-white dark:bg-neutral-800 rounded p-1.5 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
