// Cloudflare Pages deployment script
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting deployment process...');

// Check Node.js version
const nodeVersion = process.version;
console.log(`Current Node.js version: ${nodeVersion}`);

const requiredVersion = '18.18.0';
console.log(`Required Node.js version: ${requiredVersion}`);

// Compare versions (simple string comparison works for this format)
if (nodeVersion.slice(1) < requiredVersion) {
  console.error(`Error: Node.js ${requiredVersion} or higher is required.`);
  console.error('Please upgrade Node.js or use a different deployment environment.');
  process.exit(1);
}

// Build the application
try {
  console.log('Building application...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully.');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

// Deploy to Cloudflare Pages
try {
  console.log('Deploying to Cloudflare Pages...');
  execSync('npx wrangler pages publish .next --project-name alux-design-system', { stdio: 'inherit' });
  console.log('Deployment completed successfully.');
} catch (error) {
  console.error('Deployment failed:', error);
  process.exit(1);
}

console.log('Deployment process finished.');
