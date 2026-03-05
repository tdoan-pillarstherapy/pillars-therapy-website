import PictureFrame from './PictureFrame'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-tag">Occupational Therapy &amp; Osteopathy</span>
          <h1>Allied health that meets you where you <em>are</em></h1>
          <p className="hero-subtitle">Multidisciplinary rehabilitation services delivered in your home and via Telehealth across Metro Melbourne. Regional areas available at an additional travel cost. Supporting NDIS participants, Support at Home clients, and private individuals.</p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary btn-lg">Our Services</a>
            <a href="#contact" className="btn btn-outline btn-lg">Get in Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
          <PictureFrame />
        </div>
      </div>
    </section>
  )
}
