import React, { Component } from "react";
import { Note } from "./notes";

export class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: (localStorage.num = this.props.cardCounter),
    };
  }

  note() {
    return <Note cardCounter={this.props.cardCounter}></Note>;
  }

  addNoteToStorage() {
    let a = this.note;
    console.log(a);
    console.log(12);
    localStorage.cardCounter = this.note;
    Object.assign(localStorage.Notes, { 1: a });
  }

  render() {
    return (
      <div className="noteGrid">
        {this.addNoteToStorage.bind(this)}
        {localStorage.Notes}
      </div>
    );
  }
}
