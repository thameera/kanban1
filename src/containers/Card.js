import React from 'react';
import { connect } from 'react-redux';
import { moveLeft, moveRight } from '../actions';
import './Card.css';

let Card = ({ id, label, moveLeft, moveRight }) => {
  return (
    <div className="card">
      <div>
        {label}
      </div>
      <div>
        <button onClick={() => moveLeft(id)}>&lt;</button>
        <button onClick={() => moveRight(id)}>&gt;</button>
      </div>
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