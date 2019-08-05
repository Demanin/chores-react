import toggleRefresh from './toggleRefresh';

const refreshWheels = (choreWheelList) => {
  return async (dispatch) => {
    dispatch(toggleRefresh());
    const result = await fetch(
      process.env.REACT_APP_SERVER + '/api/wheels',
      {headers: {'Accept': 'application/json'}}
    );

    let refreshedList;
    try {
      refreshedList = await result.json();
    } catch (error) {
      console.log(error);
      dispatch({type: 'HANDLE_LOAD_ERROR'});

      return;
    }

    let deletedWheelList = choreWheelList.allIds;
    refreshedList.forEach((refreshedWheel) => {
      deletedWheelList = deletedWheelList.filter((id) => id !== refreshedWheel.id);
    });
    deletedWheelList.forEach((deletedWheel) => {
      dispatch({
        type: 'REMOVE_CHORE_WHEEL',
        id: deletedWheel,
      });
    });

    refreshedList.forEach((refreshedWheel) => {
      dispatch({
        type: 'ADD_CHORE_WHEEL',
        isEditable: false,
        ...refreshedWheel,
      });
    });
  };
}

export default refreshWheels;
