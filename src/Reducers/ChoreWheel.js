
const ChoreWheel = (state = [], action) => {
  switch (action.type) {
    case 'HIDE_CHORE_WHEEL':
      return {
        ...state,
        isVisible: false,
      };
    case 'SHOW_CHORE_WHEEL':
      return {
        ...state,
        isVisible: true,
      };
    case 'ALLOW_ADD_TURN':
      return {
        ...state,
        allowAddTurn: true,
      };
    case 'STOP_ADD_TURN':
      return {
        ...state,
        allowAddTurn: false,
      };
    case 'ADD_TURN':
      return {
        ...state,
        turnList: [
          ...state.turnList,
          { userId: action.turn },
        ],
        allowAddTurn: false,
      };
    case 'COMPLETE_TURN':
      return {
        ...state,
        turnList: [
          ...state.turnList.slice(1),
          ...state.turnList.slice(0, 1),
        ],
      };
    case 'SKIP_TURN':
      return {
        ...state,
        turnList: [
          ...state.turnList.slice(1, 2),
          ...state.turnList.slice(0, 1),
          ...state.turnList.slice(2),
        ],
      };
    case 'REMOVE_TURN':
      return {
        ...state,
        turnList: [
          ...state.turnList.slice(1),
        ],
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
