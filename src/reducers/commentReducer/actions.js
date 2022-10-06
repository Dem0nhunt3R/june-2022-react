import {GET_COMMENT, LOAD_COMMENTS} from "./actionTypes";

export const commentActions = {
    loadComments:(payload)=>({type:LOAD_COMMENTS, payload}),
    getComment:(payload)=>({type:GET_COMMENT, payload}),
}