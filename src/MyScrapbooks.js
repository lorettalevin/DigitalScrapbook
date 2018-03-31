import React from 'react';
import axios from './axios';
import {connect} from 'react-redux';
import {getScrapbooks} from './actions';

const mapStateToProps = state => {
    console.log("STATE SCRAP", state.scrapbooks);
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
                <p key={scrapbook.id}>{scrapbook.scrapbook_title}</p>
            )
        })
    }
    render() {
        return (
            <div>{this.renderScrapbooks()}</div>
        )
    }
}

export default connect(mapStateToProps)(MyScrapbooks)
