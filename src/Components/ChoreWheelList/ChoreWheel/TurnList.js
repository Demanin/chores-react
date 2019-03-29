import React, { Component } from 'react';
import Turn from './Turn';

class TurnList extends Component
{
  render() {
    if (this.props.turnList.length === 0) {
      return null;
    }

    return (
      <div>
        {this.props.turnList.map((turn, index) =>
          <Turn
            key={index}
            turn={turn}
            onClick={() => this.props.onClick(this.props.choreWheelId, index)}
          />
        )}
      </div>
    );
  }
}

export default TurnList;
