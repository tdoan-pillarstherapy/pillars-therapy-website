'use client'

import { useTranslation } from '@/i18n/useTranslation'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand-col">
            <span className="logo">
              <img src="/assets/PillarsTherapy_Logo_PositiveGrad.png" alt="Pillars Therapy" className="logo-img footer-logo-img" />
            </span>
            <p>{t.footer.brandDescription}</p>
          </div>
          <div className="footer-col">
            <h4>{t.footer.servicesHeading}</h4>
            <ul>
              <li><a href="#ndis">{t.footer.ndisServices}</a></li>
              <li><a href="#sah">{t.footer.supportAtHome}</a></li>
              <li><a href="#services">{t.footer.allServices}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t.footer.disciplinesHeading}</h4>
            <ul>
              <li><a href="#services">{t.footer.ot}</a></li>
              <li><a href="#services">{t.footer.osteo}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t.footer.contactHeading}</h4>
            <ul>
              <li><a href="mailto:contact@pillarstherapy.com.au">contact@pillarstherapy.com.au</a></li>
              <li><a href="#contact">{t.footer.sendEnquiry}</a></li>
              <li>{t.footer.serviceArea}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t.footer.abn}</p>
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
