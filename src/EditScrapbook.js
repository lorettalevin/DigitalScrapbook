import React from 'react';
import axios from './axios';
import {connect} from 'react-redux';
import {getScrapbook} from './actions';

const mapStateToProps = state => {
    return {
        scrapbook: state.scrapbook
    }
}

class EditScrapbook extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.dispatch(getScrapbook())
    }

    render() {
        return (
            <form>
                <input onChange={this.handleChange} name="scrapbook_title" value={scrapbook.scrapbook_title} type="text" placeholder="Scrapbook Title"/>
                <select onChange={this.handleChange} name="theme" id="">
                    <option value="Default">Please select theme</option>
                    <option value="Travel">Travel</option>
                    <option value="New Year's Eve">New Year's Eve</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Baby's First Milestones">Baby's First Milestones</option>
                </select>
                <select onChange={this.handleChange} name="color" id="">
                    <option value="Default">Please select color</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Pink">Pink</option>
                </select>
                <button onClick={this.handleSubmit}>SUBMIT</button>
            </form>
        )
    }
}

export default connect(mapStateToProps)(EditScrapbook)
