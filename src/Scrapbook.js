import React from 'react';
import { getFullScrapbook } from "./actions";
import {connect} from 'react-redux';
import Page from './Page';

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
        if (!this.props.scrabookInfo.pages) {
            return (<div>Loading...</div>)
        } else if (this.props.scrapbookInfo.pages.length == 0) {
            return (<div>You have not added any pages.</div>)
        } else {
            return this.props.scrapbookInfo.pages.map(page => (
                <Page
                    page={page}
                />
            ))
        }

    }

    render() {
        if (!this.props.scrapbookInfo) {
            return (<div>Loading...</div>)

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

            {/*<div id="scrapbook-page-container">
                <div id="scrapbook-page">
                    <img id="planetail" src="../images/planetail.png"></img>
                    <img id="suitcase" src="../images/suitcase1.png"></img>
                    <img id="bike" src="../images/bike2.png"></img>
                    <img id="sunglasses" src="../images/sunglasses.png"></img>
                    <img id="map" src="../images/map.png"></img>
                    <img id="passport" src="../images/passport.png"></img>
                    <img id="sign" src="../images/sign.png"></img>

                    <div id="top-pic-container">
                        <div className="pic" id="pic1">
                            <img id="travel1" src={this.props.scrapbookInfo.pages[0].images[0].file || null}></img>
                        </div>
                        <div className="pic" id="pic2">
                            <img id="travel2" src={this.props.scrapbookInfo.pages[0].images[1].file || null}></img>
                        </div>
                    </div>
                    <div id="bottom-pic-container">
                        <div className="pic" id="pic3">
                                <img id="travel3" src={this.props.scrapbookInfo.pages[0].images[2].file || null }></img>
                        </div>
                        <div className="pic" id="pic4">
                                <img id="travel4" src={this.props.scrapbookInfo.pages[0].images[3].file || null}></img>
                        </div>
                        <div className="pic" id="pic5">
                                <img id="travel5" src={this.props.scrapbookInfo.pages[0].images[4].file || null }></img>
                        </div>
                    </div>
                </div>
            </div>*/}
            <Page />

                {/*{this.props.scrapbookInfo.scrapbook.color}
                {this.props.scrapbookInfo.scrapbook.theme}*/}
                {/*{renderedPages}*/}
            </div>
    )}
}

export default connect(mapStateToProps)(Scrapbook)
