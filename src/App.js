import React from 'react';

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Nav from "./components/navigations";
import DownIcon from "./components/DownIcon";

import './styles/App.css';
import './styles/Navigation.css'
import {Element, Link} from "react-scroll";

function App() {
    return (
        <div className="App">
            <Element name="top" className="element" />
            <Nav />
            <TitleSection />
            <DownIcon link="about" el="about" />

            <AboutSection/>
            <DownIcon link="skill" el="skill" />

            <SkillSection/>
            <div className="downIcon">
                <Link to="top" smooth={true} offset={50} duration={500}>
                    <img src="https://img.icons8.com/metro/26/000000/sort-up.png"/>
                </Link>
            </div>

        </div>
    );
}

export default App;
