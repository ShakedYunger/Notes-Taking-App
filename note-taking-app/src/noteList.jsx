import React, { Component } from "react";
import { Notes } from "./notes";

export class NoteList extends Component {
  render() {
    return (
      <div>
        <Notes></Notes>
        <Notes></Notes>
      </div>
    );
  }
}
