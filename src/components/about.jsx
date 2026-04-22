import './About.css'

const features = [
  { icon: '⚡', title: 'Fast Delivery', desc: 'We ship projects on time, every time — with no compromise on quality.' },
  { icon: '🎨', title: 'Pixel Perfect Design', desc: 'Every interface is crafted with obsessive attention to detail.' },
  { icon: '🔒', title: 'Secure & Scalable', desc: 'Built on solid foundations that grow with your business.' },
  { icon: '🤝', title: 'Long-Term Partnership', desc: 'We don\'t just deliver — we stay by your side post-launch.' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        {/* Left: text */}
        <div className="about-text">
          <div className="section-tag">
            <span className="dot" />
            About Us
          </div>
          <h2 className="about-title">
            We Turn Vision Into
            <span className="highlight"> Powerful Digital</span> Reality
          </h2>
          <p className="about-desc">
            At Digi Terabyte, we're passionate about helping businesses and individuals
            thrive in the digital world. With expertise spanning web design, development,
            branding, and digital marketing — we create solutions that deliver real results.
          </p>
          <p className="about-desc">
            Our mission is to transform your ideas into a powerful online presence that
            drives growth, builds trust, and converts visitors into customers.
          </p>

          <div className="about-values">
            {features.map((f, i) => (
              <div className="value-item" key={i}>
                <div className="value-icon">{f.icon}</div>
                <div>
                  <div className="value-title">{f.title}</div>
                  <div className="value-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: visual */}
        <div className="about-visual">
          <div className="about-card-main">
            <div className="acm-header">
              <div className="acm-avatar">DT</div>
              <div>
                <div className="acm-name">Digi Terabyte</div>
                <div className="acm-role">Full-Service Digital Agency</div>
              </div>
              <div className="acm-badge">⭐ 5.0</div>
            </div>
            <div className="acm-skills">
              {['React', 'Next.js', 'Node.js', 'UI/UX', 'Branding', 'SEO', 'Python', 'Flutter'].map(s => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
            <div className="acm-stats">
              <div className="acm-stat">
                <span className="acm-stat-val">20+</span>
                <span className="acm-stat-l">Projects</span>
              </div>
              <div className="acm-divider" />
              <div className="acm-stat">
                <span className="acm-stat-val">2yr</span>
                <span className="acm-stat-l">Experience</span>
              </div>
              <div className="acm-divider" />
              <div className="acm-stat">
                <span className="acm-stat-val">20+</span>
                <span className="acm-stat-l">Clients</span>
              </div>
            </div>
          </div>

          <div className="about-badge-float badge-a">
            🚀 Startup Ready
          </div>
          <div className="about-badge-float badge-b">
            🎓 Academic Projects
          </div>
        </div>
      </div>
    </section>
  )
}