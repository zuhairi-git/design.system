#!/usr/bin/env node

/**
 * This script deploys the Alux Design System to Cloudflare Pages.
 * It can be run with: node deploy.js
 */

const { execSync } = require('child_process');

// Build the app
console.log('Building the app...');
execSync('npm run build', { stdio: 'inherit' });

// Deploy to Cloudflare Pages
console.log('Deploying to Cloudflare Pages...');
try {
  // First, try the preferred method
  execSync('npx wrangler pages deploy .next --project-name=alux-design-system', { stdio: 'inherit' });
} catch (error) {
  console.log('Falling back to alternative deployment method...');
  try {
    // Try deploying as assets
    execSync('npx wrangler deploy --assets=./.next/static', { stdio: 'inherit' });
  } catch (secondError) {
    console.error('Both deployment methods failed.');
    console.error('Please check your Cloudflare configuration and authentication.');
    process.exit(1);
  }
}

console.log('Deployment complete!');
