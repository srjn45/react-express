import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import { connect } from "react-redux";

import { getPosts } from '../../actions/postActions';

import './Posts.css';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.props.getAllPosts();
    }

    render() {
        const { posts } = this.props;
        return (
            <div>
                <Link to="/addPost">
                    <span className="fab">Add Post</span>
                </Link>
                {posts.map((p, idx) => <Post idx={idx} post={p} showComments={true}></Post>)}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        posts: state.postReducer.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllPosts: () => dispatch(getPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);