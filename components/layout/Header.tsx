import Logo from '@/components/ui/Logo';
import Navigation from './Navigation';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import Container from '@/components/ui/Container';
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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Logo />
          <div className="flex items-center gap-8">
            <Navigation lang={lang} dictionary={dictionary} />
            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
}
