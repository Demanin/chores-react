import toggleRefresh from 'Actions/toggleRefresh';

const removeChoreWheel = (id) => {
  return async (dispatch) => {
    try {
      await fetch(
        process.env.REACT_APP_SERVER + '/api/wheels/' + id,
        {
          headers: {
            'Accept': 'application/json',
          },
          method: 'DELETE',
        },
      );
    } catch (error) {
      console.log(error);
      dispatch({type: 'HANDLE_LOAD_ERROR'});

      return;
    }

    dispatch(toggleRefresh());
  };
};

export default removeChoreWheel;
