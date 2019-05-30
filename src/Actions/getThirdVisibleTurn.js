
const getThirdVisibleTurn = (choreWheel, userList) => {
  const turn = choreWheel.turnList[2];
  if (!turn) {
    return null;
  }

  const userId = turn.userId;
  if (!(userId in userList)) {
    return null;
  }

  return userList[userId].name;
};

export default getThirdVisibleTurn;
