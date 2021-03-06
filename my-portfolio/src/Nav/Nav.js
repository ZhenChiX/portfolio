import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <ol>
                    <li className="current"><span className="fas fa-home"></span><a
                        className="active navmenu" href="#chi-home">HOME</a></li>
                    <li><span className="fas fa-user-cog"></span><a className="navmenu" href="#chi-portfolio">PORTFOLIO</a></li>
                    <li><span className="fas fa-envelope"></span><a className="navmenu" href="#chi-contacts">CONTACT</a></li>
                </ol>
                <span id="github" className="fab fa-github" title="Github"></span>
            </div>
        );
    }
}



export default Nav;