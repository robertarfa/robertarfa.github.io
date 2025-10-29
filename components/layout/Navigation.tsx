import Link from 'next/link';
import { Locale } from '@/i18n-config';

interface NavigationProps {
  lang: Locale;
  dictionary: {
    nav: {
      home: string;
      services: string;
      about: string;
      contact: string;
    };
  };
}

export default function Navigation({ lang, dictionary }: NavigationProps) {
  const navItems = [
    { href: `/${lang}`, label: dictionary.nav.home },
    { href: `/${lang}#about`, label: dictionary.nav.about },
  ];

  return (
    <nav>
      <ul className="flex gap-8 list-none m-0 p-0">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 no-underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
