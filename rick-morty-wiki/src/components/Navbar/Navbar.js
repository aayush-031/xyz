// Importing React, NavLink, and Link from react-router-dom
import React from "react";
import { NavLink, Link } from "react-router-dom";

// Importing styles from App.scss
import "../../App.scss";

// Functional component for the Navbar
const Navbar = () => {
  return (
    // Navigation bar with Bootstrap styles
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        {/* Link to the home page */}
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          Rick &  <span className="text-primary">Morty</span>
        </Link>

        {/* Button for toggling the navigation menu on smaller screens */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* Icons for open and close states */}
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>

        {/* Navigation menu */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            {/* NavLink for navigating to Characters page */}
            <NavLink to="/" className="nav-link">
              Characters
            </NavLink>

            {/* NavLink for navigating to Location page */}
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/location"
            >
              Location
            </NavLink>

            {/* NavLink for navigating to Episodes page */}
            <NavLink to="/episodes" className="nav-link">
              Episode
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Exporting the Navbar component as the default export
export default Navbar;
