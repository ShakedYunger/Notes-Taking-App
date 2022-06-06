import React, { Component } from "react";
import { NoteList } from "./noteList";
import { Notes } from "./notes";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCounter: 0,
    };
  }

  addNote() {
    this.setState({ cardCounter: this.state.cardCounter + 1 }, () => (
      <NoteList cardCounter={this.state.cardCounter}></NoteList>
    ));
    console.log(this.state.cardCounter);
  }

  render() {
    return (
      <div className="header">
        {/* <NoteList cardCounter={this.state.cardCounter}></NoteList> */}
        <h1 style={{ color: "#AD858D" }}>Note-Taking-App</h1>
        <button
          type="button"
          className="primaryButton"
          onClick={this.addNote.bind(this)}
        >
          Add note
        </button>
      </div>
    );
  }
}
