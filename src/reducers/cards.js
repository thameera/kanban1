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
    case 'DELETE_CARD':
      if (state.id === action.id) return false;
      return true;
    case 'MOVE_CARD':
      if (state.id !== action.cardId) return state;
      return {
        ...state,
        column: action.colId
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
    case 'DELETE_CARD':
      return state.filter(c => card(c, action));
    case 'MOVE_CARD':
      return state.map(c => card(c, action));
    default:
      return state;
  }
}

export default cards;