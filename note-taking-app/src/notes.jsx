import React, { Component } from "react";

export class Notes extends Component {
  currentDate() {
    return new Date().toLocaleDateString();
  }

  addTitle() {
    return prompt("enter Title");
  }

  addContent() {
    return prompt("enter content");
  }

  render() {
    return (
      <div className="note">
        <div>Note ID: {this.props.cardCounter}</div>
        <div>Created Date: {this.currentDate()}</div>
        {/* <div>Title: {this.addTitle()}</div>
        <div>Content: {this.addContent()}</div> */}
      </div>
    );
  }
}
