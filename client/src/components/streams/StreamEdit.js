import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { editStream, fetchStream } from '../../actions/index';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }
    onSubmit = formValues => {
        const id = this.props.match.params.id;
            this.props.editStream(id, formValues);
            console.log(formValues);
    }
    render() {
        if(!this.props.stream)
            return <div>Loading</div>;
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                    onSubmit={this.onSubmit} 
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                />
            </div>
        );
    }
}
const mapStateToProps = ( state, ownProps ) => {
    return  { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);