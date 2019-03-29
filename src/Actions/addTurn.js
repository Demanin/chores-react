
const addTurn = (choreWheel, turn) => {
  return {
    type: 'ADD_TURN',
    id: choreWheel.id,
    turn,
    index: choreWheel.turnList.length
  };
}

export default addTurn;
