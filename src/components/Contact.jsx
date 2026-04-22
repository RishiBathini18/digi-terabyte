import { useState } from 'react'
import './Contact.css'

const services = [
  'Web Development', 'Web Design / UI/UX', 'Branding',
  'Digital Marketing', 'Final Year Project', 'Inventory Management', 'Other'
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', service: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        {/* Left */}
        <div className="contact-left">
          <div className="section-tag">
            <span className="dot" />
            Get In Touch
          </div>
          <h2 className="contact-title">
            Let's Build Something
            <span className="contact-accent"> Amazing Together</span>
          </h2>
          <p className="contact-desc">
            Have a project in mind? Need a final year project done right? Want a custom
            inventory tool? Reach out — we'd love to discuss your requirements.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <div className="info-label">Email Us</div>
                <a href="mailto:contact@digiterabyte.com" className="info-val">contact@digiterabyte.com</a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <div className="info-label">Call Us</div>
                <a href="tel:+15551234567" className="info-val">+1 (555) 123-4567</a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🌐</div>
              <div>
                <div className="info-label">Visit Us</div>
                <span className="info-val">Remote & Worldwide</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">⏱️</div>
              <div>
                <div className="info-label">Response Time</div>
                <span className="info-val">Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="social-row">
            {[
              { label: 'f', href: '#', title: 'Facebook' },
              { label: 'in', href: '#', title: 'LinkedIn' },
              { label: '𝕏', href: '#', title: 'Twitter' },
              { label: '▶', href: '#', title: 'YouTube' },
            ].map(s => (
              <a key={s.title} href={s.href} className="social-btn" title={s.title}>{s.label}</a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-right">
          {submitted ? (
            <div className="success-state">
              <div className="success-icon">🎉</div>
              <h3>Message Sent!</h3>
              <p>We'll get back to you within 24 hours. Thank you!</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <h3 className="form-title">Send a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handle}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handle}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Service Needed</label>
                <select name="service" value={form.service} onChange={handle}>
                  <option value="">Select a service...</option>
                  {services.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label>Your Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  placeholder="Tell us about your project, requirements, deadline..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                <span>Send Message</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 9h14M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}