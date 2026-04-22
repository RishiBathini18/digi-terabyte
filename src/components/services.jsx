import { useState } from 'react'
import './Services.css'

const services = [
  {
    id: 'web-dev',
    icon: '💻',
    tag: 'Development',
    title: 'Web Development',
    desc: 'Custom websites & web apps built with modern technologies — React, Next.js, Node.js — for optimal performance and seamless user experience.',
    features: ['React / Next.js', 'REST & GraphQL APIs', 'Database Design', 'Cloud Deployment'],
    color: '#1a56ff',
    gradient: 'linear-gradient(135deg, #1a56ff22, #00c2ff11)',
  },
  {
    id: 'web-design',
    icon: '🎨',
    tag: 'Design',
    title: 'Web Design & UI/UX',
    desc: 'Beautiful, intuitive interfaces crafted in Figma and brought to life with pixel-perfect precision that captivates users and drives engagement.',
    features: ['Figma Prototypes', 'Responsive Design', 'Design Systems', 'Accessibility'],
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #7c3aed22, #a855f711)',
  },
  {
    id: 'branding',
    icon: '✨',
    tag: 'Brand Identity',
    title: 'Branding',
    desc: 'Unique brand identities — logo, color palette, typography, and brand guidelines — that tell your story and resonate with your target market.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Assets'],
    color: '#059669',
    gradient: 'linear-gradient(135deg, #05966922, #34d39911)',
  },
  {
    id: 'digital-marketing',
    icon: '📈',
    tag: 'Marketing',
    title: 'Digital Marketing',
    desc: 'Strategic campaigns — SEO, social media, email, and PPC — that boost visibility, drive qualified traffic, and convert leads into customers.',
    features: ['SEO Optimization', 'Social Media Ads', 'Email Campaigns', 'Analytics & Reporting'],
    color: '#d97706',
    gradient: 'linear-gradient(135deg, #d9770622, #f59e0b11)',
  },
  {
    id: 'final-year',
    icon: '🎓',
    tag: 'Academic',
    title: 'Final Year Projects',
    desc: 'End-to-end support for B.Tech / MCA / BCA / B.sc final year projects — ideation, development, documentation, and presentation-ready deliverables.',
    features: ['Project Ideation', 'Full-Stack Development', 'Documentation & Reports', 'Presentation & Viva Support'],
    color: '#0891b2',
    gradient: 'linear-gradient(135deg, #0891b222, #06b6d411)',
    badge: '🆕 New',
  },
  {
    id: 'inventory',
    icon: '📦',
    tag: 'Business Tool',
    title: 'Inventory Management',
    desc: 'Custom inventory management systems for businesses — track stock, manage orders, generate reports, and keep operations running smoothly.',
    features: ['Stock Tracking', 'Purchase & Sales Orders', 'Real-Time Reports & Alerts', 'Multi-User Access Control'],
    color: '#dc2626',
    gradient: 'linear-gradient(135deg, #dc262622, #ef444411)',
    badge: '🆕 New',
  },
]

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="section-head">
          <div className="section-tag">
            <span className="dot" />
            What We Do
          </div>
          <h2 className="section-title">
            Comprehensive Digital
            <span className="title-accent"> Solutions</span>
          </h2>
          <p className="section-sub">
            From cutting-edge web apps to academic projects and business automation tools —
            we cover every dimension of your digital needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              className={`service-card ${active === s.id ? 'expanded' : ''}`}
              key={s.id}
              style={{ '--card-gradient': s.gradient, '--card-color': s.color, animationDelay: `${i * 0.08}s` }}
              onMouseEnter={() => setActive(s.id)}
              onMouseLeave={() => setActive(null)}
            >
              {s.badge && <span className="service-badge">{s.badge}</span>}

              <div className="service-icon-wrap">
                <span className="service-icon">{s.icon}</span>
              </div>

              <div className="service-tag-sm">{s.tag}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>

              <ul className="service-features">
                {s.features.map(f => (
                  <li key={f}>
                    <span className="check-icon">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="service-cta">
                <a href="#contact" className="service-link">
                  Get Started
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              <div className="card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}