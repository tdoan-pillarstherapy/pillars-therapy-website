'use client'

import { useEffect } from 'react'

export default function FadeInInitializer() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.pathway-card, .discipline-card, .service-item, .polaroid, .about-content, .contact-info, .contact-form-wrapper'
    )

    elements.forEach((el) => el.classList.add('fade-in'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
