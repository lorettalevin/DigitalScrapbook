import React from 'react';
import Registration from './Registration';
import Login from "./Login";

export default class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div>
                    <p>Sign Up</p>
                    <Registration />
                </div>
                <div>
                    <p>Sign In</p>
                    <Login />
                </div>
            </div>
        )
    }
}
