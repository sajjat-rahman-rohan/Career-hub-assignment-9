import React from "react";
import { Link, NavLink } from "react-router-dom";
import headerLogo from "../../assets/header-logo-4.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav-banner">
      <div className="my-container">
        <nav className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src={headerLogo} alt="" />
          </div>

          <ul className="d-flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appliedJobs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
          </ul>

          <div className="apply-btn">
            <button>Star Applying</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
