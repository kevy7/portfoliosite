import React, { Component } from "react";
import { Tween, Timeline} from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

import "./header.css";
import styles from "./header.module.css";
import resume from "../documents/resume2019.pdf";

//fb image: data:image/jpeg;base64,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
//This is a functional component
const Header = () => {
    return (
        <div className="header" id="mainRef">

            {/* <Controller>
                <Scene 
                    triggerHook="onLeave"
                    duration={1000}
                    pin
                >

                    {(progress) => (
                        <div className="tester">
                            <Timeline totalProgress={progress} paused>
                                
                                
                            </Timeline>
                        </div>
                    )}

                </Scene>

            </Controller> */}

            <div className={styles.headerTitle}>
                Kevin Yang
            </div>
            <div className={styles.headerSubTitle}>
                Web Developer
            </div>

            <ul className="breadcrumb">
                <li>
                    <a className={styles.icon} href="https://www.linkedin.com/in/kevin-yang-615763122/">
                        <i className="fab fa-linkedin">
                        </i>
                    </a>
                </li>
                <li>
                    <a  className={styles.icon} href="https://github.com/kevy7">
                        <i className="fab fa-github-alt">
                        </i>
                    </a>
                </li>
                <li>
                    <a className={styles.icon} href="mailto:kvnyang503@gmail.com">
                        <i className="fas fa-envelope">  
                        </i>
                    </a>
                </li>
                <li>
                    <a className={styles.icon} href={resume} download>
                        <i class="far fa-file"></i>
                    </a>
                </li>
            </ul> 
            


        </div>
    )
}

export default Header;


/*

how to use timeline and tween

<Timeline
                target={
                    <div className={styles.testing}>
                        <h2>This is a test</h2>
                    </div>
                }
            >
                <Tween
                    from={{opacity: 0, color: "white"}}
                    to={{opacity: 1} }
                />
                <Tween
                  from={{ x: '10%', top: '60%' }}
                  to={{ x: '60%', top: '10%' }}
                >
                <div className={styles.testing}>
                        <h2>This is a test</h2>
                    </div>
                </Tween>
                

            </Timeline>


*/