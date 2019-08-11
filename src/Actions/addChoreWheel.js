
const addChoreWheel = (ownerId, isVisible) => {
  return async (dispatch) => {
    const response = await fetch(
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
          isVisible,
        }),
        method: 'POST',
      }
    );

    let result;
    try {
      result = await response.json();
    } catch (error) {
      console.log(error);
      dispatch({type: 'HANDLE_LOAD_ERROR'});

      return;
    }

    dispatch({
      type: 'ADD_CHORE_WHEEL',
      isEditable: true,
      ...result,
    });
  }
};

export default addChoreWheel;
