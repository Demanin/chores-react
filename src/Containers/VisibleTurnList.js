import Turn from '../Components/ChoreWheelList/ChoreWheel/Turn';
import { connect } from 'react-redux';
import getNameList from '../Actions/getNameList';
import patchChoreWheel from '../Actions/patchChoreWheel';

const mapStateToProps = (state, ownProps) => {
  return {
    turnList: getNameList(ownProps.choreWheel, state.userList),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCompleteClick: () => {
      const choreWheel = ownProps.choreWheel;
      const maximumIndex = choreWheel.turnList.length;
      const newCurrentTurn = (choreWheel.currentTurn + 1) % maximumIndex;
      const patchedChoreWheel = {
        currentTurn: newCurrentTurn,
      };

      dispatch(patchChoreWheel(choreWheel.id, patchedChoreWheel));
    },
    onSkipClick: () => {
      const choreWheel = ownProps.choreWheel;
      let patchedChoreWheel;
      if (choreWheel.currentTurn === choreWheel.turnList.length) {
        patchedChoreWheel = {
          turnList: [
            ...choreWheel.turnList.slice(0, -1),
            ...choreWheel.turnList.slice(-1),
          ],
        };
      } else {
        patchedChoreWheel = {
          turnList: {
            ...choreWheel.turnList.slice(0, choreWheel.currentTurn),
            ...choreWheel.turnList.slice(choreWheel.currentTurn + 1, 1),
            ...choreWheel.turnList.slice(choreWheel.currentTurn, 1),
            ...choreWheel.turnList.slice(choreWheel.currentTurn + 2),
          },
        };
      }

      dispatch(patchChoreWheel(choreWheel.id, patchedChoreWheel));
    },
    onRemoveClick: () => {
      const choreWheel = ownProps.choreWheel;
      const patchedChoreWheel = {
        turnList: choreWheel.turnList.filter(
          (turn, currentIndex) => choreWheel.currentTurn !== currentIndex
        ),
      };

      dispatch(patchChoreWheel(choreWheel.id, patchedChoreWheel));
    },
  };
};

const VisibleTurn = connect(
  mapStateToProps,
  mapDispatchToProps
) (Turn);

export default VisibleTurn;
