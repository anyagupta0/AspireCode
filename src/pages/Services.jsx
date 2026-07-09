import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import '../new-cards.css';

const staffingServices = [
  {
    icon: '👥',
    title: 'Permanent Staffing',
    desc: 'We source, screen, and place top-tier candidates into permanent roles. Our deep industry network ensures you get the right fit — fast.',
    features: ['End-to-end recruitment lifecycle', 'Background & reference checks', 'Culture fit assessment', 'Post-placement support'],
  },
  {
    icon: '🔄',
    title: 'Contract-to-Hire (C2H)',
    desc: 'Reduce hiring risk. Evaluate talent on the job before converting them to permanent employees. Flexible contract terms that transition seamlessly.',
    features: ['Trial before permanent offer', 'Reduced mis-hire costs', 'Seamless conversion process', 'Ongoing performance review'],
  },
  {
    icon: '🏢',
    title: 'HR Services',
    desc: 'Strategic human resource management that aligns your people operations with business goals.',
    features: ['HR policy development', 'Compliance & regulatory support', 'Performance management systems', 'Employee engagement programs'],
  },
  {
    icon: '💰',
    title: 'Payroll Management',
    desc: 'Accurate, timely, and fully compliant payroll processing so your team gets paid right, every time.',
    features: ['Multi-state payroll processing', 'Tax compliance & filings', 'Benefits administration', 'Payslip & reporting portals'],
  },
];

const techServices = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'We craft beautiful, performant, and scalable websites and web applications using modern frameworks and best practices.',
    features: ['Custom web app development', 'React, Next.js, Vue.js', 'API & backend development', 'CMS & e-commerce solutions'],
  },
  {
    icon: '📈',
    title: 'SEO Services',
    desc: 'Data-driven SEO strategies that improve your search rankings, drive qualified traffic, and grow your revenue organically.',
    features: ['Technical SEO audits', 'On-page & off-page optimization', 'Content strategy & creation', 'Analytics & monthly reporting'],
  },
  {
    icon: '☁️',
    title: 'SaaS Projects',
    desc: 'Full-cycle SaaS product development — from ideation and architecture to deployment and scaling.',
    features: ['SaaS architecture design', 'Multi-tenant systems', 'Subscription & billing integration', 'Cloud deployment (AWS/GCP/Azure)'],
  },
  {
    icon: '📊',
    title: 'Project Management',
    desc: 'Expert project management ensuring your initiatives are delivered on time, on budget, and to specification.',
    features: ['Agile & Scrum methodology', 'Resource planning & allocation', 'Risk management', 'Stakeholder reporting'],
  },
];

const advantages = [
  { icon: '⚡', title: 'Fast Turnaround', desc: 'We deliver results quickly — whether it\'s a hire in 72 hours or a web feature in a sprint.' },
  { icon: '🎯', title: 'Precision Matching', desc: 'Our AI-assisted screening ensures the best talent fit for your culture and technical requirements.' },
  { icon: '🔒', title: 'Compliance First', desc: 'All our staffing and payroll operations are fully compliant with local regulations and labor laws.' },
  { icon: '🌏', title: 'Global Reach', desc: 'Access a global talent network spanning 20+ countries and industries.' },
  { icon: '📞', title: 'Dedicated Support', desc: 'A dedicated account manager for every client, ensuring personalized and responsive service.' },
  { icon: '📊', title: 'Data-Driven', desc: 'Every strategy is backed by data — from recruitment analytics to SEO performance dashboards.' },
];

export default function Services() {
  const addRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services — AspireCode';
  }, []);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-label="Services hero">
        <div className="page-hero-bg" />
        <div className="page-hero-orb" />
        <div className="container">
          <div className="page-hero-content">
            <span className="section-tag">What We Offer</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: 20 }}>
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="section-subtitle">
              A complete ecosystem of staffing, HR, and technology services designed to accelerate your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Staffing Services */}
      <section className="section section-with-pattern" aria-label="Staffing and HR Services">
        <div className="container">
          <div className="services-section-title fade-in-section" ref={addRef} data-anim="u-anim-up">
            <h2>🤝 Staffing &amp; HR Services</h2>
            <div className="services-section-line" />
          </div>

          <div className="service-detailed-grid stagger-children" data-delay="60">
            {staffingServices.map((s, i) => (
              <div
                key={s.title}
                className="sazzad-card fade-in-section"
                ref={addRef}
                data-delay={`${i * 80}`}
                style={{ width: '100%', height: '100%', padding: '0', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start' }}
              >
                <div className="sazzad-bg"></div>
                <div className="sazzad-aurora"></div>
                <div style={{ position: 'relative', zIndex: 3, padding: '16px', width: '100%', height: '100%', textAlign: 'center' }}>
                  <span className="sdcard-num" aria-hidden="true" style={{ color: 'rgba(0,0,0,0.1)' }}>0{i + 1}</span>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div className="service-icon" aria-hidden="true" style={{ marginBottom: '0', fontSize: '2rem' }}>{s.icon}</div>
                    <h3 style={{ color: '#222', fontSize: '1.2rem', margin: '0' }}>{s.title}</h3>
                  </div>
                  <p style={{ color: '#555', fontSize: '0.9rem', marginBottom: '12px' }}>{s.desc}</p>
                  <ul style={{ color: '#555', fontSize: '0.85rem', padding: 0, listStylePosition: 'inside' }}>
                    {s.features.map(f => <li key={f} style={{ marginBottom: '4px' }}>{f}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Services */}
          <div className="services-section-title fade-in-section" ref={addRef} data-anim="u-anim-up">
            <h2>💻 Technology Services</h2>
            <div className="services-section-line" />
          </div>

          <div className="service-detailed-grid stagger-children" data-delay="60">
            {techServices.map((s, i) => (
              <div
                key={s.title}
                className="sazzad-card fade-in-section"
                ref={addRef}
                data-delay={`${i * 80}`}
                style={{ width: '100%', height: '100%', padding: '0', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start' }}
              >
                <div className="sazzad-bg"></div>
                <div className="sazzad-aurora"></div>
                <div style={{ position: 'relative', zIndex: 3, padding: '16px', width: '100%', height: '100%', textAlign: 'center' }}>
                  <span className="sdcard-num" aria-hidden="true" style={{ color: 'rgba(0,0,0,0.1)' }}>0{i + 1}</span>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div className="service-icon" aria-hidden="true" style={{ marginBottom: '0', fontSize: '2rem' }}>{s.icon}</div>
                    <h3 style={{ color: '#222', fontSize: '1.2rem', margin: '0' }}>{s.title}</h3>
                  </div>
                  <p style={{ color: '#555', fontSize: '0.9rem', marginBottom: '12px' }}>{s.desc}</p>
                  <ul style={{ color: '#555', fontSize: '0.85rem', padding: 0, listStylePosition: 'inside' }}>
                    {s.features.map(f => <li key={f} style={{ marginBottom: '4px' }}>{f}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="section bg-hex"
        aria-label="Why AspireCode"
        style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}
      >
        <div className="container">
          <div className="fade-in-section" ref={addRef} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-tag">Why AspireCode</span>
            <h2 className="section-title">
              The <span className="gradient-text">AspireCode</span> Advantage
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              What sets us apart from every other staffing and technology partner.
            </p>
          </div>

          <div className="services-grid stagger-children" data-delay="60">
            {advantages.map((item, i) => (
              <div
                key={item.title}
                className="sazzad-card fade-in-section"
                ref={addRef}
                data-delay={`${i * 70}`}
                style={{ width: '100%', height: '100%', padding: '0', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', textAlign: 'center' }}
              >
                <div className="sazzad-bg"></div>
                <div className="sazzad-aurora"></div>
                <div style={{ position: 'relative', zIndex: 3, padding: '16px', width: '100%', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div className="service-icon" aria-hidden="true" style={{ marginBottom: '0', fontSize: '2rem' }}>{item.icon}</div>
                    <h3 style={{ color: '#222', fontSize: '1.2rem', margin: '0' }}>{item.title}</h3>
                  </div>
                  <p style={{ color: '#555', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-sm cta-section"
        aria-label="Call to action"
        style={{ textAlign: 'center' }}
      >
        <div className="container">
          <h2 className="section-title fade-in-section" ref={addRef}>
            Ready to Get <span className="gradient-text">Started?</span>
          </h2>
          <p
            className="section-subtitle fade-in-section"
            ref={addRef}
            data-delay="80"
            style={{ margin: '0 auto 40px' }}
          >
            Talk to our team and discover how AspireCode can power your next phase of growth.
          </p>
          <div
            className="fade-in-section"
            ref={addRef}
            data-delay="160"
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/about" className="btn btn-primary">Contact Us Today</Link>
            <Link to="/portfolio" className="btn btn-outline">See Our Work →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
