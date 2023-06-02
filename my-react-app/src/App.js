import React from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import PortfolioList from './PortfolioList';

const App = () => {
    return (
        <>
            <h1>About Me</h1>
            <div className='centralContent'><AboutMe /></div>
            <h2>Contact</h2>
            <div className='centralContent'><Contact /></div>
            <h3>Portfolio</h3>
            <div className='centralContent'><PortfolioList /></div>
        </>
    );
}

export default App;