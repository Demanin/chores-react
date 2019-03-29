
const removeChoreWheel = (id) => {
  return (dispatch) => {
    return fetch(
        '/api/wheels/' + id,
        {
          headers: {
            'Accept': 'application/json'
          },
          method: 'DELETE'
        }
      )
      .then(
        (result) => {
          dispatch({
            type: 'REMOVE_CHORE_WHEEL',
            id
          });
        },
        (error) => {
          console.log(error);
          dispatch({type: 'HANDLE_LOAD_ERROR'});
        }
      );
  };
};

export default removeChoreWheel;
