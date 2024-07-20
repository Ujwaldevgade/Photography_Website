import React from 'react';
import './Title.css'; // Import the CSS file for styling
import backgroundImage from '../assets/background2.jpg'; // Update the path to your image

const Title = () => (
  <div className="title-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="overlay">
      <h1 className="typing-effect">Welcome to Ketan Khasale Photography</h1>
      <p>Capturing the moments that captivate your heart</p>
      <p>Specializing in:</p>
      <ul>
        <li>Portrait Photography</li>
        <li>Landscape Photography</li>
        <li>Event Photography</li>
        <li>Wedding Photography</li>
        <li>Product Photography</li>
        <li>Fashion Photography</li>
        <li>Wildlife Photography</li>
        <li>Architectural Photography</li>
        <li>Sports Photography</li>
      </ul>
    </div>
  </div>
);

export default Title;
