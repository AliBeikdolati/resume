import React , { Component } from "react";

import Fullpage from "../components/Fullpage";
import data from "../data";

import "../styles/AboutSection.css"
import {Link} from "react-scroll";

export default class AboutSection extends Component{
    render() {
        return (
            <Fullpage className="blue">
                <h1 className="title">
                    {data.sections[0].title}
                </h1>
                <div className="sectionContent container">
                    {
                        Object.keys(data.sections[0].items[0].content).map(key => {
                            return(
                                <p>{data.sections[0].items[0].content[key]}</p>
                            )
                        })
                    }
                </div>
            </Fullpage>
        )
    }
}