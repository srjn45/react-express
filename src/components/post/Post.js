import React, { Component } from 'react';

import { connect } from "react-redux";

import { deletePost } from "../../actions/postActions";

import Comment from '../comment/Comment';
import AddComment from '../comment/AddComment';

import './Post.css';

class Post extends Component {

    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);
    }

    deletePost() {
        this.props.deletePost(this.props.post.id);
    }

    render() {
        return (
            <div className="Post-base">
                <div className="Post-title" >
                    <span>
                        {this.props.post.title}
                    </span>
                    <button onClick={this.deletePost}>x</button>
                </div>
                <div className="Post-content">{this.props.post.content}</div>
                <AddComment idx={this.props.idx} pid={this.props.post.id}></AddComment>
                {this.props.showComments ? this.props.post.comments.map(c => <Comment pid={this.props.post.id} comment={c}></Comment>) : ''}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postReducer.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePost: (pid) => dispatch(deletePost(pid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);