import React from 'react';
import { Tween, Timeline} from 'react-gsap'; //used for animation
import { Controller, Scene } from 'react-scrollmagic'; //used for scroll down effect
import { Power0, Power2, Power3 } from 'gsap';

import styles from './animationTest.module.css';
import chibiImage from '../images/ChibiKevin.jpg';

const animationTest = () => {
    return (
        <div className = "{styles.mainDiv}" id="aboutMeRef">
            {/* <img src={chibiImage} className={styles.chibiImage} /> */}
            <Controller>
                <Scene 
                    triggerHook="onLeave"
                    //triggerElement=".tester"
                    //indicators={true}
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
                                            <div className={styles.container}>
                                                <Tween
                                                    to={{right: '350px'}}
                                                >

                                                <img src={chibiImage} className={styles.chibiImage} />
                                                </Tween>
                                                <div>
                                                <p className={styles.aboutMeParagraph}>Hi, my name is Kevin Yang and I'm a web developer with experience in html, css, javascript, and the React library. </p>
                                                <p className={styles.aboutMeParagraph}>I’ve always been an artist and programming still makes me one today. I first got into drawing because I simply watched a lot of anime growing up and wanted to create my own characters. This relates to why I got into programming as well when I was introduced to it in college. Like drawing, I wanted to build my own apps and I proceeded to learn and do so.  </p>
                                                <p className={styles.aboutMeParagraph}>When I build my websites, I felt like I was drawing. I really am but it’s just a different way to express my art on a machine rather than on paper. That’s what made programming so beautiful and why it translates well to me wanting to be a frontend developer. Whenever I would draw a character, I would always criticize it and never be satisfied with it. Why? Because there was always something to improve on. The outfits might not be as detailed as I want them to be or maybe the proportions aren’t correct. When I build something, I’m never satisfied because I’m always thinking of ways to improve it like my drawings.</p>
                                                <p className={styles.aboutMeParagraph}>As an aspiring developer, I think it’s important to have this mindset because it helps us understand that nothing we create is perfect. There are always going to be ways to improve software for our users and bugs to fix as well. That is why being a developer also still makes me an artist today and why I love doing it!</p>
                                                </div>
                                            </div>
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