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
            <h3>{t.disciplines.ot.title}</h3>
            <p>{t.disciplines.ot.description}</p>
            <ul className="discipline-list">
              {t.disciplines.ot.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a href="/occupational-therapy" className="discipline-link">{t.disciplines.ot.link} &rarr;</a>
          </div>
          <div className="discipline-card">
            <h3>{t.disciplines.osteo.title}</h3>
            <p>{t.disciplines.osteo.description}</p>
            <ul className="discipline-list">
              {t.disciplines.osteo.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a href="/osteopathy" className="discipline-link">{t.disciplines.osteo.link} &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  )
}
