import {CLEAR_COMMENT, LOAD_COMMENTS, GET_COMMENT} from "./actionTypes";

const init = {comments: [], comment: null};

const commentReducer = (state = init, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_COMMENTS:
            return {...state, comments: payload};
        case GET_COMMENT:
            return {...state, comment: payload};
        case CLEAR_COMMENT:
            return {...state, comment: null};
        default:
            return state;
    }
}

export {commentReducer};