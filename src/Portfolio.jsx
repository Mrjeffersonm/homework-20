import React from "react";
import './Portfolio.css';

const Portfolio = (props) => {
    return (
        <div className="portfolio">
            <img src={props.imageURL} width="200px"/>
            <div className="project-name">{props.projectName}</div>
            <a href={props.hostURL} className="hostURL">Deployed Website</a>
            <a href={props.gitURL} className="gitURL">Source Code</a>
        </div>
    )
};

export default Portfolio;