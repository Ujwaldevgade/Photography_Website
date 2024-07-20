import React, { useState } from 'react';
import PhotoViewer from './PhotoViewer';
import './PhotoGallery.css'; // Import the CSS file for styling

const photos = [
  'photo1.jpg',
  'background.jpg',
  'Screenshot 2024-07-19 235900.png',
  'Screenshot 2024-07-20 000039.png',
  'Screenshot 2024-07-20 000059.png',
  'Screenshot 2024-07-20 000207.png',
  'Screenshot 2024-07-20 000217.png',
  'Screenshot 2024-07-20 000230.png',
  'Screenshot 2024-07-20 000245.png',
  'Screenshot 2024-07-20 000300.png',
  'Screenshot 2024-07-20 000315.png',
  'Screenshot 2024-07-20 000402.png',
  'Screenshot 2024-07-20 000414.png',
  'Screenshot 2024-07-20 000506.png',
  'Screenshot 2024-07-20 000523.png',
  'Screenshot 2024-07-20 000547.png',
  'Screenshot 2024-07-20 000602.png',
  'Screenshot 2024-07-20 000615.png',
  'Screenshot 2024-07-19 235918.png',
  'Screenshot 2024-07-20 000000.png',
  'Screenshot 2024-07-20 000012.png',
  'Screenshot 2024-07-20 000027.png',
  // Add more photo file names here
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openPhotoViewer = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closePhotoViewer = () => {
    setSelectedPhoto(null);
    setCurrentIndex(null);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedPhoto(`${process.env.PUBLIC_URL}/assets/${photos[currentIndex - 1]}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedPhoto(`${process.env.PUBLIC_URL}/assets/${photos[currentIndex + 1]}`);
    }
  };

  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={`${process.env.PUBLIC_URL}/assets/${photo}`}
          alt={`Gallery ${index}`}
          onClick={() => openPhotoViewer(`${process.env.PUBLIC_URL}/assets/${photo}`, index)}
        />
      ))}
      {selectedPhoto && (
        <PhotoViewer
          photo={selectedPhoto}
          onClose={closePhotoViewer}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default PhotoGallery;
