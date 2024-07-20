import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => (
  <section id="about">
    <div className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hello! I'm Ketan Khasale, a passionate photographer with a keen eye for capturing the beauty of the world around us. My journey into photography began at a young age, and over the years, it has transformed from a hobby into a true calling. Through my lens, I strive to tell stories, evoke emotions, and highlight the extraordinary in the ordinary.
        </p>
        <p>
          Whether it's the breathtaking landscapes, the vibrant cultures, or the intimate moments of daily life, my goal is to create images that resonate with people on a deep, personal level. I believe that every photograph has a story to tell, and my mission is to share these stories with you.
        </p>
        <p>
          I specialize in portrait, landscape, and street photography, but I'm always exploring new styles and techniques to broaden my artistic horizons. My work has been featured in various exhibitions and publications, and I've had the pleasure of working with clients from diverse backgrounds.
        </p>
        <p>
          When I'm not behind the camera, you can find me exploring new places, meeting new people, and continuously seeking inspiration for my next shoot. Thank you for visiting my portfolio, and I hope my photographs inspire you as much as they have inspired me to create them.
        </p>
      </div>
      <div className="about-images">
        <img src={`${process.env.PUBLIC_URL}/assets/top-left-photo.jpg`} alt="Top Left" className="top-left" />
        <img src={`${process.env.PUBLIC_URL}/assets/bottom-right-photo.jpg`} alt="Bottom Right" className="bottom-right" />
      </div>
    </div>
  </section>
);

export default About;
