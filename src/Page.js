import React from 'react';
const placeholder = 'http://via.placeholder.com/550x450';

class Page extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (!this.props.page || this.props.page.images.length == 0) {
            console.log(this.props);
            return (<div>You don't have enough images to render this page.</div>)
        }
        return (
            <div id="scrapbook-page-container">
                <div id="scrapbook-page">
                    <h1 id="header">{this.props.page.header}</h1>

                    <div id="top-pic-container">
                        <div className="pic" id="pic1">
                            <img
                                id="travel1"
                                src={this.props.page.images[0] && this.props.page.images[0].file ||
                                placeholder }
                            />
                        </div>

                        <div className="pic" id="pic2">
                            <img
                                id="travel2"
                                src={this.props.page.images[1] && this.props.page.images[1].file ||
                                placeholder} />
                        </div>
                    </div>

                    <div id="bottom-pic-container">
                        <div className="pic" id="pic3">
                            <img id="travel3"
                                src={this.props.page.images[2] && this.props.page.images[2].file ||
                                placeholder} />
                        </div>

                        <div className="pic" id="pic4">
                            <img id="travel4"
                                src={this.props.page.images[3] && this.props.page.images[3].file ||
                                placeholder} />
                        </div>

                        <div className="pic" id="pic5">
                            <img id="travel5"
                                src={this.props.page.images[4] && this.props.page.images[4].file ||
                                placeholder} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Page
