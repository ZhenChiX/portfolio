import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App/App';
import Portfolio from './Portfolio/Portfolio';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import './function';
import firebase from 'firebase';

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
    // document.getElementsByClassName("navmenu").addEventListener('click', function (e) {
    document.querySelector('.Nav ol').addEventListener('click', function (e) {


        let aAll = this.querySelectorAll('a');
        let liAll = this.querySelectorAll('li');
        // console.log(this)
        // console.log(e.target)
        // console.log(liAll);
        aAll.forEach((item) => {
            item.classList.remove('active');

        })
        liAll.forEach((item) => {
            item.classList.remove('current')
        })
        if (e.target.classList.contains('navmenu')) {
            e.target.classList.add('active');
            // console.log(e.target.classList);
            e.target.parentNode.classList.add('current');

        }


    })

})


//Reference message
// var messagesRef = firebase.database().ref('here is the message');
var messagesRef = firebase.database().ref('You have new messages')



/////DISPLAY DATABASE/////



/////SUBMIT CONTACTS/////


document.getElementById('form-submit').addEventListener('submit', getInfo)


function getInfo(e) {
    e.preventDefault();
    console.log('its working')

    var name = getInputVal('form-name');
    var email = getInputVal('form-email');
    var subject = getInputVal('form-subject');
    var message = getInputVal('form-message');

    // console.log(name);
    // console.log(email);
    // console.log(subject);
    // console.log(message);

    saveMessage(name, email, subject, message);
    document.getElementById('form-submit').reset();


};

/////FUNCTION TO GET FORM VALUES /////
function getInputVal(id) {
    return document.getElementById(id).value;
}

/////SAVE MESSAGE TO DATABSAE/////
function saveMessage(name, email, subject, message) {
    // var newMessageRef = messagesRef.push();

    let newMessageRef = messagesRef.push();

    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message,

    })

}

/////GITHUB LINK/////
document.querySelector('.fa-github').addEventListener('click', githubLink);
function githubLink() {
    window.open('https://github.com/ZhenChiX', '_blank');

    console.log('click');
}