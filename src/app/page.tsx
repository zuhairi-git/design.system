"use client";

import Header from "@/components/Header";
import Sidebar, { useSidebar } from "@/components/Sidebar";
import AnimatedSection from "@/components/AnimatedSection";
import BackToTopButton from "@/components/BackToTopButton";

import FeatureCard from "@/components/FeatureCard";
import FixCardLinks from "@/components/FixCardLinks";
import DynamicTypographyPreview from "@/components/DynamicTypographyPreview";
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
    <div className="min-h-screen bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <FixCardLinks />

      {/* Sidebar - Always fixed position */}
      <Sidebar isOpen={sidebar.isOpen} onToggle={sidebar.toggle} />

      {/* Main Content - Offset by sidebar width on desktop when open */}      <div
        className={`flex flex-col min-h-screen transition-all duration-300 ${
          sidebar.isOpen ? "md:ml-80" : ""
        }`}
      >
        <Header onSidebarToggle={sidebar.toggle} />

        <main className="flex-1 w-full p-0 overflow-x-hidden">
          {/* Overview Section */}
          <AnimatedSection
            id="overview"
            className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20"
            animation="slide-up"
          >
            <div className="max-w-7xl mx-auto">
              <div className="mb-10">
                <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
                  <PaletteRoundedIcon className="w-4 h-4 mr-2 align-middle" />
                  Design Documentation
                </div>

                <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-neutral-950 dark:text-white mb-5 sm:mb-6">
                  Alux{" "}
                  <span className="text-primary-600 dark:text-primary-400">
                    Design
                  </span>{" "}
                  System
                </h1>

                <p className="font-body text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mb-10 leading-relaxed">
                  A lightweight design system that provides clear guidelines,
                  reusable components, and helpful resources for building
                  consistent and visually appealing user interfaces.
                </p>
                <p className="font-body text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mb-10 leading-relaxed">
                  Built using Tailwind CSS and Headless UI.
                </p>

                <div className="flex flex-wrap gap-3 mb-14">
                  <a
                    href="#colors"
                    className="cosmic-shimmer inline-block px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-white border border-transparent shadow-lg relative overflow-hidden"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #00ffff, #ff00cc, #3b82f6)",
                      backgroundSize: "200% 200%",
                      animation: "gradientShift 3s ease infinite",
                    }}
                  >
                    <span className="relative z-10">Explore Components</span>
                  </a>
                  <a
                    href="#"
                    className="px-5 py-2.5 text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 hover:bg-primary-100 dark:hover:bg-primary-900/40 border border-primary-200 dark:border-primary-800/40 rounded-full font-medium transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 animate-fade-in">
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
          <AnimatedSection
            id="colors"
            className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950/60"
            animation="fade-in"
          >
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
                  <PaletteRoundedIcon className="h-4 w-4 mr-2" /> Color System
                </div>{" "}
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">
                  Design Colors
                </h2>
                <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto">
                  Our enhanced adaptive color system provides three distinct
                  themes with improved contrast ratios and WCAG compliance. Each
                  theme has been carefully designed for accessibility while
                  maintaining visual appeal and brand consistency.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
                  <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                    ✓ WCAG AAA Compliant
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                    ✓ High Contrast Ratios
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full">
                    ✓ Color Blind Friendly
                  </span>
                </div>
              </div>{" "}
              {/* Theme Overview Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="group relative bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-lg">
                      <PaletteRoundedIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-neutral-950 dark:text-white">
                      Light Theme
                    </h3>
                  </div>
                  <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                    Clean and professional palette perfect for productivity
                    applications and daytime use.
                  </p>
                  <div className="flex gap-2 mb-3">
                    <div className="w-4 h-4 rounded bg-white border-2 border-slate-200"></div>
                    <div className="w-4 h-4 rounded bg-blue-600"></div>
                    <div className="w-4 h-4 rounded bg-slate-900"></div>
                    <div className="w-4 h-4 rounded bg-slate-100"></div>
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    WCAG AAA compliant • High contrast
                  </div>
                </div>

                <div className="group relative bg-slate-900 rounded-xl p-6 border border-slate-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-950 text-blue-400 rounded-lg">
                      <BlurOnRoundedIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-slate-50">
                      Dark Theme
                    </h3>
                  </div>
                  <p className="font-body text-sm text-slate-300 mb-4">
                    Sophisticated dark palette that reduces eye strain and
                    enhances focus during extended use.
                  </p>
                  <div className="flex gap-2 mb-3">
                    <div className="w-4 h-4 rounded bg-slate-950 border-2 border-slate-600"></div>
                    <div className="w-4 h-4 rounded bg-blue-400"></div>
                    <div className="w-4 h-4 rounded bg-slate-50"></div>
                    <div className="w-4 h-4 rounded bg-slate-800"></div>
                  </div>
                  <div className="text-xs text-slate-400">
                    Eye-strain reduction • Developer friendly
                  </div>
                </div>

                <div
                  className="group relative rounded-xl p-6 border border-violet-500/30 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(30, 5, 60, 0.9), rgba(15, 20, 45, 0.9))",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-violet-500/20 text-violet-400 rounded-lg">
                      <OpacityRoundedIcon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-slate-50">
                      Colorful Theme
                    </h3>
                  </div>
                  <p className="font-body text-sm text-slate-200/90 mb-4">
                    Vibrant, gradient-rich palette for creative applications and
                    immersive user experiences.
                  </p>
                  <div className="flex gap-2 mb-3">
                    <div className="w-4 h-4 rounded bg-slate-950 border-2 border-violet-500/50"></div>
                    <div className="w-4 h-4 rounded bg-violet-400"></div>
                    <div className="w-4 h-4 rounded bg-pink-400"></div>
                    <div className="w-4 h-4 rounded bg-cyan-400"></div>
                  </div>                  <div className="text-xs text-slate-300">
                    Creative workflows • Immersive experiences
                  </div>
                </div>
              </div>
              {/* Theme Color Showcases */}
              <div className="space-y-12">
                <ThemeColorShowcase theme="light" />

                <div className="my-8 border-b border-dashed border-neutral-200 dark:border-neutral-800"></div>

                <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-700">
                  <ThemeColorShowcase theme="dark" />
                </div>

                <div className="my-8 border-b border-dashed border-neutral-200 dark:border-neutral-800"></div>

                <div
                  className="rounded-xl p-8 border border-purple-500/30"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(20, 10, 50, 0.95), rgba(10, 5, 30, 0.95))",
                  }}
                >
                  <ThemeColorShowcase theme="colorful" />
                </div>
              </div>
              {/* Implementation Guide */}
              <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-8 border border-blue-200/50 dark:border-blue-800/50">
                <div className="text-center mb-8">
                  <h3 className="font-heading font-semibold text-2xl text-neutral-950 dark:text-white mb-3">
                    Implementation Guide
                  </h3>
                  <p className="font-body text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                    Quick reference for implementing our color system in your
                    projects
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-lg p-6 border border-white/20 dark:border-neutral-800/20">
                    {" "}
                    <h4 className="font-heading font-medium text-lg text-neutral-950 dark:text-white mb-3">
                      CSS Variables
                    </h4>{" "}
                    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md p-4 text-sm font-mono">
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

                  <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-lg p-6 border border-white/20 dark:border-neutral-800/20">
                    {" "}
                    <h4 className="font-heading font-medium text-lg text-neutral-950 dark:text-white mb-3">
                      Tailwind Classes
                    </h4>
                    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md p-4 text-sm font-mono">
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

                  <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-lg p-6 border border-white/20 dark:border-neutral-800/20">
                    <h4 className="font-heading font-medium text-lg text-neutral-950 dark:text-white mb-3">
                      Theme Detection
                    </h4>
                    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md p-4 text-sm font-mono">                      <div className="text-purple-600 dark:text-purple-400">
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
          <AnimatedSection
            id="typography"
            className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20"
            animation="fade-in"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                <div>
                  <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
                    <TextFieldsRoundedIcon className="align-middle" />{" "}
                    Typography System
                  </div>{" "}
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">
                    Dynamic Typography
                  </h2>
                  <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
                    Our interactive typography system lets you customize and
                    preview different font styles. Try changing the properties
                    below to see how they affect the text appearance.
                  </p>
                </div>
              </div>
              <div className="mb-12">
                <DynamicTypographyPreview
                  title="Heading Typography"
                  description="Customize and preview heading styles with different properties"
                  fontFamilies={["Poppins", "Roboto"]}
                  defaultFontFamily="Poppins"
                  defaultFontWeight="700"
                  defaultFontSize="36px"
                  defaultLineHeight="1.3"
                  sampleText="The quick brown fox jumps over the lazy dog. Sphinx of black quartz, judge my vow."
                  language="en"
                />
              </div>

              <h3 className="font-heading font-semibold text-xl text-neutral-950 dark:text-white mt-10 mb-4 flex items-center">
                <TextFieldsRoundedIcon className="h-4 w-4 align-middle" />
                Body Text Fonts
              </h3>
              <p className="font-body text-neutral-700 dark:text-neutral-300 mb-6">
                Our design system includes support for different body fonts in
                multiple languages.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <DynamicTypographyPreview
                  title="English Body Typography"
                  description="Customize and preview body text styles for English and Latin languages"
                  fontFamilies={["Roboto", "Poppins"]}
                  defaultFontFamily="Roboto"
                  defaultFontWeight="400"
                  defaultFontSize="16px"
                  defaultLineHeight="1.5"
                  sampleText="The quick brown fox jumps over the lazy dog. Sphinx of black quartz, judge my vow. A wizard's job is to vex chumps quickly in fog. How vexingly quick daft zebras jump! The five boxing wizards jump quickly."
                  language="en"
                />

                <DynamicTypographyPreview
                  title="Arabic Typography"
                  description="Customize and preview text styles for RTL languages like Arabic"
                  fontFamilies={["Tajwal"]}
                  defaultFontFamily="Tajwal"
                  defaultFontWeight="400"
                  defaultFontSize="16px"
                  defaultLineHeight="1.6"
                  sampleText="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى. حيث يمكنك توليد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
                  language="ar"
                />
              </div>
            </div>
          </AnimatedSection>          {/* Spacing Section */}
          <SpacingSection />
          
          {/* Grids Section */}
          <GridsSection />

          {/* Components Section */}
          {/* Buttons Section */}
          <ButtonsSection />
          {/* Tabs & Pills Section */}
          <TabsPillsSection />
          {/* Badges Section */}
          <BadgesSection />
          {/* Cards Section */}
          <CardsSection />
          {/* Card Variants Sections */}
          <BasicCardsSection />
          <InteractiveCardsSection />
          <MediaCardsSection />
          <DashboardCardsSection />
          <ProfileCardsSection />
          <TimelineCardsSection />
          {/* Accordions Section */}
          <AccordionSection />          {/* Patterns Section */}
          {/* Layouts Section */}
          <LayoutsSection />
          {/* Navigation Section */}
          <NavigationSection />
          {/* Forms Section */}
          <FormsSection />

          {/* Utilities Section */}
          {/* Breakpoints Section */}
          <BreakpointsSection />
          {/* Shadows Section */}
          <AnimatedSection
            id="shadows"
            className="px-5 sm:px-8 py-16 sm:py-20 md:px-12 lg:px-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950/60"
            animation="slide-up"
          >
            <div className="max-w-7xl mx-auto">
              <div className="mb-10">
                <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full shadow-sm">
                  <BlurOnRoundedIcon className="mr-2 align-middle" /> Elevation
                  System
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-950 dark:text-white mb-4">
                  Drop Shadows
                </h2>
                <p className="font-body text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
                  Our shadow system creates depth and elevation in the
                  interface.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    className="group hover:-translate-y-1 transition-all duration-300"
                  >
                    <div
                      className="h-52 bg-white dark:bg-neutral-800 rounded-xl mb-4 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-neutral-50 dark:group-hover:from-neutral-800 dark:group-hover:to-neutral-900 transition-all duration-300"
                      style={{ boxShadow: shadow.value }}
                    >
                      <div className="text-center p-4">
                        <div className="flex justify-center mb-3">
                          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-700 dark:text-primary-400">
                            {index + 1}
                          </div>
                        </div>
                        <span className="font-heading font-medium text-neutral-800 dark:text-neutral-200 block mb-1">
                          {shadow.name}
                        </span>
                        <span className="font-body text-xs text-neutral-500 dark:text-neutral-400">
                          {shadow.elevation}
                        </span>
                      </div>
                    </div>
                    <div className="px-2">
                      <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 font-medium mb-1">
                        {shadow.name}
                      </p>
                      <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 break-words">
                        {shadow.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>          {/* Tints Section */}
          <TintsSection />

          {/* Resources Section */}
          {/* Accessibility Utilities Section */}
          <AccessibilityUtilitiesSection />
        </main>
      </div>
      
      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}
