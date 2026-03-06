'use client'

import { useTranslation } from '@/i18n/useTranslation'

export default function OsteoServicesPage() {
  const { t } = useTranslation()

  return (
    <div className="service-page-content">
      {/* NDIS Osteo Services */}
      <section className="funding-section ndis-section">
        <div className="container">
          <div className="funding-header">
            <div className="funding-header-logo">
              <img src="/assets/ndis-logo.png" alt="NDIS" className="funding-logo" />
            </div>
            <h2>{t.osteoPage.ndisHeading}</h2>
            <p>{t.ndisServices.descriptionParts[0]}<strong>{t.ndisServices.descriptionParts[1]}</strong>{t.ndisServices.descriptionParts[2]}<strong>{t.ndisServices.descriptionParts[3]}</strong>{t.ndisServices.descriptionParts[4]}</p>
            <div className="funding-notice">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 6v5M10 13.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>{t.ndisServices.notice}</span>
            </div>
          </div>

          <div className="services-list">
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
      </section>

      {/* SAH Osteo Services */}
      <section className="funding-section sah-section">
        <div className="container">
          <div className="funding-header">
            <div className="funding-header-logo">
              <img src="/assets/support-at-home-logo.png" alt="Support at Home" className="funding-logo" />
            </div>
            <h2>{t.osteoPage.sahHeading}</h2>
            <p>{t.sahServices.description}</p>
          </div>

          <div className="services-list">
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
      </section>
    </div>
  )
}
