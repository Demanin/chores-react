
const getVisibleTurn = (choreWheel, userList) => {
  const turn = choreWheel.turnList[0];
  if (!turn) {
    return null;
  }

  const userId = turn.userId;
  if (!(userId in userList)) {
    return "Loading...";
  }

  return userList[userId].name;
};

export default getVisibleTurn;
