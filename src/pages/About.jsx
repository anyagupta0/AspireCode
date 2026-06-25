import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const socials = [
  { icon: '🔗', name: 'LinkedIn', handle: '@AspireCode', desc: 'Connect with us professionally', href: 'https://linkedin.com' },
  { icon: '𝕏', name: 'X / Twitter', handle: '@AspireCode', desc: 'Follow us for industry insights', href: 'https://twitter.com' },
  { icon: '📸', name: 'Instagram', handle: '@AspireCode', desc: 'Behind the scenes & culture', href: 'https://instagram.com' },
  { icon: '💻', name: 'GitHub', handle: 'AspireCode', desc: 'Explore our open-source work', href: 'https://github.com' },
];

const team = [
  { name: 'Arjun Sharma', role: 'Founder & CEO', emoji: '👨‍💼' },
  { name: 'Priya Mehta', role: 'Head of Staffing', emoji: '👩‍💼' },
  { name: 'Rahul Gupta', role: 'CTO', emoji: '👨‍💻' },
  { name: 'Sneha Patel', role: 'Head of SEO & Growth', emoji: '👩‍💻' },
  { name: 'Dev Nair', role: 'Lead Project Manager', emoji: '👨‍🎯' },
  { name: 'Anika Singh', role: 'HR Director', emoji: '👩‍🎓' },
];

export default function About() {
  const addRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us — AspireCode';
  }, []);

  const handleChange = e => setFormData(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-orb" />
        <div className="container">
          <div className="page-hero-content">
            <span className="section-tag">Our Story</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: 20 }}>
              About <span className="gradient-text">AspireCode</span>
            </h1>
            <p className="section-subtitle">
              We started as a staffing firm with a vision — to become the most trusted partner for talent and technology.
            </p>
          </div>
        </div>
      </section>

      {/* About Hero */}
      <section className="section">
        <div className="container">
          <div className="about-hero-layout fade-in-section" ref={addRef}>
            <div className="about-hero-img animate-float">
              <img src="/team.png" alt="AspireCode Team" />
            </div>
            <div>
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">
                Bridging Talent &{' '}
                <span className="gradient-text">Technology</span>
              </h2>
              <p style={{ color: 'var(--white-muted)', lineHeight: 1.8, marginBottom: 20, fontSize: '0.95rem' }}>
                Founded with a singular mission — to help businesses grow by connecting them with the right people and the right technology — AspireCode has grown into a full-service project management, staffing, and digital solutions company.
              </p>
              <p style={{ color: 'var(--white-muted)', lineHeight: 1.8, marginBottom: 20, fontSize: '0.95rem' }}>
                Over the years, we have placed 500+ professionals across India's top companies, delivered 120+ technology projects, and served clients across FinTech, HealthTech, E-commerce, and more.
              </p>
              <p style={{ color: 'var(--white-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Our team of 50+ industry veterans brings deep expertise in recruitment, HR, software engineering, SEO, and SaaS development — ensuring you always get the best of both worlds.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="about-values-grid" style={{ marginTop: 72 }}>
            {[
              { icon: '🎯', title: 'Our Mission', desc: 'To empower businesses through exceptional talent placement and innovative technology solutions, creating lasting impact.' },
              { icon: '🌟', title: 'Our Vision', desc: 'To be South Asia\'s most trusted staffing and technology partner, known for integrity, speed, and results.' },
              { icon: '💎', title: 'Our Values', desc: 'Transparency, excellence, collaboration, and a relentless commitment to client success define everything we do.' },
              { icon: '🚀', title: 'Our Approach', desc: 'Data-driven, people-first. We combine smart technology with human insight to deliver outcomes that matter.' },
            ].map(item => (
              <div key={item.title} className="glass-card value-card fade-in-section" ref={addRef}>
                <div className="value-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="fade-in-section" ref={addRef} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Passionate professionals dedicated to delivering excellence every day.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 24 }}>
            {team.map(member => (
              <div key={member.name} className="glass-card fade-in-section" ref={addRef} style={{ padding: 32, textAlign: 'center' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>{member.emoji}</div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, marginBottom: 6 }}>{member.name}</h4>
                <p style={{ color: 'var(--cyan)', fontSize: '0.82rem', fontWeight: 600 }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Socials */}
      <section className="section socials-section">
        <div className="container">
          <div className="fade-in-section" ref={addRef} style={{ textAlign: 'center' }}>
            <span className="section-tag">Stay Connected</span>
            <h2 className="section-title">
              Follow Us <span className="gradient-text">Everywhere</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Join our growing community across social platforms for insights, updates, and opportunities.
            </p>
          </div>
          <div className="socials-grid">
            {socials.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="glass-card social-card fade-in-section" ref={addRef}>
                <span className="social-icon">{s.icon}</span>
                <h4>{s.name}</h4>
                <p style={{ color: 'var(--violet-light)', fontWeight: 600, fontSize: '0.82rem', marginBottom: 4 }}>{s.handle}</p>
                <p>{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Messaging */}
      <section className="section" style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="contact-layout">
            {/* Info */}
            <div className="contact-info fade-in-section" ref={addRef}>
              <span className="section-tag">Get In Touch</span>
              <h2>Let's <span className="gradient-text">Start a Conversation</span></h2>
              <p>Whether you need to hire talent, build a product, or explore a partnership — we'd love to hear from you. Reach out and let's make it happen.</p>

              {[
                { icon: '📧', label: 'Email Us', value: 'hello@aspirecode.in' },
                { icon: '📞', label: 'Call Us', value: '+91 98765 43210' },
                { icon: '📍', label: 'Our Office', value: 'Bangalore, Karnataka, India' },
                { icon: '⏰', label: 'Working Hours', value: 'Mon–Sat, 9:00 AM – 7:00 PM IST' },
              ].map(d => (
                <div key={d.label} className="contact-detail">
                  <div className="contact-detail-icon">{d.icon}</div>
                  <div className="contact-detail-text">
                    <h4>{d.label}</h4>
                    <p>{d.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="fade-in-section" ref={addRef}>
              {submitted ? (
                <div className="glass-card" style={{ padding: 60, textAlign: 'center' }}>
                  <div style={{ fontSize: '4rem', marginBottom: 20 }}>✅</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: 'var(--white-muted)' }}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button className="btn btn-primary" style={{ marginTop: 28 }} onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="glass-card contact-form" onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: 28 }}>Send Us a Message</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Interested In</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        <option>Permanent Staffing</option>
                        <option>Contractual Hiring</option>
                        <option>Contract-to-Hire (C2H)</option>
                        <option>HR Services</option>
                        <option>Payroll Management</option>
                        <option>Web Development</option>
                        <option>SEO Services</option>
                        <option>SaaS Projects</option>
                        <option>Project Management</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea id="message" name="message" placeholder="Tell us about your requirements..." value={formData.message} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="btn btn-primary form-submit-btn">
                    Send Message 🚀
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
