import React, { Component } from 'react';
import './App.css';

class Resume extends Component {
    render() {
        return (
            <div className='Resume'>
                <div className="Contact-logo"></div>

                <div>
                    <h1>Technical Skills:</h1>
                    <ul>
                        <li>Skill Sets:JavaScript,HTML5,CSS3,JQuery,AJAX,React,Express,MongoDB.</li>
                        <li>Tools:</li>
                        <li>Operating System:</li>
                    </ul>
                </div>
                <div>
                    <h1>Projects:</h1>
                    <ul>
                        <li>Game Tracker</li>
                        <li>Movie Royale</li>
                        <li>Code Potato</li>
                    </ul>
                </div>
                <div>
                    <h2>E</h2>
                    <ul>
                        <li>Languages:</li>
                        <li>Tools:</li>
                        <li>Operating System:</li>
                    </ul>
                </div>


            </div>

        )
    }
}


export default Resume;
