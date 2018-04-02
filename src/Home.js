import React from 'react';
import Registration from './Registration';
import Login from "./Login";
import {HomeLogo} from './Logo';


export default class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div id="logo-container">
                    <HomeLogo />
                </div>
                {/*<div id="scissors-container">*/}
                    <img id="scissors" src="./images/scissors.png" alt="scissors"/>
                {/*</div>*/}


                <div id="home-container">
                    <div>
                        <p>SIGN UP</p>
                        <Registration />
                    </div>
                    <div>
                        <p>SIGN IN</p>
                        <Login />
                    </div>
                </div>
            </div>
        )
    }
}
