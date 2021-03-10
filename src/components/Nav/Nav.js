import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.svg";
import profileIcon from "../../assets/profile-icon.svg";

const Nav = () => {
  return (
    <nav className="Nav">
      <img src={logo} alt="uLesson" />
      <div className="Nav-profile">
        <img src={profileIcon} alt="profile icon" />
        <span>Hassan</span>
      </div>
    </nav>
  );
};

export default Nav;
