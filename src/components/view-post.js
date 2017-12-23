import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import Link from 'react-router-dom/Link';


class ViewPost extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }
    onDeleteClick() {
        this.props.deletePost(this.props.match.params.id, () => {
            this.props.history.push('/');
        });
    }
    render() {
        const { currentPost } = this.props;
        if(!currentPost) {
            return(
                <div>loading...</div>
            );
        }
        return (
            <div>
                <Link to="/">Back to Posts</Link>
                <button className="btn btn-danger pull-xs-right" onClick={() => this.onDeleteClick()}>Delete Post</button>
                <h3>{currentPost.title}</h3>
                <h6>Categories: {currentPost.categories}</h6>
                <p>{currentPost.content}</p>
            </div>
        )
    }
}

const mapStateToProps = ({ posts }, ownProps) => {
    return { currentPost: posts[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchPost, deletePost })(ViewPost);


