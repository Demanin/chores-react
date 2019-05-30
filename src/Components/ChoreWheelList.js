import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ChoreWheel from './ChoreWheelList/ChoreWheel';

class ChoreWheelList extends Component
{
  render() {
    if (0 === this.props.choreWheelList.length) {
      return null;
    }

    return (
      <div>
        <Container>
          {this.props.choreWheelList.map((choreWheel, index) =>
            <ChoreWheel
              key={index}
              choreWheel={choreWheel}
              onAddClick={this.props.onAddClick}
              onShowClick={this.props.onShowClick}
              onHideClick={this.props.onHideClick}
              onRemoveWheelClick={this.props.onRemoveWheelClick}
              onRemoveTurnClick={this.props.onRemoveTurnClick}
            />
          )}
        </Container>
        <hr />
      </div>
    );
  }
}

export default ChoreWheelList;
