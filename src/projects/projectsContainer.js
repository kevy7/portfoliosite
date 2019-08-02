import React from "react";
import Project from "./project";
import styles from "./projectsContainer.module.css";
import eBubblesImage from "../websiteImages/eBubbles.png";
import rgbGameImage from "../websiteImages/rgbGame.png";
import hnSearchCloneImage from "../websiteImages/hnSearchClone.png";


//create a project component, this container will display all of your project components
const ProjectsContainer = () => {
    return (
        <div className="projectContainer" id="projectsRef">
            <h1 className={styles.projectTitle}>My Projects</h1>
            <div className={styles.projectContainerList}>
                <Project
                    image={eBubblesImage}
                    projectName="EventBubbles"
                    projectLink="https://eb2.herokuapp.com/"
                    projectCode="https://github.com/kevy7/eBubblesv2"
                />
                <Project 
                    image={hnSearchCloneImage}
                    projectName="HN Search Clone"
                    projectLink=""
                    projectCode="https://github.com/kevy7/hnClone"
                />
                <Project 
                    image={rgbGameImage}
                    projectName="JS Color Game"
                    projectLink="https://codepen.io/kevy7/full/wVqpmN"
                    projectCode="https://codepen.io/kevy7/pen/wVqpmN"
                />
                 {/* <Project />
                <Project />
                <Project />*/}
            </div>
        </div>
    )
}

export default ProjectsContainer;