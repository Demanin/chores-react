import React, { Component } from 'react';
import { Button as BsButton } from 'react-bootstrap';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string,
};

export default Button;
