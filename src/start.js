import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import App from './app';
import {BrowserRouter, Route} from 'react-router-dom';

let router;

if (location.pathname == '/welcome') {
    router = <Welcome />
} else {
    router = <App />
}


ReactDOM.render(
    router,
    document.querySelector('main')
);
