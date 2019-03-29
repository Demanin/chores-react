
const getVisibleChoreWheels = (choreWheelList, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return choreWheelList;
    case 'SHOW_VISIBLE':
      return choreWheelList.filter(choreWheel => choreWheel.isVisible);
    case 'SHOW_HIDDEN':
      return choreWheelList.filter(choreWheel => !choreWheel.isVisible);
    default:
      return choreWheelList;
  }
};

export default getVisibleChoreWheels;
