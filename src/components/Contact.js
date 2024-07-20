import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const encodedMessage = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`);
    const whatsappUrl = `https://wa.me/8623948339?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact">
      <h1>Contact Me</h1>

      <div className="phone-numbers">
        <p><a>Ketan Khasale</a></p>
        <p>Call Me: <a href="tel:+1234567890">8623948339</a>, <a href="tel:+0987654321">7823875294</a></p>
        <p>Address: <a>Datey College Road, Yavatmal, 445001, Maharashtra, India</a></p>
      </div>

      <div className="social-icons">
        <a href="https://www.instagram.com/ketankhasalephotography/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i> Facebook
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i> YouTube
        </a>
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i> Email
        </a>
        <a href="https://wa.me/8623948339" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
      <p>If you have any questions or would like to collaborate, please feel free to reach out using the contact form below or through my social media channels. I look forward to connecting with you!</p>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Tony Stark"
          value={formData.name}
          onChange={handleChange}
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="example@example.com"
          value={formData.email}
          onChange={handleChange}
        />
        
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="1234567890"
          pattern="[0-9]{10}"
          title="Please enter a 10-digit phone number without spaces or special characters."
          value={formData.phone}
          onChange={handleChange}
        />
        
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          placeholder="Your message here..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
