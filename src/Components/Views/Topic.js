import React, { Component } from 'react';

class Topic extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.match.params.topicId}</h3>
      </div>
    );
  }
}

export default Topic;
