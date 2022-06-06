import React, { Component } from "react";
import { Notes } from "./notes";

export class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCounter: 1,
    };
  }

  render() {
    return (
      <div>
        <Notes cardCounter={this.state.cardCounter}></Notes>
      </div>
    );
  }
}
