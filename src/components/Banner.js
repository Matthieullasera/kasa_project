import React from 'react';

function Banner() {
  return (
<section className="banner">
  <div className="image-container">
    <img src={`${process.env.PUBLIC_URL}/e270fc8fc902a1eb738458e7b29c1899.jpg`} alt="Bannière" />
    <div className="overlay"></div>
  </div>
  <h1>Chez vous, partout et ailleurs</h1>
</section>

  );
}

export default Banner;
