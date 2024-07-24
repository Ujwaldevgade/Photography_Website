import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => (
  <footer>
    <p>&copy; 2024 Ketan Khasale Photography. All rights reserved.</p>
    <div className="social-icons">
        <a href="https://www.instagram.com/ketankhasalephotography/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://youtube.com/@ketankhasale9166?si=BVwsXVm00BLYqDNq" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i> YouTube
        </a>
        <a href="mailto:ketankhasale46@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i> Email
        </a>
        <a href="https://wa.me/8623948339" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
  </footer>
);

export default Footer;
