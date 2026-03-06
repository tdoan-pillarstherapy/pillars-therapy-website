'use client'

import { useTranslation } from '@/i18n/useTranslation'

export default function About() {
  const { t } = useTranslation()

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-tag">{t.about.tag}</span>
            <h2>{t.about.headingStart}<span className="handwritten-accent">{t.about.handwrittenAccent}<span className="underline-accent">{t.about.underlineWord}</span></span></h2>
            <p>{t.about.paragraphs[0]}</p>
            <p>{t.about.paragraphs[1]}</p>
            <p>{t.about.paragraphs[2]}</p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-value">{t.about.metroValue}</span>
                <span className="stat-label">{t.about.metroLabel}</span>
              </div>
              <div className="stat">
                <span className="stat-value">{t.about.deliveryValue}</span>
                <span className="stat-label">{t.about.deliveryLabel}</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-shape about-shape-1"></div>
            <div className="about-shape about-shape-2"></div>
            <div className="polaroid-gallery">
              <div className="polaroid polaroid-1">
                <div className="polaroid-frame">
                  <img src="/assets/team-illustration.png" alt="The Pillars Therapy team sitting together" />
                  <span className="polaroid-caption">{t.about.captions[0]}</span>
                </div>
              </div>
              <div className="polaroid polaroid-2">
                <div className="polaroid-frame">
                  <img src="/assets/about-illustration-2.png" alt="Therapist chatting with a client" />
                  <span className="polaroid-caption">{t.about.captions[1]}</span>
                </div>
              </div>
              <div className="polaroid polaroid-3">
                <div className="polaroid-frame">
                  <img src="/assets/about-illustration-3.png" alt="Laughing during a therapy session" />
                  <span className="polaroid-caption">{t.about.captions[2]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
