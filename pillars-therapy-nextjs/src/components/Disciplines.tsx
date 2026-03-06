'use client'

import { useTranslation } from '@/i18n/useTranslation'

export default function Disciplines() {
  const { t } = useTranslation()

  return (
    <section className="disciplines">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.disciplines.tag}</span>
          <h2>{t.disciplines.heading}</h2>
        </div>
        <div className="discipline-grid">
          <div className="discipline-card">
            <div className="discipline-icon ot-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="8" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2" />
                <path d="M24 16v16M16 24h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3>{t.disciplines.ot.title}</h3>
            <p>{t.disciplines.ot.description}</p>
            <ul className="discipline-list">
              {t.disciplines.ot.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="discipline-card">
            <div className="discipline-icon osteo-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
                <path d="M24 14c-4 3-6 7-6 10s2 7 6 10c4-3 6-7 6-10s-2-7-6-10z" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3>{t.disciplines.osteo.title}</h3>
            <p>{t.disciplines.osteo.description}</p>
            <ul className="discipline-list">
              {t.disciplines.osteo.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
