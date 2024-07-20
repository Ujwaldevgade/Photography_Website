import React from 'react';
import PhotoGallery from './PhotoGallery';
import About from './About';
import Contact from './Contact';
import Title from './Title'; // Import the new Title component

const Home = () => (
  <div>
    <Title /> {/* Add the Title component here */}
    <PhotoGallery />
    <About />
    <Contact />
  </div>
);

export default Home;
