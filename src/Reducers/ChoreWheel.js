
const ChoreWheel = (state = {}, action) => {
  switch (action.type) {
    case 'ALLOW_ADD_TURN':
      return {
        ...state,
        allowAddTurn: true,
      };
    case 'EDIT_WHEEL_TITLE':
      return {
        ...state,
        title: {
          ...state.title,
          isEditable: true,
        },
      };
    case 'SAVE_WHEEL_TITLE':
      return {
        ...state,
        title: {
          text: action.title,
          isEditable: false,
        },
      };
    default:
      return state;
  }
};

export default ChoreWheel;
