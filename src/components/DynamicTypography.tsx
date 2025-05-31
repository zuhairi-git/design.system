interface DynamicTypographyProps {
  language?: 'en' | 'ar';
  title: string;
  description: string;
}

export default function DynamicTypography({
  language = 'en',
  title,
  description
}: DynamicTypographyProps) {
  const fontDir = language === 'ar' ? 'rtl' : 'ltr';
  
  const headerSamples = language === 'ar' ? [
    { size: 'text-4xl', weight: 'font-bold', text: 'عنوان رئيسي كبير', label: 'H1 - العنوان الرئيسي' },
    { size: 'text-3xl', weight: 'font-semibold', text: 'عنوان فرعي متوسط', label: 'H2 - العنوان الفرعي' },
    { size: 'text-2xl', weight: 'font-medium', text: 'عنوان صغير', label: 'H3 - عنوان القسم' },
    { size: 'text-xl', weight: 'font-medium', text: 'عنوان فقرة', label: 'H4 - عنوان الفقرة' }
  ] : [
    { size: 'text-4xl', weight: 'font-bold', text: 'Large Header Title', label: 'H1 - Main Header' },
    { size: 'text-3xl', weight: 'font-semibold', text: 'Medium Subheader', label: 'H2 - Subheader' },
    { size: 'text-2xl', weight: 'font-medium', text: 'Small Section Title', label: 'H3 - Section Title' },
    { size: 'text-xl', weight: 'font-medium', text: 'Paragraph Header', label: 'H4 - Paragraph Header' }
  ];

  const bodySamples = language === 'ar' ? [
    { size: 'text-lg', weight: 'font-normal', text: 'هذا نص كبير يستخدم للمقدمات والنصوص المهمة في التصميم.', label: 'نص كبير' },
    { size: 'text-base', weight: 'font-normal', text: 'هذا النص العادي الذي يستخدم في معظم المحتوى والفقرات الأساسية.', label: 'النص العادي' },
    { size: 'text-sm', weight: 'font-normal', text: 'نص صغير يستخدم للتفاصيل والملاحظات الإضافية.', label: 'نص صغير' },
    { size: 'text-xs', weight: 'font-normal', text: 'نص صغير جداً للتسميات والبيانات الوصفية.', label: 'نص صغير جداً' }
  ] : [
    { size: 'text-lg', weight: 'font-normal', text: 'Large body text used for introductions and important content.', label: 'Large Body' },
    { size: 'text-base', weight: 'font-normal', text: 'Regular body text used for most content and standard paragraphs.', label: 'Regular Body' },
    { size: 'text-sm', weight: 'font-normal', text: 'Small text used for details and additional information.', label: 'Small Text' },
    { size: 'text-xs', weight: 'font-normal', text: 'Extra small text for labels and metadata.', label: 'Extra Small' }
  ];
  return (
    <div className="card p-6 space-y-6">
      {/* Header */}
      <div>
        <h3 className="font-heading text-lg font-semibold text-neutral-950 dark:text-white mb-1">{title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>

      {/* Headers Section */}
      <div>
        <h4 className="text-base font-medium text-neutral-800 dark:text-neutral-200 mb-4">Headers</h4>
        <div className="space-y-4">
          {headerSamples.map((sample, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-neutral-200 dark:border-neutral-700 rounded-md">
              <div className="flex-1" dir={fontDir}>
                <div className={`${sample.size} ${sample.weight} text-neutral-900 dark:text-white ${language === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
                  {sample.text}
                </div>
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 ml-4">
                {sample.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body Text Section */}
      <div>
        <h4 className="text-base font-medium text-neutral-800 dark:text-neutral-200 mb-4">Body Text</h4>
        <div className="space-y-4">
          {bodySamples.map((sample, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-neutral-200 dark:border-neutral-700 rounded-md">
              <div className="flex-1" dir={fontDir}>
                <div className={`${sample.size} ${sample.weight} text-neutral-700 dark:text-neutral-300 ${language === 'ar' ? 'font-arabic-body' : 'font-body'}`}>
                  {sample.text}
                </div>
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 ml-4">
                {sample.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
