import React from 'react';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';

export default async function CTA({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  const section = dict.cta;

  return (
    <section 
      className='py-5 position-relative' 
      style={{
        backgroundImage: 'url(/layout/world-map.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#1a1a2e',
        minHeight: '500px'
      }}
    >
      <div className='position-absolute top-0 start-0 w-100 h-100' style={{ backgroundColor: 'rgba(26, 26, 46, 0.85)' }}></div>
      <div className='container position-relative' style={{ zIndex: 1 }}>
        <div className='row justify-content-center py-5'>
          <div className='col-lg-8'>
            <div className='border border-light p-5 text-center' style={{ borderWidth: '2px !important' }}>
              <h2 className='text-white fw-normal mb-4' style={{ fontSize: '2.5rem', lineHeight: '1.4' }}>
                {section.title}
              </h2>
              <p className='text-white mb-4' style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                {section.description}
              </p>
              <button 
                className='btn rounded-pill py-3 px-5 fw-semibold mt-3'
                style={{ backgroundColor: '#ff8c00', color: '#000', border: 'none' }}
              >
                {section.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
