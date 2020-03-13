import React, {Component} from "react";
import {Link} from "react-scroll";

import "../styles/Navigation.css"
import data from "../data";

export default class Nav extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="navs">
                    <div className="right">
                        <Link className="navItems" to="about" smooth={true} offset={50} duration={500}>
                            About
                        </Link>
                        <Link className="navItems" to="skill" smooth={true} offset={50} duration={500}>
                            Skills
                        </Link>
                    </div>
                </div>
                <i className="changeColor" onClick={() => {
                    window.location.reload()
                }}>
                    <img src={data.effectIcon[this.props.num]} alt="change theme"/>
                </i>
            </div>

        )
    }
}