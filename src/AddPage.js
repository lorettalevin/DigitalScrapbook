import React from 'react';
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
        document.querySelector('input[name="header"]').value = '';
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={this.handleChange} name="header" type="text" placeholder="Page Title"/>
                        <select className="edit-field" onChange={this.handleChange}name="color" id="">
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

export default connect(mapStateToProps)(AddPage)
