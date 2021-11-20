import React from "react";
import { NavLink } from "react-router-dom";
import pizza from "../images/pizza_planet.png";
import "../styles/Home.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="main-logo-item">
        <img alt="Pizza Planet" src={pizza} />
      </div>
      <div className="menu-item">
        <NavLink to="/menu">
          <div className="blur">Menu</div>
        </NavLink>
      </div>
      <div className="about-item">
        <NavLink to="/about">
          <div className="blur">About</div>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
