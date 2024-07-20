import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/PhotoGallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li className="social-icons">
            <a href="https://www.instagram.com/ketankhasalephotography/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> 
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> 
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i> 
            </a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i> 
            </a>
            <a href="https://wa.me/8623948339" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> 
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
