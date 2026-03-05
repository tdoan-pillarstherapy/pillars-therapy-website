export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand-col">
            <span className="logo">
              <img src="/assets/PillarsTherapy_Logo_PositiveGrad.png" alt="Pillars Therapy" className="logo-img footer-logo-img" />
            </span>
            <p>Multidisciplinary allied health services delivered in your home across Metro Melbourne.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#ndis">NDIS Services</a></li>
              <li><a href="#sah">Support at Home</a></li>
              <li><a href="#services">All Services</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Disciplines</h4>
            <ul>
              <li><a href="#services">Occupational Therapy</a></li>
              <li><a href="#services">Osteopathy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:contact@pillarstherapy.com.au">contact@pillarstherapy.com.au</a></li>
              <li><a href="#contact">Send an Enquiry</a></li>
              <li>Servicing all of Metro Melbourne</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>ABN 56 454 434 878</p>
          <p>&copy; 2026 Pillars Therapy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
