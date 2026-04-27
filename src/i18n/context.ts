import { createContext } from 'react'
import { type Locale, getTranslations } from './translations'

export type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof getTranslations>
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
