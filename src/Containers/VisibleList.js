import { connect } from 'react-redux';
import ChoreWheelList from '../Components/ChoreWheelList';
import getVisibleChoreWheels from '../Actions/getVisibleChoreWheels';
import showChoreWheel from '../Actions/showChoreWheel';
import hideChoreWheel from '../Actions/hideChoreWheel';
import removeChoreWheel from '../Actions/removeChoreWheel';
import removeTurn from '../Actions/removeTurn';

const mapStateToProps = (state) => {
  return {
    choreWheelList: getVisibleChoreWheels(state.choreWheelList, state.visibilityFilter)
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
    }
  };
};

const VisibleList = connect(
  mapStateToProps,
  mapDispatchToProps
) (ChoreWheelList);

export default VisibleList;
