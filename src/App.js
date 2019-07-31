import React from 'react';
import Header from "./header/header";
import NavBar from "./navBar/navBar";
import ProjectsContainer from "./projects/projectsContainer";
import AboutMe from "./aboutMe/aboutMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      {/* Need to wrap the following components below to a container */}
      <ProjectsContainer />
      <hr />
      <AboutMe />
      {/* 
        About Me 
        Skills
        Contact
      */}
    </div>
  );
}

export default App;