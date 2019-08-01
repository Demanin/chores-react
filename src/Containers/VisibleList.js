import ChoreWheelList from '../Components/ChoreWheelList';
import { connect } from 'react-redux';
import getVisibleChoreWheels from '../Actions/getVisibleChoreWheels';
import hideChoreWheel from '../Actions/hideChoreWheel';
import removeChoreWheel from '../Actions/removeChoreWheel';
import removeTurn from '../Actions/removeTurn';
import showChoreWheel from '../Actions/showChoreWheel';

const mapStateToProps = (state) => {
  return {
    choreWheelList: getVisibleChoreWheels(state.choreWheelList, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowClick: (id) => {
      dispatch(showChoreWheel(id));
    },
    onHideClick: (id) => {
      dispatch(hideChoreWheel(id));
    },
    onRemoveWheelClick: (id) => {
      dispatch(removeChoreWheel(id));
    },
    onRemoveTurnClick: (id, index) => {
      dispatch(removeTurn(id, index))
    },
  };
};

const VisibleList = connect(
  mapStateToProps,
  mapDispatchToProps
) (ChoreWheelList);

export default VisibleList;
