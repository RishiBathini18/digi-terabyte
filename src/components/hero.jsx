import './Hero.css'

const stats = [
  { value: '20+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '2+', label: 'Years Experience' },
  { value: '20+', label: 'Happy Clients' },
]

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero pt-24 md:pt-28" id="home">
      {/* Anim  ated background orbs */}
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-overlay" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="badge-dot" />
            <span>Powered by Innovation</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Crafting Digital<br />
            <span className="title-gradient">Experiences</span><br />
            with <span className="title-outline">Passion</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-sub animate-fade-up" style={{ animationDelay: '0.35s' }}>
            We build modern websites, branding systems, and digital tools
            that help businesses grow — from startups to enterprises.
          </p>

          {/* CTA row */}
          <div className="hero-cta-row animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <button className="cta-primary" onClick={() => scrollTo('contact')}>
              Let's Build Together
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="cta-secondary" onClick={() => scrollTo('portfolio')}>
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats animate-fade-up" style={{ animationDelay: '0.65s' }}>
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="visual-card main-card animate-float">
            <div className="card-header">
              <div className="card-dots">
                <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              </div>
              <span className="card-title-sm">Project Dashboard</span>
            </div>
            <div className="card-body">
              <div className="metric-row">
                <span className="metric-label">Active Projects</span>
                <span className="metric-val blue">8</span>
              </div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: '78%' }} /></div>
              <div className="metric-row">
                <span className="metric-label">Delivered</span>
                <span className="metric-val cyan">20+</span>
              </div>
              <div className="progress-bar"><div className="progress-fill cyan-fill" style={{ width: '92%' }} /></div>
              <div className="mini-chart">
                {[40, 65, 50, 80, 60, 90, 75, 95].map((h, i) => (
                  <div className="bar" key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Floating tags */}
          <div className="float-tag tag-1">
            <span>✓</span> Web Dev
          </div>
          <div className="float-tag tag-2">
            <span>🎓</span> Final Year Projects
          </div>
          <div className="float-tag tag-3">
            <span>📦</span> Inventory Tools
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-hint" onClick={() => scrollTo('about')}>
        <span>Scroll</span>
        <div className="scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M5 11l5 5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  )
}