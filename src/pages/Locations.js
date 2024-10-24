import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import logements from '../logements.json';  
import '../css/Locations.css';  
function Locations() {
  const { id } = useParams();
  const logement = logements.find((log) => log.id === id);

  if (!logement) {
    return <h1>Logement non trouvé</h1>;
  }

  return (
    <>
      <Header />
      <main className="locations-container">
        <section className="locations-banner">
          <img src={logement.pictures[0]} alt={logement.title} className="banner-image" />
          <p className="image-pagination">1/4</p>
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
                <span key={i} className={i < logement.rating ? "star filled" : "star"}>★</span>
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
