import React from "react";
import Portfolio from "./Portfolio";

const PortfolioList = () => {
    return (
        <>
            <Portfolio 
            imageURL="./assets/Weather App.png"
            projectName="Weather Dashboard"
            hostURL="https://mrjeffersonm.github.io/sixth-homework/"
            gitURL="https://github.com/Mrjeffersonm/sixth-homework"
            />
            <Portfolio 
            imageURL="./assets/Item Finder.png"
            projectName="Item Finder"
            hostURL="https://stark-sands-43742.herokuapp.com/index.html"
            gitURL="https://github.com/Mrjeffersonm/project-2"
            />
            <Portfolio 
            imageURL="./assets/Note Taker.png"
            projectName="Note Taker"
            hostURL="https://stark-peak-32847.herokuapp.com/notes.html"
            gitURL="https://github.com/Mrjeffersonm/Homework-11"
            />
            <Portfolio 
            imageURL="./assets/Book Finder.png"
            projectName="Book Finder"
            hostURL="https://derekchili.github.io/book-finder-group5/search.html"
            gitURL="https://github.com/Derekchili/book-finder-group5"
            />
            <Portfolio 
            imageURL="./assets/Work Day Scheduler.png"
            projectName="Work Day Scheduler"
            hostURL="https://mrjeffersonm.github.io/fifth-challenge/"
            gitURL="https://github.com/Mrjeffersonm/fifth-challenge"
            />
            <Portfolio 
            imageURL="./assets/Quiz.png"
            projectName="Simple Quiz"
            hostURL="https://mrjeffersonm.github.io/fourth-challenge/"
            gitURL="https://github.com/Mrjeffersonm/fourth-challenge"
            />
        </>
    )
};

export default PortfolioList;