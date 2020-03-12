import React from 'react';

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";

import './styles/App.css';

function App() {
  return (
      <div className="App">
        <div className="navigation">

        </div>

        <TitleSection/>
        <AboutSection/>
        <SkillSection/>

      </div>
  );
}

export default App;
