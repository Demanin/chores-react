import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

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

ShowHideButton.propTypes = {
  choreWheel: PropTypes.shape({
    isVisible: PropTypes.bool,
    id: PropTypes.number,
  }),
  onHideClick: PropTypes.func,
  onShowClick: PropTypes.func,
};

export default ShowHideButton;
