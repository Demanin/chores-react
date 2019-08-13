import toggleRefresh from 'src/Actions/toggleRefresh';

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

    const refreshedIdList = refreshedList.map((wheel) => wheel.id);
    let deletedWheelIdList = choreWheelList.allIds.filter((id) => !refreshedIdList.includes(id));
    deletedWheelIdList.forEach((id) => {
      dispatch({
        type: 'REMOVE_CHORE_WHEEL',
        id,
      });
    });

    const newList = refreshedList.filter((wheel) => !choreWheelList.allIds.includes(wheel.id));
    newList.forEach((refreshedWheel) => {
      dispatch({
        type: 'ADD_CHORE_WHEEL',
        ...refreshedWheel,
      });
    });

    const existingList = refreshedList.filter((wheel) => choreWheelList.allIds.includes(wheel.id));
    existingList.forEach((refreshedWheel) => {
      dispatch({
        type: 'OVERWRITE_CHORE_WHEEL',
        isEditable: false,
        ...refreshedWheel,
      });
    });
  };
}

export default refreshWheels;
