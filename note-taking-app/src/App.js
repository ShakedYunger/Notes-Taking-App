import logo from "./logo.svg";
import { Notes } from "./notes";
import { NoteList } from "./noteList";
import { Header } from "./Header";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardCounter: 1,
    };
  }

  render() {
    return (
      <div className="appWrapper">
        <Header></Header>
        <div className="noteGrid">
          <NoteList cardCounter={this.state.cardCounter}></NoteList>
        </div>
      </div>
    );
  }
}

export default App;
