import React , { Component } from "react";

import data from "../data";

export default class SkillCard extends Component{
    render() {
        const { skill } = this.props;
        return (
            <div className="card" style={data.cardThemes[this.props.num]}>
                <div className="imgCard">
                    <img src={data.sections[1].items[skill].content.image[this.props.num]} alt={data.sections[1].items[skill].content.title} />
                </div>
                <h5 className="cardName">
                    {data.sections[1].items[skill].content.title}
                </h5>
            </div>
        )
    }
}