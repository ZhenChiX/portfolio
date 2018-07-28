import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Footer from './Footer';
import Nav from './Nav';

import registerServiceWorker from './registerServiceWorker';





ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Resume />,document.getElementById('chi-resume'));

ReactDOM.render(<Footer />,document.getElementById('footer'));

ReactDOM.render(<Nav />,document.getElementById('side-nav'));

ReactDOM.render(<Portfolio />,document.getElementById('chi-portfolio'));



