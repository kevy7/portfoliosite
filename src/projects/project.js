import React from "react";
import styles from "./project.module.css";

import ProjectDescription from './projectDescription';

const Project = (state) => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectComponent}>
                
                <img 
                    className={styles.projectImage}
                    src={state.image}
                />
                <h2 className={styles.projectTitle}>{state.projectName}</h2>

                <ul className={styles.projectList}>
                    <li><a href={state.projectCode}>Code</a></li>
                    <li> | </li>
                    <li><a href={state.projectLink}>Website</a></li>
                </ul>
            </div>
            <div className={styles.overlay}>
                <ProjectDescription
                    projectDescription={state.projectDescription}
                    projectTech={state.projectTech}
                />
            </div>
        </div>
    )
}

export default Project;