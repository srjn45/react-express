import React, { Component } from 'react';
import { connect } from "react-redux";

import { addComment } from '../../actions/commentActions';
import { resetForm, commentTextChange, addForm } from "../../actions/formActions";

import './AddComment.css';

class AddComment extends Component {

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentWillMount() {
        this.props.addForm();
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.addComment(this.props.pid, { text: this.props.forms[this.props.idx].comments.text }, this.props.idx);
    }

    changeHandler(event) {
        this.props.commentTextChange(this.props.idx, event.target.value);
    }

    render() {
        return (
            <div className="App-comment-base">
                {this.props.forms[this.props.idx] ?
                    <form onSubmit={this.submitHandler}>
                        <input type="text" value={this.props.forms[this.props.idx].comments.text} name="text" placeholder="Comment..." onChange={this.changeHandler} />
                        <button type="submit">Comment</button>
                    </form>
                    : ""}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        forms: state.formReducer.forms
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (pid, data, idx) => dispatch(addComment(pid, data, idx)),
        addForm: () => dispatch(addForm()),
        resetForm: (idx) => dispatch(resetForm(idx)),
        commentTextChange: (idx, comment) => dispatch(commentTextChange(idx, comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);