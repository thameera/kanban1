import React from 'react';
import Column from './Column';

const Board = ({ cards }) => (
  <div>
    <Column id={0} label="Inbox" cards={[]} />
    <Column id={1} label="In Progress" cards={[]} />
    <Column id={2} label="Done" cards={[]} />
  </div>
);

export default Board;