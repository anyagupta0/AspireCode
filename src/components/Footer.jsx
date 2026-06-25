import { Link } from 'react-router-dom';

const footerLinks = {
  Company: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Careers', to: '/careers' },
  ],
  Services: [
    { label: 'Permanent Staffing', to: '/services' },
    { label: 'Contractual Hiring', to: '/services' },
    { label: 'HR & Payroll', to: '/services' },
    { label: 'Web Development', to: '/services' },
  ],
  Technology: [
    { label: 'SEO Services', to: '/services' },
    { label: 'SaaS Projects', to: '/services' },
    { label: 'Project Management', to: '/services' },
    { label: 'Consulting', to: '/services' },
  ],
};

const socials = [
  { icon: '🔗', label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: '𝕏', label: 'X / Twitter', href: 'https://twitter.com' },
  { icon: '📸', label: 'Instagram', href: 'https://instagram.com' },
  { icon: '💻', label: 'GitHub', href: 'https://github.com' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src="/logo.png" alt="AspireCode" className="logo-img" />
              <span className="logo-text">AspireCode</span>
            </Link>
            <p>
              Your trusted partner in talent, technology, and transformation.
              We help businesses aspire beyond limits through premium staffing
              and cutting-edge tech solutions.
            </p>
            <div className="footer-socials">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="footer-col">
              <h4>{heading}</h4>
              <div className="footer-links">
                {links.map(l => (
                  <Link key={l.label} to={l.to}>{l.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AspireCode. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
