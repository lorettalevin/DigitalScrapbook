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
        document.querySelector('input[name="scrapbook_title"]').value = '';
        document.querySelector('select[name="theme"]').value = '';
        document.querySelector('select[name="color"]').value = '';
    }


// if (document.querySelector('select[name="color"]').value = 'blue') {
//     render blue page
// } else if (document.querySelector('select[name="color"]').value = 'green') {
//     render green page
// } else if (document.querySelector('select[name="color"]').value = 'pink') {
//     render pink page
// } else if (document.querySelector('select[name="color"]').value = 'yellow') {
//     render yellow page
// }


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

                        <div id="scrapbook-page-container">
                            <div id="editpage-scrapbook-page">
                            <img id="editpage-planetail" src="../images/planetail.png"></img>
                            {/*<img id="editpage-camera" src="../images/camera.png"></img>*/}
                            <img id="editpage-bike" src="../images/bike2.png"></img>
                            <img id="editpage-sunglasses" src="../images/sunglasses.png"></img>
                            <img id="editpage-map" src="../images/map.png"></img>
                            <div id="editpage-top-pic-container">
                                <div className="pic" id="pic1"></div>
                                <div className="pic" id="pic2"></div>
                            </div>
                            <div id="editpage-bottom-pic-container">
                                <div className="pic" id="pic3"></div>
                                <div className="pic" id="pic4"></div>
                                <div className="pic" id="pic5"></div>
                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(EditScrapbook)
