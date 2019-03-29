
const loadWheels = (dispatch) => {
  return fetch('/api/wheels', {headers: {'Accept': 'application/json'}})
    .then(res => res.json())
    .then(
      (result) => {
        result.forEach((wheel) => {
          dispatch({
            type: 'ADD_CHORE_WHEEL',
            id: wheel._id,
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
