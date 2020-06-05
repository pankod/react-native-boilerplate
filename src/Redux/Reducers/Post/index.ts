import { combineReducers } from "redux";

import { PostListReducer } from "./List";

export { POST_LIST_STATE } from "./List";

export default combineReducers({
    list: PostListReducer,
});
