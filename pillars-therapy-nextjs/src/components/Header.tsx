'use client'

import { useState, useEffect, useCallback } from 'react'

export default function Header() {
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
    { href: '#services', label: 'Services' },
    { href: '#ndis', label: 'NDIS' },
    { href: '#sah', label: 'Support at Home' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
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
            Get in Touch
          </a>
        </nav>
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
  )
}
