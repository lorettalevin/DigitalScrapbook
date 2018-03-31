import React from 'react';
import Home from './Home'
import {HashRouter, Route} from 'react-router-dom';

export default function Welcome(props) {
    return (
        <div>
            <HashRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                </div>
            </HashRouter>
        </div>
    );
}
