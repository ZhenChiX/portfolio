import React, { Component } from 'react';

import './App.css';


class Main extends Component {
  render() {
    return (
      <div className='Main'>
        <header className='Main-header'>
        </header>
        <div className='Main-logo'></div>
        <div className='Main-intro'>
          <h1>Hello,I'm Chi.</h1>
          <h1>I'm a front-end web developer.</h1>
        <hr/>
        </div>
        <div className="Main-skill">
          <h1>SKILLS : </h1>
          <ul>
            <li className="Floating-1">JavaScript</li>
            <li className="Floating-2">HTML5</li>
            <li className="Floating-3">CSS3</li>
            <li className="Floating-4">JQuery</li>
            <li className="Floating-4">AJAX</li>
            <li className="Floating-3">React</li>
            <li className="Floating-2">Express</li>
            <li className="Floating-1">FireBase</li>

          </ul>
        </div>
      </div>
    );
  }
}


export default Main;

