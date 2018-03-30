import React from 'react';
import axios from './axios';

export default class AddPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        {/*const {first, last, email, password} = this.state*/}
        return (
            <div>
            {/*{this.state.error && <div>{this.state.errorMessage}</div>}*/}
            <div>
                <form>
                    <input onChange={this.handleChange} name="header" type="text" placeholder="Page Title"/>
                    <button onClick={this.handleSubmit}>SUBMIT</button>
                </form>
            </div>
        </div>
    )}
}
