
const getVisibleChoreWheels = (choreWheelList, filter) => {
  const relevantList = getRelevantList(choreWheelList, filter);

  return relevantList.sort((first, second) => {
    return (first.priority - second.priority);
  });
};

const getRelevantList = (choreWheelList, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return Object.values(choreWheelList.byId);
    case 'SHOW_VISIBLE':
      return Object.values(choreWheelList.byId).filter(choreWheel => choreWheel.isVisible);
    case 'SHOW_HIDDEN':
      return Object.values(choreWheelList.byId).filter(choreWheel => !choreWheel.isVisible);
    default:
      return Object.values(choreWheelList.byId);
  }
};

export default getVisibleChoreWheels;
