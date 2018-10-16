import { RESET_FORM, ADD_FORM, COMMENT_CHANGE, dispatchAction } from "./types";


export const resetForm = (idx) => {
    return dispatch => {
        dispatch(dispatchAction(RESET_FORM, { idx }));
    };
}
export const addForm = () => {
    return dispatch => {
        dispatch(dispatchAction(ADD_FORM));
    };
}
export const commentTextChange = (idx, comment) => {
    return dispatch => {
        dispatch(dispatchAction(COMMENT_CHANGE, { idx, comment }));
    };
}