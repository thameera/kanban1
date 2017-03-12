import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions';

class AddCard extends Component {
  onSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const input = this.refs.label.value.trim();
    if (!input) {
      return;
    }
    dispatch(addCard(input));
    this.refs.label.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input autoFocus ref="label" />
          <button type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

AddCard = connect()(AddCard);

export default AddCard;