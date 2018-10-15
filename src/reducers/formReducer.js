export default function formReducer(state = { forms: [] }, action) {
    switch (action.type) {
        case 'ADD_FORM': {
            return { forms: state.forms.concat({ comments: { text: '' } }) }
        }
        case 'RESET_FORM': {
            let forms = state.forms.filter(f => true);
            forms[action.payload.idx] = { ...forms[action.payload.idx], comments: { text: '' } };
            return { forms };
        }
        case 'COMMENT_CHANGE': {
            let forms = state.forms.filter(f => true);
            forms[action.payload.idx] = { ...forms[action.payload.idx], comments: { text: action.payload.comment } };
            return { forms };
        }
    }
    return state;
}