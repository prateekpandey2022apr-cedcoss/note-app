import logo from "./logo.svg";
import "./App.css";
import { NoteProvider } from "./NoteContext";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddNote from "./AddNote";
import EditNote from "./EditNote";
import CategoryList from "./CategoryList";

function App() {
  return (
    <NoteProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-note" element={<AddNote />}></Route>
        <Route path="/edit-note/:id" element={<EditNote />}></Route>
        <Route path="/category/:catSlug" element={<CategoryList />}></Route>
      </Routes>
    </NoteProvider>
  );
}

export default App;
