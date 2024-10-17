import React from 'react';
import Card from './Card';

function Grid() {
  const locations = [
    { title: 'Titre de la location 1' },
    { title: 'Titre de la location 2' },
    { title: 'Titre de la location 3' },
    { title: 'Titre de la location 4' },
    { title: 'Titre de la location 5' },
    { title: 'Titre de la location 6' }
  ];

  return (
    <section className="grid">
      {locations.map((location, index) => (
        <Card key={index} title={location.title} />
      ))}
    </section>
  );
}

export default Grid;
