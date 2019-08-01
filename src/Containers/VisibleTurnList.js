import Turn from '../Components/ChoreWheelList/ChoreWheel/Turn';
import completeTurn from '../Actions/completeTurn';
import { connect } from 'react-redux';
import getNameList from '../Actions/getNameList';
import removeTurn from '../Actions/removeTurn';
import skipTurn from '../Actions/skipTurn';

const mapStateToProps = (state, ownProps) => {
  return {
    turnList: getNameList(ownProps.choreWheel, state.userList),
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
    },
  };
};

const VisibleTurn = connect(
  mapStateToProps,
  mapDispatchToProps
) (Turn);

export default VisibleTurn;
