import toggleRefresh from './toggleRefresh';

const patchChoreWheel = (id, patchedChoreWheel) => {
  return async (dispatch) => {
    const response = await fetch(
      process.env.REACT_APP_SERVER + '/api/wheels/' + id,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patchedChoreWheel),
        method: 'PATCH',
      }
    );

    try {
      await response.json();
    } catch (error) {
      console.log(error);
      dispatch({type: 'HANDLE_LOAD_ERROR'});

      return;
    }

    dispatch(toggleRefresh());
  };
}

export default patchChoreWheel;
