
const getNameList = (choreWheel, userList) => {
  const turnList = choreWheel.turnList.map(
    (turn) => {
      if (!userList.hasOwnProperty(turn.userId)) {
        return '--- Unknown User ---';
      }

      return userList[turn.userId].name;
    }
  );

  return [
    ...turnList.slice(choreWheel.currentTurn),
    ...turnList.slice(0, choreWheel.currentTurn),
  ];
};

export default getNameList;
