'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Locale } from '@/i18n/types'

const languages: { code: Locale; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'vi', label: 'Tiếng Việt', short: 'VI' },
  { code: 'zh-CN', label: '中文（简体）', short: '简' },
  { code: 'zh-TW', label: '中文（繁體）', short: '繁' },
]

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  const current = languages.find(l => l.code === locale) || languages[0]

  return (
    <div className="lang-toggle" ref={ref}>
      <button
        className="lang-toggle-btn"
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="9" r="7.5" />
          <path d="M1.5 9h15" />
          <path d="M9 1.5c2 2.5 3 4.5 3 7.5s-1 5-3 7.5" />
          <path d="M9 1.5c-2 2.5-3 4.5-3 7.5s1 5 3 7.5" />
        </svg>
        <span className="lang-toggle-label">{current.short}</span>
      </button>
      {isOpen && (
        <div className="lang-dropdown">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`lang-option${lang.code === locale ? ' active' : ''}`}
              onClick={() => { setLocale(lang.code); setIsOpen(false) }}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
