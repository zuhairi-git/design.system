'use client';

interface TypographyCardProps {
  title: string;
  description: string;
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  sampleText: string;
  language?: 'en' | 'ar';
}

export default function TypographyCard({
  title,
  description,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  sampleText,
  language = 'en'
}: TypographyCardProps) {
  const fontClass = language === 'ar' 
    ? (title.toLowerCase().includes('heading') ? 'font-arabic-heading' : 'font-arabic-body')
    : (title.toLowerCase().includes('heading') ? 'font-heading' : 'font-body');
  
  const fontDir = language === 'ar' ? 'rtl' : 'ltr';
  
  return (
    <div className="card p-5 space-y-4">
      <div className="space-y-1">
        <h3 className="font-heading text-base font-bold text-neutral-950 dark:text-white">{title}</h3>
        <p className="font-body text-sm text-neutral-700 dark:text-neutral-400">{description}</p>
      </div>
      
      <div className="px-3 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-md">
        <pre className="text-xs font-mono text-neutral-700 dark:text-neutral-400 overflow-x-auto">
<code>{`font-family: ${fontFamily};
font-weight: ${fontWeight};
font-size: ${fontSize};
line-height: ${lineHeight};`}</code>
        </pre>
      </div>
      
      <div 
        className={`p-3 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-md ${fontClass}`}
        style={{
          fontWeight,
          fontSize,
          lineHeight,
          direction: fontDir
        }}
      >
        {sampleText}
      </div>
    </div>
  );
}
