
const loadWheels = async (dispatch) => {
  const result = await fetch(
    process.env.REACT_APP_SERVER + '/api/wheels',
    {headers: {'Accept': 'application/json'}}
  );

  let wheelList;
  try {
    wheelList = await result.json();
  } catch (error) {
    console.log(error);
    dispatch({type: 'HANDLE_LOAD_ERROR'});

    return;
  }

  wheelList.forEach((wheel) => {
    dispatch({
      type: 'ADD_CHORE_WHEEL',
      isEditable: false,
      ...wheel,
    });
  });
}

export default loadWheels;
