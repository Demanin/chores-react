import ChoreWheelList from 'src/Components/ChoreWheelList';
import { connect } from 'react-redux';
import getVisibleChoreWheels from 'src/Actions/getVisibleChoreWheels';
import patchChoreWheel from 'src/Actions/patchChoreWheel';
import refreshWheels from 'src/Actions/refreshWheels';
import removeChoreWheel from 'src/Actions/removeChoreWheel';

const mapStateToProps = (state) => {
  return {
    fullChoreWheelList: state.choreWheelList,
    choreWheelList: getVisibleChoreWheels(state.choreWheelList, state.visibilityFilter),
    refresh: state.choreWheelList.refresh,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowClick: (id) => {
      const patchedChoreWheel = {
        isVisible: true,
      };

      dispatch(patchChoreWheel(id, patchedChoreWheel));
    },
    onHideClick: (id) => {
      const patchedChoreWheel = {
        isVisible: false,
      };

      dispatch(patchChoreWheel(id, patchedChoreWheel));
    },
    onRemoveWheelClick: (id) => {
      dispatch(removeChoreWheel(id));
    },
    refreshWheels: (choreWheelList) => {
      dispatch(refreshWheels(choreWheelList));
    },
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    refreshWheels: () => {
      dispatchProps.refreshWheels(stateProps.fullChoreWheelList)
    },
  };
};

const VisibleList = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
) (ChoreWheelList);

export default VisibleList;
