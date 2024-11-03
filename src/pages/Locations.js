import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import logements from '../logements.json';

function Locations() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((log) => log.id === id);

  // État pour le carrousel d'images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!logement) {
      navigate('/404'); 
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;  
  }

  // Gestion des images du carrousel
  const totalImages = logement.pictures.length;

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  
  return (
    <>
      <Header />
      <main className="locations-container">
        <section className="locations-banner">
          <img src={logement.pictures[currentImageIndex]} alt={logement.title} className="banner-image" />
          <p className="image-pagination">{currentImageIndex + 1}/{totalImages}</p>
          <button className="carousel-button left" onClick={handlePreviousImage}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carousel-button right" onClick={handleNextImage}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </section>
        <section className="locations-info">
          <div className='left-info'>
            <div className="location-title">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>
            <div className="tags">            
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className='right-info'>
            <div className="host-info">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.host.name} className="host-avatar" />
            </div>
            <div className="rating">
              {Array.from({ length: 5 }, (v, i) => (
                <FontAwesomeIcon 
                  key={i} 
                  icon={i < logement.rating ? solidStar : regularStar} 
                  color={i < logement.rating ? "#FF6B6B" : "#ccc"} 
                />
              ))}
            </div>
          </div>
        </section>
        <section className="accordions">
          <Accordion title="Description">
            <p>{logement.description}</p>
          </Accordion>
          <Accordion title="Équipements">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Accordion>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Locations;
