import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    // only called first time
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>List of blog posts</div>
        );
    }
}

// mapDispatchToProps -> fetchPosts
export default connect(null, { fetchPosts })(PostsIndex);