import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Events', path: '/events' },
    { name: 'Testimonials', path: '/#testimonials' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo hover-target">
            <div className="logo-icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="17" stroke="url(#goldGrad)" strokeWidth="1.5" fill="none"/>
                <text x="18" y="24" textAnchor="middle" fontSize="18" fill="url(#goldGrad)" fontFamily="Noto Serif Devanagari">ॐ</text>
                <defs>
                  <linearGradient id="goldGrad" x1="0" y1="0" x2="36" y2="36">
                    <stop offset="0%" stopColor="#FFD700"/>
                    <stop offset="100%" stopColor="#FF8C00"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-primary">SWC</span>
              <span className="logo-secondary">Student Welfare Club</span>
            </div>
          </Link>
          
          <div className="nav-links">
            {navLinks.map((link) => (
              <a 
                href={link.path} 
                key={link.name} 
                className={`nav-link hover-target ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="nav-right">
            <button className="btn-signin hover-target">Sign In</button>
            <button className="btn-join hover-target">Join SWC &rarr;</button>
            <button 
              className="hamburger hover-target" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X color="#fff" /> : <Menu color="#fff" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a
            href={link.path}
            key={link.name}
            className="mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
