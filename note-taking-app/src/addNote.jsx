import React, { Component } from "react";

export class addNote extends Component {
  render() {
    return (
      <div>
        <input type="text" id="noteTitle"></input>
        <div id="noteBody"></div>
      </div>
    );
  }
}
