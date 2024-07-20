import React, { useState } from 'react';
import './PhotoViewer.css'; // Import the CSS file for styling

const PhotoViewer = ({ photo, onClose, onPrevious, onNext }) => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prevZoom => Math.min(prevZoom * 1.2, 3));
  const handleZoomOut = () => setZoom(prevZoom => Math.max(prevZoom / 1.2, 1));

  return (
    <div className="photo-viewer">
      <div className="photo-viewer-content">
        <button className="close" onClick={onClose}>&times;</button>
        <img
          src={photo}
          alt="Viewer"
          style={{ transform: `scale(${zoom})` }}
        />
        <button className="prev" onClick={onPrevious}>←</button>
        <button className="next" onClick={onNext}>→</button>
      </div>
    </div>
  );
};

export default PhotoViewer;
