import {GET_USER, LOAD_USERS} from "./actionTypes";

export const userActions = {
    loadUsers: (payload) => ({type: LOAD_USERS, payload}),
    getUser: (payload) => ({type: GET_USER, payload})
}