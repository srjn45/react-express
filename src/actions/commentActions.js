import axios from 'axios';


export const addComment = (dispatch, pid, data) => {
    axios.put('http://127.0.0.1:3000/api/posts/' + pid + '/comment', data).then(res => {
        let response = res.data;
        if (response.status) {
            dispatch({ type: 'COMMENT_ADDED', payload: { pid: pid, res: response.payload } });
        }
    });
}

export const deleteComment = (dispatch, pid, cid) => {
    axios.delete('http://127.0.0.1:3000/api/posts/' + pid + '/comment/' + cid).then(res => {
        let response = res.data;
        if (response.status) {
            dispatch({ type: 'COMMENT_DELETED', payload: { pid: pid, cid: cid } });
        }
    });
}