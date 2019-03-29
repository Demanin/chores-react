import React, { Component } from 'react';
import { Button as BsButton } from 'react-bootstrap';

class Button extends Component
{
  render() {
    return (
      <BsButton
        disabled={this.props.active}
        onClick={() => this.props.onClick()}
      >
        {this.props.children}
      </BsButton>
    );
  }
}

export default Button;
