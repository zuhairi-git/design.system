'use strict';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Navigation functionality
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  const overlay = document.getElementById('overlay');
  const sidebar = document.querySelector('.sidebar');
  
  // Handle mobile navigation toggle
  if (mobileNavToggle && mobileNavClose && overlay && sidebar) {
    mobileNavToggle.addEventListener('click', function() {
      sidebar.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    mobileNavClose.addEventListener('click', closeMobileNav);
    overlay.addEventListener('click', closeMobileNav);
    
    function closeMobileNav() {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
  
  // Handle smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Close mobile navigation if it's open
        if (sidebar && sidebar.classList.contains('active')) {
          closeMobileNav();
        }
        
        // Scroll to target section
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
        
        // Update URL hash without scrolling
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });
  
  // Highlight active section in navigation
  function setActiveNavItem() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`a[href="#${sectionId}"]`);
      
      if (navLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLink.classList.add('active');
          navLink.setAttribute('aria-current', 'page');
        } else {
          navLink.classList.remove('active');
          navLink.removeAttribute('aria-current');
        }
      }
    });
  }
  
  // Initial check for active section
  setActiveNavItem();
  
  // Check active section on scroll
  window.addEventListener('scroll', setActiveNavItem);
  
  // Color cards copy functionality
  const colorCards = document.querySelectorAll('.color-card');
  
  colorCards.forEach(card => {
    card.addEventListener('click', function() {
      const colorValue = this.getAttribute('data-color');
      
      if (colorValue) {
        navigator.clipboard.writeText(colorValue)
          .then(() => {
            const tooltip = this.querySelector('.color-tooltip');
            if (tooltip) {
              tooltip.textContent = 'Copied!';
              setTimeout(() => {
                tooltip.textContent = 'Click to copy';
              }, 2000);
            }
          })
          .catch(err => {
            console.error('Failed to copy: ', err);
          });
      }
    });
  });
  
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    // Set initial theme
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', function() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
  
  // Language toggle functionality
  const langToggle = document.getElementById('lang-toggle');
  
  if (langToggle) {
    const currentLang = localStorage.getItem('lang') || 'en';
    const htmlElement = document.documentElement;
    
    // Set initial language direction
    htmlElement.setAttribute('lang', currentLang);
    htmlElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    
    // Update button text
    langToggle.textContent = currentLang === 'en' ? 'ع' : 'En';
    
    // Toggle language
    langToggle.addEventListener('click', function() {
      const newLang = htmlElement.getAttribute('lang') === 'en' ? 'ar' : 'en';
      htmlElement.setAttribute('lang', newLang);
      htmlElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
      this.textContent = newLang === 'en' ? 'ع' : 'En';
      localStorage.setItem('lang', newLang);
    });
  }
  
  // Filter functionality for search
  const searchInput = document.getElementById('nav-search');
  const navItems = document.querySelectorAll('.sidebar nav ul li');
  
  if (searchInput && navItems.length > 0) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      
      navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
          const text = link.textContent.toLowerCase();
          
          if (text.includes(searchTerm)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  }
});
