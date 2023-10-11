
import React from "react";
import "./Menu.css"
import "../App.css"
import { Link } from "react-router-dom";

const Menu = () =>{
    return (
        <nav>
            <ul className="menu">
                <li> <Link to="/">home</Link></li>
                <li><Link to="/Graphics">graphics</Link></li>
                <li> <Link to="/Art">art</Link></li>
                <li><Link to="/About">*about/contact* </Link> </li>
                <li>films</li>
            </ul>
        </nav>
    )
}

export default Menu