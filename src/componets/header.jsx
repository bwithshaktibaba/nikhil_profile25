import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav-links" aria-label="Main navigation">
        <Link to="/" className="nav-link">About</Link>
        <Link to="/skills" className="nav-link">Skills</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>

      <Link to="/" className="profile-image-container" aria-label="Home">
        <img
          src={`${import.meta.env.BASE_URL}assets/cartoon_profile.avif`}
          alt="Profile"
          className="profile-image"
        />
      </Link>
    </header>
  );
}

export default Header;