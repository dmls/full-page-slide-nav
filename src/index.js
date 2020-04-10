import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import * as serviceWorker from './serviceWorker';

// Internal
import Header from './Components/Header';

document.body.style.background = 'url("https://w.wallhaven.cc/full/nk/wallhaven-nko7vq.jpg") no-repeat center center fixed';
document.body.style.backgroundSize = 'cover';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
