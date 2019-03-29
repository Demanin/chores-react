import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Topic from './Topic';

class Edit extends Component {
  render() {
    return (
      <div>
        <h2>Edit Wheel</h2>
        <nav>
          <a href="#" id="delete-link">Delete</a>
        </nav>
        <p>
          {"Enter the name of the wheel below. The turn list should be formatted as each turn's name separated by a new line."}
        </p>
        <form action="/wheels" method="POST">
          <label for="name">Name:</label>
          <br />
          <input type="text" name="name" id="name" />
          <br />
          <br />
          <label for="turnList">Turn List:</label>
          <br />
          <textarea rows="10" cols="50" name="turnList" id="turnList">
          </textarea>
          <br />
          <input type="hidden" name="turn" id="turn" value="0" />
          <br />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default Edit;
