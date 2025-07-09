import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav className="nav-links" aria-label="Main navigation">
        <Link to="/" className="nav-link">About</Link>
        <Link to="/skills" className="nav-link">Skills</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>

      <div className="profile-image-container" onClick={() => navigate('/')}>
        <img src="/assets/cartoon_profile.avif" alt="Profile" className="profile-image" />
      </div>
    </header>
  );
}

export default Header;
