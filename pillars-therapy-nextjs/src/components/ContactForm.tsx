'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // For now, show a confirmation message
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="contact-form-wrapper">
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: '1rem', color: '#1a5c4c' }}>
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
            <path d="M16 24l6 6 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '0.5rem' }}>Thank you!</h3>
          <p style={{ color: '#5a5a72', lineHeight: 1.6 }}>Your enquiry has been received. We&apos;ll be in touch within 1&ndash;2 business days.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Your full name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="your@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="04XX XXX XXX" />
        </div>
        <div className="form-group">
          <label htmlFor="funding">Funding Type</label>
          <select id="funding" name="funding" defaultValue="">
            <option value="">Select your funding type</option>
            <option value="ndis-plan">NDIS - Plan Managed</option>
            <option value="ndis-self">NDIS - Self Managed</option>
            <option value="sah">Support at Home</option>
            <option value="private">Private</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="service">Service Needed</label>
          <select id="service" name="service" defaultValue="">
            <option value="">Select a service</option>
            <optgroup label="Occupational Therapy">
              <option value="driving">Driving Assessments</option>
              <option value="functional">Functional Assessments</option>
              <option value="home-mod">Home Modification Assessments</option>
              <option value="at">Assistive Technology Assessments</option>
              <option value="sda-sil">SDA/SIL Applications</option>
              <option value="wheelchair">Wheelchair Assessments</option>
            </optgroup>
            <optgroup label="Osteopathy">
              <option value="pain">Pain Management</option>
              <option value="exercise">Exercise Programs</option>
              <option value="chronic">Chronic Condition Management</option>
              <option value="falls">Falls Prevention</option>
            </optgroup>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} placeholder="Tell us a bit about what you need..."></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-full">Send Enquiry</button>
      </form>
    </div>
  )
}
