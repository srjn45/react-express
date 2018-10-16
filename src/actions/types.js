export const COMMENT_ADDED = 'COMMENT_ADDED';
export const COMMENT_DELETED = 'COMMENT_DELETED';

export const RESET_FORM = 'RESET_FORM';
export const ADD_FORM = 'ADD_FORM';
export const COMMENT_CHANGE = 'COMMENT_CHANGE';

export const POSTS_RECEIVED = 'POSTS_RECEIVED';
export const POST_ADDED = 'POST_ADDED';
export const POST_DELETED = 'POST_DELETED';

export const dispatchAction = (type, payload = null) => ({
    type: type,
    payload: payload
});