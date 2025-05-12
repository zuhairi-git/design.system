'use client';

import { useState } from 'react';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

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
            <CheckRoundedIcon className="align-middle" style={{ fontSize: 16 }} />
          ) : (
            <ContentCopyRoundedIcon className="align-middle" style={{ fontSize: 16 }} />
          )}
        </button>
      </div>
    </div>
  );
}
