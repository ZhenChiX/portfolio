import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <ol>
                    <li className="fas fa-circle"><a href="#">HOME</a></li>
                    <li className="fas fa-circle"><a href="#">PORTFOLIO</a></li>
                    <li className="fas fa-circle"><a href="#">CONTACT</a></li>
                </ol>

            </div>
        );
    }
}

export default Nav;
