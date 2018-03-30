import React from 'react';
import Registration from './registration'
import Login from './login'
import {HashRouter, Route} from 'react-router-dom';



export default function Welcome(props) {
    console.log(location.pathname);
    return (
        <div>
            <h1>welcome</h1>
            <HashRouter>
                <div>
                    <Route exact path="/" component={Registration}/>
                    <Route exact path="/login" component={Login} />
                </div>
            </HashRouter>
        </div>
    );
}
