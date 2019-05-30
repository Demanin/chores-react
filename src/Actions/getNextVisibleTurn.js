
const getNextVisibleTurn = (choreWheel, userList) => {
  const turn = choreWheel.turnList[1];
  if (!turn) {
    return null;
  }

  const userId = turn.userId;
  if (!(userId in userList)) {
    return null;
  }

  return userList[userId].name;
};

export default getNextVisibleTurn;
