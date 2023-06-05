import React from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import './App.css';

const App = () => {
    const [activeContent, setActiveContent] = useState('about');

    return (
        <>
            <Header 
                activeContent={activeContent}
                setActiveContent={setActiveContent} />
            <Content
                activeContent={activeContent}/>
            <Footer />
        </>
    );
}

export default App;