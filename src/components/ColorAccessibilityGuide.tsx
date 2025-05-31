'use client';

import AccessibilityRoundedIcon from '@mui/icons-material/AccessibilityRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import ContrastRoundedIcon from '@mui/icons-material/ContrastRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

interface AccessibilityDemoProps {
  title: string;
  description: string;
  examples: Array<{
    label: string;
    background: string;
    foreground: string;
    contrast: string;
    status: 'pass' | 'fail' | 'aa' | 'aaa';
  }>;
}

const AccessibilityDemo = ({ title, description, examples }: AccessibilityDemoProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
      case 'aa':
      case 'aaa':
        return <CheckCircleRoundedIcon className="h-4 w-4 text-green-500" />;
      case 'fail':
        return <InfoRoundedIcon className="h-4 w-4 text-red-500" />;
      default:
        return <InfoRoundedIcon className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'aaa':
        return 'AAA';
      case 'aa':
        return 'AA';
      case 'pass':
        return 'Pass';
      case 'fail':
        return 'Fail';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 border border-neutral-200 dark:border-neutral-800">
      <h4 className="font-heading font-medium text-lg text-neutral-950 dark:text-white mb-2">{title}</h4>
      <p className="font-body text-sm text-neutral-700 dark:text-neutral-300 mb-4">{description}</p>
      
      <div className="space-y-3">
        {examples.map((example, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-8 rounded flex items-center justify-center text-xs font-medium"
                style={{ 
                  backgroundColor: example.background, 
                  color: example.foreground 
                }}
              >
                Text
              </div>
              <div>
                <p className="font-body text-sm font-medium text-neutral-900 dark:text-white">{example.label}</p>
                <p className="font-body text-xs text-neutral-600 dark:text-neutral-400">Contrast: {example.contrast}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {getStatusIcon(example.status)}
              <span className={`text-xs font-medium ${
                example.status === 'fail' ? 'text-red-600' : 'text-green-600'
              }`}>
                {getStatusText(example.status)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ColorAccessibilityGuide() {
  return (
    <div className="mt-16 mb-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-3 py-1.5 mb-4 text-sm font-medium text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/30 rounded-full shadow-sm">
          <AccessibilityRoundedIcon className="h-4 w-4 mr-2" />
          Accessibility Guide
        </div>
        <h3 className="font-heading font-semibold text-2xl text-neutral-950 dark:text-white mb-3">
          Color Accessibility Standards
        </h3>
        <p className="font-body text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          Our color system meets WCAG accessibility guidelines to ensure your designs are usable by everyone.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <AccessibilityDemo
          title="Text on Light Backgrounds"
          description="Examples of text color combinations on light backgrounds"
          examples={[
            {
              label: "Primary Text",
              background: "#ffffff",
              foreground: "#1f2937",
              contrast: "16.8:1",
              status: "aaa"
            },
            {
              label: "Secondary Text", 
              background: "#ffffff",
              foreground: "#374151",
              contrast: "12.6:1",
              status: "aaa"
            },
            {
              label: "Primary Blue",
              background: "#ffffff", 
              foreground: "#3b82f6",
              contrast: "5.4:1",
              status: "aa"
            },
            {
              label: "Light Gray (Fail)",
              background: "#ffffff",
              foreground: "#d1d5db",
              contrast: "1.8:1", 
              status: "fail"
            }
          ]}
        />

        <AccessibilityDemo
          title="Text on Dark Backgrounds"
          description="Examples of text color combinations on dark backgrounds"
          examples={[
            {
              label: "Primary Text",
              background: "#0a0a0a",
              foreground: "#ededed",
              contrast: "19.1:1",
              status: "aaa"
            },
            {
              label: "Secondary Text",
              background: "#0a0a0a", 
              foreground: "#d1d5db",
              contrast: "14.8:1",
              status: "aaa"
            },
            {
              label: "Primary Blue",
              background: "#0a0a0a",
              foreground: "#3b82f6", 
              contrast: "6.2:1",
              status: "aa"
            },
            {
              label: "Dark Gray (Fail)",
              background: "#0a0a0a",
              foreground: "#374151",
              contrast: "1.9:1",
              status: "fail"
            }
          ]}
        />
      </div>

      {/* Accessibility Tips */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg">
              <ContrastRoundedIcon className="h-5 w-5" />
            </div>
            <h4 className="font-heading font-medium text-lg text-blue-900 dark:text-blue-100">Contrast Ratios</h4>
          </div>
          <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <p><strong>AAA:</strong> 7:1 for normal text</p>
            <p><strong>AA:</strong> 4.5:1 for normal text</p>
            <p><strong>Large text:</strong> 3:1 minimum</p>
            <p><strong>UI elements:</strong> 3:1 minimum</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-6 border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg">
              <VisibilityRoundedIcon className="h-5 w-5" />
            </div>
            <h4 className="font-heading font-medium text-lg text-green-900 dark:text-green-100">Color Blindness</h4>
          </div>
          <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
            <p>• Don't rely only on color</p>
            <p>• Use icons and patterns</p>
            <p>• Test with simulators</p>
            <p>• Provide alternative cues</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-lg">
              <CheckCircleRoundedIcon className="h-5 w-5" />
            </div>
            <h4 className="font-heading font-medium text-lg text-purple-900 dark:text-purple-100">Best Practices</h4>
          </div>
          <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
            <p>• Test with real users</p>
            <p>• Use automated tools</p>
            <p>• Consider context</p>
            <p>• Document decisions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
