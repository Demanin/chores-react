import AddTurn from 'src/Components/ChoreWheelList/ChoreWheel/AddTurn';
import allowAddTurn from 'src/Actions/allowAddTurn';
import { connect } from 'react-redux';
import patchChoreWheel from 'src/Actions/patchChoreWheel';

const mapStateToProps = (state) => {
  return {
    userList: Object.values(state.userList),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEditClick: () => {
      dispatch(allowAddTurn(ownProps.choreWheel.id));
    },
    onSaveClick: (turn) => {
      const patchedChoreWheel = {
        turnList: [
          ...ownProps.choreWheel.turnList,
          turn,
        ],
      };

      dispatch(patchChoreWheel(ownProps.choreWheel.id, patchedChoreWheel));
    },
  };
};

const WheelTurnAdder = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTurn);

export default WheelTurnAdder;
