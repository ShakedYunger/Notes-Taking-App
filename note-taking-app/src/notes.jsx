import React, { Component } from "react";

class Notes extends Component {
  choseDate() {
    return <input type="date" id="date"></input>;
  }

  render() {
    return <div>{this.choseDate()}</div>;
  }
}

class NoteList extends Component {
  render() {
    return (
      <div>
        <Notes></Notes>
        <Notes></Notes>
      </div>
    );
  }
}

export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <NoteList></NoteList>
        <NoteList></NoteList>
      </div>
    );
  }
}
