import React from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import PortfolioList from './PortfolioList';
import Resume from './Resume';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    return (
        <>
            <Header />
{/* Move below into Content component */}
            <div className='centralContent'><AboutMe /></div>
            
            <div className='centralContent'><Contact /></div>
            <h3>Portfolio</h3>
            <div className='centralContent'><PortfolioList /></div>
            <h4>Resume</h4>
            <div className='centralContent'><Resume /></div>

            <Footer />
        </>
    );
}

export default App;