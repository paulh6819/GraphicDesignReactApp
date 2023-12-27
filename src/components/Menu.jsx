import React from "react";
import "./Menu.css";
import "../App.css";
import { useLocation, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/graphics" activeClassName="active">
            Graphics
          </NavLink>
        </li>
        <li>
          <NavLink to="/portraits" activeClassName="active">
            Portraits
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            *About/Contact*
          </NavLink>
        </li>
        <li>
          <NavLink to="/films" activeClassName="active">
            Films
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
