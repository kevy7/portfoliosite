import React, { Component } from "react";
import "./header.css";

//This is a functional component
const Header = () => {
    return (
        <div className="header">
            <div className="headerTitle">
                Kevin Yang
            </div>
            <ul className="breadcrumb">
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>Email ME</li>
            </ul>
        </div>
    )
}

export default Header;