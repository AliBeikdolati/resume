import React, {Component} from 'react';

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Nav from "./components/navigations";
import DownIcon from "./components/DownIcon";
import {Element} from "react-scroll";
import SnowStorm from 'react-snowstorm';
import data from "./data"

import './styles/App.css';

class App extends Component {
    render() {
        let num = Math.floor(Math.random() * (data.themes.length));
        return (
            <div className="App" style={data.themes[num]}>
                <SnowStorm snowColor={data.themes[num].color} followMouse="true" />
                <Element name="top" className="element" />

                <Nav num={num} />
                <TitleSection />
                <DownIcon link="about" el="about" color={data.downIcon[num]} />

                <AboutSection/>
                <DownIcon link="skill" el="skill" color={data.downIcon[num]} />

                <SkillSection num={num} />
                <DownIcon link="top" color={data.upIcon[num]}/>

            </div>
        );
    }
}

export default App;
