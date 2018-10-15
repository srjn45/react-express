import React, { Component } from 'react';
import { connect } from "react-redux";

import { deleteComment } from "../../actions/commentActions";

import './Comment.css';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
    }

    deleteComment() {
        this.props.deleteComment(this.props.pid, this.props.comment.id);
    }
    render() {
        return (
            <div className="Comment">
                <span>
                    {this.props.comment.text}
                </span>
                <button onClick={this.deleteComment}>delete</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        deleteComment: (pid, cid) => deleteComment(dispatch, pid, cid)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);