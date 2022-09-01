import logo from "./logo.svg";
import "./App.css";
import { NoteProvider } from "./NoteContext";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddNote from "./components/AddNote";

function App() {
  return (
    <NoteProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-note" element={<AddNote />}></Route>
      </Routes>
    </NoteProvider>
  );
}

export default App;
