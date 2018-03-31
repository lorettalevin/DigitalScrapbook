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
                <div key={scrapbook.id}>
                    <p>{ scrapbook.scrapbook_title }</p>
                    <p>{ scrapbook.color }</p>
                    <p>{ scrapbook.theme }</p>
                    <div>
                        <Link to={`/scrapbook/${scrapbook.id}`}><button>View</button></Link>
                        <Link to={`/editscrapbook/${scrapbook.id}`}><button>Edit</button></Link>
                        <Link to={`/deletescrapbook/${scrapbook.id}`}><button>Delete</button></Link>
                    </div>
                </div>
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
