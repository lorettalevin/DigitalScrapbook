import React from 'react';
import {connect} from 'react-redux';
import AddPage from './AddPage';
import EditPage from './EditPage';
import {getScrapbook, editScrapbook, getPages} from './actions';

const mapStateToProps = state => {
    return {
        scrapbook: state.scrapbook,
        pages: state.pages
    }
}

class EditScrapbook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.togglePageForm = this.togglePageForm.bind(this)
        this.renderEditPages = this.renderEditPages.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(getScrapbook())
        this.props.dispatch(getPages(this.props.match.params.id))
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const {scrapbook_title, theme, color} = this.state
        this.props.dispatch(editScrapbook(this.props.match.params.id, this.state))
    }

    togglePageForm() {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    renderEditPages() {
        if(!this.props.pages) {
            return (
                <div>Loading...</div>
            )
        }

        return this.props.pages.map(page => {
            return (
                <div key={page.id}>
                    <EditPage
                        page={page}
                        />
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div id="chosen-and-edit-form-container">
                <div id="chosen">
                    <p>You have chosen: {this.props.scrapbook.scrapbook_title}</p>
                    <p>You have chosen: {this.props.scrapbook.theme}</p>
                    <p>You have chosen: {this.props.scrapbook.color}</p>
                </div>
            <div id="edit-form-container">
                <form id="edit-scrabook-form">
                    <input className="edit-field" onChange={this.handleChange} name="scrapbook_title" placeholder="Scrapbook Title" id="" />
                    <select className="edit-field" onChange={this.handleChange} name="theme" id="">
                        <option value="Default">Please select theme</option>
                        <option value="Travel">Travel</option>
                        <option value="New Year's Eve">New Year's Eve</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Baby's First Milestones">Baby's First Milestones</option>
                    </select>
                    <select className="edit-field" onChange={this.handleChange} name="color" id="">
                        <option value="Default">Please select color</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Pink">Pink</option>
                    </select>
                    <button onClick={this.handleSubmit}>SUBMIT</button>
                </form>
            </div>

                <button id="addnewpage-button" onClick={this.togglePageForm}>Add New Page</button>

                { this.state.showForm &&
                    <AddPage
                        scrapbook_id={this.props.match.params.id}
                    /> }
                </div>
                <div>{this.renderEditPages()}</div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(EditScrapbook)
