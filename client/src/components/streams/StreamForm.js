import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class StreamForm extends Component {

    renderError({ error, touched }) {
        if(error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const classError = `field ${meta.touched && meta.error ? 'error': '' }`;
        return (
            <div className={classError} >
                <label>{label}</label>
                <input autoComplete="off" {...input}/>
                {this.renderError(meta)}
            </div>

        );
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Title" />
                <Field name="description" component={this.renderInput} label="Description" />
                <button disabled={this.props.invalid} className="ui button primary">Submit</button>
            </form>
        );
    }

}

const validate = (formValues) => {
    const errors = { };
    if(!formValues.title) {
        errors.title = 'Title is required';
    }
    if(!formValues.description) {
        errors.description = 'Description is required';
    }
    return errors;
};

export default reduxForm({
        form: 'streamForm',
        validate: validate
    })(StreamForm);