import React from 'react';
import Column from './Column';

const getCardsForColumn = (cards, id) => {
  return cards.filter(card => id === card.column);
}

const Board = ({ cards }) => (
  <div>
    <Column id={0} label="Inbox" cards={getCardsForColumn(cards, 0)} />
    <Column id={1} label="In Progress" cards={getCardsForColumn(cards, 1)} />
    <Column id={2} label="Done" cards={getCardsForColumn(cards, 2)} />
  </div>
);

export default Board;