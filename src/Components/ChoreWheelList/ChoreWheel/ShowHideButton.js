import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ShowHideButton extends Component
{
  render() {
    if (this.props.choreWheel.isVisible) {
      return (
        <Button
          variant="link"
          onClick={() => this.props.onHideClick(this.props.choreWheel.id)}
        >
         <FontAwesomeIcon icon="eye" />
        </Button>
      );
    }

    return (
      <Button
        variant="link"
        onClick={() => this.props.onShowClick(this.props.choreWheel.id)}
      >
       <FontAwesomeIcon icon="eye-slash" />
      </Button>
    );
  }
}

export default ShowHideButton;
