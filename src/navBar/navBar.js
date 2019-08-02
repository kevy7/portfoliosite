import React from "react";
import styles from "./navBar.module.css";
//aboutMeRef

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <ul className={styles.homeNavBar}>
                <li><a href="#mainRef">Main</a></li>
                <li><a href="#projectsRef">Projects</a></li>
                <li><a href="#aboutMeRef">About Me</a></li>
                <li><a href="#skillsRef">Skills</a></li>
                <li><a href="#contactRef">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar;