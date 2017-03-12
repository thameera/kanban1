import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveLeft, moveRight, deleteCard } from '../actions';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { DragSource } from 'react-dnd';
import './Card.css';

const cardSource = {
  beginDrag(props) {
    return {id: props.id};
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
};

class Card extends Component {
  componentDidMount() {
    this.props.connectDragPreview(this.refs.innerCard);
  }

  handleClick(e, data) {
    if (data.action === 'Delete') {
      this.props.deleteCard(this.props.id);
    }
  }

  render() {
    const { id, label, moveLeft, moveRight } = this.props;
    const { connectDragSource } = this.props;
    return connectDragSource(
      <div className="card">
        <ContextMenuTrigger id={"context-menu-card-"+id}>
          <div ref="innerCard" id="innerCard">
            <div>
              {label}
            </div>
            <div className="buttons">
              <button onClick={() => moveLeft(id)}>&lt;</button>
              <button onClick={() => moveRight(id)}>&gt;</button>
            </div>
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

export default DragSource('CARD', cardSource, collect)(Card);