/**
 * Component Theme Updater Script
 * 
 * This script helps update existing components to use the standardized colorful theme
 * implementation across the design system.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Paths
const componentsDir = path.join(__dirname, '../src/components');
const utilsDir = path.join(__dirname, '../src/utils');

// Configuration
const config = {
  componentsToUpdate: [
    // Add components that need to be updated
    'FeatureCard.tsx',
    'ThemeCard.tsx',
    'ColorCard.tsx',
    'TimelineCard.tsx',
    'TypographyCard.tsx',
    'Header.tsx',
    'Sidebar.tsx',
    'AnimatedSection.tsx',
    // Add more component files as needed
  ],
  colorReplacements: [
    // Common colors to standardize
    { from: 'text-\\[#f0f8ff\\]', to: "getColorfulTextClass('primary')" },
    { from: 'text-\\[#f0f8ff\\]\\/90', to: "getColorfulTextClass('secondary')" },
    { from: 'text-\\[#f0f8ff\\]\\/70', to: "getColorfulTextClass('muted')" },
    { from: 'bg-\\[#1a0033\\]', to: "getColorfulContainerClasses('default')" },
    { from: 'border-\\[rgba\\(128,0,255,0.3\\)\\]', to: "getBorderClass('default')" },
    { from: 'border-\\[rgba\\(128,0,255,0.7\\)\\]', to: "getBorderClass('strong')" },
    
    // Focus styles
    { from: 'focus:outline-none focus-visible:ring-2 focus-visible:ring-\\[rgba\\(255,0,204,0.5\\)\\] focus-visible:ring-offset-2 focus-visible:ring-offset-\\[#1a0033\\]', to: "getFocusRingClasses('colorful')" },
    
    // Gradient backgrounds
    { from: 'bg-gradient-to-r from-blue-500 to-purple-500', to: "getColorfulGradient('primary')" },
    { from: 'bg-gradient-to-r from-purple-500 to-pink-500', to: "getColorfulGradient('secondary')" },
    { from: 'bg-gradient-to-r from-blue-400 to-indigo-500', to: "getColorfulGradient('accent')" },
    { from: 'bg-gradient-to-r from-indigo-500 to-purple-600', to: "getColorfulGradient('highlight')" },
  ]
};

// Helper functions
function addImportStatement(fileContent) {
  // Check if the import already exists
  if (fileContent.includes("import { getFocusRingClasses")) {
    return fileContent;
  }
  
  // Find the last import statement
  const importRegex = /import.*from\s+['"][^'"]+['"];/g;
  const imports = [...fileContent.matchAll(importRegex)];
  
  if (imports.length === 0) {
    return fileContent;
  }
  
  const lastImport = imports[imports.length - 1];
  const lastImportEndIndex = lastImport.index + lastImport[0].length;
  
  // Insert our import after the last import
  const newImport = `\nimport {
  getFocusRingClasses,
  getColorfulContainerClasses,
  getColorfulHeaderClasses,
  getColorfulContentClasses,
  getColorfulTextClass,
  getThemeIconColors,
  getColorfulOverlayStyles,
  getColorfulGradient,
  getBorderClass
} from '../utils/headlessThemeIntegration';`;

  return fileContent.slice(0, lastImportEndIndex) + newImport + fileContent.slice(lastImportEndIndex);
}

function replaceHardcodedStyles(fileContent, componentName) {
  let updatedContent = fileContent;
  
  // First, update all color replacements
  config.colorReplacements.forEach(({ from, to }) => {
    const regex = new RegExp(`(className=['"](.*?))${from}(['"\\s}])`, 'g');
    updatedContent = updatedContent.replace(regex, (match, prefix, content, suffix) => {
      return `${prefix}{\${theme === 'colorful' ? ${to} : '${from}'}}${suffix}`;
    });
  });
  
  // Replace overlay divs with the utility
  const overlayPattern = /<div[^>]*className=["']absolute inset-0 pointer-events-none["'][^>]*style=\{{[^}]*background: ["']linear-gradient\(135deg, #00ffff, #ff00cc, #3b82f6\)["'][^}]*opacity: 0\.10,[^}]*mixBlendMode: ['"]overlay["'][^}]*\}}[^>]*aria-hidden=["']true["'][^>]*><\/div>/g;
  updatedContent = updatedContent.replace(overlayPattern, 
    `{theme === 'colorful' && (
    <div {...getColorfulOverlayStyles('overlay', 0.10)} />
  )}`);
  
  console.log(`Updated styles in ${componentName}`);
  return updatedContent;
}

// Main function to process a component file
function processComponentFile(filePath) {
  const componentName = path.basename(filePath);
  console.log(`Processing ${componentName}...`);
  
  try {
    let fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Add imports
    fileContent = addImportStatement(fileContent);
    
    // Replace hardcoded styles
    fileContent = replaceHardcodedStyles(fileContent, componentName);
    
    // Write updated file
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`Successfully updated ${componentName}`);
  } catch (error) {
    console.error(`Error processing ${componentName}:`, error);
  }
}

// Main execution
function main() {
  console.log('Starting component theme update...');
  
  // Check if headlessThemeIntegration.ts exists
  const themeIntegrationPath = path.join(utilsDir, 'headlessThemeIntegration.ts');
  if (!fs.existsSync(themeIntegrationPath)) {
    console.error('headlessThemeIntegration.ts not found. Please run the script after creating this utility file.');
    process.exit(1);
  }
  
  // Process each component
  config.componentsToUpdate.forEach(componentFileName => {
    const filePath = path.join(componentsDir, componentFileName);
    if (fs.existsSync(filePath)) {
      processComponentFile(filePath);
    } else {
      console.warn(`Component file not found: ${componentFileName}`);
    }
  });
  
  console.log('Component theme update completed!');
}

// Execute the main function
main();
