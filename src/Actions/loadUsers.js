
const loadUsers = async (dispatch) => {
  const result = await fetch(
    process.env.REACT_APP_SERVER + '/api/users',
    {headers: {'Accept': 'application/json'}},
  );

  let userList;
  try {
    userList = await result.json();
  } catch (error) {
    console.log(error);
    dispatch({type: 'HANDLE_LOAD_ERROR'});

    return;
  }

  userList.forEach((user) => {
    dispatch({
      type: 'ADD_USER',
      ...user,
    });
  });
}

export default loadUsers;
