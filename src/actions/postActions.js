import axios from 'axios';

import { POST_ADDED, POST_DELETED, POSTS_RECEIVED, dispatchAction } from "./types";

// fetch
export const getPosts = () => {
    return dispatch => {
        axios.get('http://127.0.0.1:3000/api/posts').then(res => {
            let response = res.data;
            if (response.status) {
                dispatch(dispatchAction(POSTS_RECEIVED, response.payload));
            }
        });
    };
}

// create
export const addPost = (post, history) => {
    return dispatch => {
        axios.post('http://127.0.0.1:3000/api/posts', post).then(res => {
            let response = res.data;
            if (response.status) {
                dispatch(dispatchAction(POST_ADDED, response.payload));
                history.replace('/');
            }
        });
    };
}

// delete
export const deletePost = (pid) => {
    return dispatch => {
        axios.delete('http://127.0.0.1:3000/api/posts/' + pid).then(res => {
            let response = res.data;
            if (response.status) {
                dispatch(dispatchAction(POST_DELETED, { pid: pid, res: response.payload }));
            }
        });
    };
}