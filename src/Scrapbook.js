import React from 'react';
import { getFullScrapbook } from "./actions";
import {connect} from 'react-redux';
import Page from './Page';
import { GridLoader } from 'react-spinners';

const mapStateToProps = state => {
    return {
        scrapbookInfo: state.scrapbookInfo
    }
}

class Scrapbook extends React.Component {
    constructor(props) {
        super(props);
        this.renderPages=this.renderPages.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getFullScrapbook(this.props.match.params.id))
    }

    renderPages() {
        if (this.props.scrabookInfo && !this.props.scrabookInfo.pages) {
            return (
                <div className='sweet-loading'>
                    <GridLoader
                        color={'#123abc'}
                    />
                </div>
            )
        } else if (this.props.scrapbookInfo.pages.length == 0) {
            return (<div>You have not added any pages.</div>)
        } else {
            return this.props.scrapbookInfo.pages.map(page => (
                <Page
                    key={page.id}
                    page={page}
                />
            ))
        }
    }

    render() {
        if (!this.props.scrapbookInfo) {
            return (
                <div className='sweet-loading'>
                    <GridLoader
                        color={'#123abc'}
                    />
                </div>
            )
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
                <div id="main-container">
                    <div id="scrapbook-cover-container">
                        <div id="cover-title">{this.props.scrapbookInfo.scrapbook.scrapbook_title}</div>
                        <img id="coverpic" src="../images/scrapbook_cover_no_blue.png"></img>
                    </div>
                </div>
                {this.renderPages()}
            </div>
    )}
}



export default connect(mapStateToProps)(Scrapbook)
