import axios from 'axios';
import { resetForm } from "./formActions";

import { COMMENT_ADDED, COMMENT_DELETED, dispatchAction } from "./types";

// create
export const addComment = (pid, data, idx) => {
    return dispatch => {
        axios.post('http://127.0.0.1:3000/api/posts/' + pid + '/comments', data).then(res => {
            let response = res.data;
            if (response.status) {
                dispatch(dispatchAction(COMMENT_ADDED, { pid: pid, res: response.payload }));
                dispatch(resetForm(idx));
            }
        });
    };
}

// delete
export const deleteComment = (pid, cid) => {
    return dispatch => {
        axios.delete('http://127.0.0.1:3000/api/posts/' + pid + '/comments/' + cid).then(res => {
            let response = res.data;
            if (response.status) {
                dispatch(dispatchAction(COMMENT_DELETED, { pid: pid, cid: cid }));
            }
        });
    };
}
