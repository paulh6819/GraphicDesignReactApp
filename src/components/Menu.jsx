import React from "react";
import "./Menu.css";
import "../App.css";
import { useLocation, NavLink } from "react-router-dom";

const Menu = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <nav>
      <ul className="menu">
        <li>
          {" "}
          <NavLink to="/" className={pathname === "/" ? "active" : ""}>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/graphics">graphics</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/portraits">portraits</NavLink>
        </li>
        <li>
          <NavLink to="/about">*about/contact* </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/films">films </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
