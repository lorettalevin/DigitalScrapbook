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
            <div>
                <p>This is a page</p>
                <p>{this.props.page.header}</p>
                <AddImages
                    page_id={this.props.page.id}
                    />
            </div>
        )
    }
}

export default connect(mapStateToProps)(EditPage)
