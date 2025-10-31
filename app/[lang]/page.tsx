import { getDictionary } from '@/lib/dictionary';
import { i18n, Locale } from '@/i18n-config';
import Index from '@/components/sections/Index';
import Edge from '@/components/sections/Edge';
import Languages from '@/components/sections/Languages';
import CTA from '@/components/sections/CTA';
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
      <Edge content={dict.edge} />
      <Languages lang={lang as Locale} />
      <CTA lang={lang as Locale} />
      {/* <Contact content={dict.contact} /> */}
    </main>
  );
}
