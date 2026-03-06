'use client'

import { useTranslation } from '@/i18n/useTranslation'

export default function SahServices() {
  const { t } = useTranslation()

  return (
    <section className="funding-section sah-section" id="sah">
      <div className="container">
        <div className="services-split equal-columns">
          <div className="services-column">
            <div className="services-column-header">
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
