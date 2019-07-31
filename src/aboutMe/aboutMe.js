import React from "react";
import styles from "./aboutMe.module.css";

const AboutMe = () => {
    return (
        <div className={styles.aboutMe}>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.aboutMeParagraph}>
                Hi, my name is Kevin Yang and I'm a web developer with experience in html, css, javascript, and the React library.
                My journey into programming started when I was given my first programming project at my previous job at Oregon State University.
                I was assigned the task to create a windows form application that can pull and enter instructor training-related data into a Microsoft SQL database.
                After working on my project for hours at work, it made me realize how fun programming can be! Ever since then, even after graduating with a degree in MIS, I wanted to continue my education in programming by self-teaching myself current web developement technologies.
                Every day after work, I would spend my free time reading about web developement technlogies, learning how to code on the front and backend, and working on my personal project.
                Programming has since then become a hobby of mines and I would love to work for a company as a developer some day so that I can grow in the tech industry by doing what I love!
            </p>
        </div>
    )
}

export default AboutMe;