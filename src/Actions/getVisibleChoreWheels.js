
const getVisibleChoreWheels = (choreWheelList, filter) => {
  const relevantList = getRelevantList(choreWheelList, filter);

  return relevantList.sort((first, second) => {
    return (first.priority - second.priority);
  });
};

const getRelevantList = (choreWheelList, filter) => {
  const wheelObjectList = Object.values(choreWheelList.byId);

  switch (filter) {
    case 'SHOW_ALL':
      return wheelObjectList;
    case 'SHOW_VISIBLE':
      return wheelObjectList.filter(choreWheel => choreWheel.isVisible);
    case 'SHOW_HIDDEN':
      return wheelObjectList.filter(choreWheel => !choreWheel.isVisible);
    default:
      return wheelObjectList;
  }
};

export default getVisibleChoreWheels;
