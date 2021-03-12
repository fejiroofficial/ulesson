import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo.svg";
import profileIcon from "../../assets/profile-icon.svg";

const Nav = () => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes("watch") ? (
        <nav className="Nav">
          <Link to="/">
            <img className="Nav-logo" src={logo} alt="uLesson" />
          </Link>

          <div className="Nav-profile">
            <img src={profileIcon} alt="profile icon" />
            <span>Hassan</span>
          </div>
        </nav>
      ) : ''}
    </>
  );
};

export default Nav;
