import React from 'react';
import styles from './projectDescription.module.css';

const ProjectDescription = (state) => {
    return (
        <div className={styles.projectDescripton}>
            <h3>Description</h3>
            {state.projectDescription}
            <h3 className={styles.techHeader}>Technologies Used</h3>
            <ul className={styles.techList}>
                {
                    state.projectTech.map((tech) => {
                        return <li>{tech}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ProjectDescription;