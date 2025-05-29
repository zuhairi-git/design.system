# Colorful Theme Implementation Guide

This guide explains how to implement the colorful theme in components across our design system.

## Overview

The colorful theme provides a vibrant, gradient-based visual style for our components with consistent colors, shadows, and effects that align with our brand identity. The implementation uses standardized utilities to ensure consistency across all components.

## Prerequisites

The colorful theme implementation relies on:

- `src/utils/colorfulTheme.ts` - Core color definitions and styles
- `src/utils/headlessThemeIntegration.ts` - Utility functions for applying the theme to components
- Tailwind's data attribute support for interactive states

## Implementation Steps

### 1. Import Required Utilities

In your component file, import the necessary utility functions:

```tsx
import {
  getFocusRingClasses,
  getColorfulContainerClasses,
  getColorfulHeaderClasses,
  getColorfulContentClasses,
  getColorfulTextClass,
  getThemeIconColors,
  getColorfulOverlayStyles
} from '../utils/headlessThemeIntegration';
```

### 2. Add Theme Support to Your Component

Ensure your component accepts a `theme` prop:

```tsx
type YourComponentProps = {
  theme?: 'light' | 'dark' | 'colorful';
  // other props...
};
```

### 3. Apply Theme to Container Elements

Use the utility functions to apply the colorful theme styles:

```tsx
const containerClasses = theme === 'colorful'
  ? getColorfulContainerClasses('default')  // or 'bordered', 'filled', 'minimal'
  : 'your-regular-classes';
```

### 4. Apply Text Colors

Use the utility functions to apply the appropriate text colors:

```tsx
const textClasses = theme === 'colorful'
  ? getColorfulTextClass('primary')  // or 'secondary', 'muted'
  : 'your-regular-classes';
```

### 5. Add Focus Styles

Apply consistent focus styles using the utility:

```tsx
const focusClasses = getFocusRingClasses(theme);
```

### 6. Add Colorful Overlay (Optional)

For components that need a gradient overlay effect:

```tsx
{theme === 'colorful' && (
  <div {...getColorfulOverlayStyles('overlay', 0.10)} />
)}
```

### 7. Implement Interactive States

Use data-* attributes for interactive states:

```tsx
const hoverClasses = theme === 'colorful'
  ? 'data-hover:bg-[rgba(26,0,51,0.8)]'
  : 'hover:bg-gray-100';
```

## Example Implementation

Here's how the Accordion component implements the colorful theme:

```tsx
// Imports
import { 
  getFocusRingClasses, 
  getColorfulContainerClasses 
} from '../utils/headlessThemeIntegration';

// Component logic
function MyComponent({ theme = 'light', ...props }) {
  // Apply theme styles
  const containerClass = theme === 'colorful' 
    ? getColorfulContainerClasses('default') 
    : 'border border-gray-200';
  
  const headingClass = theme === 'colorful'
    ? getColorfulTextClass('primary')
    : 'text-gray-900 dark:text-white';
  
  return (
    <div className={containerClass}>
      {theme === 'colorful' && (
        <div {...getColorfulOverlayStyles('overlay', 0.10)} />
      )}
      <h3 className={headingClass}>Component Title</h3>
      {/* Component content... */}
    </div>
  );
}
```

## Best Practices

1. **Always provide fallbacks** for light and dark themes
2. **Use the provided utilities** rather than hardcoding color values
3. **Handle interactive states** using data-* attributes for consistency
4. **Maintain accessibility** by ensuring sufficient color contrast
5. **Test in different contexts** to ensure the theme works well in various layouts

## Notes on Headless UI Integration

When using Headless UI components:

1. Make sure Tailwind is configured for data-* attribute support
2. Apply theme styles to base elements, not to the Headless UI wrapper components
3. Use `data-state` attributes provided by Headless UI for styling different states
4. Set ARIA attributes appropriately regardless of the theme

## Background Color Reference

The base background color for colorful theme components is `#1a0033`, with gradients and overlays providing the visual richness.
