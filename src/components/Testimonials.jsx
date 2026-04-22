import './Testimonials.css'

const testimonials = [
  {
    quote: 'Digi Terabyte transformed our online presence. Their attention to detail and creativity far exceeded our expectations!',
    name: 'Jaskirat Singh',
    role: 'CEO, TechStart',
    avatar: 'SJ',
    rating: 5,
    color: '#1a56ff',
  },
  {
    quote: 'Professional, responsive, and innovative. They delivered exactly what we needed and more. The final year project support was phenomenal.',
    name: 'Sakshi singh',
    role: 'Founder, Creative Studio',
    avatar: 'MC',
    rating: 5,
    color: '#7c3aed',
  },
  {
    quote: 'Working with Digi Terabyte was seamless. They understood our vision and brought it to life beautifully. Highly recommended!',
    name: 'Sara Arjun',
    role: 'Marketing Director',
    avatar: 'ER',
    rating: 5,
    color: '#059669',
  },
  {
    quote: 'Their inventory management system saved us countless hours. The real-time reports and alerts are a game changer for our business.',
    name: 'Rajesh Kumar',
    role: 'Owner, RetailMax',
    avatar: 'RK',
    rating: 5,
    color: '#d97706',
  },
  {
    quote: 'Got my B.Tech final year project done brilliantly — well-documented, well-coded, and I scored distinction. Truly grateful!',
    name: 'Priya Sharma',
    role: 'B.Tech Student, VIT',
    avatar: 'PS',
    rating: 5,
    color: '#0891b2',
  },
  {
    quote: 'Exceptional branding work. Our new identity stands out and clients instantly recognize the quality. Worth every rupee!',
    name: 'Amit yadav',
    role: 'MD, FinanceFlow',
    avatar: 'AP',
    rating: 5,
    color: '#dc2626',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="test-inner">
        <div className="section-head">
          <div className="section-tag">
            <span className="dot" />
            Client Stories
          </div>
          <h2 className="section-title">
            What Clients <span className="title-accent">Say</span>
          </h2>
          <p className="section-sub">
            Trusted by businesses, students, and entrepreneurs across India and worldwide.
          </p>
        </div>

        <div className="test-grid">
          {testimonials.map((t, i) => (
            <div className="test-card" key={i} style={{ '--tc': t.color, animationDelay: `${i * 0.1}s` }}>
              <div className="test-stars">
                {'★'.repeat(t.rating)}
              </div>
              <blockquote className="test-quote">"{t.quote}"</blockquote>
              <div className="test-author">
                <div className="test-avatar" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="test-name">{t.name}</div>
                  <div className="test-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="trust-bar">
          <div className="trust-item">
            <span className="trust-val">20+</span>
            <span className="trust-l">Happy Clients</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-val">98%</span>
            <span className="trust-l">Satisfaction Rate</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-val">2+</span>
            <span className="trust-l">Years in Business</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-val">4.9★</span>
            <span className="trust-l">Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}