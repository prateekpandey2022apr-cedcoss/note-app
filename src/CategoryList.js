import moment from "moment";
import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import { colors } from "./data";
import NoteContext from "./NoteContext";

function CategoryList() {
  const {
    notes,
    setNotes,
    handleAddNote,
    handleDeleteNote,
    filteredNotes,
    setFilteredNotes,
  } = useContext(NoteContext);

  const { catSlug } = useParams("catSlug");
  console.log({ catSlug });

  useEffect(() => {
    debugger;
    console.log(notes.filter((item) => item.category === catSlug));

    setFilteredNotes(notes.filter((item) => item.category === catSlug));
    // setCurrentNote({ ...notes.find((item) => item.id == id) });
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper container">
        {notes.length > 0 ? (
          <>
            <div className="row">
              <div className="col-1 sidebar">
                <ul>
                  <li>
                    <a href="">
                      <div className="caterory-name">Videos</div>
                      <div className="caterory-count">5</div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="caterory-name">Wishlist</div>
                      <div className="caterory-count">5</div>
                    </a>
                  </li>
                  <li>
                    <a href="">Assignment</a>
                  </li>
                  <li>
                    <a href="">Project</a>
                  </li>
                  <li>
                    <a href="">Work</a>
                  </li>
                </ul>
              </div>
              <div className="col-3-4 card-container">
                {[...filteredNotes].reverse().map((note, idx) => {
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
                          <a href="#">
                            <i className="fa-solid fa-tag"></i> &nbsp;
                            {note.category}
                          </a>
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

export default CategoryList;
