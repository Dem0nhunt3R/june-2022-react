import {GET_POST, LOAD_POSTS} from "./actionTypes";

export const postActions = {
    loadPosts: (payload) => ({type: LOAD_POSTS, payload}),
    getPost: (payload) => ({type: GET_POST, payload})
}