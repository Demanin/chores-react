import React, { Component } from 'react';
import ChoreWheel from 'src/Components/ChoreWheelList/ChoreWheel';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ChoreWheelList extends Component
{
  componentDidUpdate() {
    if (this.props.refresh === true) {
      this.props.refreshWheels();
    }
  }

  render() {
    if (0 === this.props.choreWheelList.length) {
      return null;
    }

    return (
      <div>
        <Container>
          {this.props.refresh &&
          <div>
            Refreshing...
          </div>
          }
          {this.props.choreWheelList.map((choreWheel, index) =>
            <ChoreWheel
              key={index}
              choreWheel={choreWheel}
              onShowClick={this.props.onShowClick}
              onHideClick={this.props.onHideClick}
              onRemoveWheelClick={this.props.onRemoveWheelClick}
            />
          )}
        </Container>
        <hr />
      </div>
    );
  }
}

ChoreWheelList.propTypes = {
  choreWheelList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      turnList: PropTypes.arrayOf(
        PropTypes.shape({ userId: PropTypes.number })
      ),
      title: PropTypes.shape({
        text: PropTypes.string,
        isEditable: PropTypes.bool,
      }),
      isVisible: PropTypes.bool,
      priority: PropTypes.number,
    })
  ),
  onShowClick: PropTypes.func,
  onHideClick: PropTypes.func,
  onRemoveWheelClick: PropTypes.func,
  refreshWheels: PropTypes.func,
  refresh: PropTypes.bool,
};

export default ChoreWheelList;
