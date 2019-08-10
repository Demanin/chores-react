import Button from 'src/Components/Footer/Button';
import { connect } from 'react-redux';
import setVisiblityFilter from 'src/Actions/setVisiblityFilter';

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.visibilityFilter === ownProps.filter,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisiblityFilter(ownProps.filter))
    },
  };
};

const FilterButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default FilterButton;
