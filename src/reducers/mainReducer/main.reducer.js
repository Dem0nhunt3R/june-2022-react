import {combineReducers} from "redux";

import {userReducer} from "../userReducer";
import {postReducer} from "../postReducer";
import {commentReducer} from "../commentReducer";

export const mainReducer = combineReducers({userReducer,postReducer,commentReducer});