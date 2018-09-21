import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App/App';
import Portfolio from './Portfolio/Portfolio';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';



import registerServiceWorker from './registerServiceWorker';





ReactDOM.render(<Nav />, document.getElementById('side-nav'));

ReactDOM.render(<Main />, document.getElementById('root'));

ReactDOM.render(<Portfolio />, document.getElementById('chi-portfolio'));

ReactDOM.render(<Contacts />, document.getElementById('chi-contacts'));

ReactDOM.render(<Footer />, document.getElementById('footer'));


registerServiceWorker();
/////BASIC FUNCTION/////




/////SMOOTH SCROLLING/////

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})

/////HIGHLIGHT NAV/////


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.Nav ol').addEventListener('click', function (e) {
        let aAll = this.querySelectorAll('a');
        let liAll = this.querySelectorAll('li');

        aAll.forEach((item) => {
            item.classList.remove('active');

        })
        liAll.forEach((item) => {
            item.classList.remove('current')
        })

        e.target.classList.add('active');
        e.target.parentNode.classList.add('current');




    })

})

/////SUBMIT CONTACTS/////


document.getElementById('form-submit').addEventListener('submit', getInfo)


function getInfo(e) {
    e.preventDefault();
    console.log('its working')
}

