import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import * as serviceWorker from './serviceWorker';

// Internal
import Header from './Components/Header';
import Content from './Components/Content';

ReactDOM.render(
  <React.StrictMode>
    <Header />

    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
