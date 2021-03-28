import { Button, FormControl, FormGroup } from 'react-bootstrap';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class AddTurn extends Component
{
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
    };
  }

  handleChange(event) {
    this.props.onSaveClick(event.target.value)
  }

  render() {
    if (!this.props.choreWheel.allowAddTurn) {
      return (
        <Button
          variant="success"
          onClick={this.props.onEditClick}
        >
          <FontAwesomeIcon icon="plus" /> Add New Turn
        </Button>
      );
    }

    return (
      <div>
        <FormGroup
          controlId={'turn-adder-' + this.props.id}
          size="sm"
        >
          <FormControl
            as="select"
            onChange={this.handleChange}
          >
            <option key="-1" value="-1">Select a user</option>
            {this.props.userList.map((user, index) => {
              return (<option key={index} value={user.id}>{user.name}</option>);
            })}
          </FormControl>
        </FormGroup>
      </div>
    );
  }
}

AddTurn.propTypes = {
  choreWheel: PropTypes.shape({ allowAddTurn: PropTypes.bool }),
  onSaveClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  userList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  id: PropTypes.number,
};

export default AddTurn;
