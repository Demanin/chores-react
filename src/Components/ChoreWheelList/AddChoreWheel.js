import React, { Component } from 'react';
import { Button as BsButton } from 'react-bootstrap';
import PropTypes from 'prop-types';

class AddChoreWheel extends Component
{
  render() {
    return (
      <div>
        <BsButton variant="success"
          onClick={this.props.onClick}
        >
          Add Chore Wheel
        </BsButton>
        <hr />
      </div>
    );
  }
}

AddChoreWheel.propTypes = {
  onClick: PropTypes.func,
};

export default AddChoreWheel;
