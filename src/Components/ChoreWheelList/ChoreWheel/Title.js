import React, { Component } from 'react';
import TitleForm from './TitleForm';

class Title extends Component
{
  render() {
    if (!this.props.title.isEditable) {
      return (
        <h3
          style={{marginTop: '0px'}}
          onClick={this.props.onEditClick}
        >
          {this.props.title.text}
        </h3>
      );
    }

    return (
      <TitleForm
        id={this.props.id}
        title={this.props.title.text}
        onSave={this.props.onSaveClick}
      />
    );
  }
}

export default Title;
