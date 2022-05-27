import React, { Component } from "react";

export class Notes extends Component {
  //   chooseDate() {
  //     return <input type="date" id="date"></input>;
  //   }

  inputText() {
    return <input type="text"></input>;
  }

  render() {
    return (
      <div className="note">
        {/* {this.chooseDate()} */}
        {this.inputText()}
      </div>
    );
  }
}
