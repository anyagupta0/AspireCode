import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const services = [
  { icon: '👥', title: 'Permanent Staffing', desc: 'We connect top talent with forward-thinking companies for lasting career opportunities.' },
  { icon: '🔄', title: 'Contract-to-Hire (C2H)', desc: 'Evaluate candidates on the job before making a permanent hiring commitment.' },
  { icon: '🏢', title: 'HR Services', desc: 'End-to-end human resource management, compliance, and strategic HR consulting.' },
  { icon: '💰', title: 'Payroll Management', desc: 'Accurate, timely, and compliant payroll processing so you can focus on growth.' },
  { icon: '🌐', title: 'Web Development', desc: 'Stunning, performant websites and web applications built with modern technologies.' },
  { icon: '📈', title: 'SEO Services', desc: 'Data-driven SEO strategies that boost visibility, traffic, and revenue.' },
  { icon: '☁️', title: 'SaaS Projects', desc: 'Custom SaaS platform development from concept to scalable cloud deployment.' },
];

const stats = [
  { number: 500, suffix: '+', label: 'Placements Made' },
  { number: 120, suffix: '+', label: 'Projects Delivered' },
  { number: 98,  suffix: '%', label: 'Client Satisfaction' },
  { number: 6,   suffix: '+', label: 'Years of Excellence' },
];

/* Animated number counter */
function useCounterAnimation(targetRef, endValue, duration = 1800) {
  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * endValue);
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = endValue;
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [targetRef, endValue, duration]);
}

function StatItem({ number, suffix, label }) {
  const numRef = useRef(null);
  useCounterAnimation(numRef, number);
  return (
    <div className="stat-item">
      <span className="stat-number">
        <span ref={numRef}>0</span>{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

const portfolioItems = [
  {
    img: '/portfolio1.png',
    title: 'Enterprise Dashboard Platform',
    desc: 'End-to-end analytics dashboard for a fintech startup managing 50+ client portfolios with real-time data.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Web Development',
  },
  {
    img: '/portfolio5.png',
    title: 'SEO & Organic Growth Campaign',
    desc: 'Drove 340% organic traffic increase through technical SEO, content strategy, and backlink architecture.',
    tags: ['SEO', 'Analytics', 'Content'],
    category: 'SEO',
  },
  {
    img: '/portfolio6.png',
    title: 'SaaS HR Platform',
    desc: 'A full-featured HR SaaS solution with payroll, attendance, onboarding, and compliance modules.',
    tags: ['SaaS', 'React', 'AWS'],
    category: 'SaaS',
  },
];

export default function Home() {
  const addRef = useScrollReveal();

  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO — Split Layout with Illustration
      ══════════════════════════════════════════════════ */}
      <section className="hero" id="hero" aria-label="Hero">
        {/* Decorative background elements */}
        <div className="hero-orb-1" aria-hidden="true" />
        <div className="hero-orb-2" aria-hidden="true" />
        <div className="hero-orb-3" aria-hidden="true" />
        <div className="hero-dots"  aria-hidden="true" />
        <div className="hero-ring"  aria-hidden="true" />
        <div className="hero-triangle-1" aria-hidden="true" />
        <div className="hero-triangle-2" aria-hidden="true" />

        <div className="container">
          <div className="hero-inner">
            {/* Left — Text */}
            <div className="hero-content" ref={addRef} data-anim="u-anim-up">
              <div className="hero-badge">
                <span className="hero-badge-dot" aria-hidden="true" />
                Trusted Staffing &amp; Technology Partner
              </div>

              <h1 className="hero-title gradient-text fade-in-section" ref={addRef} data-anim="u-anim-up">AspireCode</h1>
              <p className="hero-tagline fade-in-section" ref={addRef} data-delay="60" data-anim="u-anim-left">
                Aspire Beyond Limits —{' '}
                <span className="gradient-text">Talent. Technology. Transformation.</span>
              </p>

              <p className="hero-desc">
                We are a premier project management and staffing agency delivering permanent staffing,
                contractual hiring, C2H, HR services, payroll solutions, web development, SEO,
                and SaaS projects — all under one roof.
              </p>

              <div className="hero-actions fade-in-section" ref={addRef} data-delay="140" data-anim="u-anim-scale">
                <Link to="/services" className="btn btn-primary magnetic hero-cta">Explore Services</Link>
                <Link to="/about"    className="btn btn-outline">Learn About Us →</Link>
              </div>

              <div className="hero-stats floating-stats" aria-hidden="true">
                {stats.map((s, i) => (
                  <div key={s.label} className="float-stat" style={{ ['--i']: i }}>
                    <StatItem number={s.number} suffix={s.suffix} label={s.label} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Illustration */}
            <div className="hero-illustration fade-in-section u-float-slow" aria-hidden="true" ref={addRef} data-delay="200" data-anim="u-float-slow">
              <div className="illustration-stage">
                <img src="/hero.png" alt="AspireCode modern abstract technology illustration" />

                <div className="code-window" aria-hidden="true">
                  <div className="cw-top">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                  <div className="cw-body">
                    <div className="code-line l1" />
                    <div className="code-line l2" />
                    <div className="code-line l3" />
                    <div className="code-line l4" />
                    <div className="code-line l5" />
                  </div>
                </div>

                <div className="floating-card glass-card" aria-hidden="true">
                  <div className="fc-head">Featured</div>
                  <h4>Realtime Analytics</h4>
                  <p>Live dashboards, alerts, and insights for your product metrics.</p>
                  <div className="fc-cta">
                    <Link to="/portfolio" className="btn btn-outline">View Demo</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ABOUT STRIP — with dot-grid background
      ══════════════════════════════════════════════════ */}
      <section className="section about-strip" id="about-strip" aria-label="About AspireCode">
        {/* Decorative circle (from CSS ::after) */}
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="about-strip-inner">
            <div
              className="about-strip-img animate-float fade-in-section fade-left"
              ref={addRef}
              data-delay="0"
            >
              <img src="/team.png" alt="AspireCode team collaborating" />
            </div>

            <div className="fade-in-section fade-right" ref={addRef} data-delay="100">
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
              <Link to="/about" className="btn btn-primary" style={{ marginTop: 8 }}>Our Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SERVICES — Grid background + shimmer top line
      ══════════════════════════════════════════════════ */}
      <section
        className="section section-with-pattern section-stripe"
        id="services"
        aria-label="Our Services"
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Decorative circles */}
          <div className="deco-circle-right" aria-hidden="true" />
          <div className="deco-circle-left"  aria-hidden="true" />

          <div className="fade-in-section" ref={addRef} data-anim="u-anim-up" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">
              Comprehensive <span className="gradient-text">Services</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              From talent acquisition to technology delivery — we cover every angle of your business growth.
            </p>
          </div>

          <div className="services-grid stagger-children" data-delay="60" style={{ position: 'relative', zIndex: 1 }}>
            {services.map((s, i) => (
              <div
                key={s.title}
                className="glass-card service-card fade-in-section"
                ref={addRef}
                data-delay={`${i * 80}`}
              >
                <div className="service-icon" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 52, position: 'relative', zIndex: 1 }}>
            <Link to="/services" className="btn btn-primary">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PORTFOLIO — Hex-grid background
      ══════════════════════════════════════════════════ */}
      <section
        className="section bg-hex"
        id="portfolio-strip"
        aria-label="Featured Portfolio"
        style={{
          background: 'var(--bg-alt)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
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
            {portfolioItems.map((p, i) => (
              <div
                key={i}
                className="glass-card portfolio-card fade-in-section"
                ref={addRef}
                data-delay={`${i * 100}`}
              >
                <div className="portfolio-img-wrap">
                  <img src={p.img} alt={p.title} />
                  <div className="portfolio-overlay">
                    <Link
                      to="/portfolio"
                      className="btn btn-primary"
                      style={{ padding: '10px 24px', fontSize: '0.85rem' }}
                    >
                      View Project
                    </Link>
                  </div>
                </div>
                <div className="portfolio-body">
                  <span className="tech-tag" style={{ marginBottom: 10, display: 'inline-block' }}>
                    {p.category}
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="tech-tags">
                    {p.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 52 }}>
            <Link to="/portfolio" className="btn btn-outline">See All Projects →</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA BANNER — dot grid + animated shimmer line
      ══════════════════════════════════════════════════ */}
      <section className="section-sm cta-section" aria-label="Call to action">
        {/* Decorative blobs */}
        <div className="cta-blob-1" aria-hidden="true" />
        <div className="cta-blob-2" aria-hidden="true" />

        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title fade-in-section" ref={addRef}>
            Ready to <span className="gradient-text">Aspire Beyond Limits?</span>
          </h2>
          <p
            className="section-subtitle fade-in-section"
            ref={addRef}
            data-delay="80"
            style={{ margin: '0 auto 40px' }}
          >
            Whether you need top talent or a tech partner — we are here to accelerate your success.
          </p>
          <div
            className="fade-in-section"
            ref={addRef}
            data-delay="160"
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/careers" className="btn btn-primary">Browse Open Roles</Link>
            <Link to="/about"   className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
