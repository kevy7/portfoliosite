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
                                        <p className={styles.aboutMeParagraph}>My Journey into programming started when I was working on a database project for Oregon State Ecampus. To be continued. </p>
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