/**
 * Sidebar Feature Demonstration Script
 * 
 * This script demonstrates the key features of the new sidebar component
 * Run this in the browser console to see automated demonstrations
 */

interface DemoStep {
  title: string;
  description: string;
  action: () => Promise<void>;
}

class SidebarDemo {
  private steps: DemoStep[];
  private currentStep: number;

  constructor() {
    this.steps = [
      {
        title: "🔍 Search Functionality",
        description: "Demonstrating intelligent search with autocomplete",
        action: () => this.demoSearch()
      },
      {
        title: "⌨️ Keyboard Shortcuts", 
        description: "Testing keyboard navigation and shortcuts",
        action: () => this.demoKeyboardShortcuts()
      },
      {
        title: "📱 Responsive Behavior",
        description: "Showing mobile and desktop responsive features",
        action: () => this.demoResponsive()
      },
      {
        title: "🎨 Theme Integration",
        description: "Dark mode and theme consistency",
        action: () => this.demoThemes()
      },
      {
        title: "♿ Accessibility Features",
        description: "Screen reader support and focus management",
        action: () => this.demoAccessibility()
      }
    ];
    
    this.currentStep = 0;
  }

  async start() {
    console.log("🚀 Starting Sidebar Component Demonstration");
    console.log("═".repeat(50));
    
    for (let i = 0; i < this.steps.length; i++) {
      const step = this.steps[i];
      console.log(`\n${i + 1}. ${step.title}`);
      console.log(`   ${step.description}`);
      console.log("─".repeat(30));
      
      try {
        await step.action();
        console.log("   ✅ Demo completed successfully");      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.log(`   ❌ Demo failed: ${errorMessage}`);
      }
      
      // Wait between demos
      await this.wait(2000);
    }
    
    console.log("\n🎉 All demos completed!");
    console.log("═".repeat(50));
  }
  async demoSearch() {
    const searchInput = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
    if (!searchInput) {
      throw new Error("Search input not found");
    }

    console.log("   • Focusing search input...");
    searchInput.focus();
    await this.wait(1000);

    const queries = ["button", "color", "typ"];
    for (const query of queries) {
      console.log(`   • Searching for: "${query}"`);
      this.typeText(searchInput, query);
      await this.wait(1500);
      
      // Clear search
      searchInput.value = "";
      searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      await this.wait(500);
    }
  }

  async demoKeyboardShortcuts() {
    console.log("   • Testing ⌘K shortcut...");
    
    // Simulate Cmd+K
    const cmdKEvent = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      bubbles: true
    });
    document.dispatchEvent(cmdKEvent);
    await this.wait(1000);

    console.log("   • Testing Escape key...");
    const escapeEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true
    });
    document.dispatchEvent(escapeEvent);
    await this.wait(1000);

    console.log("   • Testing Tab navigation...");
    this.simulateTabNavigation();
  }

  async demoResponsive() {
    console.log("   • Testing mobile breakpoint...");
    
    // Simulate mobile viewport
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      console.log("   • Simulating mobile viewport (note: best tested manually)");
    }    // Find sidebar toggle button
    const toggleButton = document.querySelector('button[aria-label*="sidebar" i]') as HTMLButtonElement;
    if (toggleButton) {
      console.log("   • Clicking sidebar toggle...");
      toggleButton.click();
      await this.wait(1000);
      
      console.log("   • Toggling again...");
      toggleButton.click();
      await this.wait(1000);
    } else {
      console.log("   • Sidebar toggle button not found");
    }
  }

  async demoThemes() {
    console.log("   • Checking theme integration...");
    
    const html = document.documentElement;
    const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
    console.log(`   • Current theme: ${currentTheme}`);
      // Find theme toggle if available
    const themeToggle = document.querySelector('button[aria-label*="theme" i]') as HTMLButtonElement;
    if (themeToggle) {
      console.log("   • Toggling theme...");
      themeToggle.click();
      await this.wait(1000);
      
      console.log("   • Toggling back...");
      themeToggle.click();
      await this.wait(1000);
    } else {
      console.log("   • Theme toggle not found (checking CSS variables)");
      this.checkCSSVariables();
    }
  }

  async demoAccessibility() {
    console.log("   • Checking ARIA attributes...");
    
    const sidebar = document.querySelector('[role="navigation"][aria-label*="sidebar" i]');
    if (sidebar) {
      console.log("   ✓ Sidebar has proper navigation role");
    }

    const buttons = document.querySelectorAll('button[aria-label]');
    console.log(`   ✓ Found ${buttons.length} buttons with aria-labels`);

    const links = document.querySelectorAll('a[href]');
    console.log(`   ✓ Found ${links.length} keyboard-accessible links`);

    console.log("   • Testing focus indicators...");    const focusableElements = document.querySelectorAll(
      'button, a[href], input, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
      await this.wait(500);
      (focusableElements[0] as HTMLElement).blur();
    }
  }
  simulateTabNavigation() {
    const focusableElements = document.querySelectorAll(
      'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    let currentIndex = 0;
    const tabInterval = setInterval(() => {
      if (currentIndex < Math.min(5, focusableElements.length)) {
        (focusableElements[currentIndex] as HTMLElement).focus();
        currentIndex++;
      } else {
        clearInterval(tabInterval);
        if (focusableElements[0]) {
          (focusableElements[0] as HTMLElement).blur();
        }
      }
    }, 300);
  }

  typeText(element: HTMLInputElement, text: string) {
    element.value = text;
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  }

  checkCSSVariables() {
    const computedStyle = getComputedStyle(document.documentElement);
    const primaryColor = computedStyle.getPropertyValue('--primary-600');
    const neutralColor = computedStyle.getPropertyValue('--neutral-700');
    
    if (primaryColor) {
      console.log(`   ✓ Primary color variable found: ${primaryColor}`);
    }
    if (neutralColor) {
      console.log(`   ✓ Neutral color variable found: ${neutralColor}`);
    }
  }
  wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Quick feature test
  static quickTest() {
    console.log("🧪 Quick Sidebar Feature Test");
    console.log("─".repeat(30));
    
    // Test search functionality
    const searchInput = document.querySelector('input[placeholder*="Search"]');
    console.log(`Search input: ${searchInput ? '✅ Found' : '❌ Not found'}`);
    
    // Test sidebar visibility
    const sidebar = document.querySelector('[role="navigation"]');
    console.log(`Sidebar navigation: ${sidebar ? '✅ Found' : '❌ Not found'}`);
    
    // Test toggle button
    const toggleButton = document.querySelector('button[aria-label*="sidebar" i]');
    console.log(`Toggle button: ${toggleButton ? '✅ Found' : '❌ Not found'}`);
    
    // Test responsive classes
    const responsiveElements = document.querySelectorAll('.md\\:hidden, .md\\:flex');
    console.log(`Responsive elements: ${responsiveElements.length > 0 ? '✅ Found' : '❌ Not found'}`);
    
    // Test navigation items
    const navItems = document.querySelectorAll('nav a[href], nav button');
    console.log(`Navigation items: ${navItems.length} found`);
    
    console.log("─".repeat(30));
    console.log("Run 'new SidebarDemo().start()' for full demonstration");
  }
}

// Export for use
if (typeof window !== 'undefined') {
  // Add SidebarDemo to global window object
  interface CustomWindow extends Window {
    SidebarDemo?: typeof SidebarDemo;
  }
  (window as CustomWindow).SidebarDemo = SidebarDemo;
  
  // Auto-run quick test
  console.log("🔧 Sidebar Demo Tools Loaded");
  console.log("Available commands:");
  console.log("• SidebarDemo.quickTest() - Quick feature verification");
  console.log("• new SidebarDemo().start() - Full interactive demonstration");
  console.log("• new SidebarDemo().demoSearch() - Search feature demo only");
}

export default SidebarDemo;
