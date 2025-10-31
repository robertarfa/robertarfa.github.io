import 'server-only';
import type { Locale } from '@/i18n-config';


import pt from '@/dictionaries/pt.json';
import en from '@/dictionaries/en.json';
import es from '@/dictionaries/es.json';
import it from '@/dictionaries/it.json';
import de from '@/dictionaries/de.json';

const dictionaries = { pt, en, es, it, de };

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale];
};
