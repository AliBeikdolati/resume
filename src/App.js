import React from 'react';

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";

import './styles/App.css';
import './styles/Navigation.css'
import {Element, Link} from "react-scroll";

function App() {
    return (
        <div className="App">
            <div className="navigation">
                <div className="right">
                        <Link className="navItems" to="test1" smooth={true} offset={50} duration={500}>
                            About
                        </Link>
                        <Link className="navItems" to="skill" smooth={true} offset={50} duration={500}>
                            Skills
                        </Link>
                </div>
            </div>

            <TitleSection />
            <div className="downIcon">
                <Element name="test1" className="element"/>
                <Link to="test1" smooth={true} offset={50} duration={500}>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/sort-down.png"/>
                </Link>
            </div>
            <AboutSection/>
            <div className="downIcon">
                <Element name="skill" className="element"/>
                <Link to="skill" smooth={true} offset={50} duration={500}>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/sort-down.png"/>
                </Link>
            </div>
            <SkillSection/>

        </div>
    );
}

export default App;
