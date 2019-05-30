
const saveWheelTitle = (id, title) => {
  if ('' === title) {
    return {
      type: 'SAVE_WHEEL_TITLE',
      id,
      title: '...',
    };
  }

  return {
    type: 'SAVE_WHEEL_TITLE',
    id,
    title,
  };
};

export default saveWheelTitle;
