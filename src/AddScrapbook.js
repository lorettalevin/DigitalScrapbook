import React from 'react';
import axios from './axios';
import {connect} from 'react-redux';

export default class AddScrapbook extends React.Component {
    constructor() {
        super();
    }
    // componentDidMount() {
    //     this.props.dispatch(addScrapbook())
    // }
    render() {
        return (
            <div>
                <h1>HELLO ADDSCRABOOK WHERE ARE YOU? SCOOBY DOO</h1>
                <form>
                    <input onChange={this.handleChange} name="scrapbook_title" type="text" placeholder="Scrapbook Title"/>
                    <button onClick={this.handleSubmit}>SUBMIT</button>
                </form>
                <select name="theme" id="">
                    <option value="Travel">Travel</option>
                    <option value="New Year's Eve">New Year's Eve</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Baby's First Milestones">Baby's First Milestones</option>
                </select>
                <select name="color" id="">
                    <option value="Default">Default</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Pink">Pink</option>
                </select>
            </div>
        )}
}
