import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
  {
    id: 1,
    img: '/portfolio4.png',
    title: 'Enterprise Dashboard Platform',
    category: 'Web Development',
    client: 'FinTech Startup',
    desc: 'A comprehensive project management and analytics dashboard built for a fintech startup managing 50+ client portfolios. Real-time data visualization, role-based access, and multi-tenant architecture.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis'],
    result: '3× faster reporting, 60% reduction in manual work',
  },
  {
    id: 2,
    img: '/portfolio5.png',
    title: 'SEO & Organic Growth Campaign',
    category: 'SEO',
    client: 'E-commerce Brand',
    desc: 'Full-scale technical and content SEO overhaul for an e-commerce company. Included site architecture restructuring, keyword mapping, link building, and content strategy across 8 product categories.',
    tags: ['SEO', 'Content Strategy', 'Analytics', 'CRO'],
    result: '340% organic traffic growth in 6 months',
  },
  {
    id: 3,
    img: '/portfolio6.png',
    title: 'SaaS HR & Payroll Platform',
    category: 'SaaS',
    client: 'HR Tech Company',
    desc: 'End-to-end SaaS platform covering employee onboarding, attendance, performance reviews, payroll processing, and compliance reporting. Multi-tenant with white-label capabilities.',
    tags: ['SaaS', 'React', 'Python', 'AWS', 'Stripe'],
    result: '5,000+ employees managed across 12 companies',
  },
  {
    id: 4,
    img: '/portfolio1.png',
    title: 'Recruitment Automation System',
    category: 'Web Development',
    client: 'Staffing Agency',
    desc: 'A smart ATS (Applicant Tracking System) with AI-powered resume parsing, candidate ranking, and automated interview scheduling. Integrated with major job boards and LinkedIn.',
    tags: ['React', 'Python', 'AI/ML', 'MongoDB', 'GCP'],
    result: '70% reduction in time-to-hire',
  },
  {
    id: 5,
    img: '/portfolio2.png',
    title: 'Multi-Channel SEO Strategy',
    category: 'SEO',
    client: 'B2B SaaS Company',
    desc: 'Technical SEO audit, structured data implementation, blog content calendar, and backlink campaign for a B2B SaaS company targeting enterprise buyers.',
    tags: ['SEO', 'Technical Audit', 'Schema Markup', 'Link Building'],
    result: 'Page 1 rankings for 47 target keywords',
  },
  {
    id: 6,
    img: '/portfolio3.png',
    title: 'Project Management Portal',
    category: 'Project Management',
    client: 'Construction Firm',
    desc: 'Custom project management portal for a mid-sized construction firm with Gantt charts, resource allocation, budget tracking, and client communication modules.',
    tags: ['React', 'Node.js', 'MySQL', 'Azure'],
    result: '30% improvement in on-time project delivery',
  },
];

const categories = ['All', 'Web Development', 'SEO', 'SaaS', 'Project Management'];

const techStack = [
  { icon: '⚛️', name: 'React' },   { icon: '⚡', name: 'Next.js' },
  { icon: '🟩', name: 'Node.js' }, { icon: '🐍', name: 'Python' },
  { icon: '🔷', name: 'TypeScript' }, { icon: '🐘', name: 'PostgreSQL' },
  { icon: '🍃', name: 'MongoDB' }, { icon: '☁️', name: 'AWS' },
  { icon: '🔵', name: 'Azure' },   { icon: '🐳', name: 'Docker' },
  { icon: '♾️', name: 'Kubernetes' }, { icon: '🔍', name: 'GraphQL' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const addRef = useScrollReveal();

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Portfolio — AspireCode';
  }, []);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-label="Portfolio hero">
        <div className="page-hero-bg" />
        <div className="page-hero-orb" />
        <div className="container">
          <div className="page-hero-content">
            <span className="section-tag">Our Work</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: 20 }}>
              Featured <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="section-subtitle">
              Real results for real clients — explore our showcase of delivered projects across technology and growth strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section" aria-label="Portfolio projects">
        <div className="container">
          {/* Filter Tabs */}
          <div className="jobs-filter fade-in-section" ref={addRef}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={activeFilter === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio-grid stagger-children">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className="glass-card portfolio-card fade-in-section"
                ref={addRef}
                data-delay={`${i * 90}`}
              >
                {/* Real project image */}
                <div className="portfolio-img-wrap">
                  <img src={p.img} alt={p.title} />
                  <div className="portfolio-overlay">
                    <span
                      className="tech-tag"
                      style={{ background: 'var(--secondary)', color: '#fff', border: 'none' }}
                    >
                      {p.category}
                    </span>
                  </div>
                </div>

                <div className="portfolio-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <span className="tech-tag">{p.client}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>

                  {/* Result badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '10px 14px',
                      background: 'rgba(71, 176, 199, 0.09)',
                      border: '1px solid rgba(71,176,199,0.22)',
                      borderRadius: 10,
                      marginBottom: 14,
                      fontSize: '0.82rem',
                      color: 'var(--secondary-dark)',
                      fontWeight: 700,
                    }}
                  >
                    <span aria-hidden="true">🎯</span>
                    <span>{p.result}</span>
                  </div>

                  <div className="tech-tags">
                    {p.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
              No projects found in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Tech Stack */}
      <section
        className="section bg-grid"
        aria-label="Technology stack"
        style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}
      >
        <div className="container">
          <div className="fade-in-section" ref={addRef} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-tag">Technology</span>
            <h2 className="section-title">
              Built With <span className="gradient-text">Best-in-Class</span> Tech
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We choose the right technology for each challenge — not a one-size-fits-all stack.
            </p>
          </div>

          <div className="tech-grid stagger-children">
            {techStack.map((t, i) => (
              <div
                key={t.name}
                className="tech-item fade-in-section"
                ref={addRef}
                data-delay={`${i * 50}`}
              >
                <span className="tech-item-icon" aria-hidden="true">{t.icon}</span>
                <span className="tech-item-name">{t.name}</span>
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
            Have a Project in <span className="gradient-text">Mind?</span>
          </h2>
          <p
            className="section-subtitle fade-in-section"
            ref={addRef}
            data-delay="80"
            style={{ margin: '0 auto 40px' }}
          >
            Let us transform your idea into a high-impact digital product.
          </p>
          <div
            className="fade-in-section"
            ref={addRef}
            data-delay="160"
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/about" className="btn btn-primary">Start a Project</Link>
            <Link to="/services" className="btn btn-outline">View Services →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
