import React from 'react';
import axios from './axios';

export default class AddPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form>
                <input onChange={this.handleChange} name="header" type="text" placeholder="Page Title"/>
                <button onClick={this.handleSubmit}>SUBMIT</button>
            </form>
        )}
}
