export default function Pathways() {
  return (
    <section className="pathways" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">How We Work With You</span>
          <h2>Choose your funding pathway</h2>
          <p>We provide services through multiple funding streams. Select the pathway that applies to you to explore what we offer.</p>
        </div>
        <div className="pathway-cards">
          <a href="#ndis" className="pathway-card pathway-ndis">
            <div className="pathway-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
                <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>NDIS</h3>
            <p>Plan-managed and self-managed participants. Comprehensive OT and Osteopathy services.</p>
            <span className="pathway-link">View NDIS Services &rarr;</span>
          </a>
          <a href="#sah" className="pathway-card pathway-sah">
            <div className="pathway-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 6l14 12H6L20 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <rect x="10" y="18" width="20" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
                <rect x="16" y="24" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3>Support at Home</h3>
            <p>Government-funded allied health for eligible older Australians living at home.</p>
            <span className="pathway-link">View SAH Services &rarr;</span>
          </a>
          <a href="#contact" className="pathway-card pathway-private">
            <div className="pathway-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
                <path d="M10 34c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Private Clients</h3>
            <p>Self-funded occupational therapy and osteopathy services available to everyone.</p>
            <span className="pathway-link">Get in Touch &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
