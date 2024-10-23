import React from 'react';
import { Link } from 'react-router-dom';
import '../css/404.css';  // Le fichier CSS pour les styles
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
  return (
    <>
    <Header/>
    <div className="not-found">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="home-link">Retourner sur la page d'accueil</Link>
    </div>
    <Footer/>
    </>
    
  );
}

export default NotFound;
