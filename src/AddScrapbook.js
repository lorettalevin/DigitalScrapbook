import React from 'react';
import axios from './axios';
import {connect} from 'react-redux';
import {addScrapbook} from './actions'

const mapStateToProps = state => {
    return {}
}

class AddScrapbook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrapbook_title: '',
            theme: '',
            color: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        const { scrapbook_title, theme, color } = this.state;
        e.preventDefault();
        this.props.dispatch(addScrapbook({
            scrapbook_title,
            theme,
            color
        }))
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="addscrapbook-form-container">
                <form>
                    <div id="inside-add-container">
                    <input id="sb-title" onChange={this.handleChange} name="scrapbook_title" type="text" placeholder="Scrapbook Title"/>
                    <select className="dropdown-menu" onChange={this.handleChange} name="theme" id="theme">
                        <option value="Default">Please select theme</option>
                        <option value="Travel">Travel</option>
                        <option value="New Year's Eve">New Year's Eve</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Baby's First Milestones">Baby's First Milestones</option>
                    </select>
                    <select className="dropdown-menu" onChange={this.handleChange} name="color" id="color">
                        <option value="Default">Please select color</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Pink">Pink</option>
                    </select>
                    <button className="addscrapbook-button" onClick={this.handleSubmit}>SUBMIT</button>
                    </div>
                </form>
                <div id="travel-container">
                    <img id="travel" src="./images/travel-theme.png" alt="travel-picture"/>
                </div>
            </div>
        )}
}

export default connect(mapStateToProps)(AddScrapbook)
