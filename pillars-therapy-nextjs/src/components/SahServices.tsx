'use client'

import { useTranslation } from '@/i18n/useTranslation'

export default function SahServices() {
  const { t } = useTranslation()

  return (
    <section className="funding-section sah-section" id="sah">
      <div className="container">
        <div className="funding-header">
          <span className="section-tag">{t.sahServices.tag}</span>
          <h2>{t.sahServices.heading}</h2>
          <p>{t.sahServices.description}</p>
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
              <h3>{t.sahServices.ot}</h3>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <img src="/assets/icons/driving-assessment.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.sahServices.services.drivingSah.title}</h4>
                <p>{t.sahServices.services.drivingSah.description}</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <img src="/assets/icons/functional-assessment.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.sahServices.services.initialSah.title}</h4>
                <p>{t.sahServices.services.initialSah.description}</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <img src="/assets/icons/home-modification.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.sahServices.services.homeModSah.title}</h4>
                <p>{t.sahServices.services.homeModSah.description}</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <img src="/assets/icons/assistive-tech.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.sahServices.services.atSah.title}</h4>
                <p>{t.sahServices.services.atSah.description}</p>
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
              <h3>{t.sahServices.osteo}</h3>
            </div>

            <div className="service-item">
              <div className="service-icon osteo">
                <img src="/assets/icons/pain-management.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.sahServices.services.painSah.title}</h4>
                <p>{t.sahServices.services.painSah.description}</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon osteo">
                <img src="/assets/icons/exercise-program.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.sahServices.services.exerciseSah.title}</h4>
                <p>{t.sahServices.services.exerciseSah.description}</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon osteo">
                <img src="/assets/icons/pain-management.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.sahServices.services.chronicSah.title}</h4>
                <p>{t.sahServices.services.chronicSah.description}</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon osteo">
                <img src="/assets/icons/falls-prevention.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.sahServices.services.fallsSah.title}</h4>
                <p>{t.sahServices.services.fallsSah.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
