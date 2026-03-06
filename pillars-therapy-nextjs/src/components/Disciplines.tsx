export default function Disciplines() {
  return (
    <section className="disciplines">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Disciplines</span>
          <h2>Expert care across two disciplines</h2>
        </div>
        <div className="discipline-grid">
          <div className="discipline-card">
            <div className="discipline-icon ot-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="8" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2" />
                <path d="M24 16v16M16 24h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Occupational Therapy</h3>
            <p>Our occupational therapists work with you to overcome barriers to everyday living. From driving assessments to home modifications and assistive technology, we help you maintain independence and participate fully in life.</p>
            <ul className="discipline-list">
              <li>Driving Assessments &amp; Rehabilitation</li>
              <li>Functional Assessments</li>
              <li>Home Modification Assessments</li>
              <li>Assistive Technology Assessments</li>
              <li>SDA/SIL Applications</li>
              <li>Wheelchair Assessments</li>
            </ul>
          </div>
          <div className="discipline-card">
            <div className="discipline-icon osteo-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
                <path d="M24 14c-4 3-6 7-6 10s2 7 6 10c4-3 6-7 6-10s-2-7-6-10z" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3>Osteopathy</h3>
            <p>Our osteopaths take a whole-body approach to pain relief and movement. We travel to your home and bring everything we need — through hands-on treatment, tailored exercise programs, and ongoing management plans, we help you move better and feel better.</p>
            <ul className="discipline-list">
              <li>Pain Management</li>
              <li>Exercise Programs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
