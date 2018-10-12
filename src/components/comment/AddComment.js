import React, { Component } from 'react';
import { connect } from "react-redux";

import { addComment } from '../../actions/commentActions';

import './AddComment.css';

class AddComment extends Component {

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.addComment(this.props.pid, { text: event.target.text.value });
        event.target.text.value = '';
    }

    render() {
        return (
            <div className="App-comment-base">
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="text" placeholder="Comment..." />
                    <button type="submit">Comment</button>
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
        addComment: (pid, data) => addComment(dispatch, pid, data)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);