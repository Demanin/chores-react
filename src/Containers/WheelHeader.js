import Title from 'src/Components/ChoreWheelList/ChoreWheel/Title';
import { connect } from 'react-redux';
import editWheelTitle from 'src/Actions/editWheelTitle';
import patchChoreWheel from 'src/Actions/patchChoreWheel';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEditClick: () => {
      dispatch(editWheelTitle(ownProps.choreWheel.id));
    },
    onSaveClick: (title) => {
      const patchedChoreWheel = {
        title,
      };

      dispatch(patchChoreWheel(ownProps.choreWheel.id, patchedChoreWheel));
    },
  };
};

const WheelHeader = connect(
  null,
  mapDispatchToProps
)(Title);

export default WheelHeader;
