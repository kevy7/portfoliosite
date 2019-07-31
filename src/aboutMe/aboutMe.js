import React from "react";
import styles from "./aboutMe.module.css";

const AboutMe = () => {
    return (
        <div className={styles.aboutMe}>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.aboutMeParagraph}>
                Hi, welcome to my page! My journey started with one project while working at oregon state....
            </p>
        </div>
    )
}

export default AboutMe;