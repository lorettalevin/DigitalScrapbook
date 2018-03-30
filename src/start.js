import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import App from './App';

let router;

if (location.pathname == '/welcome') {
    console.log("rendering welcome", location.pathname);
    router = <Welcome />
} else {
    console.log("rendering app", location.pathname);

    router = <App />
}


ReactDOM.render(
    router,
    document.querySelector('main')
);
