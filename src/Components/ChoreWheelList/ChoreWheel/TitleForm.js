import { FormControl, FormGroup } from 'react-bootstrap';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleForm extends Component
{
  constructor(props) {
    super(props);

    this.handleChange  = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      value: props.title,
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

TitleForm.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  onSave: PropTypes.func,
};

export default TitleForm;
