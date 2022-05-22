import logo from "./logo.svg";
import { Notes } from "./notes";
import { NoteList } from "./noteList";
import { addNote } from "./addNote";

import "./App.css";

function App() {
  return (
    <div>
      <div className="Header">
        <h1>Note-Taking-App</h1>
        <addNote></addNote>
      </div>
      <div className="noteGrid">
        <NoteList></NoteList>
      </div>
    </div>
  );
}

export default App;
