import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (link) => {
    setActive(link)
    setMenuOpen(false)
    const el = document.getElementById(link.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Logo */}
        <a className="nav-logo" href="#home" onClick={() => handleNav('Home')}>
          <span className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="10" fill="url(#lg)" />
              <path d="M8 10h8a6 6 0 0 1 0 12H8V10z" fill="white" opacity="0.9"/>
              <circle cx="22" cy="22" r="3" fill="#00c2ff"/>
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32">
                  <stop stopColor="#1a56ff"/>
                  <stop offset="1" stopColor="#00c2ff"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="logo-text">Digi<span>Terabyte</span></span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map(link => (
            <li key={link}>
              <button
                className={`nav-link ${active === link ? 'active' : ''}`}
                onClick={() => handleNav(link)}
              >
                {link}
                <span className="nav-underline" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          className="nav-cta"
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav('Contact') }}
        >
          Let's Talk
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span/><span/><span/>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <button
            key={link}
            className={`mobile-link ${active === link ? 'active' : ''}`}
            onClick={() => handleNav(link)}
          >
            {link}
          </button>
        ))}
        <a
          className="mobile-cta"
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav('Contact') }}
        >
          Let's Talk →
        </a>
      </div>
    </nav>
  )
}