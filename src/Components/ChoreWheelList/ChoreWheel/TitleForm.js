import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class TitleForm extends Component
{
  constructor(props) {
    super(props);

    this.handleChange  = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      value: props.title
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.props.onSave(this.state.value);
    }
  }

  render() {
    return (
      <FormGroup
        controlId={"title-editor-" + this.props.id}
      >
        <FormControl
          autoFocus
          value={this.state.value}
          onChange={this.handleChange}
          onBlur={() => this.props.onSave(this.state.value)}
          onKeyDown={this.handleKeyDown}
        />
      </FormGroup>
    );
  }
}

export default TitleForm;
