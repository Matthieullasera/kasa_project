import React from 'react';

function Card({ title }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Card;
