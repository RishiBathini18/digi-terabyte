import { useState } from 'react'
import './Portfolio.css'

const categories = ['All', 'Web Dev', 'Design', 'Branding', 'Academic', 'Business']

const projects = [
  {
    title: 'E-Commerce Platform',
    cat: 'Web Dev',
    desc: 'Full-stack shopping platform with payments, inventory, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: '#1a56ff',
    emoji: '🛒',
  },
  {
    title: 'Corporate Website',
    cat: 'Design',
    desc: 'Award-winning corporate site with complex animations and CMS integration.',
    tech: ['Next.js', 'GSAP', 'Sanity'],
    color: '#7c3aed',
    emoji: '🏢',
  },
  {
    title: 'Mobile App UI',
    cat: 'Design',
    desc: 'iOS & Android app with fluid animations and dark/light mode support.',
    tech: ['Figma', 'Flutter', 'Firebase'],
    color: '#06b6d4',
    emoji: '📱',
  },
  {
    title: 'Creative Portfolio',
    cat: 'Branding',
    desc: 'Complete brand identity with logo, typography system, and brand guidelines.',
    tech: ['Illustrator', 'Brand Guide', 'Print'],
    color: '#059669',
    emoji: '🎨',
  },
  {
    title: 'Smart Attendance System',
    cat: 'Academic',
    desc: 'Final year B.Tech project — face-recognition based attendance with ML backend.',
    tech: ['Python', 'OpenCV', 'Flask', 'React'],
    color: '#0891b2',
    emoji: '🎓',
  },
  {
    title: 'Hospital Management System',
    cat: 'Academic',
    desc: 'MCA final year project — patient records, appointments, billing, and pharmacy modules.',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    color: '#dc2626',
    emoji: '🏥',
  },
  {
    title: 'Retail Inventory Dashboard',
    cat: 'Business',
    desc: 'Real-time inventory tool for a retail chain with stock alerts and sales analytics.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    color: '#d97706',
    emoji: '📦',
  },
  {
    title: 'Restaurant POS & Inventory',
    cat: 'Business',
    desc: 'Point-of-sale system with live inventory tracking for a restaurant franchise.',
    tech: ['Vue.js', 'Express', 'MongoDB'],
    color: '#e11d48',
    emoji: '🍽️',
  },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.cat === filter)

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-inner">
        <div className="section-head">
          <div className="section-tag">
            <span className="dot" />
            Our Work
          </div>
          <h2 className="section-title dark">
            Projects We're <span className="title-accent-dark">Proud Of</span>
          </h2>
          <p className="section-sub dark">
            From e-commerce platforms to academic capstone projects and business automation tools.
          </p>
        </div>

        {/* Filters */}
        <div className="portfolio-filters">
          {categories.map(c => (
            <button
              key={c}
              className={`filter-btn ${filter === c ? 'active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio-grid">
          {filtered.map((p, i) => (
            <div className="portfolio-card" key={p.title} style={{ '--pc': p.color, animationDelay: `${i * 0.07}s` }}>
              <div className="pc-thumb">
                <div className="pc-emoji">{p.emoji}</div>
                <div className="pc-glow" />
              </div>
              <div className="pc-body">
                <span className="pc-cat">{p.cat}</span>
                <h3 className="pc-title">{p.title}</h3>
                <p className="pc-desc">{p.desc}</p>
                <div className="pc-tech">
                  {p.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}