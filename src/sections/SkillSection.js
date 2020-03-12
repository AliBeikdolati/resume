import React, {Component} from "react";

import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";
import data from "../data";

import "../styles/SkillSection.css";

export default class SkillSection extends Component {
    render() {
        return (
            <Fullpage className="red">
                <h1 className="title">
                    {data.sections[1].title}
                </h1>
                <div className="cards container">
                    {
                        Object.keys(data.sections[1].items).map(skill => {
                            return (
                                <SkillCard skill={skill} />
                            )
                        })
                    }
                </div>
            </Fullpage>
        )
    }
}