import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {

    }
}

class Page extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (!this.props.page || this.props.page.images.length != 5) {
            console.log("are we here?");
            return (<div>You don't have enough images to render this page.</div>)
        }
        return (
            <div id="scrapbook-page-container">
                <div id="scrapbook-page">
                    <img id="planetail" src="../images/planetail.png"/>
                    <img id="suitcase" src="../images/suitcase1.png"/>
                    <img id="bike" src="../images/bike2.png"/>
                    <img id="sunglasses" src="../images/sunglasses.png"/>
                    <img id="map" src="../images/map.png"/>
                    <img id="passport" src="../images/passport.png"/>
                    <img id="sign" src="../images/sign.png"/>

                    <div id="top-pic-container">
                        <div className="pic" id="pic1">
                            <img id="travel1" src={this.props.page.images[0].file || null} />
                        </div>
                        <div className="pic" id="pic2">
                            <img id="travel2" src={this.props.page.images[1].file || null} />
                        </div>
                    </div>
                    <div id="bottom-pic-container">
                        <div className="pic" id="pic3">
                            <img id="travel3" src={this.props.page.images[2].file || null } />
                        </div>
                        <div className="pic" id="pic4">
                            <img id="travel4" src={this.props.page.images[3].file || null} />
                        </div>
                        <div className="pic" id="pic5">
                            <img id="travel5" src={this.props.page.images[4].file || null } />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps)(Page)
