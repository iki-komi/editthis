import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './app';

// Just a wrapper component to allow use of react router, we could honestly
// put all of this into app.js
window.onload = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App {...window.__APP_INITIAL_STATE__}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
};
