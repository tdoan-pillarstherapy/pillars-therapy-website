export default function NdisServices() {
  return (
    <section className="funding-section ndis-section" id="ndis">
      <div className="container">
        <div className="funding-header">
          <span className="section-tag">NDIS Services</span>
          <h2>Services for NDIS participants</h2>
          <p>We work with <strong>plan-managed</strong> and <strong>self-managed</strong> NDIS participants. Please note we do not service NDIA-managed clients.</p>
          <div className="funding-notice">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 6v5M10 13.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>Plan-managed &amp; self-managed participants only</span>
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
                <p>Comprehensive driving evaluation services including vehicle modification recommendations, driving rehabilitation programs, and state-related assessments such as VicRoads Occupational Therapy driving assessments. We help participants get on the road or return to driving safely.</p>
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
                <h4>Initial &amp; Full Functional Assessments</h4>
                <p>Our functional assessments provide a detailed evaluation of your current abilities across daily living activities, mobility, self-care, communication, and community participation. These assessments identify your strengths, challenges, and the supports you need to achieve your goals. A full functional assessment forms the foundation for your NDIS plan and ongoing therapy.</p>
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
                <p>Our OTs assess your home environment to identify modifications that improve safety, accessibility, and independence. This can include ramp installations, bathroom modifications such as grab rails, shower seats, and accessible fixtures, widening doorways, installing handrails, threshold ramps, and other minor modifications throughout the home to reduce falls risk and support daily living.</p>
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
                <p>We assess, trial, and recommend assistive technology and equipment to support your independence. From daily living aids to complex assistive devices, we match the right technology to your needs and goals.</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="20" height="20" rx="3" />
                  <path d="M4 10h20" />
                  <path d="M10 10v14" />
                  <path d="M15 16h4M15 20h4" />
                </svg>
              </div>
              <div className="service-text">
                <h4>SDA/SIL Applications</h4>
                <p>We assist participants with Specialist Disability Accommodation (SDA) and Supported Independent Living (SIL) applications, providing detailed assessments and reports to support your housing and support needs.</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="14" cy="8" r="4" />
                  <path d="M8 26h2l1-6h6l1 6h2" />
                  <circle cx="14" cy="22" r="4" />
                  <path d="M10 22H4M24 22h-6" />
                </svg>
              </div>
              <div className="service-text">
                <h4>Complex Wheelchair Assessments</h4>
                <p>Specialised assessments for manual and power wheelchairs, including seating and positioning. We work with you and equipment suppliers to ensure optimal comfort, function, and mobility.</p>
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
                <p>Hands-on osteopathic treatment to address musculoskeletal pain, improve mobility, and support your overall wellbeing. Our osteopaths develop personalised management plans tailored to your condition and goals.</p>
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
                <p>Individually designed exercise programs that complement your osteopathic treatment. Focused on building strength, improving flexibility, and preventing recurrence of pain or injury.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
