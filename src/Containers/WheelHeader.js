import Title from '../Components/ChoreWheelList/ChoreWheel/Title';
import { connect } from 'react-redux';
import editWheelTitle from '../Actions/editWheelTitle';
import patchChoreWheel from '../Actions/patchChoreWheel';

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
