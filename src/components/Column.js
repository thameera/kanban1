import React from 'react';
import Card from '../containers/Card';
import { DropTarget } from 'react-dnd';
import './Column.css';

const renderCards = (cards) => {
  return cards.map(card => <Card key={card.id} id={card.id} label={card.label} />)
}

const columnTarget = {
  drop(props, monitor) {
    props.moveCard(props.id, monitor.getItem().id);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const Column = ({ label, cards, connectDropTarget }) => {
  return connectDropTarget(
    <div className="column">
      <div className="label">{label}</div>
      <div className="cards">
        {renderCards(cards)}
      </div>
    </div>
  )
};

export default DropTarget('CARD', columnTarget, collect)(Column);