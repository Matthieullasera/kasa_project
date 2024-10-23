import React from 'react';
import '../css/TitleSection.css';
import Tag from './Tag';

function TitleSection() {
  return (
    <div className="title-section">
      <div className="title-info">
        <h1>Cozy loft on the Canal Saint-Martin</h1>
        <h2>Paris, Île-de-France</h2>
        <div className="tags">
          <Tag label="Cozy" />
          <Tag label="Canal" />
          <Tag label="Paris 10" />
        </div>
      </div>
      <div className="host-info">
        <div className="host-name">
          <h3>Alexandre Dumas</h3>
          <img src="https://via.placeholder.com/50" alt="Host" className="host-avatar" />
        </div>
        <div className="host-rating">
          <span>⭐⭐⭐⭐☆</span>
        </div>
      </div>
    </div>
  );
}

export default TitleSection;
