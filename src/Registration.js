import React from 'react';
import axios from './axios';

export default class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            first: '',
            last: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        axios.post('/registration', this.state).then(resp => {
            if (resp.data.success) {
                location.replace('/addscrapbook');
            } else {
                this.setState({
                    error: true,
                    errorMessage: resp.data.errorMessage
                }, () => {
                    console.log(this.state)
                })
            }
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log("new state", this.state))
    }
    render() {

        return (
        <div>

            {this.state.error && <div>{this.state.errorMessage}</div>}
            <div>
                <form id="registration-form">
                    <input className="field" onChange={this.handleChange} name="first" type="text" placeholder="First Name"/>
                    <input className="field" onChange={this.handleChange} name="last" type="text" placeholder="Last Name"/>
                    <input className="field" onChange={this.handleChange} name="email" type="text" placeholder="Email"/>
                    <input className="field" onChange={this.handleChange} name="password" type="password" placeholder="Password"/>
                    <div>
                        <button id="registration-button" onClick={this.handleSubmit}>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )}
}
