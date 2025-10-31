import { getDictionary } from '@/lib/dictionary';
import { i18n, Locale } from '@/i18n-config';
import About from '@/components/sections/About';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <main>
      <About content={dict.about} />
    </main>
  );
}
