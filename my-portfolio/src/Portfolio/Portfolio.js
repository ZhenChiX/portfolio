import React, { Component, Fragment } from 'react';
import Tilt from 'react-tilt';
import '../App/App.css';
// import Modal from '@material-ui/core/Modal';

let portfolioDetail = [];

class Portfolio extends Component {

    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }


    handleOpenModal = (e) => {

        this.setState({
            showModal: !this.state.showModal

        })

        var imageUrl1 = e.currentTarget.getAttribute('imgurl1');
        var imageUrl2 = e.currentTarget.getAttribute('imgurl2');

        portfolioDetail = [imageUrl1, imageUrl2];
        console.log(portfolioDetail);


    }


    handleCloseModal = () => {
        this.setState({
            showModal: false
        })

        console.log('close modal');
    }


    render() {
        return (
            <div className="Portfolio-grid">
                <div className="Portfolio-logo"></div>

                <Tilt className="Tilt" options={{ max: 25 }}>
                    <div className="Tilt-inner"
                        onClick={this.handleOpenModal}
                        imgurl1={require("../mockup/mobile-gt_iphonexspacegrey_portrait.png")}
                        imgurl2={require("../mockup/desktop-gt_macbookpro15_front.png")}

                    >
                        <h1>Game Tracker</h1>
                        <img
                            className="Desktop"
                            src={require("../mockup/desktop-gt.png")}
                            alt="project-preview"
                        />
                        <p>Click For Detail</p>
                    </div>
                </Tilt>
                <Tilt className="Tilt" options={{ max: 25 }}  >

                    <div className="Tilt-inner"
                        onClick={this.handleOpenModal}
                        imgurl1={require("../mockup/mobile-mr2_iphonexspacegrey_portrait.png")}
                        imgurl2={require("../mockup/desktop-mr2_macbookpro15_front.png")}

                    >
                        <h1>Movie Royale</h1>
                        <img className="Desktop" src={require("../mockup/desktop-mr2.png")} alt="project-preview" />

                        <p>Click For Detail</p>
                    </div>
                </Tilt >
                <Tilt className="Tilt" options={{ max: 25 }}  >

                    <div className="Tilt-inner"
                        onClick={this.handleOpenModal}
                        imgurl1={require("../mockup/desktop-cp2_macbookpro15_front.png")}
                        imgurl2={require("../mockup/desktop-cp_macbookpro15_front.png")}

                    >
                        <h1>Code Potato</h1>
                        <img className="Desktop" src={require("../mockup/desktop-cp.png")} alt="project-preview" />

                        <p>Click For Detail</p>
                    </div>

                </Tilt>

                {this.state.showModal
                    ? (
                        <div id='portfolio-modal'>
                            <img src={portfolioDetail[0]} alt="YOUR ASS" />
                            <img src={portfolioDetail[1]} alt="YOUR ASS" />
                            <button id="closeModal" onClick={this.handleCloseModal} > asdasdasd</button>
                        </div>
                    )
                    : undefined}

            </div>
        );
    }
}



export default Portfolio;

