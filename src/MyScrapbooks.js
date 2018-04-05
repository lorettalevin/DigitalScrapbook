import React from 'react';
import axios from './axios';
import {connect} from 'react-redux';
import {getScrapbooks} from './actions';
import {Link} from 'react-router-dom';

const mapStateToProps = state => {
    return {
        scrapbooks: state.scrapbooks
    }
}

class MyScrapbooks extends React.Component {
    constructor() {
        super();
        this.renderScrapbooks = this.renderScrapbooks.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(getScrapbooks())
    }

    renderScrapbooks() {
        if(!this.props.scrapbooks) {
            return (
                <div>Loading...</div>
            )
        }

        return this.props.scrapbooks.map(scrapbook => {
            return (
                <div className="myscrapbooks-single-wrapper" key={scrapbook.id}>
                <div id="scrapbook-tile" >
                    <div id="choice-tile">
                        <div className="tile-container">
                            <p className="left-font">Title:</p><p className="right-font">{ scrapbook.scrapbook_title }</p>
                        </div>
                        <div className="tile-container">
                        <p className="left-font">Color:</p><p className="right-font">{ scrapbook.color }</p>
                        </div>
                        <div className="tile-container">
                        <p className="left-font">Theme:</p><p className="right-font">{ scrapbook.theme }</p>
                        </div>
                    </div>
                    <div id="button-tile-container">
                        <Link to={`/scrapbook/${scrapbook.id}`}><button className="tile-button">VIEW</button></Link>
                        <Link to={`/editscrapbook/${scrapbook.id}`}><button className="tile-button">EDIT</button></Link>
                        <Link to={`/deletescrapbook/${scrapbook.id}`}><button id="delete-button" className="tile-button">DELETE</button></Link>
                    </div>
                </div>
            </div>
            )
        })
    }

    render() {
        return (
            <div id="myscrapbooks-container">{this.renderScrapbooks()}</div>
        )
    }
}

export default connect(mapStateToProps)(MyScrapbooks)
