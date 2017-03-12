import React from 'react';
import { connect } from 'react-redux';
import { moveLeft, moveRight, deleteCard } from '../actions';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import './Card.css';

let Card = ({ id, label, moveLeft, moveRight, deleteCard }) => {
  const handleClick = (e, data) => {
    if (data.action === 'Delete') {
      deleteCard(id);
    }
  }

  return (
    <div className="card">
      <ContextMenuTrigger id={"context-menu-card-"+id}>
        <div>
          {label}
        </div>
        <div>
          <button onClick={() => moveLeft(id)}>&lt;</button>
          <button onClick={() => moveRight(id)}>&gt;</button>
        </div>
      </ContextMenuTrigger>

      <ContextMenu id={"context-menu-card-"+id}>
        <MenuItem data={{action: 'Delete'}} onClick={handleClick}>
          Delete
        </MenuItem>
      </ContextMenu>
    </div>
  )
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  moveLeft,
  moveRight,
  deleteCard
};

Card = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default Card;