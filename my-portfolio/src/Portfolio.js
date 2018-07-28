import React, { Component } from 'react';
import './App.css';

class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio-grid">
                <div>
                    <h1>Game Tracker</h1>
                    <img className="Desktop" />
                    <img className="Mobile" />
                    <p></p>
                </div>
                <div>
                    <h1>Movie Royale</h1>
                    <img className="Desktop" />
                    <img className="Mobile" />
                    <p></p>
                </div>
                <div>
                    <h1>Code Potato</h1>
                    <img className="Desktop" />
                    <img className="Mobile" />
                    <p></p>
                </div>


            </div>
        );
    }
}


export default Portfolio;

