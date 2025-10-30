import { getDictionary } from '@/lib/dictionary';
import { i18n, Locale } from '@/i18n-config';
import Index from '@/components/sections/Index';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <main>
      <Index content={dict.hero} />
      <Services content={dict.services} />
      <About content={dict.about} />
      <Contact content={dict.contact} />
    </main>
  );
}
