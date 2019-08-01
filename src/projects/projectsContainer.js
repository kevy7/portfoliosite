import React from "react";
import Project from "./project";
import styles from "./projectsContainer.module.css";

//create a project component, this container will display all of your project components
const ProjectsContainer = () => {
    return (
        <div className="projectContainer">
            <h1 className={styles.projectTitle}>My Projects</h1>
            <div className={styles.projectContainerList}>
                <Project
                    image="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    projectName="EventBubbles"
                    projectLink="https://eb2.herokuapp.com/"
                    projectCode="https://github.com/kevy7/eBubblesv2"
                />
                <Project 
                    image="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    projectName="JS Color Game"
                    projectLink=""
                    projectCode=""
                />
                <Project 
                    image="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    projectName="Instructor Database"
                    projectLink=""
                    projectCode=""
                />
                 {/* <Project />
                <Project />
                <Project />*/}
            </div>
        </div>
    )
}

export default ProjectsContainer;