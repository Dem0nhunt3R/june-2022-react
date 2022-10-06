import {CLEAR_POST, GET_POST, LOAD_POSTS} from "./actionTypes";

const init = {posts: [], post: null};

export const postReducer = (state = init, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_POSTS:
            return {...state, posts: payload};
        case GET_POST:
            return {...state, post: payload};
        case CLEAR_POST:
            return {...state, post: null};
        default:
            return state;
    }
}