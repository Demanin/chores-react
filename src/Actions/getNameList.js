
const getNameList = (choreWheel, userList) => {
  return choreWheel.turnList.map(
    (turn) => userList[turn.userId].name
  );
};

export default getNameList;
