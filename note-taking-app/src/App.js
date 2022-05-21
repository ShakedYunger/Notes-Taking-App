import logo from "./logo.svg";
import { Notes } from "./notes";
import { NoteList } from "./noteList";
import "./App.css";

function App() {
  return (
    <div>
      <div className="Header">
        <h1>Note-Taking-App</h1>
        <button type="button"> Add note </button>
      </div>
      <div className="noteGrid">
        <NoteList></NoteList>
      </div>
    </div>
  );
}

export default App;
