import React from 'react';
import { getFullScrapbook } from "./actions";
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        scrapbookInfo: state.scrapbookInfo
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
        if (!this.props.scrapbookInfo) {
            <div>Loading...</div>
            return null
        }
        const renderedPages = this.props.scrapbookInfo.pages.map((page, i) => {
            return (
                <div key={page.id}>
                    {page.header}
                    {page.images.map(image => {
                        return (
                            <div key={image.id}>
                                <div>{image.description}</div>

                                <img src={image.file}></img>
                            </div>
                        )
                    })}
                </div>

            )
        })

        return (
            <div>
                {this.props.scrapbookInfo.scrapbook.color}
                {this.props.scrapbookInfo.scrapbook.scrapbook_title}
                {this.props.scrapbookInfo.scrapbook.theme}
                {renderedPages}
            </div>
    )}
}

export default connect(mapStateToProps)(Scrapbook)
