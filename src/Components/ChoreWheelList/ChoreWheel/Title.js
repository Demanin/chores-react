import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleForm from 'Components/ChoreWheelList/ChoreWheel/TitleForm';

class Title extends Component
{
  render() {
    if (!this.props.choreWheel.title.isEditable) {
      return (
        <h3
          style={{marginTop: '0px'}}
          onClick={this.props.onEditClick}
        >
          {this.props.choreWheel.title.text}
        </h3>
      );
    }

    return (
      <TitleForm
        choreWheel={this.props.choreWheel}
        title={this.props.choreWheel.title.text}
        onSave={this.props.onSaveClick}
      />
    );
  }
}

Title.propTypes = {
  choreWheel: PropTypes.shape({
    id: PropTypes.number,
    turnList: PropTypes.arrayOf(
      PropTypes.shape({ userId: PropTypes.number }),
    ),
    title: PropTypes.shape({
      text: PropTypes.string,
      isEditable: PropTypes.bool,
    }),
    isVisible: PropTypes.bool,
    priority: PropTypes.number,
  }),
  onEditClick: PropTypes.func,
  onSaveClick: PropTypes.func,
};

export default Title;
