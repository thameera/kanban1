import React from 'react';
import { connect } from 'react-redux';
import { moveLeft, moveRight } from '../actions';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import './Card.css';

let Card = ({ id, label, moveLeft, moveRight }) => {
  const handleClick = (e, data) => {
    console.log(`${data} - ${label}`);
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
  moveRight
};

Card = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default Card;