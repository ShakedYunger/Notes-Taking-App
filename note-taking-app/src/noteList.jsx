import React, { Component } from "react";
import { Notes } from "./notes";

export class NoteList extends Component {
  a() {
    // this.setState({ cardCounter: this.state.cardCounter + 1 });
    console.log(this);
    // return <NoteList cardCounter={this.state.cardCounter} />;
  }

  render() {
    return (
      <div>
        <button onClick={this.a.bind(this)}>shaked</button>
        <Notes cardCounter={this.props.cardCounter}></Notes>
      </div>
    );
  }
}
