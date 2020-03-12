import React, {Component} from 'react';

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Nav from "./components/navigations";
import DownIcon from "./components/DownIcon";

import data from "./data"

import './styles/App.css';
import './styles/Navigation.css'
import {Element, Link} from "react-scroll";

class App extends Component {
    render() {
        let num = Math.floor(Math.random() * (data.themes.length));
        return (
            <div className="App" style={data.themes[num]} id="ap1">
                <Element name="top" className="element" />
                <div className="navigation">
                    <Nav num={num}/>
                    <i className="changeColor" onClick={() => {
                        window.location.reload()
                    }}>
                        <img src={data.effectIcon[num]}/>
                    </i>
                </div>
                <TitleSection />
                <DownIcon link="about" el="about" color={data.downIcon[num]} />

                <AboutSection/>
                <DownIcon link="skill" el="skill" color={data.downIcon[num]} />

                <SkillSection num={num} />
                <div className="downIcon">
                    <Link to="top" smooth={true} offset={50} duration={500}>
                        <img src={data.upIcon[num]} />
                    </Link>
                </div>

            </div>
        );
    }
}

export default App;
