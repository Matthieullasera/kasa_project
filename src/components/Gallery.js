import React from 'react';
import '../css/Gallery.css';

function Gallery() {
  return (
    <div className="gallery">
      <img src="https://via.placeholder.com/800x400" alt="Loft" className="gallery-image" />
      <p className="image-pagination">1/4</p>
    </div>
  );
}

export default Gallery;
