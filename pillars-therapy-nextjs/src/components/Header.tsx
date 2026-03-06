'use client'

import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from '@/i18n/useTranslation'
import { useAccessibility } from '@/contexts/AccessibilityContext'
import AccessibilityPanel from './AccessibilityPanel'
import LanguageToggle from './LanguageToggle'

export default function Header() {
  const { t } = useTranslation()
  const { togglePanel } = useAccessibility()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function highlightNav() {
      const scrollY = window.scrollY + 120
      const sections = document.querySelectorAll('section[id]')
      let currentActive: string | null = null

      sections.forEach((section) => {
        const el = section as HTMLElement
        const top = el.offsetTop
        const height = el.offsetHeight
        const id = el.getAttribute('id')

        if (id && scrollY >= top && scrollY < top + height) {
          currentActive = id
        }
      })

      setActiveSection(currentActive)
    }

    window.addEventListener('scroll', highlightNav, { passive: true })
    highlightNav()
    return () => window.removeEventListener('scroll', highlightNav)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const navLinks = [
    { href: '#services', label: t.header.services },
    { href: '#ndis', label: t.header.ndis },
    { href: '#sah', label: t.header.supportAtHome },
    { href: '#about', label: t.header.about },
  ]

  return (
    <>
      <header className={`header${isScrolled ? ' scrolled' : ''}`} id="header">
        <div className="container header-inner">
          <a href="#" className="logo">
            <img src="/assets/PillarsTherapy_Logo_PositiveGrad.png" alt="Pillars Therapy" className="logo-img" />
          </a>
          <nav className={`nav${isMenuOpen ? ' open' : ''}`} id="nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link${activeSection === link.href.slice(1) ? ' active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary nav-cta" onClick={closeMenu}>
              {t.header.contactUs}
            </a>
          </nav>
          <div className="header-utils">
            <LanguageToggle />
            <button className="a11y-btn" onClick={togglePanel} aria-label={t.header.accessibility}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="4" r="2" />
                <path d="M4 7.5h10" />
                <path d="M9 7.5v4" />
                <path d="M6.5 16l2.5-4.5 2.5 4.5" />
              </svg>
            </button>
          </div>
          <button
            className={`menu-toggle${isMenuOpen ? ' active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <AccessibilityPanel />
    </>
  )
}
