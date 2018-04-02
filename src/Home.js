import React from 'react';
import Registration from './Registration';
import Login from "./Login";
import Logo from "./Logo";

export default class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div id="logo-container">
                    <Logo/>
                    <img id="scissors" src="./images/pinksci.png" alt="scissors"/>
                </div>


                <div id="home-container">
                    <div>
                        <p>Sign Up</p>
                        <Registration />
                    </div>
                    <div>
                        <p>Sign In</p>
                        <Login />
                    </div>
                </div>
            </div>
        )
    }
}
