import React from 'react';
import {connect} from 'react-redux';
import AddImages from './AddImages';
import {getImages} from './actions';

const mapStateToProps = state => {
    return {
        images: state.images
    }
}

class EditPage extends React.Component {
    constructor(props) {
        super(props);
    }

componentDidMount() {
        this.props.dispatch(getImages(this.props.page.id))
}

    render() {
        return (
            <AddImages
                page_id={this.props.page.id}
            />
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
