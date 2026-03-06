'use client'

import { useTranslation } from '@/i18n/useTranslation'

interface SubPageHeroProps {
  logo?: string
  logoAlt?: string
  icon?: 'ot' | 'osteo'
  translationKey: 'ndisPage' | 'sahPage' | 'otPage' | 'osteoPage'
}

export default function SubPageHero({ logo, logoAlt, icon, translationKey }: SubPageHeroProps) {
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
          {icon && (
            <div className={`sub-page-hero-icon ${icon}-accent`}>
              {icon === 'ot' ? (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="8" y="8" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2" />
                  <path d="M24 16v16M16 24h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
                  <path d="M24 14c-4 3-6 7-6 10s2 7 6 10c4-3 6-7 6-10s-2-7-6-10z" stroke="currentColor" strokeWidth="2" />
                </svg>
              )}
            </div>
          )}
          <h1>{page.heading}</h1>
          <p>{page.description}</p>
        </div>
      </div>
    </section>
  )
}
