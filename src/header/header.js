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
                <li><i class="fab fa-linkedin"></i></li>
                <li><i class="fab fa-github-alt"></i></li>
                <li><i class="fas fa-envelope"></i></li>
            </ul>
        </div>
    )
}

export default Header;