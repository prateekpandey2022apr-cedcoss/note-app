import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NoteContext from "./NoteContext";
import Navbar from "./components/Navbar";

function AddNote() {
  const {
    notes,
    setNotes,
    currentNote,
    setCurrentNote,
    handleAddNote,
    message,
  } = useContext(NoteContext);

  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="row">
          <div className="col-4">
            <ul className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <a href="#">Pictures</a>
              </li> */}
              {/* <li>
                <a href="#">Summer 15</a>
              </li> */}
              <li>Add note</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="row">
          <div className="col-4 add-note">
            <form className="" onSubmit={handleAddNote}>
              <h2>Add a note</h2>
              {message && <div className="message">{message}</div>}
              <div className="form-control">
                <label>Title</label>
                <input
                  type="text"
                  placeholder="Enter title"
                  value={currentNote.title ?? ""}
                  onChange={(event) =>
                    setCurrentNote({
                      ...currentNote,
                      title: event.target.value,
                    })
                  }
                />
              </div>

              <div className="form-control">
                <label>Text</label>
                <textarea
                  rows="8"
                  placeholder="Enter your note here..."
                  value={currentNote.text ?? ""}
                  onChange={(event) =>
                    setCurrentNote({
                      ...currentNote,
                      text: event.target.value,
                    })
                  }
                ></textarea>
              </div>

              <div className="form-control">
                <label>Category</label>
                <select
                  value={currentNote.category}
                  onChange={(event) =>
                    setCurrentNote({
                      ...currentNote,
                      category: event.target.value,
                    })
                  }
                >
                  <option value="">Select Category</option>
                  <option value="videos">Videos</option>
                  <option value="wishlist">Wishlist</option>
                  <option value="assignment">Assignment</option>
                  <option value="projects">Project</option>
                  <option value="work">Work</option>
                </select>
              </div>

              <div className="form-control">
                <input type="submit" className="btn" value="ADD NOTE" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNote;
