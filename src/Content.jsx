import React from 'react';
import './Content.css';
import AboutMe from './AboutMe';
import Contact from './Contact';
import PortfolioList from './PortfolioList';
import Resume from './Resume';

const Content = ({activeContent}) => {

    if(activeContent === 'about') {
        return (
            <div className='centralContent'><AboutMe /></div>
        )
    }

    if(activeContent === 'portfolio') {
        return (
            <div className='centralContent'><PortfolioList /></div>
        )      
    }
            
    if(activeContent === 'contact') {
        return (
            <div className='centralContent'><Contact /></div>
        )
    }
       
    if(activeContent === 'resume') {
        return (
            <div className='centralContent'><Resume /></div>
        )
    }    
};

export default Content;