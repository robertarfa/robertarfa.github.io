'use client';

import { usePathname } from 'next/navigation';
import { i18n, type Locale } from '@/i18n-config';
import { useState, useRef, useEffect } from 'react';

const languageNames: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
};

const languageFlags: Record<Locale, string> = {
  pt: 'pt',
  en: 'en',
  es: 'es',
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Extrai o idioma atual da URL
  const segments = pathname.split('/').filter(Boolean);
  const currentLang = (segments[0] || i18n.defaultLocale) as Locale;

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Função para gerar o link do idioma
  const getLanguageLink = (locale: Locale): string => {
    if (segments.length <= 1) {
      return `/${locale}/`;
    }
    const pathAfterLang = segments.slice(1).join('/');
    return `/${locale}/${pathAfterLang}`;
  };

  return (
    <div ref={dropdownRef} className='position-relative'>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className='btn btn-outline-secondary d-flex align-items-center gap-2'
        aria-label='Selecionar idioma'
        aria-expanded={isOpen}
      >
        <span className='fs-5'>{languageFlags[currentLang]}</span>
        <svg
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          width='16'
          height='16'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className='position-absolute end-0 mt-2 bg-white rounded shadow-lg border py-1'
          style={{ width: '200px', zIndex: 1050 }}
        >
          {i18n.locales.map((locale) => (
            <a
              key={locale}
              href={getLanguageLink(locale)}
              className={`w-100 d-flex align-items-center gap-3 px-3 py-2 border-0 text-start text-decoration-none ${
                currentLang === locale
                  ? 'bg-primary text-white fw-semibold'
                  : 'bg-white text-dark'
              }`}
              style={{
                transition: 'background-color 0.2s',
                display: 'flex',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                if (currentLang !== locale) {
                  e.currentTarget.classList.add('bg-light');
                }
              }}
              onMouseLeave={(e) => {
                if (currentLang !== locale) {
                  e.currentTarget.classList.remove('bg-light');
                }
              }}
            >
              <span className='fs-5'>{languageFlags[locale]}</span>
              <span>{languageNames[locale]}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
