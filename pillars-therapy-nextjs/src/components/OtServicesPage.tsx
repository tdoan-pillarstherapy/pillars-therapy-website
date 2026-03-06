'use client'

import { useTranslation } from '@/i18n/useTranslation'

export default function OtServicesPage() {
  const { t } = useTranslation()

  return (
    <div className="service-page-content">
      {/* NDIS OT Services */}
      <section className="funding-section ndis-section">
        <div className="container">
          <div className="funding-header">
            <div className="funding-header-logo">
              <img src="/assets/ndis-logo.png" alt="NDIS" className="funding-logo" />
            </div>
            <h2>{t.otPage.ndisHeading}</h2>
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
        </div>
      </section>

      {/* SAH OT Services */}
      <section className="funding-section sah-section">
        <div className="container">
          <div className="funding-header">
            <div className="funding-header-logo">
              <img src="/assets/support-at-home-logo.jpeg" alt="Support at Home" className="funding-logo" />
            </div>
            <h2>{t.otPage.sahHeading}</h2>
            <p>{t.sahServices.description}</p>
          </div>

          <div className="services-list">
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
        </div>
      </section>
    </div>
  )
}
