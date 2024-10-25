import React from 'react';

function Footer() {
  return (
    <footer>
      <img src={`${process.env.PUBLIC_URL}/logoKasaWhite.png`} alt="Kasa logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
