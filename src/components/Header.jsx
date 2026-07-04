import { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

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
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    const timer = window.setTimeout(() => setMenuOpen(false), 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu} aria-label="AspireCode Home">
            <img src="/logo.jpg" alt="AspireCode Logo" className="logo-img site-logo" />
            <span className="logo-text">AspireCode</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav" aria-label="Main navigation">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-link nav-underline${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/careers" className="nav-link nav-cta" aria-label="Hire With Us">
              Hire With Us
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              style={{
                transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
              }}
            />
            <span style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)' }} />
            <span
              style={{
                transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`mobile-menu${menuOpen ? ' open' : ''}`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/careers"
            className="nav-link nav-cta"
            onClick={closeMenu}
            aria-label="Hire With Us"
          >
            Hire With Us
          </Link>
        </div>
      </div>
    </header>
  );
}
