'use client'

import { useState, FormEvent } from 'react'
import { useTranslation } from '@/i18n/useTranslation'

export default function ContactForm() {
  const { t } = useTranslation()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      funding: formData.get('funding') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.error || t.contactForm.errorGeneric)
        return
      }

      setIsSubmitted(true)
    } catch {
      setError(t.contactForm.errorConnection)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="contact-form-wrapper">
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: '1rem', color: '#1a5c4c' }}>
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
            <path d="M16 24l6 6 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '0.5rem' }}>{t.contactForm.thankYouTitle}</h3>
          <p style={{ color: '#5a5a72', lineHeight: 1.6 }}>{t.contactForm.thankYouMessage}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{t.contactForm.nameLabel}</label>
          <input type="text" id="name" name="name" required placeholder={t.contactForm.namePlaceholder} />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t.contactForm.emailLabel}</label>
          <input type="email" id="email" name="email" required placeholder={t.contactForm.emailPlaceholder} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">{t.contactForm.phoneLabel}</label>
          <input type="tel" id="phone" name="phone" placeholder={t.contactForm.phonePlaceholder} />
        </div>
        <div className="form-group">
          <label htmlFor="funding">{t.contactForm.fundingLabel}</label>
          <select id="funding" name="funding" defaultValue="">
            <option value="">{t.contactForm.fundingPlaceholder}</option>
            <option value="ndis-plan">{t.contactForm.fundingOptions['ndis-plan']}</option>
            <option value="ndis-self">{t.contactForm.fundingOptions['ndis-self']}</option>
            <option value="sah">{t.contactForm.fundingOptions['sah']}</option>
            <option value="private">{t.contactForm.fundingOptions['private']}</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="service">{t.contactForm.serviceLabel}</label>
          <select id="service" name="service" defaultValue="">
            <option value="">{t.contactForm.servicePlaceholder}</option>
            <optgroup label={t.contactForm.otGroup}>
              <option value="driving">{t.contactForm.serviceOptions['driving']}</option>
              <option value="functional">{t.contactForm.serviceOptions['functional']}</option>
              <option value="home-mod">{t.contactForm.serviceOptions['home-mod']}</option>
              <option value="at">{t.contactForm.serviceOptions['at']}</option>
              <option value="sda-sil">{t.contactForm.serviceOptions['sda-sil']}</option>
              <option value="wheelchair">{t.contactForm.serviceOptions['wheelchair']}</option>
            </optgroup>
            <optgroup label={t.contactForm.osteoGroup}>
              <option value="pain">{t.contactForm.serviceOptions['pain']}</option>
              <option value="exercise">{t.contactForm.serviceOptions['exercise']}</option>
              <option value="chronic">{t.contactForm.serviceOptions['chronic']}</option>
              <option value="falls">{t.contactForm.serviceOptions['falls']}</option>
            </optgroup>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">{t.contactForm.messageLabel}</label>
          <textarea id="message" name="message" rows={4} placeholder={t.contactForm.messagePlaceholder}></textarea>
        </div>

        {error && (
          <div style={{
            background: '#fff5f5',
            border: '1px solid #ffcdd2',
            borderRadius: '8px',
            padding: '12px 16px',
            marginBottom: '16px',
            color: '#c62828',
            fontSize: '0.9rem',
            lineHeight: 1.5,
          }}>
            {error}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary btn-lg btn-full"
          disabled={isLoading}
          style={isLoading ? { opacity: 0.7, cursor: 'not-allowed' } : undefined}
        >
          {isLoading ? t.contactForm.submitting : t.contactForm.submit}
        </button>
      </form>
    </div>
  )
}
