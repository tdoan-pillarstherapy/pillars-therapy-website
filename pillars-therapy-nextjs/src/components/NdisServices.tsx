'use client'

import { useTranslation } from '@/i18n/useTranslation'

export default function NdisServices() {
  const { t } = useTranslation()

  return (
    <section className="funding-section ndis-section" id="ndis">
      <div className="container">
        <div className="funding-header">
          <span className="section-tag">{t.ndisServices.tag}</span>
          <h2>{t.ndisServices.heading}</h2>
          <p>{t.ndisServices.descriptionParts[0]}<strong>{t.ndisServices.descriptionParts[1]}</strong>{t.ndisServices.descriptionParts[2]}<strong>{t.ndisServices.descriptionParts[3]}</strong>{t.ndisServices.descriptionParts[4]}</p>
          <div className="funding-notice">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 6v5M10 13.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>{t.ndisServices.notice}</span>
          </div>
        </div>

        <div className="services-split">
          <div className="services-column">
            <div className="services-column-header">
              <div className="column-icon ot-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3>{t.ndisServices.ot}</h3>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <img src="/assets/icons/driving-assessment.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.ndisServices.services.driving.title}</h4>
                <p>{t.ndisServices.services.driving.description}</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <img src="/assets/icons/functional-assessment.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.ndisServices.services.functional.title}</h4>
                <p>{t.ndisServices.services.functional.description}</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <img src="/assets/icons/home-modification.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.ndisServices.services.homeMod.title}</h4>
                <p>{t.ndisServices.services.homeMod.description}</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <img src="/assets/icons/assistive-tech.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.ndisServices.services.at.title}</h4>
                <p>{t.ndisServices.services.at.description}</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <img src="/assets/icons/sda-sil.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.ndisServices.services.sdaSil.title}</h4>
                <p>{t.ndisServices.services.sdaSil.description}</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <img src="/assets/icons/wheelchair.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.ndisServices.services.wheelchair.title}</h4>
                <p>{t.ndisServices.services.wheelchair.description}</p>
              </div>
            </div>
          </div>

          <div className="services-column">
            <div className="services-column-header">
              <div className="column-icon osteo-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 7c-2 1.5-3 3.5-3 5s1 3.5 3 5c2-1.5 3-3.5 3-5s-1-3.5-3-5z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h3>{t.ndisServices.osteo}</h3>
            </div>

            <div className="service-item">
              <div className="service-icon osteo">
                <img src="/assets/icons/pain-management.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.ndisServices.services.painNdis.title}</h4>
                <p>{t.ndisServices.services.painNdis.description}</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon osteo">
                <img src="/assets/icons/exercise-program.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.ndisServices.services.exerciseNdis.title}</h4>
                <p>{t.ndisServices.services.exerciseNdis.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
