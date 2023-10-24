import React from "react";
import "./Menu.css";
import "../App.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"; // Import NavLink

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          {" "}
          <NavLink to="/" activeClassName="active">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/graphics" exact activeStyle={{ color: "red" }}>
            graphics
          </NavLink>
        </li>
        <li>
          {" "}
          <Link to="/portraits">portraits</Link>
        </li>
        <li>
          <Link to="/about">*about/contact* </Link>{" "}
        </li>
        <li>
          <Link to="/films">films </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
