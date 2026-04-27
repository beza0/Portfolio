import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { LanguageContext } from './context'
import {
  type Locale,
  getTranslations,
} from './translations'

const STORAGE_KEY = 'portfolio-locale'

function readStoredLocale(): Locale | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === 'tr' || raw === 'en') return raw
  } catch {
    /* ignore */
  }
  return null
}

function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return 'tr'
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const l of langs) {
    const base = l.split('-')[0]?.toLowerCase()
    if (base === 'en') return 'en'
    if (base === 'tr') return 'tr'
  }
  return 'tr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    return readStoredLocale() ?? detectBrowserLocale()
  })

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'tr'
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: getTranslations(locale),
    }),
    [locale, setLocale],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}
