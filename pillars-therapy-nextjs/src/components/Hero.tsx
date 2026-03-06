'use client'

import { useTranslation } from '@/i18n/useTranslation'
import PictureFrame from './PictureFrame'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-tag">{t.hero.tag}</span>
          <h1>{t.hero.headingStart}<em>{t.hero.headingEmphasis}</em></h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary btn-lg">{t.hero.ctaServices}</a>
            <a href="#contact" className="btn btn-outline btn-lg">{t.hero.ctaContact}</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
          <PictureFrame />
        </div>
      </div>
    </section>
  )
}
