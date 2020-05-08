import React from "react";
import { Tween, Timeline} from 'react-gsap'; //used for animation
import { Controller, Scene } from 'react-scrollmagic'; //used for scroll down effect
import { Power0, Power2, Power3 } from 'gsap'; //used for easing animation

import Project from "./project";
import styles from "./projectsContainer.module.css";
import eBubblesImage from "../websiteImages/eBubbles.png";
import rgbGameImage from "../websiteImages/rgbGame.png";
import pathfindingImage from "../websiteImages/pathfinding.png";


//array of tech used for each project
const eBubblesTech = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'REDUX', 'NODEJS', 'EXPRESS', 'MONGODB', 'BULMA CSS'];
const pathTech = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'REDUX'];
const rgbGameTech = ['HTML', 'CSS', 'JAVASCRIPT'];


const ProjectsContainer = () => {
    return (
        <div className={styles.projectsContainer} id="projectsRef">
            <h1 className={styles.projectTitle}>My Projects</h1>
            <div className={styles.projectContainerList}>
                <Project
                    image={eBubblesImage}
                    projectName="EventBubbles"
                    projectLink="https://eb2.herokuapp.com/"
                    projectCode="https://github.com/kevy7/eBubblesv2"
                    projectDescription="A fullstack web app to create events and invite friends to join them!"
                    projectTech={eBubblesTech}
                />
                <Project 
                    image={pathfindingImage}
                    projectName="Pathfinding Visualization App"
                    projectLink="https://kevy7.github.io/gridvisualizer/"
                    projectCode="https://github.com/kevy7/gridvisualizer"
                    projectDescription="A grid visualization website used to animate various pathfinding or maze generation algorithms. Current algorithms implemented includes: Dijkstra, Breadth first search, Debth first search, Greedy BFS, A*, and recursive division."
                    projectTech={pathTech}
                />
                <Project 
                    image={rgbGameImage}
                    projectName="JS Color Game"
                    projectLink="https://codepen.io/kevy7/full/wVqpmN"
                    projectCode="https://codepen.io/kevy7/pen/wVqpmN"
                    projectDescription="A color guessing game to show case what I learned from javascript."
                    projectTech={rgbGameTech}
                />
            </div>
        </div>
    )
}

export default ProjectsContainer;