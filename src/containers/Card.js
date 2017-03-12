import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveLeft, moveRight, deleteCard } from '../actions';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import './Card.css';

class Card extends Component {
  handleClick(e, data) {
    if (data.action === 'Delete') {
      this.props.deleteCard(this.props.id);
    }
  }

  render() {
    const { id, label, moveLeft, moveRight } = this.props;
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
          <MenuItem data={{action: 'Delete'}} onClick={this.handleClick.bind(this)}>
            Delete
          </MenuItem>
        </ContextMenu>
      </div>
    )
  }
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