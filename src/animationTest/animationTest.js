import React from 'react';
import { Tween, Timeline} from 'react-gsap'; //used for animation
import { Controller, Scene } from 'react-scrollmagic'; //used for scroll down effect

import styles from './animationTest.module.css';
import { Power0, Power2, Power3 } from 'gsap';
import Header from '../header/header';

const animationTest = () => {
    return (
        <div className = "{styles.mainDiv}">
            <Controller>
                <Scene 
                    triggerHook="onLeave"
                    //triggerElement=".tester"
                    indicators={true}
                    pin="#test"
                    duration={1000}
                >
                    {
                        (progress) => (
                            <div className={styles.aboutMeContainer} id="test">
                                <Timeline totalProgress={progress} paused>
                                    <Tween
                                        from={{ top: '250px', opacity: 0}}
                                        to={{ top: '0px', opacity: 1, ease: Power2.easeOut }}
                                        duration="1000"
                                    >
                                        <h1 className={styles.aboutMeHeader}>About Me</h1>
                                    </Tween>

                                    <Tween
                                        from={{ right:'200px',  opacity: 0}}
                                        to={{ right: '0px', opacity: 1}}
                                        duration="2000"
                                    >
                                        <p className={styles.aboutMeParagraph}>Hi, my name is Kevin Yang and I'm a web developer with experience in html, css, javascript, and the React library. </p>
                                    </Tween>

                                    <Tween
                                        from={{ right:'200px',  opacity: 0}}
                                        to={{ right: '0px', opacity: 1}}
                                        duration="1000"
                                    >
                                        <p className={styles.aboutMeParagraph}>
                                            My journey into programming started when I was given my first programming project at my previous job at Oregon State University. I was assigned the task to create a windows form application that can pull and enter instructor training-related data into a Microsoft SQL database.
                                            After working on my project for hours at work, it made me realize how fun programming can be! Ever since then, even after graduating with a degree in MIS, I wanted to continue my education in programming by self-teaching myself current web developement technologies.
                                            Every day after work, I would spend my free time reading about web developement technlogies, learning how to code on the front and backend, and working on my personal project.
                                            Programming has since then become a hobby of mines and I would love to work for a company as a developer some day so that I can grow in the tech industry by doing what I love!
                                        </p>
                                    </Tween>

                                </Timeline>
                            </div>
                        )
                    }

                </Scene>

            </Controller>
        </div>
    )
}

export default animationTest;