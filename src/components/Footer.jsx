import './Footer.css'

const quickLinks = ['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact']
const serviceLinks = [
  'Web Development',
  'Web Design / UI/UX',
  'Branding',
  'Digital Marketing',
  'Final Year Projects',
  'Inventory Management',
]
const socials = [
  { label: 'f', title: 'Facebook', href: '#' },
  { label: 'in', title: 'LinkedIn', href: '#' },
  { label: '𝕏', title: 'Twitter / X', href: '#' },
  { label: '▶', title: 'YouTube', href: '#' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id.toLowerCase())
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top wave divider */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0 60 C360 0 1080 0 1440 60 L1440 0 L0 0 Z" fill="#f0f4ff"/>
        </svg>
      </div>

      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="fl-icon">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="10" fill="url(#flg)" />
                <path d="M8 10h8a6 6 0 0 1 0 12H8V10z" fill="white" opacity="0.9"/>
                <circle cx="22" cy="22" r="3" fill="#00c2ff"/>
                <defs>
                  <linearGradient id="flg" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#1a56ff"/>
                    <stop offset="1" stopColor="#00c2ff"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            Digi<span>Terabyte</span>
          </div>
          <p className="footer-tagline">
            Crafting digital experiences with passion and precision.
            Your trusted partner for web, branding & business tools.
          </p>
          <div className="footer-socials">
            {socials.map(s => (
              <a key={s.title} href={s.href} className="fsocial-btn" title={s.title}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul>
            {quickLinks.map(l => (
              <li key={l}>
                <button className="footer-link" onClick={() => scrollTo(l)}>
                  <span className="fl-arrow">→</span> {l}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">Our Services</h4>
          <ul>
            {serviceLinks.map(s => (
              <li key={s}>
                <button className="footer-link" onClick={() => scrollTo('services')}>
                  <span className="fl-arrow">→</span> {s}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact Info</h4>
          <div className="footer-contact-list">
            <div className="fcontact-item">
              <span>✉️</span>
              <a href="mailto:contact@digiterabyte.com">contact@digiterabyte.com</a>
            </div>
            <div className="fcontact-item">
              <span>📞</span>
              <a href="tel:+15551234567">+91 7207584145</a>
            </div>
            <div className="fcontact-item">
              <span>🌐</span>
              <span>Remote &amp; Worldwide</span>
            </div>
            <div className="fcontact-item">
              <span>⏱️</span>
              <span>Response within 24 hrs</span>
            </div>
          </div>

          <div className="footer-cta-wrap">
            <button className="footer-cta" onClick={() => scrollTo('contact')}>
              Start a Project →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© 2026 Digi Terabyte. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="sep">·</span>
            <a href="#">Terms of Service</a>
            <span className="sep">·</span>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}