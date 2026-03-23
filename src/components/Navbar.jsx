import { Link, useLocation } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="nav-brand">
          Carbon<span>Tatva.AI</span>
        </Link>
        <div className="nav-menu">
          <div className="nav-links">
            <Link to="/" className={`nav-link ${path === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${path === '/about' ? 'active' : ''}`}>About Us</Link>
            <Link to="/offerings" className={`nav-link ${path === '/offerings' ? 'active' : ''}`}>Our Offerings</Link>
            <Link to="/rd" className={`nav-link ${path === '/rd' ? 'active' : ''}`}>R&D</Link>
          </div>
          <div className="nav-actions">
            <button className="btn btn-primary" onClick={() => alert('Login modal would open here.')}>
              <LogIn size={18} style={{ marginRight: '8px' }} />
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
