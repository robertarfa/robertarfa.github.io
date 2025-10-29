import Container from '@/components/ui/Container';
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
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <div className="mb-4">
              <Logo className="text-white" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              {dictionary.footer.description}
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">{dictionary.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href={`/${lang}`} className="text-gray-400 hover:text-white transition-colors">
                  {dictionary.nav.home}
                </a>
              </li>
              <li>
                <a href={`/${lang}#services`} className="text-gray-400 hover:text-white transition-colors">
                  {dictionary.nav.services}
                </a>
              </li>
              <li>
                <a href={`/${lang}#about`} className="text-gray-400 hover:text-white transition-colors">
                  {dictionary.nav.about}
                </a>
              </li>
              <li>
                <a href={`/${lang}#contact`} className="text-gray-400 hover:text-white transition-colors">
                  {dictionary.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">{dictionary.footer.contact}</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:contato@collabtranslation.com" className="hover:text-white transition-colors">
                  contato@collabtranslation.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>+55 11 9999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 CollaBTranslation. {dictionary.footer.rights}</p>
        </div>
      </Container>
    </footer>
  );
}
