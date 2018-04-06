import React from 'react';
import {connect} from 'react-redux';
import { GridLoader } from 'react-spinners';
import AddPage from './AddPage';
import EditPage from './EditPage';
import {getScrapbook, editScrapbook, getPages, editTitle, changeColor} from './actions';

const mapStateToProps = state => {
    return {
        scrapbook: state.scrapbook,
        pages: state.pages,
        selectedColor: state.selectedColor
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
        this.props.dispatch(changeColor(document.querySelector('select[name="color"]').value))
    }

    handleSubmit(e) {
        e.preventDefault();
        const {scrapbook_title, theme, color} = this.state
        this.props.dispatch(editScrapbook(this.props.match.params.id, this.state))
        // document.querySelector('input[name="scrapbook_title"]').value = '';
        // document.querySelector('select[name="theme"]').value = '';
        // document.querySelector('select[name="color"]').value = '';
        this.props.dispatch(editTitle(document.querySelector('input[name="scrapbook_title"]').value))
    }

    togglePageForm() {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    renderEditPages() {
        if(!this.props.pages) {
            return (
                <div className='sweet-loading'>
                    <GridLoader
                        color={'#123abc'}
                    />
                </div>
            )
        }

        return this.props.pages.map(page => {
            return (
                <EditPage
                    key={page.id}
                    page={page}
                    />
            )
        })
    }

    render() {
        return (
            <div id="edit-scrapbook-page">
                <h1 id="edit-your-sb">Edit Your Scrapbook</h1>
                <div id="chosen-and-edit-form-container">
                    <div id="chosen">
                        <div id="current-choice">Currently Selected:</div>
                        <div className ="current">{this.props.scrapbook.scrapbook_title}</div>
                        <div className ="current">{this.props.scrapbook.theme}</div>
                        <div className ="current">{this.props.scrapbook.color}</div>
                    </div>

                    <div id="edit-form-container">
                        <form id="edit-scrapbook-form">
                            <div id="edit-info">Edit Info:</div>
                            <input className="edit-field" onChange={this.handleChange} name="scrapbook_title" placeholder="Scrapbook Title" id="" />
                            <select className="edit-field" onChange={this.handleChange} name="theme" id="">
                                <option value="Default">Select Theme</option>
                                <option value="Travel">Travel</option>
                                <option value="New Year's Eve">New Year's Eve</option>
                                <option value="Graduation">Graduation</option>
                                <option value="Baby's First Milestones">Baby's First Milestones</option>
                            </select>
                            <select className="edit-field" onChange={this.handleChange}name="color" id="">
                                <option value="Default">Select Color</option>
                                <option value="Blue">Blue</option>
                                <option value="Green">Green</option>
                                <option value="Yellow">Yellow</option>
                                <option value="Pink">Pink</option>
                            </select>
                            <button id="edit-button" className="edit-scrapbook-button" onClick={this.handleSubmit}>SUBMIT</button>
                        </form>
                    </div>
                </div>

                <div className="edit-page-wrapper">
                    <div id="edit-pages">
                        <div id="toggle-page">
                            <button id="addnewpage-button" onClick={this.togglePageForm}>Add New Page</button>
                            { this.state.showForm &&
                                <AddPage
                                    scrapbook_id={this.props.match.params.id}
                                    />
                            }
                        </div>
                    </div>
                </div>

                {this.renderEditPages()}

            </div>
        )
    }
}

export default connect(mapStateToProps)(EditScrapbook)





// <div className={this.props.selectedColor} id="editpage-scrapbook-page">
//     <img id="editpage-planetail" src="../images/planetail.png"></img>
//     <img id="editpage-suitcase" src="../images/suitcase1.png"></img>
//     <img id="editpage-bike" src="../images/bike2.png"></img>
//     <img id="editpage-sunglasses" src="../images/sunglasses.png"></img>
//     <img id="editpage-map" src="../images/map.png"></img>
//     <img id="editpage-passport" src="../images/passport.png"></img>
//     <img id="editpage-sign" src="../images/sign.png"></img>
//     {/*<img id="scrapbook-template" src="../images/scrapbook-template.png"></img>*/}
//     <div id="editpage-top-pic-container">
//         {/*<div className="pic" id="editpage-pic1">
//             <img src={this.props.scrapbookInfo.pages[0].images[0].file}></img>
//             </div>*/}
//         <div className="pic" id="editpage-pic2"></div>
//     </div>
//     <div id="editpage-bottom-pic-container">
//         <div className="pic" id="editpage-pic3"></div>
//         <div className="pic" id="editpage-pic4"></div>
//         <div className="pic" id="editpage-pic5"></div>
//     </div>
// </div>
