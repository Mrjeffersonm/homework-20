import React from "react";
import './Navigation.css';

const Navigation = ({activeContent, setActiveContent}) => {
    return (
        <div className="right-menu">
            <button className={activeContent === 'about' ? 'active' : 'inactive'} onClick={() => {setActiveContent('about')}}>About Me</button>
            <button className={activeContent === 'portfolio' ? 'active' : 'inactive'} onClick={() => {setActiveContent('portfolio')}}>Portfolio</button>
            <button className={activeContent === 'contact' ? 'active' : 'inactive'} onClick={() => {setActiveContent('contact')}}>Contact Me</button>
            <button className={activeContent === 'resume' ? 'active' : 'inactive'} onClick={() => {setActiveContent('resume')}}>Resume</button>
        </div>
    )
};

export default Navigation;