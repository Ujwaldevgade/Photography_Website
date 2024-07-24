import React from 'react';
import './Title.css'; // Import the CSS file for styling
import backgroundImage from '../assets/5.jpg'; // Update the path to your image

const Title = () => (
  <div className="title-container">
    <img src={backgroundImage} alt="Background" className="background-image" />
    <div className="overlay">
      <h1 className="typing-effect">Welcome to Ketan Khasale Photography</h1>
      <p>Capturing the moments that captivate your heart</p>
      <p>Specializing in:</p>
      <ul>
        <li>Portrait Photography</li>
        <li>Event Photography</li>
        <li>Wedding Photography</li>
        <li>Pre-Wedding Photography</li>
        <li>Fashion Photography</li>
        <li>Architectural Photography</li>
      </ul>
    </div>
  </div>
);

export default Title;
