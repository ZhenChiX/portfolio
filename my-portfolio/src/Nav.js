import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <ol>
                    <li><span className="fas fa-home"></span><a href="asd">HOME</a></li>
                    <li><span className="fas fa-user-cog"></span><a href="asd">PORTFOLIO</a></li>
                    <li><span className="fas fa-envelope"></span><a href="asd">CONTACT</a></li>
                </ol>

            </div>
        );
    }
}

export default Nav;
