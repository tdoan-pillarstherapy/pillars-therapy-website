import Mailbox from './Mailbox'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">Get Started</span>
            <h2>Ready to begin?</h2>
            <p>Whether you&apos;re an NDIS participant, Support at Home client, or looking for private services, we&apos;re here to help. Reach out to book an assessment or ask a question.</p>
            <div className="contact-details">
              <div className="contact-row">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="16" height="12" rx="2" />
                  <path d="M2 6l8 5 8-5" />
                </svg>
                <a href="mailto:contact@pillarstherapy.com.au">contact@pillarstherapy.com.au</a>
              </div>
              <div className="contact-row">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="10" cy="8" r="3" />
                  <path d="M10 18s-7-5.75-7-10a7 7 0 0114 0c0 4.25-7 10-7 10z" />
                </svg>
                <span>Servicing all of Metro Melbourne</span>
              </div>
            </div>
          </div>
          <Mailbox />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
