import AddTurn from '../Components/ChoreWheelList/ChoreWheel/AddTurn';
import allowAddTurn from '../Actions/allowAddTurn';
import { connect } from 'react-redux';
import saveAddTurn from '../Actions/saveAddTurn';

const mapStateToProps = (state, ownProps) => {
  return {
    userList: Object.values(state.userList),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEditClick: () => {
      dispatch(allowAddTurn(ownProps.choreWheel.id))
    },
    onSaveClick: (turn) => {
      dispatch(saveAddTurn(ownProps.choreWheel.id, turn))
    },
  };
};

const WheelTurnAdder = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTurn);

export default WheelTurnAdder;
