'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Locale, Translations } from '@/i18n/types'
import en from '@/i18n/en.json'
import vi from '@/i18n/vi.json'
import zhCN from '@/i18n/zh-CN.json'
import zhTW from '@/i18n/zh-TW.json'

const allTranslations: Record<Locale, Translations> = {
  en: en as unknown as Translations,
  vi: vi as unknown as Translations,
  'zh-CN': zhCN as unknown as Translations,
  'zh-TW': zhTW as unknown as Translations,
}

const langMap: Record<Locale, string> = {
  en: 'en',
  vi: 'vi',
  'zh-CN': 'zh-Hans',
  'zh-TW': 'zh-Hant',
}

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: en as unknown as Translations,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pillars-locale') as Locale | null
      if (saved && allTranslations[saved]) return saved
      const attr = document.documentElement.getAttribute('data-locale') as Locale | null
      if (attr && allTranslations[attr]) return attr
    }
    return 'en'
  })

  function setLocale(newLocale: Locale) {
    setLocaleState(newLocale)
    document.documentElement.lang = langMap[newLocale]
    document.documentElement.setAttribute('data-locale', newLocale)
    localStorage.setItem('pillars-locale', newLocale)
  }

  useEffect(() => {
    document.documentElement.lang = langMap[locale]
    document.documentElement.setAttribute('data-locale', locale)
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: allTranslations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
