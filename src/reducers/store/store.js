import {createStore} from "redux";

import {mainReducer} from "../mainReducer/main.reducer";

export const store = createStore(mainReducer);