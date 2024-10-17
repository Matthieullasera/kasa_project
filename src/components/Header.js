import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/logoKasa.png`} alt="Kasa logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">A Propos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
