import React, { Component } from 'react';
import './App.css';

class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio-grid">
                <div className="Portfolio-logo"></div>

                {/* <h1>PORTFOLIO</h1> */}
                <div>
                    <h1>Game Tracker</h1>
                    <img className="Desktop" alt="project-preview" />>
                    <img className="Mobile" alt="project-preview" />
                    <p></p>
                </div>
                <div>
                    <h1>Movie Royale</h1>
                    <img className="Desktop" alt="project-preview" />
                    <img className="Mobile" alt="project-preview" />
                    <p></p>
                </div>
                <div>
                    <h1>Code Potato</h1>
                    <img className="Desktop" alt="project-preview" />
                    <img className="Mobile" alt="project-preview" />
                    <p></p>
                </div>


            </div>
        );
    }
}


export default Portfolio;

