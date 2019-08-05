import React, { Component } from "react";
import "./header.css";
import styles from "./header.module.css";
import resume from "../documents/resume2019.pdf";

//This is a functional component
const Header = () => {
    return (
        <div className="header" id="mainRef">
            <div className={styles.headerTitle}>
                Kevin Yang
            </div>
            <div className={styles.headerSubTitle}>
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
                <li>
                    <a className={styles.icon} href="mailto:kvnyang503@gmail.com">
                        <i className="fas fa-envelope">  
                        </i>
                    </a>
                </li>
                <li>
                    <a className={styles.icon} href={resume} download>
                        <i class="far fa-file"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header;