import logo from "./logo.svg";
import { Notes } from "./notes";
import { NoteList } from "./noteList";
import { Header } from "./Header";
import "./App.css";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Header></Header>
        <div className="noteGrid"></div>
      </div>
    );
  }
}

export default App;
