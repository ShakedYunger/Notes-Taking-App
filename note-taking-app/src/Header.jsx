import React, { Component } from "react";
import { NoteList } from "./noteList";
import { Note as Note } from "./notes";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCounter: 0,
    };
  }

  newDiv(currnetState) {
    console.log(currnetState);
    return (
      <div className="noteGrid">
        <h1>sdfouasgdiuogasiuy</h1>
        {/* <NoteList cardCounter={currnetState}></NoteList> */}
        <Note cardCounter={currnetState}></Note>
      </div>
    );
  }

  // const addNote = () =>{}

  addNote() {
    this.setState((prevState) => {
      return { cardCounter: prevState.cardCounter + 1 };
    });
    return this.newDiv(this.state.cardCounter);
  }

  render() {
    return (
      <div>
        <div className="header">
          <button
            type="button"
            className="primaryButton"
            onClick={this.addNote.bind(this)}
          >
            Add note
          </button>
          <h1 style={{ color: "#AD858D" }}>Note-Taking-App</h1>
        </div>
        <NoteList cardCounter={this.state.cardCounter}></NoteList>
      </div>
    );
  }
}
