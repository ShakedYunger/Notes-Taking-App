import React, { Component } from "react";

export class Storage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: localStorage.color,
    };
  }

  render() {
    return (
      <div className="storage" style={{ color: this.state.color }}>
        storage
      </div>
    );
  }
}
