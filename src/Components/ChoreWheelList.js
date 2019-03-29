import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import ChoreWheel from './ChoreWheelList/ChoreWheel';

class ChoreWheelList extends Component
{
  render() {
    if (0 === this.props.choreWheelList.length) {
      return null;
    }

    return (
      <div>
        <Grid>
          {this.props.choreWheelList.map(choreWheel =>
            <ChoreWheel
              key={choreWheel.id}
              choreWheel={choreWheel}
              onAddClick={this.props.onAddClick}
              onShowClick={this.props.onShowClick}
              onHideClick={this.props.onHideClick}
              onRemoveWheelClick={this.props.onRemoveWheelClick}
              onRemoveTurnClick={this.props.onRemoveTurnClick}
            />
          )}
        </Grid>
        <hr />
      </div>
    );
  }
}

export default ChoreWheelList;
