import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Turn Order Wheels</h2>

        <nav>
          <a href="/create" className="button">Add Wheel</a>
        </nav>

        <div id="content">
          <span className="fa fa-spinner fa-spin"></span> Loading wheels...
        </div>
      </div>
    );
  }
}

export default Home;
