import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';

class AddPost extends Component {

    onSubmit(values) {
        this.props.addPost(values, () => {
            this.props.history.push('/');
        });
    }

    renderField(field){
        const { meta: { touched, error } } = field;
        const inputGroupClassName = `form-group ${touched && error ? 'has-danger' : ''}`
        return(
            <div className={inputGroupClassName}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched? error: ''}
                </div>
            </div>
        );
    }
    render() {
        const { handleSubmit } =this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

const validate = (values) => {
    let errors = {};
    if(!values.title) {
        errors.title = "Enter a title!";
    }
    if(!values.categories) {
        errors.categories = "Enter a categories!";
    }
    if(!values.content) {
        errors.content = "Enter a content!";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'AddNewPostForm'
})(
    connect(null, { addPost })(AddPost)
);
