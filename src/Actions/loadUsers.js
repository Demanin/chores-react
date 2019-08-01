
const loadUsers = (dispatch) => {
  return fetch(process.env.REACT_APP_SERVER + '/api/users', {headers: {'Accept': 'application/json'}})
    .then(res => res.json())
    .then(
      (result) => {
        result.forEach((user) => {
          dispatch({
            type: 'ADD_USER',
            ...user,
          });
        });
      },
      (error) => {
        console.log(error);
        dispatch({type: 'HANDLE_LOAD_ERROR'});
      }
    );
}

export default loadUsers;
