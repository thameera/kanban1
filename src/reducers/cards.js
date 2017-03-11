import { v1 as uuidV1 } from 'uuid';

const card = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        id: uuidV1(),
        label: action.label,
        column: 0
      };
    case 'MOVE_LEFT':
      if (state.id !== action.id) return state;
      if (state.column === 0) return state;
      return {
        ...state,
        column: state.column - 1
      };
    case 'MOVE_RIGHT':
      if (state.id !== action.id) return state;
      if (state.column === 2) return state;
      return {
        ...state,
        column: state.column + 1
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
    case 'MOVE_LEFT':
    case 'MOVE_RIGHT':
      return state.map(c => card(c, action));
    default:
      return state;
  }
}

export default cards;