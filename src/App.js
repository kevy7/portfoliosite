import React from 'react';
import Header from "./header/header";
import NavBar from "./navBar/navBar";
import ProjectsContainer from "./projects/projectsContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ProjectsContainer />
    </div>
  );
}

export default App;
