import React from 'react';
import { useState } from 'react';

function isEmailValid(email) {
    return /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(email);
}

const Contact = () => {
    const [errorMessage, setErrorMessage] = useState('');
    
    return (
        <>
            <h2>Contact</h2>
            <div className="input-field">
                <input type="text" placeholder="Type..." id="name" onBlur={(e) => {
                    e.target.value ? setErrorMessage(''): setErrorMessage('Name required')
                    }}/>
                <label for="name">Name</label>
            </div>
            <div className="input-field">
                <input type="text" placeholder="Type..." id="email" onBlur={(e) => {
                    isEmailValid(e.target.value) ? setErrorMessage(''): setErrorMessage('Valid Email Address required')
                }}/>
                <label for="email">Email</label>
            </div>
            <div className="input-field">
                <textarea placeholder="Type..." id="message" rows="10" cols="50" onBlur={(e) => {
                    e.target.value ? setErrorMessage(''): setErrorMessage('Message required')
                }}/>
                <label for="message">Message</label>
            </div>
            <div className="submit">
                <button id='submit' onClick={() => {}}>Submit</button>
            </div>
            <div className="error-message">{errorMessage}</div>
            </>
    )
};

export default Contact;