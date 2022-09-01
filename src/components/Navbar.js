import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
            <form>
              <input type="text" placeholder="Search..." />
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
