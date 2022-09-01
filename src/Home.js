import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import notes, { colors } from "./data";
import NoteContext from "./NoteContext";

function Home() {
  const { open, setOpen, handleOpen, handleClose } = useContext(NoteContext);

  return (
    <>
      <Navbar />
      <div className="wrapper container">
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
            {notes.map((note, idx) => {
              return (
                <div
                  className="card"
                  key={idx}
                  style={{ backgroundColor: `${colors[idx % colors.length]}` }}
                >
                  <div className="card-header">
                    <div className="card-title">{note.title}</div>
                    <div className="card-category">
                      <i className="fa-solid fa-tag"></i> &nbsp;
                      {note.category}
                    </div>
                  </div>
                  <div className="card-body">{note.text}</div>
                  <div className="card-footer">
                    <div className="card-time">{note.time}</div>
                    <div className="card-date">{note.date}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
