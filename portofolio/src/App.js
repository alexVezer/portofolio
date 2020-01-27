import React from 'react';
import Tachyons from 'tachyons';
import About from './components/About';
//import ProjectContainer from './containers/ProjectContainer';
import Project from './components/Project.js';
import './App.css';

function App() {
  return (
    <div>
        <div className="intro wh-100 tc athelas">
          <h1 className= "f3"> Hi, I am Alex and I am a junior React developer. </h1>
          <h1 className= "f1 wc"> Welcome to my playground... </h1>
        </div> 
        
        <About />
        { //<ProjectContainer> 
        }
          <Project/>
               {    // </ProjectContainer>
                // <Contact/>    
              }

    </div>
  );
}

export default App;
