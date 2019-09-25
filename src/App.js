import React from 'react';
import Header from "./header/header";
import NavBar from "./navBar/navBar";
import ProjectsContainer from "./projects/projectsContainer";
import AboutMe from "./aboutMe/aboutMe";
import Skills from "./skills/skills";
import Contact from "./contactComponent/contact";
import AnimationTest from "./animationTest/animationTest";
import styles from "./app.module.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />

      {/* <div className={styles.container}> */}
        <ProjectsContainer />
        <AnimationTest />
        <Skills />
        <Contact />
      {/* </div> */}
       
    </div>
  );
}

export default App;