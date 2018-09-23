import React, { Component } from 'react';
import Tilt from 'react-tilt';
import '../App/App.css';
// import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


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
        var link = e.currentTarget.getAttribute('link');

        portfolioDetail = [imageUrl1, imageUrl2, link];
        // console.log(portfolioDetail);


    }


    handleCloseModal = () => {
        this.setState({
            showModal: false
        })

        // console.log('close modal');
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
                        link='https://www.gameztracker.com'
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
                        link='http://movieroyale.com'
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
                        link='https://zhenchix.github.io/codepotato/'
                    >
                        <h1>Code Potato</h1>
                        <img className="Desktop" src={require("../mockup/desktop-cp.png")} alt="project-preview" />

                        <p>Click For Detail</p>
                    </div>

                </Tilt>

                {this.state.showModal
                    ? (
                        <Grid container spacing={0} id='portfolio-modal'>
                            <Grid container item xs={12} justify='center'>
                                <Button 
                                    id='link-button'
                                    variant="contained"
                                    href={portfolioDetail[2]} target='_blank' className='outside-link'>
                                    <span className='fas fa-external-link-alt'>&nbsp;</span> Visit this site
                             </Button>
                            </Grid>
                            <Grid container item xs={12} md={6} justify='center'>
                                <img src={portfolioDetail[0]} alt="YOUR ASS" />
                            </Grid>
                            <Grid container item xs={12} md={6} justify='center'>
                                <img src={portfolioDetail[1]} alt="YOUR ASS" />
                            </Grid>
                            <Grid container item xs={12} justify='center'>
                                <Button
                                    id="closeModal"
                                    variant='contained'
                                    onClick={this.handleCloseModal} > Close</Button>
                            </Grid>
                        </Grid>
                    )
                    : null}

            </div>
        );
    }
}



export default Portfolio;

