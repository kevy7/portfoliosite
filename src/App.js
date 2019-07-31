import React from 'react';
import Header from "./header/header";
import NavBar from "./navBar/navBar";
import ProjectsContainer from "./projects/projectsContainer";
import AboutMe from "./aboutMe/aboutMe";
import Skills from "./skills/skills";
import Contact from "./contactComponent/contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />

      
      <ProjectsContainer />
      <hr />
      <AboutMe />
      <hr />
      <Skills />
      <hr />
      <Contact />


      {/* 
        About Me 
        Skills
        Contact
      */}
    </div>
  );
}

export default App;