import React from 'react';
import { connect } from 'react-redux';

let Card = ({ label }) => {
  return (
    <div>
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