import React from 'react';
import axios from './axios';
import {connect} from 'react-redux';
import {addPage} from './actions';


const mapStateToProps = state => {
    return {
        page: state.header
    }
}

class AddPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(addPage(this.props.scrapbook_id, this.state.header))
    }

    render() {
        return (
            <form>
                <input onChange={this.handleChange} name="header" type="text" placeholder="Page Title"/>
                <button onClick={this.handleSubmit}>SUBMIT</button>
            </form>
        )}
}

export default connect(mapStateToProps)(AddPage)
