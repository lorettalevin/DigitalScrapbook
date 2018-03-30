import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Registration from './Registration'
import Login from './Login'
// import Logo from './logo';


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
