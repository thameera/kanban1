import React from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions';

let AddCard = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        input.value = input.value.trim();
        if (!input.value) {
          return;
        }
        dispatch(addCard(input.value));
        input.value = '';
      }}>
        <input ref={node => { input = node }} />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
AddCard = connect()(AddCard);

export default AddCard;