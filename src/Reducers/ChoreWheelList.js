import choreWheel from './ChoreWheel';

const ChoreWheelList = (state = {refresh: false, byId: {}, allIds: []}, action) => {
  switch (action.type) {
    case 'TOGGLE_REFRESH':
      return {
        ...state,
        refresh: !state.refresh,
      };
    case 'ADD_CHORE_WHEEL':
      if (state.allIds.includes(action.id)) {
        return ChoreWheelList(state, {...action, type: 'OVERWRITE_CHORE_WHEEL'});
      }

      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            id: action.id,
            title: {
              text: action.title || '',
              isEditable: action.isEditable,
            },
            turnList: action.turnList || [],
            isVisible: action.isVisible,
            priority: action.priority,
            currentTurn: action.currentTurn,
            allowAddTurn: false,
          },
        },
        allIds: [...state.allIds, action.id],
      };
    case 'OVERWRITE_CHORE_WHEEL':
      if (!state.allIds.includes(action.id)) {
        return ChoreWheelList(state, {...action, type: 'ADD_CHORE_WHEEL'});
      }

      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            id: action.id,
            title: {
              text: action.title || '',
              isEditable: action.isEditable,
            },
            turnList: action.turnList || [],
            isVisible: action.isVisible,
            priority: action.priority,
            currentTurn: action.currentTurn,
            allowAddTurn: false,
          },
        },
      };
    case 'REMOVE_CHORE_WHEEL':
      return {
        ...state,
        byId: Object.keys(state.byId).reduce((object, id) => {
          if (parseInt(id, 10) === action.id) {
            return object;
          }

          return {
            ...object,
            [id]: state.byId[id],
          };
        }, {}),
        allIds: state.allIds.filter((id) => id !== action.id),
      };
    case 'HANDLE_LOAD_ERROR':
      return state;
    default:
      if (!state.allIds.includes(action.id)) {
        return state;
      }

      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: choreWheel(state.byId[action.id], action),
        },
      };
  }
};

export default ChoreWheelList;
