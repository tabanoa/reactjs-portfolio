import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Manjot Sidhu
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                id="home"
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              id="about"
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                id="projects"
                exact
                to="/portfolio"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                id="skills"
                exact
                to="/technologies"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                id="contact"
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
