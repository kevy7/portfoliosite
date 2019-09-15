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
                                        from={{ top: '200px', opacity: 0}}
                                        to={{ top: '10px', opacity: 1}}
                                    >
                                        <h1 className={styles.testPara}>About Me</h1>
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