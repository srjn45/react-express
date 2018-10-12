export default function postReducer(state = { posts: [] }, action) {
    switch (action.type) {
        case 'POSTS_RECEIVED': {
            return { ...state, posts: action.payload }
        }
        case 'POST_ADDED': {
            return { posts: state.posts.concat(action.payload) }
        }
        case 'POST_DELETED': {
            return { posts: state.posts.filter(post => post.id != action.payload.pid) }
        }
        case 'COMMENT_ADDED': {
            let index = -1;
            for (let i = 0; i < state.posts.length; i++) {
                if (state.posts[i].id == action.payload.pid) {
                    index = i;
                    break;
                }
            }
            if (index >= 0) {
                let st = { posts: state.posts.filter(val => true) }
                st.posts[index].comments = st.posts[index].comments.concat(action.payload.res);
                return st;
            }
        }
        case 'COMMENT_DELETED': {
            let index = -1;
            for (let i = 0; i < state.posts.length; i++) {
                if (state.posts[i].id == action.payload.pid) {
                    index = i;
                    break;
                }
            }
            if (index >= 0) {
                let st = { posts: state.posts.filter(val => true) }
                st.posts[index].comments = st.posts[index].comments.filter(comment => comment.id != action.payload.cid);
                return st;
            }

        }
    }
    return state;
}