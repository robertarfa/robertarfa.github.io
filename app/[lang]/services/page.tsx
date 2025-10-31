import { getDictionary } from '@/lib/dictionary';
import { i18n, Locale } from '@/i18n-config';
import Services from '@/components/sections/Services';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <main>
      <Services content={dict.services} />
    </main>
  );
}
