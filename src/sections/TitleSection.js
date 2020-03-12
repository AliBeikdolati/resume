import React , { Component } from "react";
import data from "../data";
import {SocialIcon} from "react-social-icons";
import Fullpage from "../components/Fullpage";
import { Link, Element } from 'react-scroll';

import "../styles/TitleSection.css";

export default class TitleSection extends Component{
    render() {
        return (
            <Fullpage className="red">
                <div>
                    <h1 className="title">
                        {data.title}
                    </h1>
                    <div>
                        <h2 className="skillTitle">
                            {data.subtitle}
                        </h2>
                        <div className="socialLinks">
                            {
                                Object.keys(data.links).map(key => {
                                    return (
                                        <SocialIcon className="socialIcon" url={data.links[key]} />
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

            </Fullpage>
        )
    }
}