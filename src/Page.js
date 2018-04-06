import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
const placeholder = 'http://via.placeholder.com/550x450';
Modal.setAppElement('main');


const mapStateToProps = state => {
    return {
        scrapbookInfo: state.scrapbookInfo
    }
}


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            imageSource: '#'
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(e) {
        this.setState ({
            showModal: true,
            imageSource: e.target.src
        })
    }

    closeModal(e) {
        this.setState ({
            showModal: false
        })
    }
    render() {
        if (!this.props.page || this.props.page.images.length == 0) {
            return (<div id="not-enough">You don't have enough images to render this page.</div>)
        }
        if (!this.props.scrapbookInfo) {
            return null
        }

        console.log(this.props);
        return (
            <div id="scrapbook-page-container">
                <Modal className="modal"
                  isOpen={this.state.showModal}
                  onRequestClose={this.closeModal}
                  contentLabel="Modal"
                  >
                  <h2 id="x" onClick={this.closeModal}>X</h2>
                  <p id="description">{this.props.scrapbookInfo.pages[0].header}</p>
                  <img className="img" src={this.state.imageSource}/>

                </Modal>


                <div id="scrapbook-page">
                    <h1 id="header">{this.props.page.header}</h1>

                    <div id="top-pic-container">
                        <div className="pic" id="pic1">
                            <img onClick={this.openModal}
                                id="travel1"
                                src={this.props.page.images[0] && this.props.page.images[0].file ||
                                placeholder }
                            />
                        </div>

                        <div className="pic" id="pic2">
                            <img onClick={this.openModal}
                                id="travel2"
                                src={this.props.page.images[1] && this.props.page.images[1].file ||
                                placeholder} />
                        </div>
                    </div>

                    <div id="bottom-pic-container">
                        <div className="pic" id="pic3">
                            <img onClick={this.openModal}
                                id="travel3"
                                src={this.props.page.images[2] && this.props.page.images[2].file ||
                                placeholder} />
                        </div>

                        <div className="pic" id="pic4">
                            <img onClick={this.openModal}
                                id="travel4"
                                src={this.props.page.images[3] && this.props.page.images[3].file ||
                                placeholder} />
                        </div>

                        <div className="pic" id="pic5">
                            <img onClick={this.openModal}
                                id="travel5"
                                src={this.props.page.images[4] && this.props.page.images[4].file ||
                                placeholder} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps)(Page)
