import React from 'react';
import {connect} from 'react-redux';
import AddImages from './AddImages';

const mapStateToProps = state => {
    return {
        // pages: state.pages
    }
}

class EditPage extends React.Component {
    constructor(props) {
        super(props);
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
