import axios from 'axios';
import { resetForm } from "./formActions";

// create
export const addComment = (dispatch, pid, data, idx) => {
    axios.post('http://127.0.0.1:3000/api/posts/' + pid + '/comments', data).then(res => {
        let response = res.data;
        if (response.status) {
            dispatch({ type: 'COMMENT_ADDED', payload: { pid: pid, res: response.payload } });
            resetForm(dispatch, idx);
        }
    });
}

// delete
export const deleteComment = (dispatch, pid, cid) => {
    axios.delete('http://127.0.0.1:3000/api/posts/' + pid + '/comments/' + cid).then(res => {
        let response = res.data;
        if (response.status) {
            dispatch({ type: 'COMMENT_DELETED', payload: { pid: pid, cid: cid } });
        }
    });
}