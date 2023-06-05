import React from "react";

const Resume = () => {
    return (
        <>
            <h3>Resume</h3>
            <div className="resume">
                <a href="./assets/Resume.pdf" download>Download My Resume</a>
                <div>
                    <text>Front-End Proficiencies</text>
                    <ul>
                        <li>HTML</li>
                        <li>React</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                    </ul>
                </div>
                <div>
                    <text>Back-End proficiencies</text>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>APIs</li>
                        <li>MySQL</li>
                        <li>Rest</li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Resume;