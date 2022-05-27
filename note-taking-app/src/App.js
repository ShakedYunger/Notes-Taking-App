import logo from "./logo.svg";
import { Notes } from "./notes";
import { NoteList } from "./noteList";
import { Header } from "./Header";

import "./App.css";

function App() {
  return (
    <div className="appWrapper">
      <Header></Header>
      <div className="noteGrid"></div>
    </div>
  );
}

export default App;
