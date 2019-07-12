import React, {Component} from 'react';
import { connect } from 'react-redux';

import StreamForm from './StreamForm';
import { createStream } from '../../actions';

class StreamCreate extends Component {

    onSubmit = formValues => {
        this.props.createStream(formValues);
    }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Create a Form</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
    }

}
const mapStateToProps = (state) => {
    return {res: state.response};
}

export default connect(mapStateToProps, { createStream })(StreamCreate);