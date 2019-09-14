import React from 'react';
import { Tween, Timeline} from 'react-gsap'; //used for animation
import { Controller, Scene } from 'react-scrollmagic'; //used for scroll down effect

import styles from './animationTest.module.css';
import { Power0, Power2, Power3 } from 'gsap';
import Header from '../header/header';

const animationTest = () => {
    return (
        <div className = "{styles.animationTest}">
            <p className="para">This component is mainly used to test out animations</p>
            <Controller>
                <Scene 
                    TriggerHook="onLeave"
                    //triggerElement=".tester"
                    indicators={true}
                    pin
                    duration={1000}
                >
                    {
                        (progress) => (
                            <div>
                                <Timeline 
                                totalProgress={progress} paused
                                
                                    target={
                                        <div className={styles.headerTest}>This is the target</div>
                                    }
                                >
                                    <Tween
                                        from={{opacity: 0, top: '50px'}}
                                        to={{opacity: 1, top: '0px' }}
                                    />
                                    <Tween 
                                        to={{ x: '50px'}}
                                    />
                                    


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