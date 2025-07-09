import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="branding">
        <h2>Nikhil's Portfolio</h2>
        <p>Built with  ❤️ Nikhil Tripathi </p>
      </div>

      <div className="social-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48...Z" />
          </svg>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.76 0...Z" />
          </svg>
        </a>
      </div>

      <div className="bottom-text">
        &copy; {new Date().getFullYear()} Nikhil. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
