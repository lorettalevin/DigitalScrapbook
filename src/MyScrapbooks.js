import React from 'react';
import axios from './axios';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        scrapbook: state.scrapbook

    }
}
class MyScrapbooks extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log("THIS PROPS", this.props);
        return (
            <h1>My SCRAPBoOKs</h1>
        )
    }
}

export default connect(mapStateToProps)(MyScrapbooks)
