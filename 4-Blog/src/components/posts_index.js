import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    // only called first time
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <Link to="/posts/new" className="btn btn-primary">
                        Add Post
                    </Link>
                </div>
                
                List of blog posts
            </div>
        );
    }
}

// mapDispatchToProps -> fetchPosts
export default connect(null, { fetchPosts })(PostsIndex);