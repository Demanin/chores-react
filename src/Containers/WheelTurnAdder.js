import { connect } from 'react-redux';
import AddTurn from '../Components/ChoreWheelList/ChoreWheel/AddTurn';
import allowAddTurn from '../Actions/allowAddTurn';
import saveAddTurn from '../Actions/saveAddTurn';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEditClick: () => {
      dispatch(allowAddTurn(ownProps.choreWheel.id))
    },
    onSaveClick: (turn) => {
      dispatch(saveAddTurn(ownProps.choreWheel.id, turn))
    }
  };
};

const WheelTurnAdder = connect(
  null,
  mapDispatchToProps
)(AddTurn);

export default WheelTurnAdder;
