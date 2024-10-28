import React from 'react';

function BannerAbout() {
  return (
<section className="banner">
  <div className="image-container">
    <img src={`${process.env.PUBLIC_URL}/Image_source_2.jpg`} alt="Bannière" />
    <div className="overlay"></div>
  </div>
</section>

  );
}

export default BannerAbout;
