import React , {Component} from "react";
import {Element, Link} from "react-scroll";

export default class DownIcon extends Component{
    render() {
        return (
            <div className="downIcon">
                <Element name={this.props.el || ''} className="element"/>
                <Link to={this.props.link} smooth={true} offset={50} duration={500}>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/sort-down.png"/>
                </Link>
            </div>
        )
    }
}