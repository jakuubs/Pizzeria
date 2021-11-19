import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <NavLink to="/">
          <b>Home</b>
        </NavLink>
        <NavLink to="/menu">
          <b>Menu</b>
        </NavLink>
        <NavLink to="/about">
          <b>About</b>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
