import React from 'react';
import Column from './Column';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const getCardsForColumn = (cards, id) => {
  return cards.filter(card => id === card.column);
}

const Board = ({ cards, moveCard }) => (
  <div>
    <Column id={0} label="Inbox" moveCard={moveCard} cards={getCardsForColumn(cards, 0)} />
    <Column id={1} label="In Progress" moveCard={moveCard} cards={getCardsForColumn(cards, 1)} />
    <Column id={2} label="Done" moveCard={moveCard} cards={getCardsForColumn(cards, 2)} />
  </div>
);

export default DragDropContext(HTML5Backend)(Board);