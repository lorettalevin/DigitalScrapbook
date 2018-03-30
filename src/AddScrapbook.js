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
            <div>
                <form>
                    <input onChange={this.handleChange} name="scrapbook_title" type="text" placeholder="Scrapbook Title"/>
                    <select name="theme" id="">
                        <option value="Default">Please select theme</option>
                        <option value="Travel">Travel</option>
                        <option value="New Year's Eve">New Year's Eve</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Baby's First Milestones">Baby's First Milestones</option>
                    </select>
                    <select name="color" id="">
                        <option value="Default">Please select color</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Pink">Pink</option>
                    </select>
                    <button onClick={this.handleSubmit}>SUBMIT</button>
                </form>
            </div>
        )}
}

export default connect(mapStateToProps)(AddScrapbook)
