import React from "react";
import './Header.css';
import Navigation from "./Navigation";

const Header = ({activeContent, setActiveContent}) => {
    return (
        <div className="header">
        
            <h1 className="title">Ryan Pratt</h1>
            <Navigation
                activeContent={activeContent}
                setActiveContent={setActiveContent} />
        </div>
    )
};

export default Header;