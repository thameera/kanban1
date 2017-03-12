import React from 'react';
import Card from '../containers/Card';
import './Column.css';

const renderCards = (cards) => {
  return cards.map(card => <Card key={card.id} id={card.id} label={card.label} />)
}

const Column = ({ label, cards }) => (
  <div className="column">
    <div className="label">{label}</div>
    <div className="cards">
      {renderCards(cards)}
    </div>
  </div>
);

export default Column;