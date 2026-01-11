'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbProps {
  customItems?: { label: string; href: string }[];
}

export default function Breadcrumb({ customItems }: BreadcrumbProps) {
  const pathname = usePathname();

  // If custom items provided, use those
  if (customItems) {
    return (
      <nav className="flex items-center gap-3 text-base mb-8">
        <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-[#FF6B9D] transition-colors font-medium">
          Home
        </Link>
        {customItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-gray-400">/</span>
            {index === customItems.length - 1 ? (
              <span className="text-[#9D5AC2] dark:text-[#FF8FCC] font-bold">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-gray-600 dark:text-gray-400 hover:text-[#FF6B9D] transition-colors font-medium">
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    );
  }

  // Auto-generate from pathname
  const paths = pathname.split('/').filter(Boolean);

  return (
    <nav className="flex items-center gap-3 text-base mb-8 flex-wrap">
      <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-[#FF6B9D] transition-colors font-medium">
        Home
      </Link>
      {paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`;
        const label = path
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        const isLast = index === paths.length - 1;

        return (
          <div key={path} className="flex items-center gap-3">
            <span className="text-gray-400">/</span>
            {isLast ? (
              <span className="text-[#9D5AC2] dark:text-[#FF8FCC] font-bold">{label}</span>
            ) : (
              <Link href={href} className="text-gray-600 dark:text-gray-400 hover:text-[#FF6B9D] transition-colors font-medium">
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
