import { connect } from 'react-redux';
import Turn from '../Components/ChoreWheelList/ChoreWheel/Turn';
import getNameList from '../Actions/getNameList';
import completeTurn from '../Actions/completeTurn';
import skipTurn from '../Actions/skipTurn';
import removeTurn from '../Actions/removeTurn';

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
    }
  };
};

const VisibleTurn = connect(
  mapStateToProps,
  mapDispatchToProps
) (Turn);

export default VisibleTurn;
