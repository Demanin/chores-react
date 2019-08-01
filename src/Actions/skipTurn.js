
const skipTurn = (id) => {
  return {
    type: 'SKIP_TURN',
    id,
  };
};

export default skipTurn;
