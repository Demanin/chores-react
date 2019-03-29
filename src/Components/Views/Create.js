import React, { Component } from 'react';

class Create extends Component {
  render() {
    return (
      <div>
        <h2>Create a Wheel</h2>

        <p>
          {"Enter the name of the wheel below. The turn list should be formatted as each turn's name separated by a new line."}
        </p>

        <form action="/wheels" method="POST">
          <label for="name">Name:</label>
          <br />
          <input type="text" name="name" />
          <br />
          <br />
          <label for="turnList">Turn List:</label>
          <br />
          <textarea rows="10" cols="50" name="turnList">
          </textarea>
          <br />
          <br />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default Create;
