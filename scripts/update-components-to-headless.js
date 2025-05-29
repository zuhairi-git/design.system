/**
 * Script to update components to follow Headless UI best practices
 * 
 * This script helps apply Headless UI's best practices to all components in the design system.
 * It does simple transformations like changing hover: to data-hover: and adding aria attributes.
 */

const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const stat = util.promisify(fs.stat);

const COMPONENTS_DIR = path.join(__dirname, '..', 'src', 'components');
const UTILS_DIR = path.join(__dirname, '..', 'src', 'utils');

// Transformations for Headless UI best practices
const transformations = [
  // Convert hover: to data-hover:
  { find: /\bhover:/g, replace: 'data-hover:' },
  
  // Convert focus: to data-focus:
  { find: /\bfocus:/g, replace: 'data-focus:' },
  
  // Convert active: to data-active:
  { find: /\bactive:/g, replace: 'data-active:' },
  
  // Convert disabled: to data-disabled:
  { find: /\bdisabled:/g, replace: 'data-disabled:' },
  
  // Ensure proper role attributes for common components
  { 
    find: /<button([^>]*)>/g, 
    replace: (match, p1) => {
      // Only add role if it's not already present
      if (!p1.includes('role=')) {
        return `<button${p1} role="button">`;
      }
      return match;
    } 
  },
  
  // Add aria-live to dynamic content
  {
    find: /<div([^>]*)className="([^"]*)notification([^"]*)"([^>]*)>/g,
    replace: '<div$1className="$2notification$3"$4 aria-live="polite">'
  },
  
  // Ensure dialog has proper ARIA attributes
  {
    find: /<div([^>]*)role="dialog"([^>]*)>/g,
    replace: '<div$1role="dialog" aria-modal="true"$2>'
  }
];

// Skip these files when processing
const skipFiles = [
  '.DS_Store',
  'node_modules',
  '.git'
];

// Process a single file
async function processFile(filePath) {
  console.log(`Processing ${filePath}`);
  
  // Read the file content
  let content = await readFile(filePath, 'utf8');
  let originalContent = content;
  
  // Apply transformations
  for (const { find, replace } of transformations) {
    content = content.replace(find, replace);
  }
  
  // Only write if the content changed
  if (content !== originalContent) {
    await writeFile(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
    return true;
  }
  
  console.log(`No changes needed for ${filePath}`);
  return false;
}

// Process all files in a directory recursively
async function processDirectory(dirPath) {
  const entries = await readdir(dirPath, { withFileTypes: true });
  let updatedFiles = 0;
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    // Skip files we don't want to process
    if (skipFiles.includes(entry.name)) {
      continue;
    }
    
    if (entry.isDirectory()) {
      updatedFiles += await processDirectory(fullPath);
    } else if (
      entry.isFile() && 
      (entry.name.endsWith('.js') || 
       entry.name.endsWith('.jsx') || 
       entry.name.endsWith('.ts') || 
       entry.name.endsWith('.tsx'))
    ) {
      if (await processFile(fullPath)) {
        updatedFiles++;
      }
    }
  }
  
  return updatedFiles;
}

// Main function
async function main() {
  try {
    console.log('Starting component updates for Headless UI best practices...');
    
    // Process components directory
    const componentsUpdated = await processDirectory(COMPONENTS_DIR);
    console.log(`Updated ${componentsUpdated} component files.`);
    
    // Process utils directory
    const utilsUpdated = await processDirectory(UTILS_DIR);
    console.log(`Updated ${utilsUpdated} utility files.`);
    
    console.log('Done!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

// Run the script
main();
