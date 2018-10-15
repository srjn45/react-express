
export const resetForm = (dispatch, idx) => {
    dispatch({ type: 'RESET_FORM', payload: { idx } });
}
export const addForm = (dispatch) => {
    dispatch({ type: 'ADD_FORM' });
}
export const commentTextChange = (dispatch, idx, comment) => {
    dispatch({ type: 'COMMENT_CHANGE', payload: { idx, comment } });
}