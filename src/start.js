import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));

let router;

if (location.pathname == '/welcome') {
    router = <Welcome />
} else {
    router = <App />
}

const elem = (
    <Provider store={store}>
        { router }
    </Provider>
);

ReactDOM.render(
    elem,
    document.querySelector('main')
);
