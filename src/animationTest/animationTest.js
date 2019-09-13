import React from 'react';
import { Tween, Timeline} from 'react-gsap'; //used for animation
import { Controller, Scene } from 'react-scrollmagic'; //used for scroll down effect

const animationTest = () => {
    return (
        <div className = "animationTest">
            <p className="para">This component is mainly used to test out animations</p>
            <Controller>
                <Scene 
                    triggerHook="onLeave"
                    duration={3000}

                    pin=".paraTest"
                >

                    {(progress) => (
                        <div className="tester">
                            <Timeline totalProgress={progress} paused>
                                <Tween
                                    /* from={{ x: '10%', top: '60%' }} */
                                    to={{ x: '60%', top: '10%' }}
                                >
                                    <p className="paraTest">This is a paragraph</p>

                                </Tween>
                                
                            </Timeline>
                        </div>
                    )}

                </Scene>

            </Controller>
        </div>
    )
}

export default animationTest;