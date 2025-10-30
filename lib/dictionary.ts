import 'server-only';
import type { Locale } from '@/i18n-config';


import pt from '@/dictionaries/pt.json';
import en from '@/dictionaries/en.json';
import es from '@/dictionaries/es.json';

const dictionaries = { pt, en, es };

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale];
};
