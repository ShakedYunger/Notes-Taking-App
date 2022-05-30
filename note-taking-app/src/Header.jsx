import React, { Component } from "react";

export class Header extends Component {
  addNote() {
    console.log("Clicked");
  }

  render() {
    return (
      <div className="header">
        <h1 style={{ color: "#AD858D" }}>Note-Taking-App</h1>
        <button type="button" className="primaryButton" onClick={this.addNote}>
          Add note
        </button>
      </div>
    );
  }
}
