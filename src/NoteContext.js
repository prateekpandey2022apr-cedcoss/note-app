import { compose } from "@mui/system";
import moment from "moment";
import { createContext, useState, useEffect, useDebugValue } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import noteList from "./data";

const NoteContext = createContext();

export function NoteProvider({ children }) {
  // console.log(notes);
  const [notes, setNotes] = useState(noteList);
  const [count, setCount] = useState(6);
  const [currentNote, setCurrentNote] = useState({});
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   notes.sort((a, b) => b.id - a.id);
  //   setNotes([...notes]);
  //   // localStorage.setItem("posts", JSON.stringify(notes));
  // }, [notes]);

  useEffect(() => {
    console.log(location);

    if (location.pathname === "/" && location.search === "") {
      // setProducts(inventory);
      // setIsSearchSubmit(false);
      if (query) {
        setQuery("");
        setResult([]);
      }

      setCurrentNote({});
      setMessage("");
    }
  }, [location]);

  function handleSearch(event) {
    event.preventDefault();
    // console.log(event);
    // console.log(searchParams.get("category"));
    // console.log(searchParams.entries());

    // debugger;

    // let queryStr = "";
    // if (query) {
    //   queryStr += `/?query=${query}`;
    //   if (searchParams.get("category")) {
    //     queryStr += `&category=${searchParams.get("category")}`;
    //   }
    // } else {
    //   if (searchParams.get("category")) {
    //     queryStr += `/?category=${searchParams.get("category")}`;
    //   }
    // }

    // navigate(queryStr);
  }

  function handleEditNote(event) {
    event.preventDefault();
    console.log("edit");

    if (!currentNote.title || !currentNote.text || !currentNote.category) {
      alert("All fields are required");
      return;
    }

    setNotes(
      notes.filter((item) => {
        if (item.id === currentNote.id) {
          item.title = currentNote.title;
          item.text = currentNote.text;
          item.category = currentNote.category;
        }
        return item;
      })
    );

    setMessage("Note Updated");
    // setCurrentNote({});
  }

  function handleDeleteNote(event, nodeId) {
    event.preventDefault();
    console.log("ee");
    setNotes([...notes.filter((item) => item.id !== nodeId)]);
  }

  function handleAddNote(event) {
    event.preventDefault();
    console.log("add");

    if (!currentNote.title || !currentNote.text || !currentNote.category) {
      alert("All fields are required");
      return;
    }

    setNotes([
      ...notes,
      {
        ...currentNote,
        id: count,
        date: new Date(),
      },
    ]);
    setCurrentNote({});
    setCount(count + 1);
    setMessage("Note Added");
  }

  return (
    <NoteContext.Provider
      value={{
        query,
        setQuery,
        notes,
        setNotes,
        handleAddNote,
        currentNote,
        setCurrentNote,
        handleDeleteNote,
        handleEditNote,
        message,
        setMessage,
        filteredNotes,
        setFilteredNotes,
        searchParams,
        setSearchParams,
        handleSearch,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export default NoteContext;
