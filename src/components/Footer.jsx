import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-primary">SWC</span>
              <span className="logo-devanagari">ॐ</span>
            </div>
            <p>Student Welfare Club &mdash; guiding students through the eternal wisdom of Bhagavad Gita.</p>
          </div>
          <div className="footer-links-group">
            <h4>Navigation</h4>
            <Link to="/" className="hover-target">Home</Link>
            <Link to="/courses" className="hover-target">Courses</Link>
            <Link to="/about" className="hover-target">About</Link>
          </div>
          <div className="footer-links-group">
            <h4>Connect</h4>
            <Link to="/events" className="hover-target">Events</Link>
            <Link to="/contact" className="hover-target">Contact Us</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Student Welfare Club.</p>
          <p className="footer-credits">Hare Krishna 🪷</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
