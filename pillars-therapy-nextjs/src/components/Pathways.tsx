'use client'

import { useTranslation } from '@/i18n/useTranslation'

export default function Pathways() {
  const { t } = useTranslation()

  return (
    <section className="pathways" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.pathways.tag}</span>
          <h2>{t.pathways.heading}</h2>
          <p>{t.pathways.description}</p>
        </div>
        <div className="pathway-cards">
          <a href="/ndis" className="pathway-card pathway-ndis">
            <div className="pathway-icon">
              <img src="/assets/ndis-logo.png" alt="NDIS" className="pathway-logo" />
            </div>
            <h3>{t.pathways.ndis.title}</h3>
            <p>{t.pathways.ndis.description}</p>
            <span className="pathway-link">{t.pathways.ndis.link} &rarr;</span>
          </a>
          <a href="/support-at-home" className="pathway-card pathway-sah">
            <div className="pathway-icon">
              <img src="/assets/support-at-home-logo.jpeg" alt="Support at Home" className="pathway-logo" />
            </div>
            <h3>{t.pathways.sah.title}</h3>
            <p>{t.pathways.sah.description}</p>
            <span className="pathway-link">{t.pathways.sah.link} &rarr;</span>
          </a>
          <a href="#contact" className="pathway-card pathway-private">
            <div className="pathway-icon">
              <img src="/assets/private-clients-logo.png" alt="Private Clients" className="pathway-logo" />
            </div>
            <h3>{t.pathways.private.title}</h3>
            <p>{t.pathways.private.description}</p>
            <span className="pathway-link">{t.pathways.private.link} &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
