import React, { Component } from "react";
import "./header.css";
import styles from "./header.module.css";

//This is a functional component
const Header = () => {
    return (
        <div className="header">
            <div className="headerTitle">
                Kevin Yang
            </div>
            <div className="headerSubTitle">
                Web Developer
            </div>
            <ul className="breadcrumb">
                <li>
                    <a className={styles.icon} href="https://www.linkedin.com/in/kevin-yang-615763122/">
                        <i className="fab fa-linkedin">
                        </i>
                    </a>
                </li>
                <li>
                    <a  className={styles.icon} href="https://github.com/kevy7">
                        <i className="fab fa-github-alt">
                        </i>
                    </a>
                </li>
                <li><i className="fas fa-envelope"></i></li>
            </ul>
        </div>
    )
}

export default Header;