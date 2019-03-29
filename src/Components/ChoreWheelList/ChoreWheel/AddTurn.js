import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

class AddTurn extends Component
{
  constructor(props) {
    super(props);

    this.handleChange  = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.props.onSaveClick(this.state.value);
      event.target.value = '';
    }
  }

  render() {
    if (!this.props.choreWheel.allowAddTurn) {
      return (
        <Button
          bsStyle="success"
          onClick={this.props.onEditClick}
        >
         <Glyphicon glyph="plus" /> Add New Turn
        </Button>
      );
    }

    return (
      <div>
        <FormGroup
          controlId={"turn-adder-" + this.props.id}
          bsSize="sm"
        >
          <FormControl
            autoFocus
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            onBlur={() => this.props.onSaveClick(this.state.value)}
          />
        </FormGroup>
      </div>
    );
  }
}

export default AddTurn;
