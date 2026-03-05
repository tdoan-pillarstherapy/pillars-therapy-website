export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-tag">About Us</span>
            <h2>Therapy that&apos;s human and real</h2>
            <p>Pillars Therapy is a leading allied health service provider delivering multidisciplinary rehabilitation services in your home and remotely via Telehealth across Victoria.</p>
            <p>Our team of occupational therapists and osteopaths are passionate about helping you achieve your goals, whether that&apos;s returning to driving, modifying your home for better accessibility, managing pain, or building strength and independence.</p>
            <p>We believe everyone deserves care that&apos;s responsive, respectful, and tailored to their life. That&apos;s why we come to you.</p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-value">Victoria-wide</span>
                <span className="stat-label">Service coverage</span>
              </div>
              <div className="stat">
                <span className="stat-value">In-home &amp; Telehealth</span>
                <span className="stat-label">Delivery model</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-shape about-shape-1"></div>
            <div className="about-shape about-shape-2"></div>
            <div className="about-values">
              <div className="value-item">
                <span className="value-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 3l2.5 5 5.5.8-4 3.9.9 5.3-4.9-2.6-4.9 2.6.9-5.3-4-3.9 5.5-.8z" />
                  </svg>
                </span>
                <span>Person-centred care</span>
              </div>
              <div className="value-item">
                <span className="value-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="10" cy="10" r="8" />
                    <path d="M7 10l2 2 4-4" />
                  </svg>
                </span>
                <span>Evidence-based practice</span>
              </div>
              <div className="value-item">
                <span className="value-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 10c0-3.866 3.134-7 7-7s7 3.134 7 7-3.134 7-7 7" />
                    <path d="M10 6v4l2.5 2.5" />
                  </svg>
                </span>
                <span>Responsive &amp; flexible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
