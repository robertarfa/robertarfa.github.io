import React from 'react';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';

export default async function Languages({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);
  const section = dict.languages;

  return (
    <>
      <section className='py-5 bg-light'>
        <div className='bg-black py-5'>
          <h2 className='text-center fw-semibold tracking-wide text-light' style={{ fontSize: '1.1rem', letterSpacing: '0.05em' }}>
            {section.trusted}
          </h2>
        </div>
        <div className='container py-5'>
          <div className='text-center mb-5'>
            <h3 className='text-uppercase fw-semibold text-secondary mb-3' style={{ fontSize: '0.9rem', letterSpacing: '0.1em' }}>
              {section.subtitle}
            </h3>
            <h2 className='fw-bold text-dark mb-4' style={{ fontSize: '2.5rem' }}>
              {section.title}
            </h2>
            <p className='text-dark mx-auto' style={{ maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.8' }}>
              {section.description}
            </p>
          </div>

          <div className='row g-4 mt-4'>
            {section.services?.map((service: any, idx: number) => (
              <div key={idx} className='col-md-4'>
                <div className='px-3'>
                  <span className='fw-bold text-secondary mb-2 d-block' style={{ fontSize: '1rem' }}>
                    {service.number}
                  </span>
                  <h3 className='h5 fw-bold text-dark mb-3'>{service.title}</h3>
                  <p className='text-dark mb-3' style={{ lineHeight: '1.8' }}>
                    {service.description}
                  </p>
                  <a href='#' className='fw-semibold text-decoration-underline text-black'>
                    {service.details}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Touch Section - Imagem 5 */}
      <section className='py-5' style={{ backgroundColor: '#ff8c00' }}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <h2 className='fw-normal text-dark' style={{ fontSize: '2.2rem', lineHeight: '1.5' }}>
                {section.humanTouch}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Imagem 6 */}
      <section className='py-5 bg-light'>
        <div className='container py-5'>
          <div className='text-center mb-5'>
            <h3 className='text-uppercase fw-semibold text-secondary mb-3' style={{ fontSize: '0.9rem', letterSpacing: '0.1em' }}>
              {section.pricing.subtitle}
            </h3>
            <h2 className='fw-bold text-dark mb-4' style={{ fontSize: '2.5rem' }}>
              {section.pricing.title}
            </h2>
            <p className='text-dark mx-auto' style={{ maxWidth: '900px', fontSize: '1.1rem', lineHeight: '1.8' }}>
              {section.pricing.description}
            </p>
          </div>

          <div className='row g-4 mt-5'>
            {section.pricing.plans.map((plan: any, idx: number) => (
              <div key={idx} className='col-md-4'>
                <div className='border border-dark bg-white p-4 h-100 d-flex flex-column'>
                  <h3 className='h4 fw-bold text-dark mb-4'>{plan.name}</h3>
                  <ul className='list-unstyled mb-4'>
                    {plan.features.map((feature: string, fIdx: number) => (
                      <li key={fIdx} className='mb-2 text-dark'>{feature}</li>
                    ))}
                  </ul>
                  <div className='mb-4'>
                    <span className='h2 fw-bold text-dark'>{plan.price}</span>
                    <span className='text-dark ms-2'>{plan.unit}</span>
                  </div>
                  <button className='btn btn-dark rounded-pill py-3 px-5 fw-semibold mb-4'>Request</button>
                  <p className='text-dark mt-auto' style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                    {plan.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
