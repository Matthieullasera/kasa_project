import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Ajoute Link de react-router-dom
import Card from './Card';
import logements from '../logements.json';

function Grid() {
  const [locations] = useState(logements);

  return (
    <section className="grid">
      {locations.length > 0 ? (
        locations.map((location, index) => (
          <Link key={index} to={`/locations/${location.id}`}>  {/* Ajout du lien avec l'ID */}
            <Card title={location.title} cover={location.cover} />
          </Link>
        ))
      ) : (
        <p>Chargement des données...</p>
      )}
    </section>
  );
}

export default Grid;
