'use client'

import { useTranslation } from '@/i18n/useTranslation'

interface SubPageHeroProps {
  logo?: string
  logoAlt?: string
  translationKey: 'ndisPage' | 'sahPage' | 'otPage' | 'osteoPage'
  showNdisNotice?: boolean
}

export default function SubPageHero({ logo, logoAlt, translationKey, showNdisNotice }: SubPageHeroProps) {
  const { t } = useTranslation()
  const page = t[translationKey]

  return (
    <section className="sub-page-hero">
      <div className="container">
        <a href="/" className="back-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 12L6 8l4-4" />
          </svg>
          {t.subPageHero.backHome}
        </a>
        <div className="sub-page-hero-content">
          {logo && (
            <div className="sub-page-hero-logo">
              <img src={logo} alt={logoAlt || ''} />
            </div>
          )}
          <h1>{page.heading}</h1>
          <p>{page.description}</p>
          {showNdisNotice && (
            <div className="funding-notice hero-notice">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 6v5M10 13.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>{t.ndisServices.notice}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
