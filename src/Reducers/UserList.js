
const UserList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
        },
      };
    default:
      return state;
  }
};

export default UserList;
