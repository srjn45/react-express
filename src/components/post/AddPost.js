import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from "react-redux";

import { addPost } from "../../actions/postActions";

import './AddPost.css';

class AddPost extends Component {


    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.addPost({ title: event.target.title.value, content: event.target.content.value }, this.props.history);
        // this.props.history.replace('/');
    }

    render() {
        return (
            <div>
                <h3>Add Post Form</h3>
                <form className="Add-post-form" onSubmit={this.submitHandler}>
                    <input type="text" name="title" placeholder="Title" />
                    <input type="text" name="content" placeholder="Content" />
                    <div>
                        <Link to="/">
                            <button className="Add-post-form-button" type="button">Cancel</button>
                        </Link>
                        &nbsp;&nbsp;
                        <button className="Add-post-form-button" type="submit">Add Post</button>
                    </div>
                </form>
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
        // temporary fix: passing history
        addPost: (post, history) => addPost(dispatch, post, history)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);