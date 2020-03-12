import React, {Component} from "react";
import {Link} from "react-scroll";

import "../styles/Navigation.css"

export default class Nav extends Component {
    render() {
        return (
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
        )
    }
}