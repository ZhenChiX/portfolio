import React, { Component } from 'react';
import './App.css';

class Modal extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <img className="Mobile" alt="project-preview" />
                <img className="Mobile" alt="project-preview" />



            </div>
        );
    }
}


class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio-grid">
                <div className="Portfolio-logo"></div>

                {/* <h1>PORTFOLIO</h1> */}
                <div>
                    <h1>Game Tracker</h1>
                    <img className="Desktop" src={require("./mockup/desktop-gt.png")} alt="project-preview" />

                    <p></p>
                </div>
                <div>
                    <h1>Movie Royale</h1>
                    <img className="Desktop" src={require("./mockup/desktop-mr2.png")} alt="project-preview" />

                    <p></p>
                </div>
                <div>
                    <h1>Code Potato</h1>
                    <img className="Desktop" src={require("./mockup/desktop-cp.png")} alt="project-preview" />

                    <p></p>
                </div>


            </div>
        );
    }
}


export default Portfolio;
// export default Modal;
