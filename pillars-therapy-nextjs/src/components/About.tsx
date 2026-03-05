export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-tag">About Us</span>
            <h2>Therapy that&apos;s <span className="handwritten-accent">human and <span className="underline-accent">real</span></span></h2>
            <p>Pillars Therapy is a leading allied health service provider delivering multidisciplinary rehabilitation services in your home and remotely via Telehealth across Metro Melbourne. We can also service regional areas at an additional travel cost.</p>
            <p>Our team of occupational therapists and osteopaths are passionate about helping you achieve your goals, whether that&apos;s returning to driving, modifying your home for better accessibility, managing pain, or building strength and independence.</p>
            <p>We believe everyone deserves care that&apos;s responsive, respectful, and tailored to their life. That&apos;s why we come to you.</p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-value">Metro Melbourne</span>
                <span className="stat-label">Service area (regional available)</span>
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
            <div className="polaroid-gallery">
              <div className="polaroid polaroid-1">
                <div className="polaroid-frame">
                  <img src="/assets/team-illustration.png" alt="The Pillars Therapy team sitting together" />
                  <span className="polaroid-caption">The team at Pillars Therapy</span>
                </div>
              </div>
              <div className="polaroid polaroid-2">
                <div className="polaroid-frame">
                  <img src="/assets/about-illustration-2.png" alt="Therapist chatting with a client" />
                  <span className="polaroid-caption">Laughing with Mary</span>
                </div>
              </div>
              <div className="polaroid polaroid-3">
                <div className="polaroid-frame">
                  <img src="/assets/about-illustration-3.png" alt="Laughing during a therapy session" />
                  <span className="polaroid-caption">Chatting with John</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
