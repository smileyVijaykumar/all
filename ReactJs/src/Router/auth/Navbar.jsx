import React from "react";
import Login from "./Login";
import Home from "./Home";
import Service from "./Service";
import Profile from "./Profile";
import About from "./About";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navHeader">
        <h1>Vijay</h1>

        <div className="navmenu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Service">Service</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
