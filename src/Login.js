import React from 'react';
import axios from './axios';

export default class Login extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('/login', this.state).then((resp) => {
            if (resp.data.success) {
                location.replace('/');
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
        })
    }

    render() {

        return (<div>
            {this.state.error && <div>{this.state.errorMessage}</div>}
            <div>
                <form id="login-form">
                    <input className="field" onChange={this.handleChange} name="email" type="text" placeholder="Email"/>
                    <input className="field" onChange={this.handleChange} name="password" type="password" placeholder="Password"/>
                    <div>
                        <button id="login-button" onClick={this.handleSubmit}>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>)
    }
}
