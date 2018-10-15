import axios from 'axios';


// fetch
export const getPosts = (dispatch) => {
    axios.get('http://127.0.0.1:3000/api/posts').then(res => {
        let response = res.data;
        if (response.status) {
            dispatch({ type: "POSTS_RECEIVED", payload: response.payload });
        }
    });
}

// create
export const addPost = (dispatch, post) => {
    axios.post('http://127.0.0.1:3000/api/posts', post).then(res => {
        let response = res.data;
        if (response.status) {
            dispatch({ type: "POST_ADDED", payload: response.payload });
        }
    });
}

// delete
export const deletePost = (dispatch, pid) => {
    axios.delete('http://127.0.0.1:3000/api/posts/' + pid).then(res => {
        let response = res.data;
        if (response.status) {
            dispatch({ type: "POST_DELETED", payload: { pid: pid, res: response.payload } });
        }
    })
}