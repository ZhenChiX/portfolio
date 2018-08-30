import React, { Component } from 'react';
import Tilt from 'react-tilt';
import './App.css';

class Modal_gt extends Component {

    render() {
        return (
            <div>
                <img className="Mobile" alt="project-preview" />
                <img className="Mobile" alt="project-preview" />
                <h1>THIS IS MODAL</h1>
            </div>
        );
    }
}


class Portfolio extends Component {

    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }


    render() {
        return (
            <div className="Portfolio-grid">
                <div className="Portfolio-logo"></div>

                <Tilt className="Tilt" options={{ max: 25 }}  >
                    <div className="Tilt-inner">
                        <h1>Game Tracker</h1>
                        <img className="Desktop" src={require("./mockup/desktop-gt.png")} alt="project-preview" />
                        <p>Click For Detail</p>
                    </div>
                </Tilt>
                <Tilt className="Tilt" options={{ max: 25 }}  >

                    <div className="Tilt-inner">
                        <h1>Movie Royale</h1>
                        <img className="Desktop" src={require("./mockup/desktop-mr2.png")} alt="project-preview" />

                        <p>Click For Detail</p>
                    </div>
                </Tilt >
                <Tilt className="Tilt" options={{ max: 25 }}  >

                    <div className="Tilt-inner">
                        <h1>Code Potato</h1>
                        <img className="Desktop" src={require("./mockup/desktop-cp.png")} alt="project-preview" />

                        <p>Click For Detail</p>
                    </div>

                </Tilt>
                <Modal_gt />
            </div>
        );
    }
}


export default Portfolio;

