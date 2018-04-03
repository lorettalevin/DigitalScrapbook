import React from 'react';
import { getFullScrapbook } from "./actions";
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        scrapbook: state.scrapbook,
        pages: state.pages
    }
}

class Scrapbook extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {
        this.props.dispatch(getFullScrapbook(this.props.match.params.id))
    }

    render() {
        return (
            <div>
                SCRAPBOOK
            </div>
    )}
}

export default connect(mapStateToProps)(Scrapbook)
