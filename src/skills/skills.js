import React from "react";
import styles from "./skills.module.css";

const Skills = () => {
    return (
        <div className={styles.skillsComponent}>
            <h1 className={styles.title}>Skills</h1>
            
            
            <div >
                <ul className={styles.skillsList}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>C#</li>
                    <li>ReactJS</li>
                    <li>Redux</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                    <li>NodeJS</li>
                    <li>AJAX</li>
                    <li>Git</li>
                    <li>RESTful routes</li>
                </ul>
            </div>


        </div>
    )
}

export default Skills;