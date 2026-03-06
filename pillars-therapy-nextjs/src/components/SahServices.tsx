export default function SahServices() {
  return (
    <section className="funding-section sah-section" id="sah">
      <div className="container">
        <div className="funding-header">
          <span className="section-tag">Support at Home Services</span>
          <h2>Services for Support at Home clients</h2>
          <p>Government-funded allied health services for eligible older Australians, helping you stay independent and safe in your own home.</p>
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
              <h3>Occupational Therapy</h3>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="14" cy="14" r="10" />
                  <circle cx="14" cy="14" r="4" />
                  <path d="M14 2v4M14 22v4M2 14h4M22 14h4" />
                </svg>
              </div>
              <div className="service-text">
                <h4>Driving Assessments</h4>
                <p>Comprehensive driving evaluation including vehicle modification recommendations, driving rehabilitation, and VicRoads Occupational Therapy driving assessments. We support older Australians to maintain their driving independence safely.</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="18" height="24" rx="2" />
                  <path d="M10 8h8M10 12h8M10 16h5" />
                  <path d="M9 20l2 2 4-4" />
                </svg>
              </div>
              <div className="service-text">
                <h4>Initial Assessments</h4>
                <p>A thorough assessment of your current functional abilities, daily living needs, and goals. This informs your care plan and identifies the supports and interventions that will benefit you most.</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 24V12l10-8 10 8v12H4z" />
                  <path d="M16 18l-2-2-3 3" />
                  <path d="M18 15l-4 4" />
                  <rect x="10" y="18" width="8" height="6" rx="1" />
                </svg>
              </div>
              <div className="service-text">
                <h4>Home Modification Assessments</h4>
                <p>We assess your home for modifications that improve safety and accessibility. This includes ramp installations, bathroom modifications such as grab rails, shower seats, and accessible fixtures, handrails, threshold ramps, and other minor modifications to reduce falls risk and help you live comfortably at home.</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="14" cy="14" r="5" />
                  <path d="M14 3v3M14 22v3M3 14h3M22 14h3M6.1 6.1l2.1 2.1M19.8 19.8l2.1 2.1M6.1 21.9l2.1-2.1M19.8 8.2l2.1-2.1" />
                </svg>
              </div>
              <div className="service-text">
                <h4>Assistive Technology (AT) Assessments</h4>
                <p>Assessment and recommendation of equipment and assistive devices to support your independence at home, from mobility aids to daily living equipment.</p>
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
              <h3>Osteopathy</h3>
            </div>

            <div className="service-item">
              <div className="service-icon osteo">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 4c-3 2.5-5 6-5 9s2 6.5 5 9c3-2.5 5-6 5-9s-2-6.5-5-9z" />
                  <path d="M9 14h10" />
                  <path d="M10.5 10h7M10.5 18h7" />
                </svg>
              </div>
              <div className="service-text">
                <h4>Pain Management</h4>
                <p>Hands-on osteopathic treatment delivered in your home — we travel to you and bring everything we need. Our osteopaths manage musculoskeletal pain and improve quality of life with personalised plans to address your specific needs.</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon osteo">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="14" cy="6" r="3" />
                  <path d="M14 9v5" />
                  <path d="M10 24l2-7h4l2 7" />
                  <path d="M8 16l6 2 6-2" />
                  <path d="M7 12h4M17 12h4" />
                </svg>
              </div>
              <div className="service-text">
                <h4>Exercise Programs</h4>
                <p>Tailored exercise programs to improve strength, balance, and mobility. Designed to complement treatment and help you stay active and independent at home.</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon osteo">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 4v4M14 20v4" />
                  <path d="M7 7l3 3M18 18l3 3" />
                  <path d="M4 14h4M20 14h4" />
                  <path d="M7 21l3-3M18 10l3-3" />
                  <circle cx="14" cy="14" r="4" />
                </svg>
              </div>
              <div className="service-text">
                <h4>Chronic Condition Management</h4>
                <p>Ongoing osteopathic care for conditions such as arthritis, chronic pain, and musculoskeletal disorders. We work with you to manage symptoms, maintain mobility, and improve your quality of life over time.</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon osteo">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 3v3" />
                  <circle cx="14" cy="9" r="3" />
                  <path d="M14 12v4" />
                  <path d="M10 16h8" />
                  <path d="M10 16l-2 8" />
                  <path d="M18 16l2 8" />
                  <path d="M6 26h4M18 26h4" />
                </svg>
              </div>
              <div className="service-text">
                <h4>Falls Prevention</h4>
                <p>Assessment of balance, gait, and musculoskeletal risk factors to reduce your risk of falls. Our osteopaths identify areas of concern and provide targeted treatment and exercises to help you stay safe and confident on your feet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
