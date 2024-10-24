import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <p>{title}</p>
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default Accordion;
