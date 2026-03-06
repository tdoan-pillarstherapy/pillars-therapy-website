'use client'

import { useTranslation } from '@/i18n/useTranslation'

export default function NdisServices() {
  const { t } = useTranslation()

  return (
    <section className="funding-section ndis-section" id="ndis">
      <div className="container">
        <div className="services-split">
          <div className="services-column">
            <div className="services-column-header">
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

            <div className="service-item">
              <div className="service-icon">
                <img src="/assets/icons/driving-assessment.png" alt="" />
              </div>
              <div className="service-text">
                <h4>{t.ndisServices.services.vehicleMod.title}</h4>
                <p>{t.ndisServices.services.vehicleMod.description}</p>
              </div>
            </div>
          </div>

          <div className="services-column">
            <div className="services-column-header">
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
