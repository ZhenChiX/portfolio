import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <ol>
                    <li className="current"><span className="fas fa-home"></span><a className="Active"href="#chi-home">HOME</a></li>
                    <li><span className="fas fa-user-cog"></span><a href="#chi-portfolio">PORTFOLIO</a></li>
                    <li><span className="fas fa-envelope"></span><a href="#chi-resume">CONTACT</a></li>
                </ol>

            </div>
        );
    }
}

export default Nav;
