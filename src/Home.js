import moment from "moment";
import React, { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import { colors } from "./data";
import NoteContext from "./NoteContext";
import { getCountByCategory } from "./Utils";

function Home() {
  const {
    notes,
    setNotes,
    handleAddNote,
    handleDeleteNote,
    searchParams,
    setSearchParams,
    query,
  } = useContext(NoteContext);

  return (
    <>
      <Navbar />
      <div className="wrapper container">
        {notes
          .reverse()
          .filter((item) => {
            if (!searchParams.get("category")) {
              return true;
            }
            return item.category === searchParams.get("category");
          })
          .filter((item) => {
            if (!query) {
              return true;
            }
            return item.title.toLowerCase().includes(query.toLowerCase());
          }).length > 0 ? (
          <>
            <div className="row">
              <div className="col-1 sidebar">
                <ul>
                  <li
                    className={
                      searchParams.get("category") === "videos" ? "active" : ""
                    }
                  >
                    <Link to={`?category=${"videos"}`}>
                      <div className="caterory-name">Videos</div>
                      <div className="caterory-count">
                        {getCountByCategory(notes, "videos")}
                      </div>
                    </Link>
                  </li>
                  <li
                    className={
                      searchParams.get("category") === "wishlist"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to={`?category=${"wishlist"}`}>
                      <div className="caterory-name">Wishlist</div>
                      <div className="caterory-count">
                        {getCountByCategory(notes, "wishlist")}
                      </div>
                    </Link>
                  </li>
                  <li
                    className={
                      searchParams.get("category") === "assignment"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to={`?category=${"assignment"}`}>
                      <div className="caterory-name">Assignment</div>
                      <div className="caterory-count">
                        {getCountByCategory(notes, "assignment")}
                      </div>
                    </Link>
                  </li>
                  <li
                    className={
                      searchParams.get("category") === "projects"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to={`?category=${"projects"}`}>
                      <div className="caterory-name">Projects</div>
                      <div className="caterory-count">
                        {getCountByCategory(notes, "projects")}
                      </div>
                    </Link>
                  </li>
                  <li
                    className={
                      searchParams.get("category") === "work" ? "active" : ""
                    }
                  >
                    <Link to={`?category=${"work"}`}>
                      <div className="caterory-name">Work</div>
                      <div className="caterory-count">
                        {getCountByCategory(notes, "work")}
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-3-4 card-container">
                {[...notes]
                  .reverse()
                  .filter((item) => {
                    if (!searchParams.get("category")) {
                      return true;
                    }
                    return item.category === searchParams.get("category");
                  })
                  .filter((item) => {
                    if (!query) {
                      return true;
                    }
                    return item.title
                      .toLowerCase()
                      .includes(query.toLowerCase());
                  })
                  .map((note, idx) => {
                    return (
                      <div
                        className="card"
                        key={idx}
                        style={{
                          backgroundColor: `${colors[idx % colors.length]}`,
                        }}
                      >
                        <div className="card-header">
                          <div className="card-title">{note.title}</div>
                          <div className="card-category">
                            <Link
                              to={`?category=${note.category}`}
                              onClick={(event) => {
                                // setSearchParams({ note.category });
                                // event.preventDefault();
                              }}
                            >
                              <i className="fa-solid fa-tag"></i> &nbsp;
                              {note.category}
                            </Link>
                          </div>
                        </div>
                        <div className="card-body">{note.text}</div>
                        <div className="card-footer">
                          <div className="card-time">
                            {moment(note.date).fromNow()}
                          </div>
                          {/* <div className="card-date">{note.date}</div> */}
                          <div className="buttons">
                            <Link
                              to={`/edit-note/${note.id}`}
                              className="edit-btn"
                            >
                              <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                            <a
                              href="#"
                              className="del-btn"
                              onClick={(event) => {
                                if (window.confirm("Are you sure ?")) {
                                  handleDeleteNote(event, note.id);
                                }
                              }}
                            >
                              <i className="fa-sharp fa-solid fa-trash"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row no-notes text-center">
              <div className="col-4 text-center">
                {/* <p>No notes Found &#129335;</p> */}
                <img src="../empty.webp" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
