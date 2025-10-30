'use client';

import { usePathname, useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Extrai o idioma atual da URL
  const currentLang = pathname.split('/')[1] as Locale;

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

  const switchLanguage = (locale: Locale) => {
    // Pega o basePath do Next.js se existir
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const segments = pathname.split('/').filter(Boolean);
    
    // Remove o basePath se existir nos segments
    if (basePath && segments[0] === basePath.replace('/', '')) {
      segments.shift();
    }
    
    // Substitui o idioma (primeiro segmento após basePath)
    if (segments.length > 0) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    
    // Reconstrói o caminho com basePath
    const newPath = basePath + '/' + segments.join('/');
    
    // Usa window.location para navegação mais confiável
    window.location.href = newPath;
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className='position-relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='btn btn-outline-secondary d-flex align-items-center gap-2'
        aria-label='Selecionar idioma'
      >
        <span className='fs-5'>{languageFlags[currentLang]}</span>
        {/* <span className='fw-medium'>{languageNames[currentLang]}</span> */}
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
            <button
              key={locale}
              onClick={() => switchLanguage(locale)}
              className={`w-100 d-flex align-items-center gap-3 px-3 py-2 border-0 text-start ${
                currentLang === locale
                  ? 'bg-primary text-white fw-semibold'
                  : 'bg-white text-dark'
              }`}
              style={{ transition: 'background-color 0.2s' }}
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
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
