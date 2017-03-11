import { v1 as uuidV1 } from 'uuid';

const card = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        id: uuidV1(),
        label: action.label,
        column: 0
      };
    default:
      return state;
  }
}

const cards = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        card(undefined, action)
      ];
    default:
      return state;
  }
}

export default cards;