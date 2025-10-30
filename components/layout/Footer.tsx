import Logo from '@/components/ui/Logo';
import { Locale } from '@/i18n-config';

interface FooterProps {
  lang: Locale;
  dictionary: {
    footer: {
      description: string;
      quickLinks: string;
      contact: string;
      rights: string;
    };
    nav: {
      home: string;
      services: string;
      about: string;
      contact: string;
    };
  };
}

export default function Footer({ lang, dictionary }: FooterProps) {
  return (
    <footer className='bg-dark text-white py-5'>
      <div className='container'>
        <div className='row g-4 mb-4'>
          {/* Logo e Descrição */}
          <div className='col-md-4'>
            <div className='mb-3'>
              <Logo className='text-white' />
            </div>
            <p className='text-white-50'>{dictionary.footer.description}</p>
          </div>

          {/* Links Rápidos */}
          <div className='col-md-4'>
            <h3 className='h5 fw-bold mb-3'>{dictionary.footer.quickLinks}</h3>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <a
                  href={`/${lang}`}
                  className='text-white-50 text-decoration-none hover-text-white'
                >
                  {dictionary.nav.home}
                </a>
              </li>
              <li className='mb-2'>
                <a
                  href={`/${lang}#services`}
                  className='text-white-50 text-decoration-none hover-text-white'
                >
                  {dictionary.nav.services}
                </a>
              </li>
              <li className='mb-2'>
                <a
                  href={`/${lang}#about`}
                  className='text-white-50 text-decoration-none hover-text-white'
                >
                  {dictionary.nav.about}
                </a>
              </li>
              <li className='mb-2'>
                <a
                  href={`/${lang}#contact`}
                  className='text-white-50 text-decoration-none hover-text-white'
                >
                  {dictionary.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className='col-md-4'>
            <h3 className='h5 fw-bold mb-3'>{dictionary.footer.contact}</h3>
            <ul className='list-unstyled text-white-50'>
              <li className='d-flex align-items-center mb-2'>
                <span className='me-2'>📧</span>
                <a
                  href='mailto:contato@collabtranslation.com'
                  className='text-white-50 text-decoration-none hover-text-white'
                >
                  contato@collabtranslation.com
                </a>
              </li>
              <li className='d-flex align-items-center mb-2'>
                <span className='me-2'>📱</span>
                <span>+55 11 9999-9999</span>
              </li>
              <li className='d-flex align-items-center mb-2'>
                <span className='me-2'>📍</span>
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-top border-secondary pt-4 text-center text-white-50'>
          <p className='mb-0'>
            © 2025 CollaBTranslation. {dictionary.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
