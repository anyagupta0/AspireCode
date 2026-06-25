import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const staffingServices = [
  {
    icon: '👥',
    title: 'Permanent Staffing',
    desc: 'We source, screen, and place top-tier candidates into permanent roles. Our deep industry network ensures you get the right fit — fast.',
    features: ['End-to-end recruitment lifecycle', 'Background & reference checks', 'Culture fit assessment', 'Post-placement support'],
  },
  {
    icon: '📝',
    title: 'Contractual Hiring',
    desc: 'Need skilled professionals for a fixed term? We provide vetted contractual talent across all domains and seniority levels.',
    features: ['Short & long-term contracts', 'Rapid deployment', 'Skill-verified talent pool', 'Flexible engagement models'],
  },
  {
    icon: '🔄',
    title: 'Contract-to-Hire (C2H)',
    desc: 'Reduce hiring risk. Evaluate talent on the job before converting them to permanent employees.',
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

export default function Services() {
  const addRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services — AspireCode';
  }, []);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
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
      <section className="section">
        <div className="container">
          <div className="services-section-title fade-in-section" ref={addRef}>
            <h2>🤝 Staffing & HR Services</h2>
            <div className="services-section-line" />
          </div>
          <div className="service-detailed-grid">
            {staffingServices.map((s, i) => (
              <div key={s.title} className="glass-card service-detailed-card fade-in-section" ref={addRef}>
                <span className="sdcard-num">0{i + 1}</span>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Technology Services */}
          <div className="services-section-title fade-in-section" ref={addRef}>
            <h2>💻 Technology Services</h2>
            <div className="services-section-line" />
          </div>
          <div className="service-detailed-grid">
            {techServices.map((s, i) => (
              <div key={s.title} className="glass-card service-detailed-card fade-in-section" ref={addRef}>
                <span className="sdcard-num">0{i + 1}</span>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="fade-in-section" ref={addRef} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-tag">Why AspireCode</span>
            <h2 className="section-title">
              The <span className="gradient-text">AspireCode</span> Advantage
            </h2>
          </div>
          <div className="services-grid">
            {[
              { icon: '⚡', title: 'Fast Turnaround', desc: 'We deliver results quickly — whether it\'s a hire in 72 hours or a web feature in a sprint.' },
              { icon: '🎯', title: 'Precision Matching', desc: 'Our AI-assisted screening ensures the best talent fit for your culture and technical requirements.' },
              { icon: '🔒', title: 'Compliance First', desc: 'All our staffing and payroll operations are fully compliant with local regulations and labor laws.' },
              { icon: '🌏', title: 'Global Reach', desc: 'Access a global talent network spanning 20+ countries and industries.' },
              { icon: '📞', title: 'Dedicated Support', desc: 'A dedicated account manager for every client, ensuring personalized and responsive service.' },
              { icon: '📊', title: 'Data-Driven', desc: 'Every strategy is backed by data — from recruitment analytics to SEO performance dashboards.' },
            ].map(item => (
              <div key={item.title} className="glass-card service-card fade-in-section" ref={addRef}>
                <div className="service-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(108,61,255,0.15) 0%, rgba(0,212,255,0.08) 100%)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <h2 className="section-title fade-in-section" ref={addRef}>
            Ready to Get <span className="gradient-text">Started?</span>
          </h2>
          <p className="section-subtitle fade-in-section" ref={addRef} style={{ margin: '0 auto 36px' }}>
            Talk to our team and discover how AspireCode can power your next phase of growth.
          </p>
          <div className="fade-in-section" ref={addRef} style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/about" className="btn btn-primary">Contact Us Today</Link>
            <Link to="/portfolio" className="btn btn-outline">See Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
