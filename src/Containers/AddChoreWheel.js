import BaseAddChoreWheel from 'src/Components/ChoreWheelList/AddChoreWheel';
import addChoreWheel from 'src/Actions/addChoreWheel';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    visibilityFilter: state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (isVisible) => {
      dispatch(addChoreWheel(1, isVisible));
    },
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    onClick: () => {
      if ('SHOW_HIDDEN' === stateProps.visibilityFilter) {
        dispatchProps.onClick(false);

        return;
      }

      dispatchProps.onClick(true);
    },
  };
};

const AddChoreWheel = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(BaseAddChoreWheel);

export default AddChoreWheel;
