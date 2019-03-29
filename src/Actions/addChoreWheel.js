
const addChoreWheel = (dispatch) => {
  return fetch(
      '/api/wheels',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'title': '...',
          'turnList': []
        }),
        method: 'POST'
      }
    )
    .then(res => res.json())
    .then(
      (result) => {
        dispatch({
          type: 'ADD_CHORE_WHEEL',
          id: result._id,
          title: result.title,
          turnList: result.turnList,
          isEditable: true,
          isVisible: true
        });
      },
      (error) => {
        console.log(error);
        dispatch({type: 'HANDLE_LOAD_ERROR'});
      }
    );
};

export default addChoreWheel;
