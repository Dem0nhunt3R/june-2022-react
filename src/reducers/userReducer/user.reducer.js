import {CLEAR_USER, GET_USER, LOAD_USERS} from "./actionTypes";

const init = {users: [], user: null};

const userReducer = (state = init, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_USERS:
            return {...state, users: payload};
        case GET_USER:
            return {...state, user: payload};
        case CLEAR_USER:
            return {...state, user: null}
        default:
            return state;
    }
}

export {userReducer};