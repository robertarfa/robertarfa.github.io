'use client';

import Logo from '@/components/ui/Logo';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { Locale } from '@/i18n-config';

interface HeaderProps {
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

export default function Header({ lang, dictionary }: HeaderProps) {
  return (
    <nav className='navbar navbar-light bg-white shadow-sm sticky-top'>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center w-100 py-2'>
          <Logo />

          <ul className='navbar-nav d-flex flex-row gap-4 mb-0'>
            <li className='nav-item'>
              <a className='nav-link text-dark' href={`/${lang}`}>
                {dictionary.nav.home}
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-dark' href={`/${lang}#about`}>
                {dictionary.nav.about}
              </a>
            </li>
          </ul>

          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
