import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Registration from './registration'
import Login from './login'
// import Logo from './logo';


export default function Welcome(props) {
    return (
        <div id="welcome">
            <BrowserRouter>
                    <div>
                        <Route exact path="/registration" component={Registration}/>
                        <Route path="/login" component={Login} />
                    </div>
            </BrowserRouter>
        </div>
    );
}
