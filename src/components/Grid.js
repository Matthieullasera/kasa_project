import React, { useState} from 'react';
import Card from './Card';
import logement from '../logements.json';

function Grid() {
  const [locations] = useState(logement)

  return (
    <section className="grid">
      {locations.length > 0 ? ( 
        locations.map((location, index) => (
          <Card key={index} title={location.title} cover={location.cover} />
        ))
      ) : (
        <p>Chargement des données...</p>
      )}
    </section>
  );
}

export default Grid;
