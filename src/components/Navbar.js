import React, { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import NoteContext from "../NoteContext";

function Navbar() {
  const {
    notes,
    setNotes,
    handleAddNote,
    handleDeleteNote,
    searchParams,
    setSearchParams,
    query,
    setQuery,
    handleSearch,
  } = useContext(NoteContext);

  return (
    <div className="navbar-container">
      <div className="wrapper">
        <div className="row navbar">
          <div className="site-logo">
            <Link to="/">
              <img src="../logo.png" />{" "}
              <span className="site-name">Notify</span>
            </Link>
          </div>
          <div className="search">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <span className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </form>
          </div>
          <div className="links">
            <Link to="/add-note" className="btn">
              <i className="fa-solid fa-plus"></i> Add New Note
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
