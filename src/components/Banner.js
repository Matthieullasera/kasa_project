import React from 'react';

function Banniere({ image,text, showText }) {
  return (
    <section className="banner">
      <div className="image-container">
        <img src={image} alt="Bannière" />
        <div className="overlay"></div>
      </div>
      {showText && <h1>{text}</h1>}
    </section>
  );
}

export default Banniere;
