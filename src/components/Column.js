import React from 'react';
import './Column.css';

const Column = ({ id, label, cards }) => (
  <div className="column">
    <div>{label}</div>
    <div className="cards">
    </div>
  </div>
);

export default Column;