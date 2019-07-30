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
                <li>
                    <a href="https://www.linkedin.com/in/kevin-yang-615763122/">
                        <i class="fab fa-linkedin">
                        </i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/kevy7">
                        <i class="fab fa-github-alt">
                        </i>
                    </a>
                </li>
                <li><i class="fas fa-envelope"></i></li>
            </ul>
        </div>
    )
}

export default Header;