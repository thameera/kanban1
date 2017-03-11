import React from 'react';
import { connect } from 'react-redux';
import './Card.css';

let Card = ({ label }) => {
  return (
    <div className="card">
      {label}
    </div>
  )
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

Card = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default Card;