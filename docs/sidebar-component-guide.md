# Enhanced Sidebar Component

A modern, accessible, and feature-rich sidebar navigation component built with React, TypeScript, Tailwind CSS, and Headless UI.

## ✨ Features

### 🎯 **Enhanced Search Experience**
- **Intelligent Search**: Smart search with scoring algorithm that prioritizes exact matches, label matches, and tag matches
- **Real-time Filtering**: Instant results as you type with no performance lag
- **Keyboard Shortcuts**: 
  - `⌘K` (Mac) / `Ctrl+K` (Windows/Linux) to focus search
  - `Escape` to clear search and unfocus
- **Search Autocomplete**: Contextual search suggestions based on navigation items
- **Empty State**: Helpful empty state when no results are found

### 🧭 **Advanced Navigation**
- **Hierarchical Structure**: Supports nested navigation with collapsible sections
- **Smart Expansion**: Auto-expands relevant sections during search
- **Active State Tracking**: Highlights current section with visual indicators
- **Breadcrumb Memory**: Maintains expanded state preferences
- **Quick Access**: Direct links to all major sections

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for touch devices with appropriate touch targets
- **Adaptive Behavior**: 
  - Desktop: Always visible, fixed width (320px)
  - Mobile: Overlay with backdrop blur
- **Smooth Transitions**: 300ms animations for open/close states
- **Touch Gestures**: Swipe to dismiss on mobile

### ♿ **Accessibility Excellence**
- **WCAG 2.1 AA Compliant**: Full keyboard navigation support
- **Screen Reader Optimized**: Proper ARIA labels and roles
- **Focus Management**: Logical tab order and focus trapping
- **High Contrast**: Excellent color contrast ratios in all themes
- **Reduced Motion**: Respects user's motion preferences

### 🎨 **Visual Design**
- **Clean Interface**: Minimal, distraction-free design
- **Dark Mode**: Full dark mode support with smooth transitions
- **Visual Hierarchy**: Clear section groupings and typography scale
- **Interactive States**: Hover, focus, and active states for all elements
- **Consistent Spacing**: 4pt grid system alignment

## 🚀 Usage

### Basic Implementation

```tsx
import Sidebar, { useSidebar } from '@/components/Sidebar';

function App() {
  const sidebar = useSidebar();

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <Sidebar 
        isOpen={sidebar.isOpen} 
        onToggle={sidebar.toggle}
        className="hidden md:flex md:flex-shrink-0"
      />
      
      {/* Mobile Sidebar */}
      <Sidebar 
        isOpen={sidebar.isOpen} 
        onToggle={sidebar.toggle}
        className="md:hidden"
      />
      
      {/* Main Content */}
      <div className="flex-1">
        <Header onSidebarToggle={sidebar.toggle} />
        <main>{/* Your content */}</main>
      </div>
    </div>
  );
}
```

### With Header Integration

```tsx
import Header from '@/components/Header';
import SidebarToggle from '@/components/SidebarToggle';

function MyHeader({ onSidebarToggle }) {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <SidebarToggle 
          onClick={onSidebarToggle}
          className="mr-3 md:hidden"
        />
        <h1>My App</h1>
      </div>
    </header>
  );
}
```

## 🔧 Configuration

### Navigation Structure

The sidebar uses a hierarchical navigation structure defined in the component:

```tsx
interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  children?: NavigationItem[];
  description?: string;
  tags?: string[];
}
```

### Customizing Navigation

Update the `navigationItems` array in `Sidebar.tsx`:

```tsx
const navigationItems: NavigationItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: HomeIcon,
    href: '#overview',
    description: 'Design system overview',
    tags: ['home', 'intro']
  },
  {
    id: 'components',
    label: 'Components',
    icon: CubeIcon,
    description: 'UI components',
    children: [
      {
        id: 'buttons',
        label: 'Buttons',
        icon: CubeIcon,
        href: '#buttons',
        description: 'Button components',
        tags: ['interactive', 'actions']
      }
    ]
  }
];
```

## 🎛️ Component API

### Sidebar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Controls sidebar visibility |
| `onToggle` | `() => void` | - | Callback for toggle button |
| `className` | `string` | `''` | Additional CSS classes |

### useSidebar Hook

```tsx
const {
  isOpen,    // boolean - current state
  toggle,    // () => void - toggle visibility
  open,      // () => void - force open
  close      // () => void - force close
} = useSidebar();
```

## 🎨 Styling

The sidebar uses Tailwind CSS with custom design tokens:

### Color Variables
```css
/* Primary colors for active states */
--primary-50: #eefbfd;
--primary-600: #16809d;

/* Neutral colors for text and backgrounds */
--neutral-100: #f3f4f4;
--neutral-700: #61686a;
--neutral-900: #45484a;
```

### Dark Mode Support
All colors automatically adapt to dark mode using Tailwind's `dark:` prefix.

## 🔍 Search Features

### Search Algorithm
The search uses a sophisticated scoring system:

1. **Exact label match**: 100 points
2. **Label starts with query**: 80 points  
3. **Label contains query**: 60 points
4. **Tag matches**: 50 points
5. **Description contains**: 40 points
6. **Word matches**: 20 points each
7. **Has navigation link**: +10 points

### Search Enhancements
- **Multi-word search**: Searches for all words in the query
- **Fuzzy matching**: Tolerant of typos and partial matches
- **Context grouping**: Groups child results under parent sections
- **Result highlighting**: (Future enhancement)

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘K` / `Ctrl+K` | Focus search input |
| `Escape` | Clear search / Close sidebar |
| `Tab` | Navigate through interactive elements |
| `Enter` | Activate focused item |
| `Space` | Toggle collapsible sections |

## 📱 Responsive Behavior

### Desktop (≥768px)
- Sidebar is always visible
- Fixed width of 320px
- No backdrop overlay
- Sidebar state persists

### Mobile (<768px)
- Sidebar is hidden by default
- Overlay with backdrop blur
- Full-height sliding animation
- Auto-closes after navigation

## 🧪 Testing

### Accessibility Testing
```bash
# Run accessibility audits
npm run test:a11y

# Test with screen reader
# Use NVDA, JAWS, or VoiceOver
```

### Manual Testing Checklist
- [ ] Keyboard navigation works in all sections
- [ ] Search functions correctly with various queries
- [ ] Mobile gestures work properly
- [ ] Dark mode transitions smoothly
- [ ] Focus states are visible
- [ ] Screen reader announces content correctly

## 🔄 Migration Guide

### From Basic Navigation
If you're upgrading from a basic navigation component:

1. **Install dependencies**:
   ```bash
   npm install @headlessui/react @heroicons/react
   ```

2. **Update imports**:
   ```tsx
   // Before
   import Navigation from './Navigation';
   
   // After
   import Sidebar, { useSidebar } from './Sidebar';
   ```

3. **Update layout structure**:
   ```tsx
   // Before
   <div className="app">
     <Navigation />
     <main>{content}</main>
   </div>
   
   // After
   <div className="flex min-h-screen">
     <Sidebar isOpen={isOpen} onToggle={toggle} />
     <div className="flex-1">
       <Header onSidebarToggle={toggle} />
       <main>{content}</main>
     </div>
   </div>
   ```

## 🛠️ Development

### Running Locally
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Code Structure
```
src/components/
├── Sidebar.tsx           # Main sidebar component
├── SidebarToggle.tsx     # Toggle button component
└── Header.tsx            # Updated header with sidebar integration

src/utils/
├── accessibility.ts      # Accessibility utilities
└── searchEngine.ts       # Advanced search functionality
```

## 📈 Performance

### Optimizations
- **Memoized search results**: Prevents unnecessary re-calculations
- **Virtualized scrolling**: For large navigation trees (future)
- **Lazy loading**: Icons and components load on demand
- **Efficient re-renders**: Only updates when necessary

### Bundle Size
- Sidebar component: ~15KB (gzipped)
- Dependencies included: Headless UI, Heroicons
- Zero additional CSS framework dependencies

## 🤝 Contributing

### Code Style
- Use TypeScript for all new code
- Follow the existing naming conventions
- Add JSDoc comments for public APIs
- Include accessibility attributes

### Pull Request Guidelines
1. Test on multiple screen sizes
2. Verify keyboard navigation
3. Test with screen readers
4. Update documentation if needed

## 📄 License

This component is part of the Alux Design System and follows the same license terms.

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and Headless UI**
