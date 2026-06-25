import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/careers', label: 'Careers' },
  { to: '/about', label: 'About' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="AspireCode Logo" className="logo-img" />
            <span className="logo-text">AspireCode</span>
          </Link>

          <nav className="nav">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/careers" className="nav-link nav-cta">Hire With Us</Link>
          </nav>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : '' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : '' }} />
          </button>
        </div>

        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/careers" className="nav-link nav-cta" style={{ marginTop: 8 }} onClick={() => setMenuOpen(false)}>
            Hire With Us
          </Link>
        </div>
      </div>
    </header>
  );
}
