
const addTurn = (choreWheel, turn) => {
  return async (dispatch) => {
    const response = await fetch(
      process.env.REACT_APP_SERVER + '/api/wheels/' + choreWheel.id,
      {
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          turnList: [
            ...choreWheel.turnList,
            { userId: turn },
          ],
        }),
        method: 'PATCH',
      }
    );

    let result;
    try {
      result = await response.json();
    } catch (error) {
      console.log(error);

      return;
    }

    dispatch({
      type: 'ADD_TURN',
      id: choreWheel.id,
      turn,
      index: choreWheel.turnList.length,
    });
  };
}

export default addTurn;
