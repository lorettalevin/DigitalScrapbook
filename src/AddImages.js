import React from 'react';
import axios from './axios';
import {addImages} from './actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        files: state.files
    }
}

class AddImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: "http://via.placeholder.com/275x275"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData()
        formData.append('file', this.state.file);
        formData.append('image_title', this.state.image_title);
        formData.append('description', this.state.description);
        this.props.dispatch(addImages(this.props.page_id, formData));
    }

    handleChange(e) {
        if (e.target.type === "file") {
            this.setState({
                [e.target.name]: e.target.files[0]
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    render() {
        return (
            <form>
                <input onChange={this.handleChange} name="file" type="file"/>
                <input onChange={this.handleChange} name="image_title" type="text" placeholder="Image Title"/>
                <input onChange={this.handleChange} name="description" type="text" placeholder="Image Caption"/>
                <button onClick={this.handleSubmit}>SUBMIT</button>
            </form>
        )}
}

export default connect(mapStateToProps)(AddImages)
