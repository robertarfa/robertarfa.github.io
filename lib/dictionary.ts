import 'server-only';
import type { Locale } from '@/i18n-config';

// Dicionários
const dictionaries = {
  pt: async () => (await import('@/dictionaries/pt.json')).default,
  en: async () => (await import('@/dictionaries/en.json')).default,
  es: async () => (await import('@/dictionaries/es.json')).default,
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
