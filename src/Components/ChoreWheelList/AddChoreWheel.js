import React, { Component } from 'react';
import { connect } from 'react-redux';
import addChoreWheel from '../../Actions/addChoreWheel';
import { Button as BsButton } from 'react-bootstrap';

class AddChoreWheel extends Component
{
  render() {
    return (
      <div>
        <BsButton bsStyle="success"
          onClick={() => {
            this.props.dispatch(addChoreWheel);
          }
        }>
          Add Chore Wheel
        </BsButton>
        <hr />
      </div>
    );
  }
}

AddChoreWheel = connect()(AddChoreWheel);

export default AddChoreWheel;
