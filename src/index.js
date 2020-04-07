import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import * as serviceWorker from './serviceWorker';

import Nav from './Components/Nav';

let navItems = [{
  label: 'Home',
  href: '#' 
}, {
  label: 'Services',
  href: '#'
}, {
  label: 'About',
  href: '#'
}, {
  label: 'Contact',
  href: '#'
}];

document.body.style.backgroundImage = 'url("https://w.wallhaven.cc/full/nk/wallhaven-nko7vq.jpg")';
document.body.style.backgroundSize = 'cover';

ReactDOM.render(
  <React.StrictMode>
    <Nav items={navItems} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
