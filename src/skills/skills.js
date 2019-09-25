import React from "react";
import { Tween, Timeline} from 'react-gsap'; //used for animation
import { Controller, Scene } from 'react-scrollmagic'; //used for scroll down effect
import { Power0, Power2, Power3 } from 'gsap';
import styles from "./skills.module.css";

const Skills = () => {
    return (
        <div className={styles.skillsComponent} id="skillsRef">

            <div className={styles.block}>
                
            </div>


            <Controller>
                <Scene
                    triggerHook={.7}
                    //indicators={true}  
                    duration={450}
                    //triggerElement Try this for next time
                >
                    {(progress) => (
                    <div className={styles.animationBlock}>
                        <Timeline totalProgress={progress} paused>
                            <Tween
                                from={{top: '50px', opacity: 0}}
                                to={{top: '0px', opacity: 1}}
                                duration="1"
                            >
                                <h1 className={styles.title}>Skills</h1>
                            </Tween>

                            <Tween
                                from={{ right: '200px', opacity: 0}}
                                to={{ right: '0px', opacity: 1 }}
                            >
                                <div className={styles.techBlock}>
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
                            </Tween>
                        </Timeline>
                    </div>
                    )}


                </Scene>
            </Controller>




            {/* <h1 className={styles.title}>Skills</h1>  
            <div>
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
            </div> */}


        </div>
    )
}

export default Skills;