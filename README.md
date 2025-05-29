This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started 

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Design System Documentation

A comprehensive design system showcasing colors, typography, and components with a focus on accessibility and best practices.

## Features

- Component library with multiple variants and themes
- Accessibility-first approach utilizing Headless UI best practices
- Tailwind CSS integration
- Responsive design patterns
- Dark mode support

## Headless UI Integration

This design system leverages [Headless UI](https://headlessui.com/) for completely unstyled, fully accessible UI components. Headless UI provides the behavior and accessibility while allowing complete styling flexibility.

### Key Benefits of Headless UI Integration

1. **Accessibility-First**: All components meet WCAG 2.1 standards with proper ARIA attributes, keyboard navigation, and screen reader support.

2. **Styling Freedom**: Components are completely unstyled, allowing seamless integration with Tailwind CSS and custom styles.

3. **Render Props Pattern**: Components expose state via render props, enabling conditional styling based on component states.

4. **Data Attribute API**: Components expose data attributes for easy styling of different states with Tailwind.

5. **Component Composition**: Designed for easy composition and customization.

## Accessibility Features

- **Keyboard Navigation**: All interactive elements can be accessed and operated using only a keyboard.
- **Screen Reader Announcements**: Dynamic content changes are announced appropriately.
- **Focus Management**: Proper focus trapping in modals and dialogs, with focus restoration when closed.
- **ARIA Attributes**: All components include necessary ARIA attributes for assistive technologies.
- **Reduced Motion Support**: Respects user preferences for reduced motion.
- **Color Contrast**: All themes meet WCAG AA standards for color contrast.

## Components

The design system includes the following accessible components:

- **Accordions**: Expandable/collapsible content sections
- **Badges**: Status indicators and notification badges
- **Cards**: Various card layouts with themes
- **Tabs/Pills**: Content organization with tabs and pill navigation
- **Buttons**: Primary, secondary, and variant buttons
- **Modals**: Accessible dialog components
- **Navigation**: Responsive navigation components

## Built With

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Headless UI 2](https://headlessui.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Implementation Patterns

### Data Fetching Pattern

Components that need to fetch data follow a consistent pattern using the `useComponentData` hook:

```tsx
import { useComponentData } from '../utils/headlessPatterns';

function MyComponent() {
  const { data, isLoading, error, refetch } = useComponentData(
    () => fetch('/api/data').then(res => res.json()),
    {
      onSuccess: (data) => console.log('Data loaded:', data),
      refetchOnWindowFocus: true
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>{/* Render component with data */}</div>;
}
```

### Accessibility Pattern

Components follow these consistent accessibility patterns:

```tsx
import { useUniqueId, useAnnouncement } from '../utils/headlessPatterns';

function AccessibleComponent() {
  // Generate unique IDs for ARIA relationships
  const componentId = useUniqueId('component');
  
  // For screen reader announcements
  const announce = useAnnouncement();
  
  // Example usage
  const handleAction = () => {
    // Do something
    announce('Action completed successfully', false);
  };
  
  return (
    <div>
      <button 
        id={`${componentId}-button`}
        aria-controls={`${componentId}-content`}
        aria-expanded={isOpen}
        onClick={handleAction}
      >
        Toggle
      </button>
      <div 
        id={`${componentId}-content`}
        aria-labelledby={`${componentId}-button`}
      >
        Content
      </div>
    </div>
  );
}
```

## License

This project is licensed under the MIT License.
