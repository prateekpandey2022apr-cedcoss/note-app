import React from "react";
import Navbar from "./Navbar";

function AddNote() {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="row">
          <div className="col-4">
            <ul class="breadcrumb">
              <li>
                <a href="#">Home</a>
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
            <form className="">
              <div className="form-control">
                <label>Title</label>
                <input type="text" placeholder="Enter title" />
              </div>

              <div className="form-control">
                <label>Text</label>
                <textarea
                  rows="5"
                  placeholder="Enter your note here..."
                ></textarea>
              </div>

              <div className="form-control">
                <label>SE</label>
                <select>
                  <option value="">Select Category</option>
                  <option value=""></option>
                </select>
              </div>

              <div className="form-control">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNote;
