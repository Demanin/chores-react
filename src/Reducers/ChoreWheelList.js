import choreWheel from './ChoreWheel';

const ChoreWheelList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHORE_WHEEL':
      return [
        ...state,
        {
          id: action.id,
          title: {
            text: action.title || '',
            isEditable: action.isEditable,
          },
          turnList: action.turnList || [],
          isVisible: action.isVisible,
          allowAddTurn: false
        }
      ];
    case 'REMOVE_CHORE_WHEEL':
      return state.filter(choreWheel => {
        return choreWheel.id !== action.id
      })
    case 'LOAD_WHEELS':
      return action.result
    case 'HANDLE_LOAD_ERROR':
      return state;
    default:
      return state.map(childState => choreWheel(childState, action));
  }
};

export default ChoreWheelList;
