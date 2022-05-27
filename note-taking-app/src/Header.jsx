import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* <h1>Note-Taking-App</h1> */}
        <button type="button" class="primaryButton">
          Add note
        </button>
      </div>
    );
  }
}
