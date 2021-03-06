export const addCard = (label) => ({
  type: 'ADD_CARD',
  label: label
});

export const moveLeft = (id) => ({
  type: 'MOVE_LEFT',
  id
});

export const moveRight = (id) => ({
  type: 'MOVE_RIGHT',
  id
});

export const deleteCard = (id) => ({
  type: 'DELETE_CARD',
  id
});

export const moveCard = (colId, cardId) => ({
  type: 'MOVE_CARD',
  colId,
  cardId
});