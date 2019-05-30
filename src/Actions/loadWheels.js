
const loadWheels = (dispatch) => {
  return fetch(process.env.REACT_APP_SERVER + '/api/wheels', {headers: {'Accept': 'application/json'}})
    .then(res => res.json())
    .then(
      (result) => {
        result.forEach((wheel) => {
          dispatch({
            type: 'ADD_CHORE_WHEEL',
            isEditable: false,
            ...wheel
          });
        });
      },
      (error) => {
        console.log(error);
        dispatch({type: 'HANDLE_LOAD_ERROR'});
      }
    );
}

export default loadWheels;
