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
        if (scrapbook_title, theme, color) {
            e.preventDefault();
            document.querySelector('input[name="scrapbook_title"]').value = '';
            document.querySelector('select[name="theme"]').value = '';
            document.querySelector('select[name="color"]').value = '';
            this.props.dispatch(addScrapbook({
                scrapbook_title,
                theme,
                color
            }))
            location.replace('/myscrapbooks');
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="addscrapbook-form-container">
                {this.state.error && <div>{this.state.errorMessage}</div>}
                <form>
                    <div id="inside-add-container">
                    <input id="sb-title" onChange={this.handleChange} name="scrapbook_title" type="text" placeholder="Scrapbook Title"/>
                    <select className="dropdown-menu" onChange={this.handleChange} name="theme" id="theme">
                        <option value="default" selected disabled>Please select theme</option>
                        <option value="travel">Travel</option>
                        <option value="new_years_eve">New Year's Eve</option>
                        <option value="graduation">Graduation</option>
                        <option value="babys_first_milestones">Baby's First Milestones</option>
                    </select>
                    <select className="dropdown-menu" onChange={this.handleChange} name="color" id="color">
                        <option value="Default">Please select color</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Pink">Pink</option>
                    </select>
                    <button className="addscrapbook-button" onClick={this.handleSubmit}>SUBMIT</button>
                    </div>
                </form>
                <div id="addpage-scrapbook-cover-container">
                    <div id="addpage-cover-title">Scrapbook Title</div>
                    <img id="coverpic" src="../images/scrapbook_cover_no_blue.png"></img>
                </div>
            </div>
        )}
}

export default connect(mapStateToProps)(AddScrapbook)
