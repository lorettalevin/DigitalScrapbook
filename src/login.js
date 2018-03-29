import React from 'react'; //import for all components
import axios from './axios';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
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

}
