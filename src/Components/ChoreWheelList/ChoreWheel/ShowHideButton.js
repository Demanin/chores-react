import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class ShowHideButton extends Component
{
  render() {
    if (this.props.choreWheel.isVisible) {
      return (
        <Button
          bsStyle="link"
          onClick={() => this.props.onHideClick(this.props.choreWheel.id)}
        >
         <Glyphicon glyph="eye-open" />
        </Button>
      );
    }

    return (
      <Button
        bsStyle="link"
        onClick={() => this.props.onShowClick(this.props.choreWheel.id)}
      >
       <Glyphicon glyph="eye-close" />
      </Button>
    );
  }
}

export default ShowHideButton;
