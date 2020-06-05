import { combineReducers } from "redux";

import PostReducer from "@Redux/Reducers/Post";

const RootReducer = combineReducers({
    post: PostReducer,
});

export default RootReducer;
