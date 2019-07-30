import React from "react";
import "./navBar.css";

const NavBar = () => {
    return (
        <div className="navBar">
            <ul className="homeNavBar">
                <li>Main</li>
                <li>Projects</li>
                <li>About Me</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default NavBar;