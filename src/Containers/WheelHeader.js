import { connect } from 'react-redux';
import Title from '../Components/ChoreWheelList/ChoreWheel/Title';
import editWheelTitle from '../Actions/editWheelTitle';
import saveWheelTitle from '../Actions/saveWheelTitle';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEditClick: () => {
      dispatch(editWheelTitle(ownProps.id))
    },
    onSaveClick: (title) => {
      dispatch(saveWheelTitle(ownProps.id, title))
    }
  };
};

const WheelHeader = connect(
  null,
  mapDispatchToProps
)(Title);

export default WheelHeader;
