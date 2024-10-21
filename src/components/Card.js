import React from 'react';

function Card({ title, cover }) {
  return (
    <div 
      className="card" 
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Card;

