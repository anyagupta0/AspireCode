import { useState, useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const jobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    type: 'full-time',
    typeBadge: 'Full Time',
    department: 'Technology',
    location: 'Bangalore, India',
    experience: '4–7 Years',
    salary: '₹18–28 LPA',
    desc: 'We are looking for a seasoned React developer to lead frontend architecture for our flagship SaaS platform.',
    responsibilities: [
      'Architect and build scalable React applications',
      'Mentor junior developers and conduct code reviews',
      'Collaborate with product managers and UI designers',
      'Integrate REST and GraphQL APIs',
      'Write unit and integration tests',
    ],
    requirements: [
      '4+ years of React.js experience',
      'Strong TypeScript skills',
      'Experience with state management (Redux, Zustand)',
      'Knowledge of performance optimization techniques',
      'Excellent communication skills',
    ],
  },
  {
    id: 2,
    title: 'HR Business Partner',
    type: 'full-time',
    typeBadge: 'Full Time',
    department: 'HR & Staffing',
    location: 'Mumbai, India',
    experience: '3–5 Years',
    salary: '₹10–16 LPA',
    desc: 'Strategic HR Business Partner to drive talent strategy, employee engagement, and organizational development.',
    responsibilities: [
      'Partner with business leaders on workforce planning',
      'Manage full-cycle recruitment for key positions',
      'Design and implement performance review processes',
      'Handle employee relations and conflict resolution',
      'Develop HR policies and ensure compliance',
    ],
    requirements: [
      '3+ years HRBP or HR generalist experience',
      'MBA in HR or equivalent',
      'Strong knowledge of Indian labor laws',
      'Experience with HRMS tools',
      'Excellent interpersonal skills',
    ],
  },
  {
    id: 3,
    title: 'SEO Specialist',
    type: 'contract',
    typeBadge: 'Contract',
    department: 'Digital Marketing',
    location: 'Remote',
    experience: '2–4 Years',
    salary: '₹6–10 LPA',
    desc: 'Drive organic growth for our clients through technical SEO, content strategy, and link building expertise.',
    responsibilities: [
      'Conduct comprehensive SEO audits',
      'Develop and execute keyword strategies',
      'Optimize on-page and technical SEO factors',
      'Build high-quality backlink profiles',
      'Report on KPIs using Analytics and Search Console',
    ],
    requirements: [
      '2+ years of SEO experience',
      'Proficiency with Ahrefs, SEMrush, Screaming Frog',
      'Understanding of Google algorithm updates',
      'Basic HTML & CSS knowledge',
      'Strong analytical mindset',
    ],
  },
  {
    id: 4,
    title: 'Full Stack Developer (C2H)',
    type: 'c2h',
    typeBadge: 'C2H',
    department: 'Technology',
    location: 'Pune, India',
    experience: '2–5 Years',
    salary: '₹12–20 LPA',
    desc: 'Join our growing tech team on a contract-to-hire basis. Build powerful web applications end to end.',
    responsibilities: [
      'Develop RESTful APIs with Node.js / Python',
      'Build responsive UIs with React',
      'Design and manage database schemas',
      'Deploy and monitor applications on AWS',
      'Participate in agile ceremonies',
    ],
    requirements: [
      '2+ years full-stack development experience',
      'React.js + Node.js or Python stack',
      'SQL and NoSQL database experience',
      'Git version control proficiency',
      'AWS/cloud basics a plus',
    ],
  },
  {
    id: 5,
    title: 'Payroll & Compliance Specialist',
    type: 'full-time',
    typeBadge: 'Full Time',
    department: 'HR & Staffing',
    location: 'Delhi NCR, India',
    experience: '3–6 Years',
    salary: '₹8–14 LPA',
    desc: 'Manage payroll processing and statutory compliance for a portfolio of client companies across India.',
    responsibilities: [
      'Process monthly payroll for 500+ employees',
      'Ensure PF, ESI, PT, TDS compliance',
      'Handle employee queries related to salary',
      'Generate payroll reports and MIS',
      'Coordinate with finance and HR teams',
    ],
    requirements: [
      '3+ years payroll processing experience',
      'Deep knowledge of Indian payroll laws',
      'Experience with payroll software (Greythr, Keka, etc.)',
      'Attention to detail and accuracy',
      'CA/CMA inter or equivalent preferred',
    ],
  },
  {
    id: 6,
    title: 'Project Manager — Tech',
    type: 'full-time',
    typeBadge: 'Full Time',
    department: 'Project Management',
    location: 'Hyderabad, India',
    experience: '5–8 Years',
    salary: '₹20–32 LPA',
    desc: 'Lead multiple concurrent technology projects, ensuring on-time delivery, budget adherence, and stakeholder satisfaction.',
    responsibilities: [
      'Own end-to-end project delivery for tech clients',
      'Facilitate agile ceremonies (sprints, standups, retros)',
      'Manage risks, dependencies and escalations',
      'Stakeholder communication and status reporting',
      'Build and mentor cross-functional project teams',
    ],
    requirements: [
      '5+ years tech project management experience',
      'PMP or PRINCE2 certified preferred',
      'Strong Agile/Scrum knowledge',
      'Excellent written and verbal communication',
      'Experience with Jira, Confluence, MS Project',
    ],
  },
];

function JobCard({ job, onClick }) {
  return (
    <div className="glass-card job-card" onClick={() => onClick(job)} tabIndex={0} role="button" onKeyDown={e => e.key === 'Enter' && onClick(job)}>
      <div className="job-card-header">
        <div className="service-icon" style={{ width: 44, height: 44, fontSize: '1.2rem', marginBottom: 0 }}>
          {job.department === 'Technology' ? '💻' : job.department === 'HR & Staffing' ? '👥' : job.department === 'Digital Marketing' ? '📈' : '📊'}
        </div>
        <span className={`job-badge ${job.type}`}>{job.typeBadge}</span>
      </div>
      <h3 style={{ marginTop: 14 }}>{job.title}</h3>
      <div className="job-meta">
        <span className="job-meta-item">📍 {job.location}</span>
        <span className="job-meta-item">⏱ {job.experience}</span>
        <span className="job-meta-item">💼 {job.department}</span>
      </div>
      <p>{job.desc}</p>
      <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '11px' }}>
        View Details →
      </button>
    </div>
  );
}

function JobDetail({ job, onBack }) {
  return (
    <div className="section">
      <div className="container">
        <button className="job-detail-back" onClick={onBack}>← Back to Jobs</button>
        <div className="job-detail-layout">
          <div className="job-detail-main">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
              <span className={`job-badge ${job.type}`}>{job.typeBadge}</span>
              <span className="tech-tag">{job.department}</span>
            </div>
            <h1 className="job-detail-title">{job.title}</h1>
            <div className="job-detail-meta">
              <span className="job-detail-meta-item">📍 {job.location}</span>
              <span className="job-detail-meta-item">⏱ {job.experience}</span>
              <span className="job-detail-meta-item">💰 {job.salary}</span>
            </div>

            {/* Video */}
            <div className="job-video-container">
              <div className="job-video-placeholder">
                <div className="play-btn">▶</div>
                <p style={{ color: 'var(--white-muted)', fontSize: '0.9rem', marginTop: 8 }}>Watch Job Overview Video</p>
              </div>
            </div>

            <div className="job-section">
              <h4>About the Role</h4>
              <p style={{ color: 'var(--white-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>{job.desc} This is an exciting opportunity to work with a dynamic team at AspireCode, where you will be making a real impact from day one. We value growth, collaboration, and innovation.</p>
            </div>

            <div className="job-section">
              <h4>Key Responsibilities</h4>
              <ul>
                {job.responsibilities.map(r => <li key={r}>{r}</li>)}
              </ul>
            </div>

            <div className="job-section">
              <h4>Requirements</h4>
              <ul>
                {job.requirements.map(r => <li key={r}>{r}</li>)}
              </ul>
            </div>

            <div className="job-section">
              <h4>What We Offer</h4>
              <ul>
                {['Competitive salary + performance bonuses', 'Remote / hybrid flexibility', 'Health insurance for you and family', 'Learning & development budget', '25 days paid leave + public holidays', 'Regular team events and offsites'].map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          </div>

          <div className="job-sidebar">
            <div className="glass-card apply-card animate-pulse-glow">
              <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🚀</div>
              <h3>Apply for This Role</h3>
              <p>Submit your application and one of our recruiters will reach out within 48 hours.</p>
              <a href="mailto:careers@aspirecode.in" className="btn btn-primary">Apply Now</a>
              <button className="btn btn-outline" style={{ marginTop: 0 }}>Save Job</button>
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--glass-border)' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--white-muted)', textAlign: 'left', margin: 0 }}>💰 <strong style={{ color: 'var(--white)' }}>{job.salary}</strong></p>
                <p style={{ fontSize: '0.8rem', color: 'var(--white-muted)', textAlign: 'left', marginTop: 8 }}>📍 {job.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const addRef = useScrollReveal();

  const filters = ['All', 'Technology', 'HR & Staffing', 'Digital Marketing', 'Project Management'];
  const filteredJobs = activeFilter === 'All' ? jobs : jobs.filter(j => j.department === activeFilter);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = selectedJob ? `${selectedJob.title} — AspireCode Careers` : 'Careers — AspireCode';
  }, [selectedJob]);

  if (selectedJob) {
    return <JobDetail job={selectedJob} onBack={() => { setSelectedJob(null); window.scrollTo(0, 0); }} />;
  }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-orb" />
        <div className="container">
          <div className="page-hero-content">
            <span className="section-tag">Join Our Team</span>
            <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: 20 }}>
              Build Your <span className="gradient-text">Career</span> at AspireCode
            </h1>
            <p className="section-subtitle">
              We are always looking for talented individuals who want to make an impact. Explore open roles below.
            </p>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="section">
        <div className="container">
          {/* Why Join */}
          <div className="fade-in-section" ref={addRef} style={{ marginBottom: 64, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { icon: '🌱', title: 'Grow Fast', desc: 'Accelerated learning paths and mentorship programs.' },
              { icon: '🤝', title: 'Great Culture', desc: 'Collaborative, inclusive, and high-performance environment.' },
              { icon: '💻', title: 'Remote Friendly', desc: 'Hybrid and fully remote options for most roles.' },
              { icon: '🎁', title: 'Great Benefits', desc: 'Health insurance, learning budget, generous leave policy.' },
            ].map(item => (
              <div key={item.title} className="glass-card" style={{ padding: 24 }}>
                <div style={{ fontSize: '2rem', marginBottom: 10 }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: 6, fontSize: '1rem' }}>{item.title}</h4>
                <p style={{ color: 'var(--white-muted)', fontSize: '0.85rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="fade-in-section" ref={addRef}>
            <span className="section-tag">Open Roles</span>
            <h2 className="section-title" style={{ marginBottom: 28 }}>
              Current <span className="gradient-text">Openings</span>
            </h2>
          </div>

          <div className="jobs-filter fade-in-section" ref={addRef}>
            {filters.map(f => (
              <button key={f} className={`filter-btn${activeFilter === f ? ' active' : ''}`} onClick={() => setActiveFilter(f)}>
                {f}
              </button>
            ))}
          </div>

          <div className="jobs-grid">
            {filteredJobs.map(job => (
              <div key={job.id} className="fade-in-section" ref={addRef}>
                <JobCard job={job} onClick={setSelectedJob} />
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div style={{ textAlign: 'center', padding: 80, color: 'var(--white-muted)' }}>No openings in this category right now.</div>
          )}
        </div>
      </section>
    </>
  );
}
