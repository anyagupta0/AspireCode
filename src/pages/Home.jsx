import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const services = [
  { icon: '👥', title: 'Permanent Staffing', desc: 'We connect top talent with forward-thinking companies for lasting career opportunities.' },
  { icon: '📝', title: 'Contractual Hiring', desc: 'Flexible workforce solutions to scale your team on-demand without long-term commitments.' },
  { icon: '🔄', title: 'Contract-to-Hire (C2H)', desc: 'Evaluate candidates on the job before making a permanent hiring commitment.' },
  { icon: '🏢', title: 'HR Services', desc: 'End-to-end human resource management, compliance, and strategic HR consulting.' },
  { icon: '💰', title: 'Payroll Management', desc: 'Accurate, timely, and compliant payroll processing so you can focus on growth.' },
  { icon: '🌐', title: 'Web Development', desc: 'Stunning, performant websites and web applications built with modern technologies.' },
  { icon: '📈', title: 'SEO Services', desc: 'Data-driven SEO strategies that boost visibility, traffic, and revenue.' },
  { icon: '☁️', title: 'SaaS Projects', desc: 'Custom SaaS platform development from concept to scalable cloud deployment.' },
];

const technologies = [
  { icon: '⚛️', name: 'React' },
  { icon: '🟩', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '🐘', name: 'PostgreSQL' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🐳', name: 'Docker' },
  { icon: '🔷', name: 'TypeScript' },
  { icon: '⚡', name: 'Next.js' },
  { icon: '🎨', name: 'Figma' },
  { icon: '🔍', name: 'GraphQL' },
  { icon: '🚀', name: 'Redis' },
];

export default function Home() {
  const addRef = useScrollReveal();

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-orb-1" aria-hidden="true" />
        <div className="hero-orb-2" aria-hidden="true" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Trusted Staffing & Technology Partner</div>
            <h1 className="hero-title gradient-text">AspireCode</h1>
            <p className="hero-tagline">
              Aspire Beyond Limits —<br />
              <span className="gradient-text">Talent. Technology. Transformation.</span>
            </p>
            <p className="hero-desc">
              We are a premier project management and staffing agency delivering permanent staffing,
              contractual hiring, C2H, HR services, payroll solutions, web development, SEO,
              and SaaS projects — all under one roof.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">Explore Services</Link>
              <Link to="/about" className="btn btn-outline">Learn About Us</Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Placements Made</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">120+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="section about-strip" id="about-strip">
        <div className="container">
          <div className="about-strip-inner">
            <div className="about-strip-img animate-float" ref={addRef}>
              <img src="/team.png" alt="AspireCode Team" />
            </div>
            <div className="about-strip-text" ref={addRef ? el => addRef(el) : undefined}>
              <div className="fade-in-section" ref={addRef}>
                <span className="section-tag">About Us</span>
                <h2 className="section-title">
                  Your Growth Is Our{' '}
                  <span className="gradient-text">Mission</span>
                </h2>
                <p className="section-subtitle">
                  AspireCode bridges the gap between exceptional talent and innovative companies.
                  From sourcing the right hire to delivering world-class technology solutions,
                  we are your end-to-end partner in growth.
                </p>
                <div className="values-list">
                  {['Innovation First', 'Client-Centric', 'Agile Delivery', 'Transparent Process', 'Global Reach', 'Proven Results'].map(v => (
                    <span key={v} className="value-chip">{v}</span>
                  ))}
                </div>
                <div style={{ marginTop: 32 }}>
                  <Link to="/about" className="btn btn-primary">Our Story →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" id="services">
        <div className="container">
          <div className="fade-in-section" ref={addRef} style={{ textAlign: 'center' }}>
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">
              Comprehensive <span className="gradient-text">Services</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              From talent acquisition to technology delivery — we cover every angle of your business growth.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.title} className="glass-card service-card fade-in-section" ref={addRef} style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/services" className="btn btn-primary">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO STRIP ── */}
      <section className="section" id="portfolio-strip" style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="fade-in-section" ref={addRef} style={{ textAlign: 'center' }}>
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A glimpse of the impactful projects we have delivered for clients worldwide.
            </p>
          </div>
          <div className="portfolio-grid">
            {[
              { img: '/portfolio1.png', title: 'Enterprise Dashboard Platform', desc: 'End-to-end web app for project tracking, analytics, and team management built for scale.', tags: ['React', 'Node.js', 'PostgreSQL'] },
              { img: '/portfolio2.png', title: 'SEO & Growth Campaign', desc: 'Drove 340% organic traffic increase through technical SEO, content strategy, and backlink architecture.', tags: ['SEO', 'Analytics', 'Content'] },
              { img: '/portfolio3.png', title: 'SaaS HR Platform', desc: 'A full-featured HR SaaS solution with payroll, attendance, onboarding, and compliance modules.', tags: ['SaaS', 'React', 'AWS'] },
            ].map((p, i) => (
              <div key={i} className="glass-card portfolio-card fade-in-section" ref={addRef}>
                <div className="portfolio-img-wrap">
                  <img src={p.img} alt={p.title} />
                  <div className="portfolio-overlay">
                    <Link to="/portfolio" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>View Project</Link>
                  </div>
                </div>
                <div className="portfolio-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="tech-tags">
                    {p.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/portfolio" className="btn btn-outline">See All Projects →</Link>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ── */}
      <section className="section" id="technologies">
        <div className="container">
          <div className="fade-in-section" ref={addRef} style={{ textAlign: 'center' }}>
            <span className="section-tag">Tech Stack</span>
            <h2 className="section-title">
              Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We build with battle-tested, modern technologies to deliver solutions that scale.
            </p>
          </div>
          <div className="tech-grid">
            {technologies.map((t, i) => (
              <div key={t.name} className="tech-item fade-in-section" ref={addRef} style={{ animationDelay: `${i * 0.05}s` }}>
                <span className="tech-item-icon">{t.icon}</span>
                <span className="tech-item-name">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section-sm" style={{ background: 'linear-gradient(135deg, rgba(108,61,255,0.2) 0%, rgba(0,212,255,0.1) 100%)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title fade-in-section" ref={addRef}>
            Ready to <span className="gradient-text">Aspire Beyond Limits?</span>
          </h2>
          <p className="section-subtitle fade-in-section" ref={addRef} style={{ margin: '0 auto 36px' }}>
            Whether you need top talent or a tech partner — we are here to accelerate your success.
          </p>
          <div className="fade-in-section" ref={addRef} style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/careers" className="btn btn-primary">Browse Open Roles</Link>
            <Link to="/about" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
