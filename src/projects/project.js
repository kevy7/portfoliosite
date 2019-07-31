import React from "react";
import styles from "./project.module.css";

const Project = (state) => {
    return (
        <div className={styles.projectComponent}>
            {/* 
                Screenshot of project here 
                Name of Project
                Link to project website
                Link to code
            */}

            <img 
                className={styles.projectImage}
                src={state.image}
            />
            <h2 className={styles.projectTitle}>{state.projectName}</h2>
            <ul className={styles.projectList}>
                <li>Code</li>
                <li>Website</li>
            </ul>
        </div>
    )
}

export default Project;