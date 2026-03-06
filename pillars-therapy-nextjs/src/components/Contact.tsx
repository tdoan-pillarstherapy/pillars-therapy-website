'use client'

import { useTranslation } from '@/i18n/useTranslation'
import Mailbox from './Mailbox'
import ContactForm from './ContactForm'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">{t.contact.tag}</span>
            <h2>{t.contact.heading}</h2>
            <p>{t.contact.description}</p>
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
                <span>{t.contact.serviceArea}</span>
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
