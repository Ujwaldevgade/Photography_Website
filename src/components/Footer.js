import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => (
  <footer>
    <p>&copy; 2024 Ketan Khasale Photography. All rights reserved.</p>
    <div className="social-icons">
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
    </div>
  </footer>
);

export default Footer;
