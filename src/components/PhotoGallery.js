import React, { useState } from 'react';
import PhotoViewer from './PhotoViewer';
import './PhotoGallery.css'; // Import the CSS file for styling

const photos = [
  
  'InCollage_20240226_131614267.jpg',
  'PM_02990.jpg',
  'instaram 2.jpg',
  '3.jpg',
  '06.jpg',
  '04.jpg',
  '5_1.jpg',
  '7.jpg',
  '15.jpg',
  'IMG_6820.jpg',
  'instaram 3.jpg',
  '321.jpg',
  '4_1.jpg',
  '00_1.jpg',
  '10.jpg',
  '8_1.jpg',
  'IMG_7064.jpg',
  '5.jpg',
  
  'IMG_9558 copy.jpg',
  'IMG_9566.jpg',
  'Screenshot 2024-07-20 000245.png',
  'Screenshot 2024-07-20 000300.png',
  'Screenshot 2024-07-20 000315.png',
  'Screenshot 2024-07-20 000402.png',
  'Screenshot 2024-07-20 000414.png',
  'Screenshot 2024-07-20 000506.png',
  
  'Screenshot 2024-07-20 000547.png',
  'Screenshot 2024-07-20 000602.png',
  'Screenshot 2024-07-20 000615.png',
  'Screenshot 2024-07-20 000012.png',
  'Screenshot 2024-07-20 000027.png',
  '1.jpg',
  '2.jpg',
  '9.jpg',
  '17.jpg',
  '03.jpg',
  'DSC00416.jpg',
  'PM_02945.jpg',
  '13.jpg',
  '05.jpg',
  '4.jpg',
  '0.jpg',
  'instagram 1.jpg',
  '100.jpg',
  '16.jpg',
  '14.jpg',
  '11.jpg',
  '6.jpg',
  'Screenshot 2024-07-20 000523.png',
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
