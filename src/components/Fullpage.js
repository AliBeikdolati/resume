import React , { Component } from "react";

import "../styles/fullpage.css"

export default class Fullpage extends Component {


    render() {
    const {children} = this.props;
        return(
            <div className={`fullpage ${this.props.className || ''}`}>
                {children}
            </div>
        )
    }
}