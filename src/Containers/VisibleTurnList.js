import { connect } from 'react-redux';
import Turn from '../Components/ChoreWheelList/ChoreWheel/Turn';
import getVisibleTurn from '../Actions/getVisibleTurn';
import getNextVisibleTurn from '../Actions/getNextVisibleTurn';
import getThirdVisibleTurn from '../Actions/getThirdVisibleTurn';
import completeTurn from '../Actions/completeTurn';
import skipTurn from '../Actions/skipTurn';
import removeTurn from '../Actions/removeTurn';

const mapStateToProps = (state, ownProps) => {
  return {
    turn: getVisibleTurn(ownProps.choreWheel, state.userList),
    nextTurn: getNextVisibleTurn(ownProps.choreWheel, state.userList),
    thirdTurn: getThirdVisibleTurn(ownProps.choreWheel, state.userList)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCompleteClick: () => {
      dispatch(completeTurn(ownProps.choreWheel.id));
    },
    onSkipClick: (position) => {
      dispatch(skipTurn(ownProps.choreWheel.id));
    },
    onRemoveClick: (turn) => {
      dispatch(removeTurn(ownProps.choreWheel.id));
    }
  };
};

const VisibleTurn = connect(
  mapStateToProps,
  mapDispatchToProps
) (Turn);

export default VisibleTurn;
