
const saveAddTurn = (id, turn) => {
  if ('' === turn) {
    return {
      type: 'STOP_ADD_TURN',
      id,
    };
  }

  return {
    type: 'ADD_TURN',
    id,
    turn,
    index: 1,
  };
};

export default saveAddTurn;
