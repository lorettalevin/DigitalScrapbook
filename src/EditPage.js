import React from 'react';
import {connect} from 'react-redux';
import AddImages from './AddImages';
import {getImages} from './actions';
import { GridLoader } from 'react-spinners';

const mapStateToProps = (state, props) => {
    return {
        images: state.images.filter( image => props.page.id == image.page_id),
        scrapbookInfo: state.scrapbookInfo
    }
}

class EditPage extends React.Component {
    constructor(props) {
        super(props);
        this.renderImages = this.renderImages.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getImages(this.props.page.id))
    }

    renderImages() {
        if(!this.props.images) {
            return (
                <div className='sweet-loading'>
                    <GridLoader
                        color={'#123abc'}
                    />
                </div>
            )
        }

         return this.props.images.map( image => {
             console.log(image.file);
             return (

                <img className="render-images" key={image.id} src={image.file} alt="Scrapbook Photos"
                    />

             )
         })
    }

    render() {
        return (
            <div className="edit-page-single">
                 <h1 id="page-header">{this.props.page.header}</h1>
                <AddImages
                    page_id={this.props.page.id}
                    />
                {this.renderImages()}
            </div>
        )
    }
}

export default connect(mapStateToProps)(EditPage)





// <div className="edit-page-component-wrapper">
//     <p id="page-header">{this.props.page.header}</p>
//     <div id="image-uploader">
//         <AddImages
//             page_id={this.props.page.id}
//         />
//     </div>
// </div>
