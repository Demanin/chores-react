
const addChoreWheel = (ownerId, priority, isVisible) => {
  return (dispatch) => {
    return fetch(
      process.env.REACT_APP_SERVER + '/api/wheels',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: '...',
          turnList: [],
          ownerId,
          priority,
          isVisible,
        }),
        method: 'POST',
      }
    )
      .then(res => res.json())
      .then(
        (result) => {
          dispatch({
            type: 'ADD_CHORE_WHEEL',
            isEditable: true,
            ...result,
          });
        },
        (error) => {
          console.log(error);
          dispatch({type: 'HANDLE_LOAD_ERROR'});
        }
      );
  }
};

export default addChoreWheel;
