"use client";

import Header from "@/components/Header";
import Sidebar, { useSidebar } from "@/components/Sidebar";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTopButton from "@/components/BackToTopButton";

import FeatureCard from "@/components/FeatureCard";
import FixCardLinks from "@/components/FixCardLinks";
import DynamicTypography from "@/components/DynamicTypography";
import ThemeColorShowcase from "@/components/ThemeColorShowcase";
import ColorAccessibilityGuide from "@/components/ColorAccessibilityGuide";
import ButtonsSection from "./buttons-section";
import TabsPillsSection from "./tabs-pills-section";
import AccordionSection from "./accordions-section";
import BadgesSection from "./badges-section";
import TintsSection from "./tints-section";
import GridsSection from "./grids-section";
import BreakpointsSection from "./breakpoints-section";
import CardsSection from "./cards-section";
import BasicCardsSection from "./basic-cards";
import InteractiveCardsSection from "./interactive-cards";
import MediaCardsSection from "./media-cards";
import DashboardCardsSection from "./dashboard-cards";
import ProfileCardsSection from "./profile-cards";
import TimelineCardsSection from "./timeline-cards";
import AccessibilityUtilitiesSection from "./accessibility-utilities";
import SpacingSection from "./spacing";
import LayoutsSection from "./layouts-section";
import NavigationSection from "./navigation-section";
import FormsSection from "./forms-section";
import PaletteRoundedIcon from "@mui/icons-material/PaletteRounded";
import TextFieldsRoundedIcon from "@mui/icons-material/TextFieldsRounded";
import SpaceBarRoundedIcon from "@mui/icons-material/SpaceBarRounded";
import StyleRoundedIcon from "@mui/icons-material/StyleRounded";
import SmartButtonRoundedIcon from "@mui/icons-material/SmartButtonRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Home() {
  const sidebar = useSidebar();
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <FixCardLinks />
      {/* Sidebar - Always fixed position */}
      <Sidebar isOpen={sidebar.isOpen} onToggle={sidebar.toggle} />
      {/* Main Content - Offset by sidebar width on desktop when open */}{" "}
      <div
        className={`flex flex-col min-h-screen transition-all duration-300 ${
          sidebar.isOpen ? "md:ml-72" : ""
        }`}
      >
        <Header onSidebarToggle={sidebar.toggle} />

        <main className="flex-1 w-full p-0 overflow-x-hidden">
          {/* Overview Section */}
          <AnimatedSection
            id="overview"
            className="ds-section"
            animation="slide-up"
          >
            <div className="max-w-7xl mx-auto">
              <div className="mb-14">
                <div className="section-label text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20">
                  <PaletteRoundedIcon className="w-4 h-4" />
                  Design Documentation
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-neutral-900 dark:text-white mb-6 tracking-tight">
                  Alux{" "}
                  <span className="text-primary-600 dark:text-primary-400">
                    Design
                  </span>{" "}
                  System
                </h1>

                <p className="font-body text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mb-4 leading-relaxed">
                  A lightweight design system providing clear guidelines,
                  reusable components, and helpful resources for building
                  consistent, visually appealing user interfaces.
                </p>
                <p className="font-body text-base text-neutral-400 dark:text-neutral-500 max-w-2xl mb-10">
                  Built with Tailwind CSS and Headless UI.
                </p>

                <div className="flex flex-wrap gap-3 mb-16">
                  <a
                    href="#colors"
                    className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Explore Components
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-200 dark:border-primary-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all duration-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
                {" "}
                {[
                  {
                    title: "Colors",
                    description:
                      "Complete color palette including primary, accent, and semantic colors",
                    link: "#colors",
                    materialIcon: () => (
                      <PaletteRoundedIcon className="align-middle" />
                    ),
                  },
                  {
                    title: "Typography",
                    description: "Interactive font styles with live preview",
                    link: "#typography",
                    materialIcon: () => (
                      <TextFieldsRoundedIcon className="align-middle" />
                    ),
                  },
                  {
                    title: "Spacing",
                    description: "4-point grid system for consistent spacing",
                    link: "#spacing",
                    materialIcon: () => (
                      <SpaceBarRoundedIcon className="align-middle" />
                    ),
                  },
                  {
                    title: "Buttons",
                    description:
                      "Button styles and variations across different themes",
                    link: "#buttons",
                    materialIcon: () => (
                      <SmartButtonRoundedIcon className="align-middle" />
                    ),
                  },
                  {
                    title: "Tabs & Pills",
                    description:
                      "Navigation components with accessibility support",
                    link: "#tabs-pills",
                    materialIcon: () => (
                      <DevicesRoundedIcon className="align-middle" />
                    ),
                  },
                  {
                    title: "Accordions",
                    description:
                      "Collapsible content sections with icons, badges, and nested tabs",
                    link: "#accordions",
                    materialIcon: () => (
                      <ExpandMoreIcon className="align-middle" />
                    ),
                  },
                  {
                    title: "Badges",
                    description:
                      "Status indicators and notification components",
                    link: "#badges",
                    materialIcon: () => (
                      <StyleRoundedIcon className="align-middle" />
                    ),
                  },
                  {
                    title: "Cards",
                    description:
                      "Multiple card variants with different themes and styles",
                    link: "#cards",
                    materialIcon: () => (
                      <StyleRoundedIcon className="align-middle" />
                    ),
                  },
                  {
                    title: "Breakpoints",
                    description: "Responsive breakpoints for different devices",
                    link: "#breakpoints",
                    materialIcon: () => (
                      <DevicesRoundedIcon className="align-middle" />
                    ),
                  },
                  {
                    title: "Drop Shadows",
                    description: "Shadow styles for elevation and depth",
                    link: "#shadows",
                    materialIcon: () => (
                      <BlurOnRoundedIcon className="align-middle" />
                    ),
                  },
                  {
                    title: "Tints",
                    description: "Transparent layers for highlighting elements",
                    link: "#tints",
                    materialIcon: () => (
                      <OpacityRoundedIcon className="align-middle" />
                    ),
                  },
                ].map((item, index) => (
                  <FeatureCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    materialIcon={item.materialIcon}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
          {/* Colors Section */}
          <div className="section-divider"></div>
          <AnimatedSection
            id="colors"
            className="ds-section"
            animation="fade-in"
          >
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="mb-14">
                <div className="section-label text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20">
                  <PaletteRoundedIcon className="h-4 w-4" /> Color System
                </div>
                <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 dark:text-white mb-4 tracking-tight">
                  Design Colors
                </h2>
                <p className="font-body text-lg text-neutral-500 dark:text-neutral-400 max-w-3xl">
                  Our adaptive color system provides three distinct
                  themes with improved contrast ratios and WCAG compliance.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium">
                  <span className="px-3 py-1.5 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 rounded-full">
                    WCAG AAA
                  </span>
                  <span className="px-3 py-1.5 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 rounded-full">
                    High Contrast
                  </span>
                  <span className="px-3 py-1.5 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 rounded-full">
                    Color Blind Friendly
                  </span>
                </div>
              </div>{" "}
              {/* Theme Overview Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-16">
                <div className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-lg">
                      <PaletteRoundedIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-neutral-900 dark:text-white">
                      Light Theme
                    </h3>
                  </div>
                  <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed">
                    Clean and professional palette perfect for productivity
                    applications and daytime use.
                  </p>
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-5 h-5 rounded-md bg-white border border-neutral-200"></div>
                    <div className="w-5 h-5 rounded-md bg-blue-600"></div>
                    <div className="w-5 h-5 rounded-md bg-slate-900"></div>
                    <div className="w-5 h-5 rounded-md bg-slate-100"></div>
                  </div>
                  <div className="text-xs text-neutral-400 dark:text-neutral-500">
                    WCAG AAA compliant
                  </div>
                </div>

                <div className="group bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-950/60 text-blue-400 rounded-lg">
                      <BlurOnRoundedIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-slate-50">
                      Dark Theme
                    </h3>
                  </div>
                  <p className="font-body text-sm text-slate-400 mb-4 leading-relaxed">
                    Sophisticated dark palette that reduces eye strain and
                    enhances focus.
                  </p>
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-5 h-5 rounded-md bg-slate-950 border border-slate-700"></div>
                    <div className="w-5 h-5 rounded-md bg-blue-400"></div>
                    <div className="w-5 h-5 rounded-md bg-slate-50"></div>
                    <div className="w-5 h-5 rounded-md bg-slate-800"></div>
                  </div>
                  <div className="text-xs text-slate-500">
                    Developer friendly
                  </div>
                </div>

                <div
                  className="group rounded-2xl p-6 border border-violet-500/20 hover:border-violet-500/40 hover:shadow-md transition-all duration-200"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(30, 5, 60, 0.95), rgba(15, 20, 45, 0.95))",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-violet-500/15 text-violet-400 rounded-lg">
                      <OpacityRoundedIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-slate-50">
                      Colorful Theme
                    </h3>
                  </div>
                  <p className="font-body text-sm text-slate-300/80 mb-4 leading-relaxed">
                    Vibrant, gradient-rich palette for creative applications and
                    immersive experiences.
                  </p>
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-5 h-5 rounded-md bg-slate-950 border border-violet-500/30"></div>
                    <div className="w-5 h-5 rounded-md bg-violet-400"></div>
                    <div className="w-5 h-5 rounded-md bg-pink-400"></div>
                    <div className="w-5 h-5 rounded-md bg-cyan-400"></div>
                  </div>
                  <div className="text-xs text-slate-400">
                    Creative workflows
                  </div>
                </div>
              </div>
              {/* Theme Color Showcases */}
              <div className="space-y-8">
                <ThemeColorShowcase theme="light" />

                <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800">
                  <ThemeColorShowcase theme="dark" />
                </div>

                <div
                  className="rounded-2xl p-8 border border-purple-500/20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(20, 10, 50, 0.95), rgba(10, 5, 30, 0.95))",
                  }}
                >
                  <ThemeColorShowcase theme="colorful" />
                </div>
              </div>
              {/* Implementation Guide */}
              <div className="mt-16 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-xl text-neutral-900 dark:text-white mb-2">
                    Implementation Guide
                  </h3>
                  <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 max-w-2xl">
                    Quick reference for implementing the color system
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-neutral-800 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700">
                    {" "}
                    <h4 className="font-heading font-medium text-sm text-neutral-900 dark:text-white mb-3">
                      CSS Variables
                    </h4>{" "}
                    <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 text-sm font-mono">
                      <div className="text-neutral-600 dark:text-neutral-400">
                        {/* Light theme */}
                      </div>
                      <div className="text-blue-600 dark:text-blue-400">
                        --primary: #2563eb;
                      </div>
                      <div className="text-blue-600 dark:text-blue-400">
                        --background: #ffffff;
                      </div>
                      <div className="text-blue-600 dark:text-blue-400">
                        --foreground: #0f172a;
                      </div>
                      <div className="text-neutral-600 dark:text-neutral-400 mt-2">
                        {/* Dark theme */}
                      </div>
                      <div className="text-blue-600 dark:text-blue-400">
                        --primary: #60a5fa;
                      </div>
                      <div className="text-blue-600 dark:text-blue-400">
                        --background: #020617;
                      </div>
                      <div className="text-blue-600 dark:text-blue-400">
                        --foreground: #f8fafc;
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-neutral-800 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700">
                    {" "}
                    <h4 className="font-heading font-medium text-sm text-neutral-900 dark:text-white mb-3">
                      Tailwind Classes
                    </h4>
                    <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 text-sm font-mono">
                      <div className="text-emerald-600 dark:text-emerald-400">
                        bg-blue-600
                      </div>{" "}
                      <div className="text-emerald-600 dark:text-emerald-400">
                        text-slate-900
                      </div>
                      <div className="text-emerald-600 dark:text-emerald-400">
                        border-slate-200
                      </div>
                      <div className="text-neutral-600 dark:text-neutral-400 mt-2">
                        {/* Dark mode */}
                      </div>
                      <div className="text-emerald-600 dark:text-emerald-400">
                        dark:bg-blue-400
                      </div>
                      <div className="text-emerald-600 dark:text-emerald-400">
                        dark:bg-slate-950
                      </div>
                      <div className="text-emerald-600 dark:text-emerald-400">
                        dark:text-slate-50
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-neutral-800 rounded-xl p-5 border border-neutral-200 dark:border-neutral-700">
                    <h4 className="font-heading font-medium text-sm text-neutral-900 dark:text-white mb-3">
                      Theme Detection
                    </h4>
                    <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 text-sm font-mono">
                      {" "}
                      <div className="text-purple-600 dark:text-purple-400">
                        useTheme()
                      </div>
                      <div className="text-neutral-600 dark:text-neutral-400">
                        {/* Returns: light | dark */}
                      </div>
                      <div className="text-neutral-600 dark:text-neutral-400 mt-2">
                        {/* Or manually: */}
                      </div>
                      <div className="text-orange-600 dark:text-orange-400">
                        prefers-color-scheme
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
              {/* Color Accessibility Guide */}
              <div className="mt-16">
                <ColorAccessibilityGuide />
              </div>
            </div>
          </AnimatedSection>
          {/* Typography Section */}
          <div className="section-divider"></div>
          <AnimatedSection
            id="typography"
            className="ds-section"
            animation="fade-in"
          >
            <div className="max-w-7xl mx-auto">
              <div className="mb-14">
                <div className="section-label text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20">
                  <TextFieldsRoundedIcon className="align-middle" />
                  Typography System
                </div>
                <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 dark:text-white mb-4 tracking-tight">
                  Typography
                </h2>
                <p className="font-body text-lg text-neutral-500 dark:text-neutral-400 max-w-3xl">
                  Typography system showcasing different font styles and sizes
                  for headers and body text in English and Arabic.
                </p>
              </div>              <div className="space-y-8 mb-16">
                <DynamicTypography
                  title="English Typography"
                  description="Typography examples for headers and body text in English"
                  language="en"
                />
                
                <DynamicTypography
                  title="Arabic Typography"
                  description="Typography examples for headers and body text in Arabic with RTL support"
                  language="ar"
                />
              </div>
            </div>
          </AnimatedSection>{" "}
          {/* Spacing Section */}
          <div className="section-divider"></div>
          <SpacingSection />
          {/* Grids Section */}
          <div className="section-divider"></div>
          <GridsSection />
          {/* Components Section */}
          {/* Buttons Section */}
          <div className="section-divider"></div>
          <ButtonsSection />
          {/* Tabs & Pills Section */}
          <div className="section-divider"></div>
          <TabsPillsSection />
          {/* Badges Section */}
          <div className="section-divider"></div>
          <BadgesSection />
          {/* Cards Section */}
          <div className="section-divider"></div>
          <CardsSection />
          {/* Card Variants Sections */}
          <div className="section-divider"></div>
          <BasicCardsSection />
          <div className="section-divider"></div>
          <InteractiveCardsSection />
          <div className="section-divider"></div>
          <MediaCardsSection />
          <div className="section-divider"></div>
          <DashboardCardsSection />
          <div className="section-divider"></div>
          <ProfileCardsSection />
          <div className="section-divider"></div>
          <TimelineCardsSection />
          {/* Accordions Section */}
          <div className="section-divider"></div>
          <AccordionSection /> {/* Patterns Section */}
          {/* Layouts Section */}
          <div className="section-divider"></div>
          <LayoutsSection />
          {/* Navigation Section */}
          <div className="section-divider"></div>
          <NavigationSection />
          {/* Forms Section */}
          <div className="section-divider"></div>
          <FormsSection />
          {/* Utilities Section */}
          {/* Breakpoints Section */}
          <div className="section-divider"></div>
          <BreakpointsSection />
          {/* Shadows Section */}
          <div className="section-divider"></div>
          <AnimatedSection
            id="shadows"
            className="ds-section"
            animation="slide-up"
          >
            <div className="max-w-7xl mx-auto">
              <div className="mb-14">
                <div className="section-label text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20">
                  <BlurOnRoundedIcon className="mr-1 align-middle" /> Elevation
                  System
                </div>
                <h2 className="font-heading text-3xl md:text-4xl text-neutral-900 dark:text-white mb-4 tracking-tight">
                  Drop Shadows
                </h2>
                <p className="font-body text-lg text-neutral-500 dark:text-neutral-400 max-w-3xl">
                  Shadow system for depth and elevation in the interface.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: "Shadow Small",
                    value: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                    elevation: "Subtle elevation",
                  },
                  {
                    name: "Shadow Medium",
                    value:
                      "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    elevation: "Medium elevation",
                  },
                  {
                    name: "Shadow Large",
                    value:
                      "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    elevation: "High elevation",
                  },
                  {
                    name: "Shadow X-Large",
                    value:
                      "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    elevation: "Highest elevation",
                  },
                ].map((shadow, index) => (
                  <div
                    key={index}
                    className="group hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div
                      className="h-48 bg-white dark:bg-neutral-800 rounded-2xl mb-4 flex items-center justify-center border border-neutral-100 dark:border-neutral-700 transition-all duration-200"
                      style={{ boxShadow: shadow.value }}
                    >
                      <div className="text-center p-4">
                        <div className="flex justify-center mb-3">
                          <div className="w-9 h-9 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center text-sm text-primary-600 dark:text-primary-400 font-medium">
                            {index + 1}
                          </div>
                        </div>
                        <span className="font-heading font-medium text-sm text-neutral-800 dark:text-neutral-200 block mb-1">
                          {shadow.name}
                        </span>
                        <span className="font-body text-xs text-neutral-400 dark:text-neutral-500">
                          {shadow.elevation}
                        </span>
                      </div>
                    </div>
                    <div className="px-1">
                      <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 font-medium mb-1">
                        {shadow.name}
                      </p>
                      <p className="font-mono text-xs text-neutral-400 dark:text-neutral-500 break-words leading-relaxed">
                        {shadow.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>{" "}
          {/* Tints Section */}
          <div className="section-divider"></div>
          <TintsSection />
          {/* Resources Section */}
          {/* Accessibility Utilities Section */}
          <div className="section-divider"></div>
          <AccessibilityUtilitiesSection />
        </main>
      </div>
      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}
