import React, { Component } from 'react';
import { Button as BsButton } from 'react-bootstrap';

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

export default AddChoreWheel;
