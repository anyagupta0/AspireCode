import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../new-cards.css';

const socials = [
  { icon: <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, name: 'LinkedIn',    handle: '@AspireCode', desc: 'Connect with us professionally',    href: 'https://linkedin.com' },
  { icon: '𝕏',   name: 'X / Twitter', handle: '@AspireCode', desc: 'Follow us for industry insights',  href: 'https://twitter.com' },
  { icon: <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,  name: 'Instagram',  handle: '@AspireCode', desc: 'Behind the scenes & culture',      href: 'https://instagram.com' },
  { icon: '💻',  name: 'GitHub',     handle: 'AspireCode',  desc: 'Explore our open-source work',     href: 'https://github.com' },
];

const team = [
  { name: 'Arjun Sharma',  role: 'Founder & CEO',         emoji: '👨‍💼' },
  { name: 'Priya Mehta',   role: 'Head of Staffing',       emoji: '👩‍💼' },
  { name: 'Rahul Gupta',   role: 'CTO',                    emoji: '👨‍💻' },
  { name: 'Sneha Patel',   role: 'Head of SEO & Growth',   emoji: '👩‍💻' },
  { name: 'Dev Nair',      role: 'Lead Project Manager',   emoji: '👨‍🎯' },
  { name: 'Anika Singh',   role: 'HR Director',            emoji: '👩‍🎓' },
];

const contactDetails = [
  { icon: '📧', label: 'Email Us',       value: 'hello@aspirecode.in' },
  { icon: '📞', label: 'Call Us',        value: '+91 98765 43210' },
  { icon: '📍', label: 'Our Office',     value: 'Bangalore, Karnataka, India' },
  { icon: '⏰', label: 'Working Hours',  value: 'Mon–Sat, 9:00 AM – 7:00 PM IST' },
];

export default function About() {
  const addRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us — AspireCode';
  }, []);

  const handleChange = e => setFormData(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    // Simulate API delay
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero" aria-label="About page hero">
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

      {/* ── WHO WE ARE ── */}
      <section className="section" aria-label="Who we are">
        <div className="container">
          <div className="about-hero-layout">
            <div
              className="about-hero-img animate-float fade-in-section fade-left"
              ref={addRef}
              data-delay="0"
            >
              <img src="/about-pro.png" alt="AspireCode professional team" />
            </div>

            <div className="about-hero-text fade-in-section fade-right" ref={addRef} data-delay="100">
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">
                Bridging Talent &amp;{' '}
                <span className="gradient-text">Technology</span>
              </h2>
              <p>
                Founded with a singular mission — to help businesses grow by connecting them with the right people and the right technology — AspireCode has grown into a full-service project management, staffing, and digital solutions company.
              </p>
              <p>
                Over the years, we have placed 500+ professionals across India's top companies, delivered 120+ technology projects, and served clients across FinTech, HealthTech, E-commerce, and more.
              </p>
              <p>
                Our team of 50+ industry veterans brings deep expertise in recruitment, HR, software engineering, SEO, and SaaS development — ensuring you always get the best of both worlds.
              </p>
            </div>
          </div>

          {/* Values */}
          <div style={{ marginTop: 80 }}>
            <div className="fade-in-section" ref={addRef} style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="section-tag">Our Foundation</span>
              <h2 className="section-title">What Drives <span className="gradient-text">Us</span></h2>
            </div>
            <div className="about-values-grid stagger-children" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
              {[
                { icon: '🎯', title: 'Our Mission', desc: 'To empower businesses through exceptional talent placement and innovative technology solutions, creating lasting impact.' },
                { icon: '🌟', title: 'Our Vision', desc: 'To be South Asia\'s most trusted staffing and technology partner, known for integrity, speed, and results.' },
                { icon: '💎', title: 'Our Values', desc: 'Transparency, excellence, collaboration, and a relentless commitment to client success define everything we do.' },
                { icon: '🚀', title: 'Our Approach', desc: 'Data-driven, people-first. We combine smart technology with human insight to deliver outcomes that matter.' },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="card fade-in-section"
                  ref={addRef}
                  data-delay={`${i * 80}`}
                >
                  <div className="sazzad-card">
                    <div className="sazzad-bg"></div>
                    <div className="sazzad-aurora"></div>
                    <div style={{ position: 'relative', zIndex: 3, padding: '24px', width: '100%' }}>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#333' }}>
                        <span aria-hidden="true" style={{ marginRight: '8px' }}>{item.icon}</span>
                        {item.title}
                      </h3>
                      <p className="small" style={{ color: '#666' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section
        className="section bg-hex"
        aria-label="Leadership team"
        style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      >
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

          <div
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}
            className="stagger-children"
          >
            {team.map((member, i) => (
              <div
                key={member.name}
                className="card fade-in-section"
                ref={addRef}
                data-delay={`${i * 70}`}
              >
                <div className="sazzad-card" style={{ textAlign: 'center' }}>
                  <div className="sazzad-bg"></div>
                  <div className="sazzad-aurora"></div>
                  <div style={{ position: 'relative', zIndex: 3, padding: '24px', width: '100%' }}>
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        background: 'rgba(71,176,199,0.10)',
                        border: '2px solid rgba(71,176,199,0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.2rem',
                        margin: '0 auto 16px',
                      }}
                      aria-hidden="true"
                    >
                      {member.emoji}
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 6, color: '#333' }}>
                      {member.name}
                    </h3>
                    <p className="small" style={{ fontWeight: 600, color: '#666' }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIALS ── */}
      <section className="section socials-section section-with-pattern" aria-label="Follow us on social media">
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

          <div className="socials-grid stagger-children" style={{ marginTop: 48, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
            {socials.map((s, i) => (
              <div
                key={s.name}
                className="card fade-in-section"
                ref={addRef}
                data-delay={`${i * 80}`}
              >
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sazzad-card"
                  aria-label={`Visit AspireCode on ${s.name}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="sazzad-bg"></div>
                  <div className="sazzad-aurora"></div>
                  <div style={{ position: 'relative', zIndex: 3, padding: '24px', width: '100%' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#333' }}>
                      <span aria-hidden="true" style={{ marginRight: '8px' }}>{s.icon}</span>
                      {s.name}
                    </h3>
                    <p style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 4, color: '#444' }}>
                      {s.handle}
                    </p>
                    <p className="small" style={{ color: '#666' }}>{s.desc}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        className="section section-stripe"
        aria-label="Contact us"
        style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}
      >
        <div className="container">
          <div className="contact-layout">
            {/* Contact Info */}
            <div className="contact-info fade-in-section fade-left" ref={addRef} data-delay="0">
              <span className="section-tag">Get In Touch</span>
              <h2>
                Let's <span className="gradient-text">Start a Conversation</span>
              </h2>
              <p>
                Whether you need to hire talent, build a product, or explore a partnership — we'd love to hear from you. Reach out and let's make it happen.
              </p>

              {contactDetails.map(d => (
                <div key={d.label} className="contact-detail">
                  <div className="contact-detail-icon" aria-hidden="true">{d.icon}</div>
                  <div className="contact-detail-text">
                    <h4>{d.label}</h4>
                    <p>{d.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="fade-in-section fade-right" ref={addRef} data-delay="120">
              {submitted ? (
                <div className="glass-card" style={{ padding: 60, textAlign: 'center' }}>
                  <span style={{ fontSize: '4rem', display: 'block', marginBottom: 20, animation: 'bounceIn 0.5s var(--ease-spring) both' }}>
                    ✅
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: 12, color: 'var(--primary)' }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: 32 }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  className="glass-card contact-form"
                  onSubmit={handleSubmit}
                  aria-label="Contact form"
                  noValidate
                >
                  <h3>Send Us a Message</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name <span style={{ color: 'var(--secondary)' }}>*</span></label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address <span style={{ color: 'var(--secondary)' }}>*</span></label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service...</option>
                        <option>Permanent Staffing</option>
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
                    <label htmlFor="message">Your Message <span style={{ color: 'var(--secondary)' }}>*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary form-submit-btn"
                    disabled={sending}
                    style={{ opacity: sending ? 0.8 : 1 }}
                  >
                    {sending ? 'Sending…' : 'Send Message 🚀'}
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
