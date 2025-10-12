import { cn } from '@/lib/utils';

export default function SectionTabs() {
  const tabs = ['Collections', 'Products', 'Gallery', 'Reviews', 'Location'];

  return (
    <div className="flex gap-x-3 gap-y-2 flex-wrap">
      {tabs.map((item, index) => (
        <button
          key={index}
          className={cn(
            'rounded-full border px-4 py-1.5 text-sm',
            index === 0
              ? 'bg-purple-800 text-white'
              : 'bg-muted text-foreground',
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
