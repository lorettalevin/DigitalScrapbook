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
        this.renderCoverBasedOnTheme=this.renderCoverBasedOnTheme.bind(this);
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

    renderCoverBasedOnTheme(){
        const {theme, scrapbook} = this.props.scrapbookInfo
        if (theme == 'travel') {
            return (
                <div id="scrapbook-cover-container">
                    <div className="cover-title">{scrapbook.scrapbook_title}</div>
                    <img className="coverpic" src="/images/scrapbook_cover_no_blue.png"/>
                </div>
            )
        } else if (theme == "new_years_eve") {
            return (
                <div id="scrapbook-cover-container">
                    <div className="cover-title">{scrapbook.scrapbook_title}</div>
                    <img className="coverpic" src="/images/nyecover.jpg"/>
                </div>
            )
        } else if (theme == "graduation") {
            return (
                <div id="scrapbook-cover-container">
                    <div className="cover-title">{scrapbook.scrapbook_title}</div>
                    <img className="coverpic" src="/images/graduationcover.jpg"/>
                </div>
            )
        } else if (theme == "babys_first_milestones") {
            return (
                <div id="scrapbook-cover-container">
                    <div className="cover-title">{scrapbook.scrapbook_title}</div>
                    <img className="coverpic" src="/images/babycover.jpg"/>
                </div>
            )
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
                    {this.renderCoverBasedOnTheme()}
                </div>
                {this.renderPages()}
            </div>
    )}
}



export default connect(mapStateToProps)(Scrapbook)
